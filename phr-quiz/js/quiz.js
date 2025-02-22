// quiz.js
class QuizManager {
    constructor() {
        console.log('QuizManager starting');
        this.selectedDomain = localStorage.getItem('selectedDomain');
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
                console.log('First question:', this.questions[0]);
                document.getElementById('questionText').textContent = this.questions[0].text;
                
                const optionsContainer = document.getElementById('optionsContainer');
                optionsContainer.innerHTML = '';
                this.questions[0].options.forEach((option, index) => {
                    const div = document.createElement('div');
                    div.className = 'option';
                    div.textContent = option;
                    optionsContainer.appendChild(div);
                });
            }
        } catch (error) {
            console.error('Error loading quiz:', error);
        }
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - creating QuizManager');
    window.quizManager = new QuizManager();
});
