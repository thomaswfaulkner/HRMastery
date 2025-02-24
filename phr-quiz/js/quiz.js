// quiz.js
import ProgressTracker from './progress.js';
import { domainData } from './config.js';

class QuizManager {
    constructor() {
        this.selectedDomain = localStorage.getItem('selectedDomain');
        if (!this.selectedDomain || !domainData[this.selectedDomain]) {
            console.error('Invalid domain:', this.selectedDomain);
            return;
        }
        this.currentQuestionIndex = 0;
        this.userAnswers = new Map();
        this.shuffledOptions = new Map(); // Store shuffled options for each question
        this.flaggedQuestions = new Set();
        this.timer = 0;
        this.timerInterval = null;
        this.progressTracker = window.progressTracker || new ProgressTracker(); // Ensure ProgressTracker is initialized
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            console.log('Loading questions for domain:', this.selectedDomain);
            const module = await import(`./questions/${this.selectedDomain}.js`);
            this.questions = module.default;
            
            if (this.questions && this.questions.length > 0) {
                // Verify totalQuestions matches config.js
                const expectedQuestions = domainData[this.selectedDomain].totalQuestions;
                if (this.questions.length !== expectedQuestions) {
                    console.warn(`Question count mismatch for ${this.selectedDomain}: expected ${expectedQuestions}, got ${this.questions.length}`);
                }

                // Shuffle options for all questions at start
                this.questions.forEach(question => {
                    this.shuffledOptions.set(question.id, this.shuffleOptions(question));
                });
                this.updateDomainTitle();
                this.startTimer();
                this.displayCurrentQuestion();
                this.setupEventListeners();
            } else {
                console.error('No questions loaded for domain:', this.selectedDomain);
            }
        } catch (error) {
            console.error('Error loading quiz:', error);
        }
    }

    updateDomainTitle() {
        const domainTitle = document.getElementById('domainTitle');
        if (domainTitle) {
            domainTitle.textContent = domainData[this.selectedDomain].title; // Use title from config.js
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

    shuffleOptions(question) {
        const options = [...question.options];
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
    }

    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const shuffledOptions = this.shuffledOptions.get(question.id);
        
        document.getElementById('questionText').textContent = question.text;
        const currentNum = this.currentQuestionIndex + 1;
        document.getElementById('currentQuestion').textContent = currentNum;
        document.getElementById('totalQuestions').textContent = this.questions.length;
        document.getElementById('questionNumber').textContent = `Question ${currentNum}`;
    
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        shuffledOptions.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            
            if (this.userAnswers.has(question.id)) {
                if (this.userAnswers.get(question.id) === index) {
                    div.classList.add('selected');
                    if (option === question.correctAnswer) {
                        div.classList.add('correct');
                    } else {
                        div.classList.add('incorrect');
                    }
                } else if (option === question.correctAnswer) {
                    div.classList.add('correct');
                }
            }
            
            div.textContent = option;
            div.dataset.index = index;
            optionsContainer.appendChild(div);
        });

        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        const flagButton = document.getElementById('flagButton');
        flagButton.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next';

        const explanationContainer = document.getElementById('explanationContainer');
        if (this.userAnswers.has(question.id)) {
            explanationContainer.classList.remove('hidden');
            this.showExplanation();
        } else {
            explanationContainer.classList.add('hidden');
        }
    }

    setupEventListeners() {
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            if (e.target.classList.contains('option')) {
                const questionId = this.questions[this.currentQuestionIndex].id;
                if (!this.userAnswers.has(questionId)) {
                    this.handleOptionSelect(parseInt(e.target.dataset.index));
                }
            }
        });

        document.getElementById('prevButton').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('nextButton').addEventListener('click', () => {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.finishQuiz();
            } else {
                this.navigateQuestion(1);
            }
        });

        document.getElementById('flagButton').addEventListener('click', () => this.toggleFlagQuestion());
        document.getElementById('reviewButton').addEventListener('click', () => this.reviewQuiz());
        document.getElementById('finishButton').addEventListener('click', () => this.returnToDomains());
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        if (!this.userAnswers.has(question.id)) {
            const shuffledOptions = this.shuffledOptions.get(question.id);
            this.userAnswers.set(question.id, optionIndex);
            const isCorrect = shuffledOptions[optionIndex] === question.correctAnswer;
            console.log('Progress update attempt:', { domain: this.selectedDomain, questionId: question.id, isCorrect, timeSpent: this.timer });
            this.showExplanation();
            this.displayCurrentQuestion();

            this.progressTracker.updateProgress(
                this.selectedDomain,
                question.id, // Use the string ID like "BUS_001"
                isCorrect,
                this.timer
            );
        }
    }

    showExplanation() {
        const question = this.questions[this.currentQuestionIndex];
        const selectedIndex = this.userAnswers.get(question.id);
        const shuffledOptions = this.shuffledOptions.get(question.id);
        const isCorrect = shuffledOptions[selectedIndex] === question.correctAnswer;

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

    finishQuiz() {
        clearInterval(this.timerInterval);
        
        const totalQuestions = this.questions.length;
        Array.from(this.userAnswers.entries()).forEach(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            const shuffledOptions = this.shuffledOptions.get(questionId);
            const isCorrect = shuffledOptions[selectedIndex] === question.correctAnswer;
            console.log('Final progress update for:', { domain: this.selectedDomain, questionId, isCorrect, timeSpent: this.timer });
            this.progressTracker.updateProgress(
                this.selectedDomain,
                questionId, // Use the string ID like "BUS_001"
                isCorrect,
                this.timer
            );
        });

        const correctCount = Array.from(this.userAnswers.entries()).filter(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            const shuffledOptions = this.shuffledOptions.get(questionId);
            return shuffledOptions[selectedIndex] === question.correctAnswer;
        }).length;

        document.getElementById('finalScore').textContent = `${Math.round((correctCount / totalQuestions) * 100)}%`;
        document.getElementById('timeTaken').textContent = this.formatTime(this.timer);
        document.getElementById('correctCount').textContent = `${correctCount}/${totalQuestions}`;
        document.getElementById('quizSummary').classList.remove('hidden');
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

    returnToDomains() {
        window.location.href = './index.html';
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
    console.log('QuizManager initialized, progressTracker:', window.progressTracker);
});
