// quiz.js
class QuizManager {
    constructor() {
        this.selectedDomain = localStorage.getItem('selectedDomain');
        this.currentQuestionIndex = 0;
        this.userAnswers = new Map();
        this.shuffledOptions = new Map(); // Store shuffled options for each question
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            const module = await import(`./questions/${this.selectedDomain}.js`);
            this.questions = module.default;
            
            if (this.questions && this.questions.length > 0) {
                // Shuffle options for all questions at start
                this.questions.forEach(question => {
                    this.shuffledOptions.set(question.id, this.shuffleOptions(question));
                });
                this.displayCurrentQuestion();
                this.setupEventListeners();
            }
        } catch (error) {
            console.error('Error loading quiz:', error);
        }
    }

    shuffleOptions(question) {
        // Create array of option objects with their original indices
        const options = question.options.map((text, index) => ({
            text,
            isCorrect: text === question.correctAnswer
        }));

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
                }
                if (option.isCorrect) {
                    div.classList.add('correct');
                } else if (this.userAnswers.get(question.id) === index) {
                    div.classList.add('incorrect');
                }
            }
            
            div.textContent = option.text;
            div.dataset.index = index;
            optionsContainer.appendChild(div);
        });

        // Rest of your display logic...
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

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

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);

        // Check if selected option is correct using shuffled options
        const shuffledOptions = this.shuffledOptions.get(question.id);
        const isCorrect = shuffledOptions[optionIndex].isCorrect;
        
        this.showExplanation();
        this.displayCurrentQuestion();
    }

    showExplanation() {
        const question = this.questions[this.currentQuestionIndex];
        const selectedIndex = this.userAnswers.get(question.id);
        const shuffledOptions = this.shuffledOptions.get(question.id);
        const isCorrect = shuffledOptions[selectedIndex].isCorrect;

        const container = document.getElementById('explanationContainer');
        const indicator = document.getElementById('resultIndicator');
        const explanationText = document.getElementById('explanationText');

        container.classList.remove('hidden');
        indicator.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
        indicator.className = `result-indicator ${isCorrect ? 'correct' : 'incorrect'}`;
        explanationText.textContent = question.explanation;
    }

    // ... rest of your methods remain the same ...
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.quizManager = new QuizManager();
});
