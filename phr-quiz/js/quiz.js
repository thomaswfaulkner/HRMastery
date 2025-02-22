// quiz.js
class QuizManager {
    constructor() {
        this.selectedDomain = localStorage.getItem('selectedDomain');
        this.currentQuestionIndex = 0;
        this.userAnswers = new Map();
        this.shuffledOptions = new Map(); // Store shuffled options for each question
        this.flaggedQuestions = new Set();
        this.timer = 0;
        this.timerInterval = null;
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
                this.setupEventListeners();
            }
        } catch (error) {
            console.error('Error loading quiz:', error);
        }
    }

    updateDomainTitle() {
        const domainTitle = document.getElementById('domainTitle');
        if (domainTitle) {
            domainTitle.textContent = this.selectedDomain.charAt(0).toUpperCase() + 
                                    this.selectedDomain.slice(1);
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
        // Create array of option objects with their texts
        const options = [...question.options];
        
        // Shuffle the options
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
        
        // Update question counter
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;
        
        // Display shuffled options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        shuffledOptions.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            
            // If question was answered, show correct/incorrect
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

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update flag button state
        const flagButton = document.getElementById('flagButton');
        flagButton.classList.toggle('flagged', this.flaggedQuestions.has(question.id));

        // Update navigation buttons
        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish Quiz' : 'Next';

        // Show/hide explanation based on whether question is answered
        const explanationContainer = document.getElementById('explanationContainer');
        if (this.userAnswers.has(question.id)) {
            explanationContainer.classList.remove('hidden');
            this.showExplanation();
        } else {
            explanationContainer.classList.add('hidden');
        }
    }

    setupEventListeners() {
        // Option selection
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            if (e.target.classList.contains('option')) {
                const questionId = this.questions[this.currentQuestionIndex].id;
                // Only allow selection if question hasn't been answered
                if (!this.userAnswers.has(questionId)) {
                    this.handleOptionSelect(parseInt(e.target.dataset.index));
                }
            }
        });

        // Navigation buttons
        document.getElementById('prevButton').addEventListener('click', () => this.navigateQuestion(-1));
        document.getElementById('nextButton').addEventListener('click', () => {
            if (this.currentQuestionIndex === this.questions.length - 1) {
                this.finishQuiz();
            } else {
                this.navigateQuestion(1);
            }
        });

        // Flag button
        document.getElementById('flagButton').addEventListener('click', () => this.toggleFlagQuestion());

        // Quiz summary buttons
        document.getElementById('reviewButton').addEventListener('click', () => this.reviewQuiz());
        document.getElementById('finishButton').addEventListener('click', () => this.returnToDomains());
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        if (!this.userAnswers.has(question.id)) {
            const shuffledOptions = this.shuffledOptions.get(question.id);
            this.userAnswers.set(question.id, optionIndex);
            
            // Check if selected option is correct
            const isCorrect = shuffledOptions[optionIndex] === question.correctAnswer;
            this.showExplanation();
            this.displayCurrentQuestion();
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
        
        // Calculate results
        const totalQuestions = this.questions.length;
        const answered = this.userAnswers.size;
        const correct = Array.from(this.userAnswers.entries()).filter(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            const shuffledOptions = this.shuffledOptions.get(questionId);
            return shuffledOptions[selectedIndex] === question.correctAnswer;
        }).length;

        // Show results
        document.getElementById('finalScore').textContent = `${Math.round((correct/totalQuestions) * 100)}%`;
        document.getElementById('timeTaken').textContent = this.formatTime(this.timer);
        document.getElementById('correctCount').textContent = `${correct}/${totalQuestions}`;
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
});
