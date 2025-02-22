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
        
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            // Load questions for the selected domain
            await this.loadQuestions();
            
            // Set up the UI
            this.updateDomainTitle();
            this.startTimer();
            this.displayCurrentQuestion();
            this.setupEventListeners();
            
        } catch (error) {
            console.error('Error initializing quiz:', error);
            alert('Error loading quiz. Please try again.');
        }
    }

// Inside QuizManager class
async loadQuestions() {
    try {
        // Map old URLs to new ones if needed
        const domainMap = {
            // Only needed if we're supporting old URLs
            'talent': 'workforce',
            'compensation': 'rewards'
        };
        
        // Get the correct domain name
        const domain = domainMap[this.selectedDomain] || this.selectedDomain;
        
        // Dynamically import the question bank
        const questionBank = await import(`./questions/${domain}.js`);
        
        // Get questions and shuffle them
        this.questions = this.shuffleQuestions(questionBank.default);
        
        // Update total questions count in UI
        document.getElementById('totalQuestions').textContent = this.questions.length;
    } catch (error) {
        console.error('Error loading questions:', error);
        throw error;
    }
}

// Add a method to shuffle questions
class QuizManager {
    // ... other methods ...

    shuffleOptions(question) {
        // Create array of option objects that include the original index
        const optionsWithIndex = question.options.map((text, index) => ({
            text,
            isCorrect: text === question.correctAnswer
        }));

        // Shuffle the options
        for (let i = optionsWithIndex.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
        }

        // Update the question with shuffled options and new correct index
        const shuffledQuestion = { ...question };
        shuffledQuestion.options = optionsWithIndex.map(opt => opt.text);
        shuffledQuestion.correctAnswer = shuffledQuestion.options.findIndex(opt => opt === question.correctAnswer);

        return shuffledQuestion;
    }

    async loadQuestions() {
        try {
            // Load questions from file
            const questionBank = await import(`./questions/${this.selectedDomain}.js`);
            
            // Shuffle options for each question
            this.questions = questionBank.default.map(q => this.shuffleOptions(q));
            
            document.getElementById('totalQuestions').textContent = this.questions.length;
        } catch (error) {
            console.error('Error loading questions:', error);
            throw error;
        }
    }
}
    updateDomainTitle() {
        const title = domainData[this.selectedDomain].title;
        document.getElementById('domainTitle').textContent = title;
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
        const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        document.getElementById('timeSpent').textContent = display;
    }

    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers.get(question.id);
        
        // Update question number
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestionIndex + 1}`;
        
        // Update question text
        document.getElementById('questionText').textContent = question.text;
        
        // Create option elements
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (userAnswer === index) {
                optionElement.classList.add('selected');
            }
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            optionsContainer.appendChild(optionElement);
        });

        // Update flag button
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
        document.getElementById('explanationContainer').classList.add('hidden');
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

        // Quiz completion buttons
        document.getElementById('reviewButton').addEventListener('click', () => this.reviewQuiz());
        document.getElementById('finishButton').addEventListener('click', () => this.finishQuiz());
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);
        
        // Update option styling
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');

        // Show explanation
        this.showExplanation(optionIndex === question.correctAnswer);

        // Update progress
        this.progressTracker.updateQuestionProgress(
            this.selectedDomain,
            question.id,
            optionIndex === question.correctAnswer
        );
    }

    showExplanation(isCorrect) {
        const question = this.questions[this.currentQuestionIndex];
        const container = document.getElementById('explanationContainer');
        const indicator = document.getElementById('resultIndicator');
        const explanationText = document.getElementById('explanationText');

        indicator.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
        indicator.className = `result-indicator ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationText.textContent = question.explanation;
        container.classList.remove('hidden');
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

    showQuizSummary() {
        clearInterval(this.timerInterval);
        
        // Calculate results
        const totalQuestions = this.questions.length;
        const answeredQuestions = this.userAnswers.size;
        const correctAnswers = Array.from(this.userAnswers.entries())
            .filter(([questionId, answer]) => {
                const question = this.questions.find(q => q.id === questionId);
                return question.correctAnswer === answer;
            }).length;
        
        const score = Math.round((correctAnswers / totalQuestions) * 100);

        // Update summary UI
        document.getElementById('finalScore').textContent = `${score}%`;
        document.getElementById('timeTaken').textContent = this.formatTime(this.timer);
        document.getElementById('correctCount').textContent = `${correctAnswers}/${totalQuestions}`;
        
        // Show summary modal
        document.getElementById('quizSummary').classList.remove('hidden');

        // Update progress tracker
        this.progressTracker.updateTimeSpent(this.selectedDomain, this.timer);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    reviewQuiz() {
        document.getElementById('quizSummary').classList.add('hidden');
        this.currentQuestionIndex = 0;
        this.displayCurrentQuestion();
    }

    finishQuiz() {
        window.location.href = './index.html';
    }
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});
