// workforce.js
const questions = [
    {
        id: "WFP_001",
        text: "A tech firm’s hiring process for software engineers inadvertently excludes older candidates due to a coding test skewed toward recent graduates, risking a Title VII violation. HR must ensure compliance. What’s the best approach?",
        options: [
            "Train recruiters on age bias awareness",
            "Conduct a Disparate Impact Analysis to revise the test for fairness",
            "Add a disclaimer to job postings about equal opportunity",
            "Monitor applicant demographics post-hiring"
        ],
        correctAnswer: "Conduct a Disparate Impact Analysis to revise the test for fairness",
        explanation: "Disparate Impact Analysis identifies and corrects systemic bias in selection tools, ensuring Title VII compliance proactively. Training addresses awareness tactically, disclaimers inform partially, and monitoring reacts without fixing the root issue."
    },
    {
        id: "WFP_002",
        text: "A retail chain’s nepotism policy is challenged when a manager hires a relative for a cashier role, raising ethical concerns under organizational guidelines. HR must address this while adhering to Title VII. What’s the most effective strategy?",
        options: [
            "Review the hire against performance standards",
            "Apply an Ethical Decision-Making Framework to assess policy enforcement",
            "Provide ethics training to all managers",
            "Document the hire and monitor for favoritism"
        ],
        correctAnswer: "Apply an Ethical Decision-Making Framework to assess policy enforcement",
        explanation: "An Ethical Decision-Making Framework ensures systemic compliance with nepotism policies and Title VII fairness, addressing ethical risks strategically. Reviews assess tactically, training prevents partially, and monitoring reacts without policy enforcement."
    },
    {
        id: "WFP_003",
        text: "A logistics firm’s hiring for warehouse workers uses a physical test that disproportionately screens out female applicants, risking disparate impact under Title VII. HR must adjust the process. What’s the best solution?",
        options: [
            "Train hiring staff on gender bias mitigation",
            "Use Adverse Impact Analysis to redesign the test for job relevance",
            "Add a diversity statement to job postings",
            "Conduct a Kirkpatrick Level 1 evaluation of hiring feedback"
        ],
        correctAnswer: "Use Adverse Impact Analysis to redesign the test for job relevance",
        explanation: "Adverse Impact Analysis revises the test to align with job necessity, ensuring systemic Title VII compliance. Training mitigates tactically, statements signal intent partially, and Level 1 feedback assesses without addressing disparate impact."
    },
    {
        id: "WFP_004",
        text: "A consulting firm misclassifies a freelance designer as an independent contractor under FLSA, risking wage violations after they work 50-hour weeks without overtime. HR must correct administration. What’s the most strategic approach?",
        options: [
            "Review contractor hours against FLSA standards",
            "Apply the IRS Control Test to reclassify and adjust pay practices",
            "Provide FLSA training to hiring managers",
            "Monitor contractor workloads post-hiring"
        ],
        correctAnswer: "Apply the IRS Control Test to reclassify and adjust pay practices",
        explanation: "The IRS Control Test ensures systemic FLSA compliance by reclassifying based on work control, addressing wage risks strategically. Reviews check tactically, training educates partially, and monitoring reacts without fixing classification."
    },
    {
        id: "WFP_005",
        text: "A healthcare provider’s hiring process for nurses favors internal referrals, leading to a homogenous workforce and potential Title VII disparate impact concerns. HR must ensure ethical compliance. What’s the best method?",
        options: [
            "Conduct a diversity audit of referral hires",
            "Integrate a Uniform Guidelines Analysis to balance referral and external hiring",
            "Offer diversity training to referral sources",
            "Track applicant pool diversity post-process"
        ],
        correctAnswer: "Integrate a Uniform Guidelines Analysis to balance referral and external hiring",
        explanation: "Uniform Guidelines Analysis adjusts hiring to eliminate bias systemically, aligning with Title VII strategically. Audits identify tactically, training shifts behavior partially, and tracking monitors without correcting process flaws."
    },
    {
        id: "WFP_006",
        text: "A manufacturing firm’s hiring for machinists violates FLSA by offering flat rates to candidates misclassified as independent contractors, prompting legal scrutiny. HR must refine the process. What’s the most effective approach?",
        options: [
            "Provide FLSA compliance workshops for HR staff",
            "Apply the Economic Realities Test to ensure proper classification",
            "Review contractor agreements for wage compliance",
            "Monitor overtime claims post-hiring"
        ],
        correctAnswer: "Apply the Economic Realities Test to ensure proper classification",
        explanation: "The Economic Realities Test determines worker status systemically, ensuring FLSA compliance proactively. Workshops educate tactically, reviews check partially, and monitoring reacts without addressing classification root causes."
    },
    {
        id: "WFP_007",
        text: "A retail firm’s nepotism policy is questioned when a store manager hires their spouse, potentially violating ethical standards and Title VII fairness. HR must intervene with data-driven insight. What’s the best contribution?",
        options: [
            "Compare the spouse’s performance to peers",
            "Use a Job-Relatedness Analysis to validate the hiring decision",
            "Train managers on nepotism policy adherence",
            "Document the hire and assess team morale"
        ],
        correctAnswer: "Use a Job-Relatedness Analysis to validate the hiring decision",
        explanation: "Job-Relatedness Analysis ensures the hire meets objective criteria, aligning systemically with Title VII and ethical standards. Comparisons evaluate tactically, training prevents partially, and documentation monitors without validating fairness."
    },
    {
        id: "WFP_008",
        text: "Under Title VII, workforce planning must ensure hiring practices do not disproportionately exclude protected groups. How should HR interpret this to optimize long-term talent acquisition?",
        options: [
            "Monitor applicant demographics annually",
            "Apply Adverse Impact Analysis to align selection criteria with workforce diversity goals",
            "Train recruiters on diversity hiring practices",
            "Document hiring decisions for legal audits"
        ],
        correctAnswer: "Apply Adverse Impact Analysis to align selection criteria with workforce diversity goals",
        explanation: "Adverse Impact Analysis proactively ensures systemic compliance with Title VII, integrating diversity into workforce planning strategically. Monitoring tracks tactically, training educates partially, and documentation defends without optimizing talent acquisition."
    },
    {
        id: "WFP_009",
        text: "The FLSA requires proper classification of workers to avoid wage violations. How should HR interpret this in planning a flexible workforce with independent contractors?",
        options: [
            "Review contractor agreements against FLSA standards",
            "Use the Economic Realities Test to forecast contractor needs and compliance risks",
            "Provide FLSA training to workforce planners",
            "Track contractor hours for overtime compliance"
        ],
        correctAnswer: "Use the Economic Realities Test to forecast contractor needs and compliance risks",
        explanation: "The Economic Realities Test integrates FLSA compliance into workforce planning systemically, balancing flexibility and legality strategically. Reviews check tactically, training informs partially, and tracking reacts without forecasting risks."
    },
    {
        id: "WFP_010",
        text: "Title VII’s disparate impact provisions challenge workforce planning when selection tools unintentionally favor certain groups. How should HR interpret this to maintain a balanced talent pipeline?",
        options: [
            "Conduct annual diversity audits of hires",
            "Apply Uniform Guidelines on Employee Selection to design job-relevant criteria",
            "Offer bias awareness training to hiring teams",
            "Benchmark workforce diversity against industry norms"
        ],
        correctAnswer: "Apply Uniform Guidelines on Employee Selection to design job-relevant criteria",
        explanation: "Uniform Guidelines ensure systemic Title VII compliance by aligning selection with job needs, supporting a balanced pipeline strategically. Audits assess tactically, training mitigates partially, and benchmarks compare without addressing criteria design."
    },
    {
        id: "WFP_011",
        text: "Nepotism policies intersect with ethical hiring under Title VII, impacting workforce planning for internal promotions. How should HR interpret this to ensure fairness in succession?",
        options: [
            "Review promotion decisions for nepotism flags",
            "Integrate a Job-Relatedness Analysis to validate promotion criteria",
            "Train managers on anti-nepotism policies",
            "Monitor promotion demographics for equity"
        ],
        correctAnswer: "Integrate a Job-Relatedness Analysis to validate promotion criteria",
        explanation: "Job-Relatedness Analysis embeds systemic fairness into succession planning, aligning with Title VII and ethical standards strategically. Reviews identify tactically, training educates partially, and monitoring tracks without ensuring criteria validity."
    },
    {
        id: "WFP_012",
        text: "The FLSA’s independent contractor rules affect workforce planning when scaling temporary labor. How should HR interpret this to optimize cost and compliance?",
        options: [
            "Conduct FLSA audits of contractor classifications",
            "Apply Human Capital Theory to balance contractor costs with compliance risks",
            "Provide FLSA classification guidelines to planners",
            "Track contractor wage payments for violations"
        ],
        correctAnswer: "Apply Human Capital Theory to balance contractor costs with compliance risks",
        explanation: "Human Capital Theory integrates FLSA compliance into workforce cost models systemically, optimizing strategically. Audits check tactically, guidelines inform partially, and tracking reacts without balancing cost and legality."
    },
    {
        id: "WFP_013",
        text: "Title VII prohibits discriminatory hiring practices, challenging workforce planning for diversity in high-skill roles. How should HR interpret this to build a sustainable talent pool?",
        options: [
            "Monitor hiring outcomes for diversity metrics",
            "Use Disparate Impact Analysis to forecast and adjust talent acquisition strategies",
            "Train recruiters on Title VII compliance",
            "Benchmark diversity against competitor workforces"
        ],
        correctAnswer: "Use Disparate Impact Analysis to forecast and adjust talent acquisition strategies",
        explanation: "Disparate Impact Analysis proactively forecasts and adjusts hiring for systemic Title VII compliance, sustaining diversity strategically. Monitoring tracks tactically, training educates partially, and benchmarks compare without forecasting adjustments."
    },
    {
        id: "WFP_014",
        text: "Ethical hiring under Title VII and organizational policies requires avoiding nepotism in workforce planning for leadership roles. How should HR interpret this to ensure a merit-based pipeline?",
        options: [
            "Review leadership hires for nepotism patterns",
            "Integrate a Competency-Based Model to prioritize skills in succession planning",
            "Offer ethics training on nepotism risks",
            "Track leadership diversity post-hiring"
        ],
        correctAnswer: "Integrate a Competency-Based Model to prioritize skills in succession planning",
        explanation: "A Competency-Based Model ensures systemic meritocracy under Title VII, strategically aligning workforce planning with fairness. Reviews assess tactically, training mitigates partially, and tracking monitors without prioritizing skills."
    },
    // Add more workforce planning questions
];

export default questions;
