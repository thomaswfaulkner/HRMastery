// quiz.js
import { domainData } from './config.js';
import ProgressTracker from './progress.js';

class QuizManager {
    constructor() {
        this.progressTracker = new ProgressTracker();
        this.currentQuestionIndex = 0;
        this.selectedDomain = localStorage.getItem('selectedDomain');
        this.questions = [];
        this.userAnswers = new Map();
        this.flaggedQuestions = new Set();
        this.timer = 0;
        this.timerInterval = null;
        
        // Initialize immediately
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            await this.loadQuestions();
            this.updateDomainTitle();
            this.startTimer();
            this.displayCurrentQuestion();
            this.setupEventListeners();
        } catch (error) {
            console.error('Error initializing quiz:', error);
            this.handleError('Failed to initialize quiz. Please try again.');
        }
    }

    handleError(message) {
        // You could create a better error UI here
        alert(message);
        window.location.href = './index.html';
    }

    async loadQuestions() {
        try {
            // Import the question bank for the selected domain
            const module = await import(`./questions/${this.selectedDomain}.js`);
            this.questions = this.shuffleQuestions(module.default);
            
            if (!this.questions || this.questions.length === 0) {
                throw new Error('No questions found for this domain');
            }

            document.getElementById('totalQuestions').textContent = this.questions.length;
        } catch (error) {
            console.error('Error loading questions:', error);
            throw error;
        }
    }

    shuffleQuestions(questions) {
        // Create a copy of the questions array
        const shuffled = [...questions];
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    updateDomainTitle() {
        const domainInfo = domainData[this.selectedDomain];
        if (domainInfo) {
            document.getElementById('domainTitle').textContent = domainInfo.title;
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timer / 60);
        const seconds = this.timer % 60;
        document.getElementById('timeSpent').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        if (!question) return;

        // Update question number display
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestionIndex + 1}`;
        
        // Update question text
        document.getElementById('questionText').textContent = question.text;
        
        // Create option elements
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = ''; // Clear existing options
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (this.userAnswers.has(question.id) && this.userAnswers.get(question.id) === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            optionsContainer.appendChild(optionElement);
        });

        // Update flag button state
        const flagButton = document.getElementById('flagButton');
        flagButton.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update navigation buttons
        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish' : 'Next';

        // Hide explanation if shown
        const explanationContainer = document.getElementById('explanationContainer');
        if (explanationContainer) {
            explanationContainer.classList.add('hidden');
        }
    }

    setupEventListeners() {
        // Option selection
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            if (e.target.classList.contains('option')) {
                this.handleOptionSelect(parseInt(e.target.dataset.index));
            }
        });

        // Navigation buttons
        document.getElementById('prevButton').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('nextButton').addEventListener('click', () => this.navigateQuestion(1));

        // Flag button
        document.getElementById('flagButton').addEventListener('click', () => this.toggleFlagQuestion());
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);
        
        // Update option styling
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');

        // Show explanation
        const isCorrect = optionIndex === question.correctAnswer;
        this.showExplanation(isCorrect);

        // Update progress
        this.progressTracker.updateQuestionProgress(
            this.selectedDomain,
            question.id,
            isCorrect
        );
    }

    showExplanation(isCorrect) {
        const question = this.questions[this.currentQuestionIndex];
        const container = document.getElementById('explanationContainer');
        const indicator = document.getElementById('resultIndicator');
        const explanationText = document.getElementById('explanationText');

        container.classList.remove('hidden');
        indicator.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
        indicator.className = `result-indicator ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationText.textContent = question.explanation;
    }

    navigateQuestion(direction) {
        const newIndex = this.currentQuestionIndex + direction;
        if (newIndex >= 0 && newIndex < this.questions.length) {
            this.currentQuestionIndex = newIndex;
            this.displayCurrentQuestion();
        } else if (newIndex === this.questions.length) {
            this.showQuizSummary();
        }
    }

    toggleFlagQuestion() {
        const questionId = this.questions[this.currentQuestionIndex].id;
        if (this.flaggedQuestions.has(questionId)) {
            this.flaggedQuestions.delete(questionId);
        } else {
            this.flaggedQuestions.add(questionId);
        }
        document.getElementById('flagButton').classList.toggle('flagged');
    }
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});

export default QuizManager;
