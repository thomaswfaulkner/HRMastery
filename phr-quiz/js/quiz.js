// quiz.js
class QuizManager {
    constructor() {
        this.selectedDomain = localStorage.getItem('selectedDomain');
        this.currentQuestionIndex = 0;
        this.userAnswers = new Map();
        this.quizSubmitted = false;
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            const module = await import(`./questions/${this.selectedDomain}.js`);
            this.questions = module.default;
            
            if (this.questions && this.questions.length > 0) {
                this.displayCurrentQuestion();
                this.setupEventListeners();
            }
        } catch (error) {
            console.error('Error loading quiz:', error);
        }
    }

    displayCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        document.getElementById('questionText').textContent = question.text;
        
        // Update question counter
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('totalQuestions').textContent = this.questions.length;
        
        // Display options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'option';
            
            // Show selected answer if question was answered
            if (this.userAnswers.has(question.id)) {
                div.classList.add(this.userAnswers.get(question.id) === index ? 'selected' : '');
                
                // If quiz is submitted, show correct/incorrect
                if (this.quizSubmitted) {
                    if (option === question.correctAnswer) {
                        div.classList.add('correct');
                    } else if (this.userAnswers.get(question.id) === index) {
                        div.classList.add('incorrect');
                    }
                }
            }
            
            div.textContent = option;
            div.dataset.index = index;
            optionsContainer.appendChild(div);
        });

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update navigation buttons
        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Submit Quiz' : 'Next';

        // Hide explanation until quiz is submitted
        const explanationContainer = document.getElementById('explanationContainer');
        if (!this.quizSubmitted) {
            explanationContainer.classList.add('hidden');
        } else {
            explanationContainer.classList.remove('hidden');
            this.showExplanation();
        }
    }

    setupEventListeners() {
        // Option selection
        document.getElementById('optionsContainer').addEventListener('click', (e) => {
            if (e.target.classList.contains('option') && !this.quizSubmitted) {
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
                this.submitQuiz();
            } else {
                this.navigateQuestion(1);
            }
        });

        // Flag button
        document.getElementById('flagButton').addEventListener('click', () => this.toggleFlagQuestion());
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);

        // Update visual selection
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');
    }

    showExplanation() {
        const question = this.questions[this.currentQuestionIndex];
        const selectedAnswer = this.userAnswers.get(question.id);
        const isCorrect = question.options[selectedAnswer] === question.correctAnswer;

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

    submitQuiz() {
        this.quizSubmitted = true;
        
        // Calculate results
        const totalQuestions = this.questions.length;
        const answered = this.userAnswers.size;
        const correct = Array.from(this.userAnswers.entries()).filter(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            return question.options[selectedIndex] === question.correctAnswer;
        }).length;

        // Show results
        document.getElementById('finalScore').textContent = `${Math.round((correct/totalQuestions) * 100)}%`;
        document.getElementById('correctCount').textContent = `${correct}/${totalQuestions}`;
        document.getElementById('quizSummary').classList.remove('hidden');

        // Redisplay current question to show correct/incorrect answers
        this.displayCurrentQuestion();
    }

    toggleFlagQuestion() {
        const flagButton = document.getElementById('flagButton');
        flagButton.classList.toggle('flagged');
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
});
