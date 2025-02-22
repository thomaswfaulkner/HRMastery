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

    async loadQuestions() {
        try {
            console.log('Loading questions for domain:', this.selectedDomain);
            
            const module = await import(`./questions/${this.selectedDomain}.js`);
            let questions = module.default;

            // Convert questions to use index-based correct answers
            questions = questions.map(q => ({
                ...q,
                correctAnswer: q.options.findIndex(opt => opt === q.correctAnswer),
                // Add any missing properties with defaults
                domain: q.domain || this.selectedDomain,
                functionalArea: q.functionalArea || domainData[this.selectedDomain].title,
                weight: q.weight || domainData[this.selectedDomain].weight
            }));

            this.questions = this.shuffleQuestions(questions);
            console.log('Questions processed:', this.questions);

            document.getElementById('totalQuestions').textContent = this.questions.length;
        } catch (error) {
            console.error('Error loading questions:', error);
            throw error;
        }
    }

    handleOptionSelect(optionIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.userAnswers.set(question.id, optionIndex);
        
        // Update option styling
        const options = document.querySelectorAll('.option');
        options.forEach(opt => opt.classList.remove('selected'));
        options[optionIndex].classList.add('selected');

        // Check if answer is correct
        const isCorrect = optionIndex === question.correctAnswer;
        this.showExplanation(isCorrect);

        // Update progress
        this.progressTracker.updateQuestionProgress(
            this.selectedDomain,
            question.id,
            isCorrect
        );
    }

    // ... rest of the code remains the same ...
}

export default QuizManager;
