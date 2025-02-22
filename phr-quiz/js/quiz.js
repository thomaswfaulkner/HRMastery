// quiz.js
import { domainData } from './config.js';
import ProgressTracker from './progress.js';

class QuizManager {
    constructor() {
        try {
            console.log('Initializing QuizManager');
            this.progressTracker = new ProgressTracker();
            this.currentQuestionIndex = 0;
            this.selectedDomain = localStorage.getItem('selectedDomain');
            console.log('Selected domain:', this.selectedDomain); // Debug log
            this.questions = [];
            this.userAnswers = new Map();
            this.flaggedQuestions = new Set();
            this.timer = 0;
            this.timerInterval = null;
            
            this.initializeQuiz();
        } catch (error) {
            console.error('Constructor error:', error);
            this.handleError('Failed to initialize quiz constructor');
        }
    }

    async initializeQuiz() {
        try {
            console.log('Starting quiz initialization');
            if (!this.selectedDomain) {
                throw new Error('No domain selected');
            }
            
            await this.loadQuestions();
            console.log('Questions loaded:', this.questions.length);
            
            this.updateDomainTitle();
            this.startTimer();
            this.displayCurrentQuestion();
            this.setupEventListeners();
            
            console.log('Quiz initialization complete');
        } catch (error) {
            console.error('Initialization error:', error);
            this.handleError('Failed to initialize quiz: ' + error.message);
        }
    }

    async loadQuestions() {
        try {
            console.log(`Loading questions for domain: ${this.selectedDomain}`);
            
            // Log the attempted import path
            const importPath = `./questions/${this.selectedDomain}.js`;
            console.log('Attempting to import from:', importPath);
            
            const module = await import(importPath);
            console.log('Module loaded:', module);
            
            if (!module.default || !Array.isArray(module.default)) {
                throw new Error('Invalid question format in module');
            }
            
            this.questions = this.shuffleQuestions(module.default);
            console.log('Questions loaded and shuffled:', this.questions.length);
            
            if (!this.questions || this.questions.length === 0) {
                throw new Error('No questions found for this domain');
            }
            
            document.getElementById('totalQuestions').textContent = this.questions.length;
        } catch (error) {
            console.error('Error loading questions:', error);
            throw new Error(`Failed to load questions: ${error.message}`);
        }
    }

    handleError(message) {
        console.error('Quiz error:', message);
        alert(message);
        window.location.href = './index.html';
    }

    // ... rest of the QuizManager class methods remain the same ...
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing QuizManager');
    new QuizManager();
});

export default QuizManager;
