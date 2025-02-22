// quiz.js
import { domainData } from './config.js';
import ProgressTracker from './progress.js';

class QuizManager {
    constructor() {
        console.log('QuizManager Constructor Started');
        this.progressTracker = new ProgressTracker();
        this.currentQuestionIndex = 0;
        this.selectedDomain = localStorage.getItem('selectedDomain');
        console.log('Selected Domain:', this.selectedDomain);
        this.questions = [];
        this.userAnswers = new Map();
        this.flaggedQuestions = new Set();
        this.timer = 0;
        this.timerInterval = null;
        
        // Make initializeQuiz call explicit
        console.log('About to call initializeQuiz');
        this.initializeQuiz().catch(error => {
            console.error('Failed to initialize quiz:', error);
        });
        console.log('Constructor Complete');
    }

    async initializeQuiz() {
        try {
            console.log('InitializeQuiz Started');
            await this.loadQuestions();
            console.log('Questions Loaded, Count:', this.questions.length);
            console.log('First Question:', this.questions[0]);
            
            this.updateDomainTitle();
            console.log('Domain Title Updated');
            
            this.startTimer();
            console.log('Timer Started');
            
            this.displayCurrentQuestion();
            console.log('Current Question Displayed');
            
            this.setupEventListeners();
            console.log('Event Listeners Set Up');
            
        } catch (error) {
            console.error('InitializeQuiz Error:', error);
            throw error;
        }
    }

    async loadQuestions() {
        try {
            console.log('LoadQuestions Started for domain:', this.selectedDomain);
            
            const module = await import(`./questions/${this.selectedDomain}.js`);
            console.log('Module imported:', module);
            
            let questions = module.default;
            console.log('Raw questions:', questions);

            if (!Array.isArray(questions)) {
                throw new Error('Questions is not an array');
            }

            // Convert questions to use index-based correct answers
            questions = questions.map(q => {
                const correctIndex = q.options.findIndex(opt => opt === q.correctAnswer);
                console.log(`Question ${q.id} correct answer index:`, correctIndex);
                return {
                    ...q,
                    correctAnswer: correctIndex,
                    domain: q.domain || this.selectedDomain,
                    functionalArea: q.functionalArea || domainData[this.selectedDomain].title,
                    weight: q.weight || domainData[this.selectedDomain].weight
                };
            });

            this.questions = this.shuffleQuestions(questions);
            console.log('Final processed questions:', this.questions);

            document.getElementById('totalQuestions').textContent = this.questions.length;
            return true;
        } catch (error) {
            console.error('LoadQuestions Error:', error);
            throw error;
        }
    }

    displayCurrentQuestion() {
        console.log('DisplayCurrentQuestion Started');
        console.log('Current Index:', this.currentQuestionIndex);
        console.log('Questions Array:', this.questions);
        
        const question = this.questions[this.currentQuestionIndex];
        console.log('Current Question Object:', question);

        if (!question) {
            console.error('No question found at current index');
            return;
        }

        try {
            // Update question number
            const currentQuestionElement = document.getElementById('currentQuestion');
            currentQuestionElement.textContent = this.currentQuestionIndex + 1;
            console.log('Question number updated');

            // Update question text
            const questionTextElement = document.getElementById('questionText');
            questionTextElement.textContent = question.text;
            console.log('Question text updated');

            // Update options
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.dataset.index = index;
                optionsContainer.appendChild(optionElement);
            });
            console.log('Options updated');

            // Update progress
            const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
            document.getElementById('progressBar').style.width = `${progress}%`;
            console.log('Progress updated');
        } catch (error) {
            console.error('Error in displayCurrentQuestion:', error);
        }
    }
}

// Initialize quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Creating Quiz Manager');
    window.quizManager = new QuizManager();
});

export default QuizManager;
