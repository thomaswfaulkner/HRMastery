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
        
        this.initializeQuiz();
    }

    async initializeQuiz() {
        try {
            console.log('Starting quiz initialization');
            await this.loadQuestions();
            console.log('Questions loaded:', this.questions);
            
            this.updateDomainTitle();
            this.startTimer();
            this.displayCurrentQuestion();
            this.setupEventListeners();
            
            console.log('Quiz initialization complete');
        } catch (error) {
            console.error('Error initializing quiz:', error);
            this.handleError('Failed to initialize quiz: ' + error.message);
        }
    }

    async loadQuestions() {
        try {
            console.log('Loading questions for domain:', this.selectedDomain);
            
            const module = await import(`./questions/${this.selectedDomain}.js`);
            let questions = module.default;
            console.log('Raw questions loaded:', questions);

            // Convert questions to use index-based correct answers
            questions = questions.map(q => ({
                ...q,
                correctAnswer: q.options.findIndex(opt => opt === q.correctAnswer),
                domain: q.domain || this.selectedDomain,
                functionalArea: q.functionalArea || domainData[this.selectedDomain].title,
                weight: q.weight || domainData[this.selectedDomain].weight
            }));

            this.questions = this.shuffleQuestions(questions);
            console.log('Processed questions:', this.questions);

            if (!this.questions || this.questions.length === 0) {
                throw new Error('No questions available');
            }

            document.getElementById('totalQuestions').textContent = this.questions.length;
        } catch (error) {
            console.error('Error in loadQuestions:', error);
            throw error;
        }
    }

    displayCurrentQuestion() {
        console.log('Displaying question index:', this.currentQuestionIndex);
        const question = this.questions[this.currentQuestionIndex];
        console.log('Current question:', question);

        if (!question) {
            console.error('No question found at index:', this.currentQuestionIndex);
            return;
        }

        // Update question number displays
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestionIndex + 1}`;
        
        // Update question text
        const questionTextElement = document.getElementById('questionText');
        questionTextElement.textContent = question.text;
        console.log('Question text updated:', question.text);
        
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
        console.log('Options updated:', question.options);

        // Update progress bar
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;

        // Update navigation buttons
        document.getElementById('prevButton').disabled = this.currentQuestionIndex === 0;
        const nextButton = document.getElementById('nextButton');
        nextButton.textContent = this.currentQuestionIndex === this.questions.length - 1 ? 'Finish' : 'Next';
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        console.log('Selected option:', optionIndex, 'for question:', question);
        
        this.userAnswers.set(question.id, optionIndex);
        
        // Update option styling
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');

        const isCorrect = optionIndex === question.correctAnswer;
        this.showExplanation(isCorrect);

        this.progressTracker.updateQuestionProgress(
            this.selectedDomain,
            question.id,
            isCorrect
        );
    }

    // ... rest of your existing methods ...
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating QuizManager');
    window.quizManager = new QuizManager();
});

export default QuizManager;
