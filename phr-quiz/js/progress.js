// progress.js
import { domainData } from './config.js';

// Clear any potentially corrupted progress data
localStorage.removeItem('phrQuizProgress');

class ProgressTracker {
    constructor() {
        this.initializeProgress();
        this.createDomainCards();
    }

    // Initialize progress data structure in localStorage
    initializeProgress() {
        const progress = localStorage.getItem('phrQuizProgress');
        
        if (!progress) {
            console.log('Initializing new progress data');
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
        const progress = localStorage.getItem('phrQuizProgress');
        return progress ? JSON.parse(progress) : {};
    }

    // Get progress for a specific domain
    getDomainProgress(domain) {
        const progress = this.getProgress();
        return progress[domain] || {
            completedQuestions: [],
            correctAnswers: [],
            lastAttempt: null,
            timeSpent: 0
        };
    }

    // Calculate completion percentage for a domain
    calculateDomainProgress(domain) {
        const domainProgress = this.getDomainProgress(domain);
        const totalQuestions = domainData[domain].totalQuestions;
        const completedCount = domainProgress.completedQuestions.length;
        return Math.round((completedCount / totalQuestions) * 100) || 0;
    }

    // Create domain cards in the UI
    createDomainCards() {
        const container = document.querySelector('.domain-grid');
        if (!container) {
            console.log('Domain grid container not found');
            return;
        }

        container.innerHTML = ''; // Clear existing cards

        Object.entries(domainData).forEach(([key, data]) => {
            const percentage = this.calculateDomainProgress(key);
            
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
            `;

            container.appendChild(card);
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

export default ProgressTracker;
