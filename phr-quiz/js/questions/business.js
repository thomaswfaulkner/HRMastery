// business.js (example question bank file)
const questions = [
    {
        id: "bus_001",  // Unique ID format: domain_questionNumber
        text: "Question text here",
        options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
        ],
        correctAnswer: 0,  // Index of correct option
        explanation: "Explanation text here",
        references: "Optional reference text",
        domain: "business",
        topic: "Strategic Planning"  // Sub-topic within domain
    },
    // More questions...
];

export default questions;
