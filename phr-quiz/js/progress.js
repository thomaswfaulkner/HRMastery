// progress.js
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
            // Using our config domains to ensure alignment
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
        
        // Validate existing progress data against current domain configuration
        const progress = JSON.parse(localStorage.getItem('phrQuizProgress'));
        let needsUpdate = false;

        // Ensure all current domains exist in progress data
        Object.keys(domainData).forEach(domain => {
            if (!progress[domain]) {
                progress[domain] = {
                    completedQuestions: [],
                    correctAnswers: [],
                    lastAttempt: null,
                    timeSpent: 0
                };
                needsUpdate = true;
            }
        });

        if (needsUpdate) {
            localStorage.setItem('phrQuizProgress', JSON.stringify(progress));
        }
    }

    // Get progress data for all domains
    getProgress() {
        const progress = JSON.parse(localStorage.getItem('phrQuizProgress'));
        if (!progress) {
            this.initializeProgress();
            return JSON.parse(localStorage.getItem('phrQuizProgress'));
        }
        return progress;
    }

    // Get progress for a specific domain
    getDomainProgress(domain) {
        const progress = this.getProgress();
        if (!progress[domain]) {
            return {
                completedQuestions: [],
                correctAnswers: [],
                lastAttempt: null,
                timeSpent: 0
            };
        }
        return progress[domain];
    }

    // Calculate completion percentage for a domain
    calculateDomainProgress(domain) {
        try {
            const domainProgress = this.getDomainProgress(domain);
            const totalQuestions = domainData[domain].totalQuestions;
            const completedCount = domainProgress.completedQuestions.length;
            return Math.round((completedCount / totalQuestions) * 100);
        } catch (error) {
            console.error(`Error calculating progress for domain ${domain}:`, error);
            return 0;
        }
    }

    // Calculate accuracy percentage for a domain
    calculateDomainAccuracy(domain) {
        try {
            const domainProgress = this.getDomainProgress(domain);
            const totalAttempted = domainProgress.completedQuestions.length;
            const totalCorrect = domainProgress.correctAnswers.length;
            return totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
        } catch (error) {
            console.error(`Error calculating accuracy for domain ${domain}:`, error);
            return 0;
        }
    }

    // Create domain cards in the UI
    createDomainCards() {
        const container = document.querySelector('.domain-grid');
        if (!container) return; // Exit if not on the splash page

        Object.entries(domainData).forEach(([key, data]) => {
            try {
                const percentage = this.calculateDomainProgress(key);
                const accuracy = this.calculateDomainAccuracy(key);
                const domainProgress = this.getDomainProgress(key);
                const lastAttempt = domainProgress.lastAttempt;

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
                    ${lastAttempt ? `
                    <div class="domain-stats additional-stats">
                        <span>Accuracy: ${accuracy}%</span>
                        <span>Last: ${this.formatDate(lastAttempt)}</span>
                    </div>
                    ` : ''}
                `;

                container.appendChild(card);
            } catch (error) {
                console.error(`Error creating card for domain ${key}:`, error);
            }
        });
    }

    // Rest of the methods remain the same...
    startQuiz(domain) {
        localStorage.setItem('selectedDomain', domain);
        window.location.href = './quiz.html';
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric'
        });
    }
}

// Initialize progress tracking when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.progressTracker = new ProgressTracker();
});

export default ProgressTracker;
