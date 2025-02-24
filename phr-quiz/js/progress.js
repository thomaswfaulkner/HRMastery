import { domainData } from './config.js';

/**
 * Dynamically loads each domain's questions and returns an object
 * mapping domain => numberOfQuestions
 */
async function getQuestionCounts() {
    const categories = Object.keys(domainData);
    const counts = {};

    for (const category of categories) {
        try {
            // Dynamically import the array of questions from each .js file
            const module = await import(`./questions/${category}.js`);
            counts[category] = module.default.length;
        } catch (error) {
            console.error(`Error loading questions for ${category}:`, error);
            counts[category] = 0;
        }
    }

    return counts;
}

class ProgressTracker {
    constructor() {
        this.initializeProgress();
        // We call an async init method so we can await question counts
        this.init();
    }

    /**
     * Initializes the domain cards after we know how many questions each domain has
     */
    async init() {
        await this.createDomainCards();
    }

    /**
     * Creates a default progress data structure in localStorage if none exists
     */
    initializeProgress() {
        const progress = localStorage.getItem('phrQuizProgress');
        if (!progress) {
            console.log('Initializing new progress data');
            const initialProgress = {};
            Object.keys(domainData).forEach(domain => {
                initialProgress[domain] = {
                    completedQuestions: [], // IDs of questions the user has answered
                    correctAnswers: [],     // IDs of questions the user answered correctly
                    lastAttempt: null,      // Timestamp of last attempt
                    timeSpent: 0           // Total time spent (seconds)
                };
            });
            localStorage.setItem('phrQuizProgress', JSON.stringify(initialProgress));
        }
    }

    /**
     * Returns all progress data from localStorage as an object
     */
    getProgress() {
        const progress = localStorage.getItem('phrQuizProgress');
        return progress ? JSON.parse(progress) : {};
    }

    /**
     * Returns the progress object for a specific domain
     */
    getDomainProgress(domain) {
        const progress = this.getProgress();
        return progress[domain] || {
            completedQuestions: [],
            correctAnswers: [],
            lastAttempt: null,
            timeSpent: 0,
            userAnswers: {},
            currentQuestionIndex: 0        
        };
    }

    /**
     * Dynamically creates domain cards based on the real question counts in each .js file
     */
    async createDomainCards() {
        const container = document.querySelector('.domain-grid');
        if (!container) {
            console.log('Domain grid container not found');
            return;
        }

        container.innerHTML = ''; // Clear existing cards
        const questionCounts = await getQuestionCounts();

        // Build a card for each domain
        Object.entries(domainData).forEach(([key, data]) => {
            // Number of questions is the length of the array from the .js file
            const totalQuestions = questionCounts[key] || 0;
            const percentage = this.calculateDomainProgress(key, totalQuestions);

            console.log(`Creating card for ${key} with progress: ${percentage}%`);

            const card = document.createElement('div');
            card.className = 'domain-card';
            card.setAttribute('data-domain', key);
            card.onclick = () => this.startQuiz(key);

            card.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <div class="progress-indicator">
                    <div class="progress-fill" style="width: ${percentage}%"></div>
                </div>
                <div class="domain-stats">
                    <span class="progress-percentage">${percentage}% Complete</span>
                    <span>${totalQuestions} Questions</span>
                </div>
            `;

            container.appendChild(card);
        });
    }

    /**
     * Calculates how far the user has progressed in a domain
     */
    calculateDomainProgress(domain, totalQuestions) {
        const domainProgress = this.getDomainProgress(domain);
        const completedCount = domainProgress.completedQuestions.length;
        return totalQuestions > 0
            ? Math.round((completedCount / totalQuestions) * 100)
            : 0;
    }

    /**
     * Navigates to quiz.html with the selected domain
     */
    startQuiz(domain) {
        localStorage.setItem('selectedDomain', domain);
        window.location.href = './quiz.html';
    }

    /**
     * Updates the user's progress for a specific question
     */
    updateProgress(domain, questionId, isCorrect, timeSpentIncrement = 0) {
        console.log('Saving progress:', { domain, questionId, isCorrect, timeSpentIncrement });
        const progress = this.getProgress();
        const domainProgress = progress[domain] || this.getDomainProgress(domain);

        // Mark question as completed if not already
        if (!domainProgress.completedQuestions.includes(questionId)) {
            domainProgress.completedQuestions.push(questionId);
        }

        // Mark correct if applicable
        if (isCorrect && !domainProgress.correctAnswers.includes(questionId)) {
            domainProgress.correctAnswers.push(questionId);
        }

        // Increment time spent
        domainProgress.timeSpent += timeSpentIncrement;
        // Update timestamp
        domainProgress.lastAttempt = new Date().toISOString();

        // Save
        localStorage.setItem('phrQuizProgress', JSON.stringify(progress));
        console.log('Progress saved to localStorage:', JSON.stringify(progress));

        // If on index.html, optionally refresh the domain cards
        if (document.querySelector('.domain-grid')) {
            this.createDomainCards();
        }
    }
}

/**
 * Initialize the ProgressTracker once the DOM is loaded.
 * Also attach the reset button event if present.
 */
document.addEventListener('DOMContentLoaded', () => {
    window.progressTracker = new ProgressTracker();
    console.log('ProgressTracker initialized:', window.progressTracker);

    // Optional reset progress button
    const resetButton = document.getElementById('resetProgressButton');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset your progress?')) {
                localStorage.removeItem('phrQuizProgress');
                location.reload();
            }
        });
    }
});

export default ProgressTracker;
