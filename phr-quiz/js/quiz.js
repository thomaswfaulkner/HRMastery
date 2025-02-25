// quiz.js
import ProgressTracker from './progress.js';
import { domainData } from './config.js';

class QuizManager {
    constructor() {
        this.selectedDomain = localStorage.getItem('selectedDomain');

        // Grab overall progress from localStorage
        const allProgress = JSON.parse(localStorage.getItem('phrQuizProgress')) || {};
        const domainProgress = allProgress[this.selectedDomain] || {};

        // Restore userAnswers (Map in memory, but saved as an object in localStorage)
        this.userAnswers = new Map(Object.entries(domainProgress.userAnswers || {}));

        // Restore currentQuestionIndex (if missing, default to 0)
        this.currentQuestionIndex = domainProgress.currentQuestionIndex ?? 0;

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
                // Shuffle options for all questions at start
                this.questions.forEach(question => {
                    this.shuffledOptions.set(question.id, this.shuffleOptions(question));
                });
                this.updateDomainTitle();
                this.startTimer();
                this.displayCurrentQuestion();
                this.populateJumpTo();
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
            domainTitle.textContent = domainData[this.selectedDomain].title;
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

        // Ensure shuffledOptions exists for this question
        if (!this.shuffledOptions.has(question.id)) {
            this.shuffledOptions.set(question.id, this.shuffleOptions(question));
        }
        const shuffledOptions = this.shuffledOptions.get(question.id);
        
        document.getElementById('questionText').textContent = question.text;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;
        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestionIndex + 1}`;

        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        shuffledOptions.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            
            // Restore previous selection if user has already answered this question
            if (this.userAnswers.has(question.id) && this.userAnswers.get(question.id) === index) {
                div.classList.add('selected');
            }
            div.textContent = option;
            div.dataset.index = index;
            optionsContainer.appendChild(div);
        });

        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        document.getElementById('nextButton').textContent =
            this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next';

        const explanationContainer = document.getElementById('explanationContainer');
        if (this.userAnswers.has(question.id)) {
            explanationContainer.classList.remove('hidden');
            this.showExplanation();
        } else {
            explanationContainer.classList.add('hidden');
        }
    }

    populateJumpTo() {
        const jumpToSelect = document.getElementById('jumpToSelect');
        jumpToSelect.innerHTML = '<option value="">Jump To...</option>';
        this.questions.forEach((_, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `Question ${index + 1}`;
            jumpToSelect.appendChild(option);
        });
    }

    setupEventListeners() {
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            if (e.target.classList.contains('option')) {
                const questionId = this.questions[this.currentQuestionIndex].id;
                // Allow selection only if question hasn't been answered yet
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

        // Add Jump To event listener
        document.getElementById('jumpToSelect').addEventListener('change', (e) => {
            const newIndex = parseInt(e.target.value);
            if (newIndex >= 0 && newIndex < this.questions.length) {
                this.currentQuestionIndex = newIndex;
                this.saveDomainState();
                this.displayCurrentQuestion();
                e.target.selectedIndex = 0; // Reset to "Jump To..." after jumping
            }
        });
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        // Save the selected answer
        this.userAnswers.set(question.id, optionIndex);
        // Save updated progress
        this.saveDomainState();

        const isCorrect = this.shuffledOptions.get(question.id)[optionIndex] === question.correctAnswer;
        console.log('Progress update attempt:', { domain: this.selectedDomain, questionId: question.id, isCorrect, timeSpent: this.timer });
        this.progressTracker.updateProgress(this.selectedDomain, question.id, isCorrect, this.timer);

        this.displayCurrentQuestion();
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
            // Save progress when navigating
            this.saveDomainState();
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
        // Optionally, update progress for all questions here
        Array.from(this.userAnswers.entries()).forEach(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            const shuffledOptions = this.shuffledOptions.get(questionId);
            const isCorrect = shuffledOptions[selectedIndex] === question.correctAnswer;
            console.log('Final progress update for:', { domain: this.selectedDomain, questionId, isCorrect, timeSpent: this.timer });
            this.progressTracker.updateProgress(this.selectedDomain, questionId, isCorrect, this.timer);
        });
        // Redirect to index.html after finishing the quiz
        window.location.href = './index.html';
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

    saveDomainState() {
        const allProgress = JSON.parse(localStorage.getItem('phrQuizProgress')) || {};
        const domainProgress = allProgress[this.selectedDomain] || {};

        // Store userAnswers (convert Map to a JSON-compatible object)
        domainProgress.userAnswers = Object.fromEntries(this.userAnswers);
        // Save the current question index
        domainProgress.currentQuestionIndex = this.currentQuestionIndex;

        allProgress[this.selectedDomain] = domainProgress;
        localStorage.setItem('phrQuizProgress', JSON.stringify(allProgress));
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
});
