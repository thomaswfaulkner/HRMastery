import { domainData } from './config.js';

class ProgressTracker {
    constructor() {
        this.initializeProgress();
        this.createDomainCards();
    }

    // Initialize progress data structure in localStorage if it doesn't exist
    initializeProgress() {
        if (!localStorage.getItem('phrQuizProgress')) {
            const initialProgress = {};
            Object.keys(domainData).forEach(domain => {
                initialProgress[domain] = {
                    completedQuestions: [],
                    correctAnswers: [],
                    lastAttempt: null,
                    timeSpent: 0
                };
            });
            localStorage.setItem('phrQuizProgress', JSON.stringify(initialProgress));
        }
    }

    // Get progress data for all domains
    getProgress() {
        return JSON.parse(localStorage.getItem('phrQuizProgress'));
    }

    // Get progress for a specific domain
    getDomainProgress(domain) {
        const progress = this.getProgress();
        return progress[domain];
    }

    // Calculate completion percentage for a domain
    calculateDomainProgress(domain) {
        const domainProgress = this.getDomainProgress(domain);
        const totalQuestions = domainData[domain].totalQuestions;
        const completedCount = domainProgress.completedQuestions.length;
        return Math.round((completedCount / totalQuestions) * 100);
    }

    // Calculate accuracy percentage for a domain
    calculateDomainAccuracy(domain) {
        const domainProgress = this.getDomainProgress(domain);
        const totalAttempted = domainProgress.completedQuestions.length;
        const totalCorrect = domainProgress.correctAnswers.length;
        return totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    }

    // Update progress after completing a question
    updateQuestionProgress(domain, questionId, isCorrect) {
        const progress = this.getProgress();
        const domainProgress = progress[domain];

        // Add to completed questions if not already completed
        if (!domainProgress.completedQuestions.includes(questionId)) {
            domainProgress.completedQuestions.push(questionId);
        }

        // Update correct answers
        if (isCorrect && !domainProgress.correctAnswers.includes(questionId)) {
            domainProgress.correctAnswers.push(questionId);
        }

        // Update last attempt timestamp
        domainProgress.lastAttempt = new Date().toISOString();

        localStorage.setItem('phrQuizProgress', JSON.stringify(progress));
        this.updateUI();
    }

    // Update time spent on a domain
    updateTimeSpent(domain, seconds) {
        const progress = this.getProgress();
        progress[domain].timeSpent += seconds;
        localStorage.setItem('phrQuizProgress', JSON.stringify(progress));
    }

    // Reset progress for a domain
    resetDomainProgress(domain) {
        const progress = this.getProgress();
        progress[domain] = {
            completedQuestions: [],
            correctAnswers: [],
            lastAttempt: null,
            timeSpent: 0
        };
        localStorage.setItem('phrQuizProgress', JSON.stringify(progress));
        this.updateUI();
    }

    // Create domain cards in the UI
    createDomainCards() {
        const container = document.querySelector('.domain-grid');
        if (!container) return; // Exit if not on the splash page

        Object.entries(domainData).forEach(([key, data]) => {
            const percentage = this.calculateDomainProgress(key);
            const accuracy = this.calculateDomainAccuracy(key);
            const lastAttempt = this.getDomainProgress(key).lastAttempt;

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
                    <span>${data.totalQuestions} Questions</span>
                </div>
                <div class="domain-stats additional-stats">
                    <span>Accuracy: ${accuracy}%</span>
                    ${lastAttempt ? `<span>Last: ${this.formatDate(lastAttempt)}</span>` : ''}
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Update the UI to reflect current progress
    updateUI() {
        Object.keys(domainData).forEach(domain => {
            const percentage = this.calculateDomainProgress(domain);
            const card = document.querySelector(`[data-domain="${domain}"]`);
            if (card) {
                const progressBar = card.querySelector('.progress-fill');
                const percentageText = card.querySelector('.progress-percentage');
                if (progressBar) progressBar.style.width = `${percentage}%`;
                if (percentageText) percentageText.textContent = `${percentage}% Complete`;
            }
        });
    }

    // Format date for last attempt display
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric'
        });
    }

    // Start quiz for selected domain
    startQuiz(domain) {
        localStorage.setItem('selectedDomain', domain);
        window.location.href = './quiz.html';
    }
}

// Initialize progress tracking when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.progressTracker = new ProgressTracker();
});

// Export the ProgressTracker class for use in other modules
export default ProgressTracker;
