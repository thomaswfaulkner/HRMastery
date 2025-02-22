// quiz.js
class QuizManager {
    constructor() {
        console.log('QuizManager starting');
        this.selectedDomain = localStorage.getItem('selectedDomain');
        this.currentQuestionIndex = 0;
        this.userAnswers = new Map();
        console.log('Selected domain:', this.selectedDomain);
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            console.log('Loading questions for domain:', this.selectedDomain);
            const module = await import(`./questions/${this.selectedDomain}.js`);
            console.log('Module loaded:', module);
            
            if (!module.default) {
                throw new Error('No default export found in module');
            }
            
            this.questions = module.default;
            console.log('Questions loaded:', this.questions);
            
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
            // Add selected class if this option was previously selected
            if (this.userAnswers.get(question.id) === index) {
                div.classList.add('selected');
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
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish' : 'Next';

        // Hide explanation if showing
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
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);

        // Update visual selection
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');

        // Show explanation
        const isCorrect = question.options[optionIndex] === question.correctAnswer;
        this.showExplanation(isCorrect);
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
        const flagButton = document.getElementById('flagButton');
        flagButton.classList.toggle('flagged');
    }

    showQuizSummary() {
        const totalQuestions = this.questions.length;
        const answered = this.userAnswers.size;
        const correct = Array.from(this.userAnswers.entries()).filter(([questionId, selectedIndex]) => {
            const question = this.questions.find(q => q.id === questionId);
            return question.options[selectedIndex] === question.correctAnswer;
        }).length;

        document.getElementById('finalScore').textContent = `${Math.round((correct/totalQuestions) * 100)}%`;
        document.getElementById('correctCount').textContent = `${correct}/${totalQuestions}`;
        document.getElementById('quizSummary').classList.remove('hidden');
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - creating QuizManager');
    window.quizManager = new QuizManager();
});
