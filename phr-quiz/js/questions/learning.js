// learning.js
const questions = [
    {
        id: "LND_001",
        text: "A multinational firm sees inconsistent skill uptake after a global training rollout. What should HR prioritize to fix this?",
        options: [
            "Standardizing content across regions",
            "Applying Knowles’ andragogy to tailor for adult learners",
            "Increasing session frequency",
            "Translating materials into local languages"
        ],
        correctAnswer: "Applying Knowles’ andragogy to tailor for adult learners",
        explanation: "Knowles’ andragogy principles focus on adult learners’ self-direction and relevance, addressing varied needs across regions more effectively than standardization or translation alone."
    },
    {
        id: "LND_002",
        text: "Post-training evaluations show high satisfaction but no performance gains. What’s the best theoretical fix?",
        options: [
            "Revising content for relevance",
            "Using Kirkpatrick’s Level 3 to assess behavior change",
            "Adding more interactive elements",
            "Surveying managers for feedback"
        ],
        correctAnswer: "Using Kirkpatrick’s Level 3 to assess behavior change",
        explanation: "Kirkpatrick’s Level 3 evaluates on-the-job application, pinpointing why performance isn’t improving beyond satisfaction (Level 1), offering a deeper diagnostic than content tweaks."
    },
    {
        id: "LND_003",
        text: "A tech company’s engineers resist soft skills training, citing irrelevance. How should HR reframe it?",
        options: [
            "Linking it to project collaboration outcomes",
            "Making it optional with incentives",
            "Shortening sessions to fit schedules",
            "Comparing it to industry benchmarks"
        ],
        correctAnswer: "Linking it to project collaboration outcomes",
        explanation: "Connecting training to tangible job outcomes leverages adult learning theory’s emphasis on relevance, overcoming resistance more effectively than incentives or brevity."
    },
    {
        id: "LND_004",
        text: "HR must justify a $500K leadership program amid budget cuts. What’s the most robust approach?",
        options: [
            "Calculating cost-per-participant savings",
            "Measuring ROI via performance metrics",
            "Highlighting participant testimonials",
            "Benchmarking against competitor spending"
        ],
        correctAnswer: "Measuring ROI via performance metrics",
        explanation: "Performance-based ROI ties training to business impact, providing a data-driven justification that outweighs testimonials or competitor comparisons in rigor."
    },
    {
        id: "LND_005",
        text: "A firm’s compliance training fails to reduce policy violations. What’s the best theoretical intervention?",
        options: [
            "Increasing testing frequency",
            "Applying Gagné’s 9 Events for deeper retention",
            "Simplifying content for clarity",
            "Enforcing stricter penalties"
        ],
        correctAnswer: "Applying Gagné’s 9 Events for deeper retention",
        explanation: "Gagné’s 9 Events structure learning for retention and application, addressing root causes of noncompliance beyond punitive measures or simplification."
    },
    {
        id: "LND_006",
        text: "A retail chain struggles to scale training for 10,000 seasonal hires. What’s the most effective solution?",
        options: [
            "Deploying a basic e-learning module",
            "Using a blended learning model with microlearning",
            "Holding mass in-person sessions",
            "Relying on manager-led onboarding"
        ],
        correctAnswer: "Using a blended learning model with microlearning",
        explanation: "Blended learning with microlearning scales efficiently and supports retention for large groups, outperforming basic e-learning or in-person logistics."
    },
    {
        id: "LND_007",
        text: "Post-merger, two teams resist unified training due to cultural differences. What should HR do?",
        options: [
            "Creating a hybrid curriculum",
            "Leveraging Hofstede’s cultural dimensions to adapt",
            "Mandating a single approach",
            "Offering separate sessions"
        ],
        correctAnswer: "Leveraging Hofstede’s cultural dimensions to adapt",
        explanation: "Hofstede’s framework tailors training to cultural values, fostering acceptance and efficacy over a one-size-fits-all or fully separate approach."
    },
    {
        id: "LND_008",
        text: "A leadership pipeline program yields inconsistent results across cohorts. What’s the best refinement?",
        options: [
            "Standardizing trainer delivery",
            "Aligning with a competency framework like Lominger",
            "Increasing participant screening",
            "Adding more case studies"
        ],
        correctAnswer: "Aligning with a competency framework like Lominger",
        explanation: "A competency framework ensures consistent leadership outcomes across cohorts, providing a structured baseline beyond delivery or screening adjustments."
    },
    {
        id: "LND_009",
        text: "A firm’s sales training boosts short-term quotas but not long-term growth. What’s the strongest fix?",
        options: [
            "Extending training duration",
            "Embedding spaced repetition and reinforcement",
            "Focusing on advanced techniques",
            "Rewarding sustained performance"
        ],
        correctAnswer: "Embedding spaced repetition and reinforcement",
        explanation: "Spaced repetition leverages learning theory to sustain skills over time, addressing long-term growth more effectively than duration or rewards alone."
    },
    {
        id: "LND_010",
        text: "HR finds employees forget 70% of training within a month. What’s the most theoretically sound response?",
        options: [
            "Adding refresher courses",
            "Applying Ebbinghaus’ Forgetting Curve with boosters",
            "Simplifying initial content",
            "Testing retention weekly"
        ],
        correctAnswer: "Applying Ebbinghaus’ Forgetting Curve with boosters",
        explanation: "Ebbinghaus’ curve informs targeted reinforcement timing, combating forgetting more precisely than generic refreshers or testing."
    },
    {
        id: "LND_011",
        text: "A high-potential program lacks diversity in outcomes. How should HR adjust it?",
        options: [
            "Broadening eligibility criteria",
            "Using Kolb’s experiential learning cycle to personalize",
            "Increasing mentor involvement",
            "Focusing on technical skills"
        ],
        correctAnswer: "Using Kolb’s experiential learning cycle to personalize",
        explanation: "Kolb’s cycle adapts to diverse learning styles, enhancing outcomes across varied participants more than eligibility tweaks or mentorship alone."
    },
    {
        id: "LND_012",
        text: "A firm’s training ROI shows negligible impact despite high costs. What’s the most rigorous reassessment?",
        options: [
            "Recalculating financial inputs",
            "Applying Phillips’ ROI Methodology for causation",
            "Surveying participants post-training",
            "Comparing to industry norms"
        ],
        correctAnswer: "Applying Phillips’ ROI Methodology for causation",
        explanation: "Phillips’ methodology isolates training’s business impact, offering a rigorous causal link beyond financial recalculations or surveys."
    },
    {
        id: "LND_013",
        text: "A creative team excels technically but resists leadership training. What’s the best approach?",
        options: [
            "Framing it as career empowerment",
            "Using transformational leadership theory to inspire",
            "Reducing session complexity",
            "Offering peer-led workshops"
        ],
        correctAnswer: "Using transformational leadership theory to inspire",
        explanation: "Transformational leadership theory motivates by aligning training with intrinsic goals, overcoming resistance more effectively than empowerment framing."
    },
    {
        id: "LND_014",
        text: "A global firm’s e-learning platform sees low engagement in some regions. What’s the most strategic fix?",
        options: [
            "Localizing content culturally",
            "Applying connectivism for networked learning",
            "Shortening module lengths",
            "Adding gamification universally"
        ],
        correctAnswer: "Applying connectivism for networked learning",
        explanation: "Connectivism leverages regional networks and technology for engagement, addressing root causes beyond localization or gamification."
    },
    {
        id: "LND_015",
        text: "Post-training, a team’s productivity dips due to overconfidence. What’s the best theoretical corrective?",
        options: [
            "Reinforcing foundational skills",
            "Using Bloom’s Taxonomy to deepen mastery",
            "Scaling back training scope",
            "Monitoring performance closely"
        ],
        correctAnswer: "Using Bloom’s Taxonomy to deepen mastery",
        explanation: "Bloom’s Taxonomy progresses learners to higher-order skills, correcting overconfidence through mastery rather than scaling back or monitoring."
    }
    [
    {
        id: "LND_016",
        text: "What is a key purpose of employee onboarding?",
        options: [
            "Completing legal paperwork",
            "Integrating new hires into the company culture",
            "Assigning initial tasks",
            "Reviewing company policies"
        ],
        correctAnswer: "Integrating new hires into the company culture",
        explanation: "While all are onboarding components, integrating hires into the culture fosters long-term engagement and retention, making it the primary purpose over administrative or task-focused steps."
    },
    {
        id: "LND_017",
        text: "How can HR improve skill development programs?",
        options: [
            "Offering optional workshops",
            "Tailoring training to employee roles",
            "Providing general industry updates",
            "Scheduling annual seminars"
        ],
        correctAnswer: "Tailoring training to employee roles",
        explanation: "Tailoring to roles ensures relevance and immediate applicability, maximizing skill uptake compared to optional or generalized approaches."
    },
    {
        id: "LND_018",
        text: "What is a good way to prepare employees for leadership?",
        options: [
            "Assigning them team projects",
            "Implementing structured leadership training",
            "Promoting based on tenure",
            "Encouraging self-study"
        ],
        correctAnswer: "Implementing structured leadership training",
        explanation: "Structured training builds specific leadership competencies systematically, outperforming informal projects or self-directed efforts for consistent preparation."
    },
    {
        id: "LND_019",
        text: "How should HR approach performance coaching?",
        options: [
            "Meeting with employees annually",
            "Offering ongoing feedback and guidance",
            "Focusing only on struggling staff",
            "Reviewing performance metrics"
        ],
        correctAnswer: "Offering ongoing feedback and guidance",
        explanation: "Ongoing coaching supports continuous improvement for all employees, surpassing annual reviews or a narrow focus on struggling staff in impact."
    },
    {
        id: "LND_020",
        text: "What ensures compliance training is effective?",
        options: [
            "Making it mandatory",
            "Linking it to real-world scenarios",
            "Keeping it short",
            "Testing employees afterward"
        ],
        correctAnswer: "Linking it to real-world scenarios",
        explanation: "Real-world scenarios enhance understanding and application, making compliance training more effective than mandating attendance or testing alone."
    },
    {
        id: "LND_021",
        text: "What helps employees plan their career paths?",
        options: [
            "Sharing company goals",
            "Providing development discussions and resources",
            "Listing available promotions",
            "Reviewing job descriptions"
        ],
        correctAnswer: "Providing development discussions and resources",
        explanation: "Discussions and resources offer personalized guidance, enabling proactive career planning beyond static information like goals or job listings."
    },
    {
        id: "LND_022",
        text: "How can e-learning platforms benefit training?",
        options: [
            "Reducing training costs",
            "Offering flexible, scalable learning",
            "Replacing all in-person sessions",
            "Tracking attendance easily"
        ],
        correctAnswer: "Offering flexible, scalable learning",
        explanation: "Flexibility and scalability address diverse learning needs and workforce size, providing broader benefits than cost reduction or attendance tracking."
    },
    {
        id: "LND_023",
        text: "What is a sign of successful training?",
        options: [
            "High attendance rates",
            "Improved job performance",
            "Positive employee feedback",
            "Completion of all modules"
        ],
        correctAnswer: "Improved job performance",
        explanation: "Improved performance directly reflects training’s impact on work outcomes, making it a stronger indicator of success than attendance or feedback."
    },
    {
        id: "LND_024",
        text: "How should HR prioritize training topics?",
        options: [
            "Addressing employee requests",
            "Aligning with organizational goals",
            "Focusing on industry trends",
            "Covering basic skills first"
        ],
        correctAnswer: "Aligning with organizational goals",
        explanation: "Alignment with goals ensures training drives strategic priorities, outweighing employee preferences or industry trends in organizational value."
    },
    {
        id: "LND_025",
        text: "What is a good way to assess training needs?",
        options: [
            "Reviewing employee resumes",
            "Conducting a skills gap analysis",
            "Asking managers for input",
            "Surveying all staff"
        ],
        correctAnswer: "Conducting a skills gap analysis",
        explanation: "A skills gap analysis systematically identifies deficiencies against goals, providing a more data-driven approach than resumes or surveys."
    },
    {
        id: "LND_026",
        text: "How can HR make training engaging?",
        options: [
            "Using videos and slides",
            "Incorporating interactive activities",
            "Keeping sessions short",
            "Offering incentives"
        ],
        correctAnswer: "Incorporating interactive activities",
        explanation: "Interactive activities boost engagement through active participation, surpassing passive visuals or external motivators like incentives."
    },
    {
        id: "LND_027",
        text: "What supports continuous employee development?",
        options: [
            "Annual performance reviews",
            "Ongoing learning opportunities",
            "One-time workshops",
            "Manager-led coaching"
        ],
        correctAnswer: "Ongoing learning opportunities",
        explanation: "Ongoing opportunities sustain development over time, outpacing periodic reviews or one-off events in fostering growth."
    },
    {
        id: "LND_028",
        text: "How should HR evaluate leadership training?",
        options: [
            "Tracking promotions",
            "Measuring leadership competencies",
            "Collecting participant feedback",
            "Monitoring team morale"
        ],
        correctAnswer: "Measuring leadership competencies",
        explanation: "Competency measurement directly assesses skill acquisition, offering a more precise evaluation than promotions or morale."
    },
    {
        id: "LND_029",
        text: "What is a key feature of effective onboarding?",
        options: [
            "Assigning a mentor",
            "Setting clear expectations",
            "Providing a handbook",
            "Hosting a welcome event"
        ],
        correctAnswer: "Setting clear expectations",
        explanation: "Clear expectations align new hires with role success, providing a foundational benefit beyond mentors or events."
    },
    {
        id: "LND_030",
        text: "How can HR address resistance to training?",
        options: [
            "Explaining its benefits clearly",
            "Making it optional",
            "Shortening the sessions",
            "Offering rewards"
        ],
        correctAnswer: "Explaining its benefits clearly",
        explanation: "Clear benefit communication addresses root resistance by aligning training with employee needs, more effectively than rewards or optional status."
    },
    {
        id: "LND_031",
        text: "What is a benefit of cross-functional training?",
        options: [
            "Improving team morale",
            "Enhancing versatility and collaboration",
            "Reducing training costs",
            "Focusing on core skills"
        ],
        correctAnswer: "Enhancing versatility and collaboration",
        explanation: "Versatility and collaboration drive organizational agility, making it the standout benefit over morale or cost savings."
    },
    {
        id: "LND_032",
        text: "How should HR update training content?",
        options: [
            "Revising it every few years",
            "Aligning it with current needs",
            "Adding more examples",
            "Following competitor trends"
        ],
        correctAnswer: "Aligning it with current needs",
        explanation: "Alignment with current needs ensures relevance and impact, surpassing periodic updates or competitor-driven changes."
    },
    {
        id: "LND_033",
        text: "What is a practical way to deliver compliance training?",
        options: [
            "Sending policy emails",
            "Using scenario-based modules",
            "Holding a single lecture",
            "Posting rules on a bulletin"
        ],
        correctAnswer: "Using scenario-based modules",
        explanation: "Scenario-based modules enhance practical understanding, making them more effective than passive emails or lectures."
    },
    {
        id: "LND_034",
        text: "How can HR support career development?",
        options: [
            "Offering tuition reimbursement",
            "Mapping out growth opportunities",
            "Encouraging external courses",
            "Promoting from within"
        ],
        correctAnswer: "Mapping out growth opportunities",
        explanation: "Mapping opportunities provides a structured, proactive path, exceeding financial support or internal promotions in scope."
    },
    {
        id: "LND_035",
        text: "What is a drawback of poor training?",
        options: [
            "Lower employee morale",
            "Reduced productivity",
            "Increased absenteeism",
            "Higher recruitment costs"
        ],
        correctAnswer: "Reduced productivity",
        explanation: "Reduced productivity directly undermines organizational goals, making it the most significant drawback compared to morale or costs."
    },
    {
        id: "LND_036",
        text: "How should HR measure training ROI?",
        options: [
            "Tracking attendance numbers",
            "Assessing performance improvements",
            "Calculating training costs",
            "Surveying employee satisfaction"
        ],
        correctAnswer: "Assessing performance improvements",
        explanation: "Performance improvements tie training to tangible outcomes, offering a more meaningful ROI metric than attendance or costs."
    },
    {
        id: "LND_037",
        text: "What is a good approach to soft skills training?",
        options: [
            "Using online tutorials",
            "Facilitating role-playing exercises",
            "Lecturing on best practices",
            "Assigning reading materials"
        ],
        correctAnswer: "Facilitating role-playing exercises",
        explanation: "Role-playing builds practical soft skills through experience, surpassing passive methods like lectures or tutorials."
    },
    {
        id: "LND_038",
        text: "How can HR ensure training sticks?",
        options: [
            "Testing employees immediately",
            "Reinforcing with on-the-job application",
            "Repeating sessions annually",
            "Providing detailed handouts"
        ],
        correctAnswer: "Reinforcing with on-the-job application",
        explanation: "On-the-job application embeds learning in practice, enhancing retention more effectively than testing or repetition."
    },
    {
        id: "LND_039",
        text: "What helps tailor leadership development?",
        options: [
            "Focusing on general skills",
            "Customizing to individual strengths",
            "Using a standard program",
            "Emphasizing technical expertise"
        ],
        correctAnswer: "Customizing to individual strengths",
        explanation: "Customization leverages unique potential, making leadership development more effective than standardized or technical focuses."
    },
    {
        id: "LND_040",
        text: "How should HR handle outdated skills?",
        options: [
            "Offering refresher courses",
            "Upskilling for current demands",
            "Reassigning employees",
            "Documenting skill gaps"
        ],
        correctAnswer: "Upskilling for current demands",
        explanation: "Upskilling aligns employees with present needs, providing a proactive solution beyond refreshers or reassignment."
    }
    [
    {
        id: "LND_061",
        text: "A global retailer with 50,000 employees launches a career development program, but after six months, only 10% of managers participate, citing time constraints. Engagement data shows high interest but low follow-through. What’s the most strategic HR response?",
        options: [
            "Redesigning the program into shorter, self-paced modules",
            "Embedding career development into existing performance reviews",
            "Partnering with senior leaders to model participation",
            "Offering financial incentives for completion"
        ],
        correctAnswer: "Embedding career development into existing performance reviews",
        explanation: "Embedding leverages existing workflows, addressing time barriers while aligning development with performance goals—a systemic solution rooted in organizational behavior principles. Shorter modules help but lack integration, modeling shifts culture slowly, and incentives treat symptoms, not causes."
    },
    {
        id: "LND_062",
        text: "During a succession planning meeting, a tech firm’s C-suite debates replacing a retiring CTO. HR data shows two candidates: one with stellar performance reviews but limited technical depth, and another with niche skills but inconsistent feedback. What’s the best HR contribution?",
        options: [
            "Presenting a comparative skills assessment tied to the CTO role",
            "Highlighting turnover risks based on exit survey trends",
            "Recommending a 360-degree feedback analysis for both",
            "Providing compensation data to benchmark their value"
        ],
        correctAnswer: "Presenting a comparative skills assessment tied to the CTO role",
        explanation: "A skills assessment directly addresses role-specific readiness, grounding the decision in job-relevant data—a cornerstone of succession planning theory. Turnover risks are broader, 360-degree feedback delays with subjectivity, and compensation sidesteps capability."
    },
    {
        id: "LND_063",
        text: "A manufacturing firm’s safety training reduces incidents by 20%, but a recent audit flags persistent violations in one plant. HR finds the training was delivered uniformly across sites. What’s the most effective evaluation approach?",
        options: [
            "Analyzing plant-specific incident data post-training",
            "Conducting focus groups with plant workers",
            "Reviewing training delivery methods for consistency",
            "Comparing compliance rates to industry benchmarks"
        ],
        correctAnswer: "Analyzing plant-specific incident data post-training",
        explanation: "Plant-specific data pinpoints whether training translates to behavior, aligning with Kirkpatrick’s Level 3 evaluation—crucial for isolating root causes. Focus groups offer insights but lack objectivity, delivery reviews miss outcomes, and benchmarks ignore context."
    },
    {
        id: "LND_064",
        text: "A financial services firm rolls out an inclusivity initiative after a diversity audit reveals exclusionary practices. Post-training, engagement scores rise, but minority retention drops. What’s the best HR adjustment?",
        options: [
            "Facilitating cross-departmental inclusivity workshops",
            "Analyzing exit interviews to refine training focus",
            "Integrating inclusivity metrics into leadership KPIs",
            "Revising training with real employee case studies"
        ],
        correctAnswer: "Analyzing exit interviews to refine training focus",
        explanation: "Exit interviews reveal why retention lags despite engagement, enabling data-driven training refinements—a feedback loop rooted in organizational learning theory. Workshops broaden scope, KPIs shift accountability, and case studies enhance but don’t diagnose."
    },
    {
        id: "LND_065",
        text: "A healthcare provider’s HR team notices a mentorship program for nurses boosts satisfaction but not clinical skills after a year. Management demands measurable outcomes. What’s the most robust HR response?",
        options: [
            "Tracking patient care metrics tied to mentees",
            "Redesigning mentorship with skill-based objectives",
            "Surveying mentors for qualitative insights",
            "Comparing mentee performance to non-mentees"
        ],
        correctAnswer: "Redesigning mentorship with skill-based objectives",
        explanation: "Redesigning embeds skill development into mentorship goals, aligning with adult learning theory’s emphasis on relevance—a proactive fix. Patient metrics measure indirectly, surveys lack rigor, and comparisons miss program flaws."
    },
    {
        id: "LND_066",
        text: "A software company’s HR administers HR systems training for a new CRM rollout, but adoption stalls at 40% after three months. Usage logs show errors cluster in one team. What’s the best administration tweak?",
        options: [
            "Delivering team-specific refresher sessions",
            "Analyzing error logs to target training gaps",
            "Mandating completion with compliance checks",
            "Providing a user manual for self-help"
        ],
        correctAnswer: "Analyzing error logs to target training gaps",
        explanation: "Error log analysis identifies precise skill deficits, enabling tailored training—a data-driven approach grounded in systems thinking. Refreshers assume prior training failed, mandates enforce without fixing, and manuals lack engagement."
    },
    {
        id: "LND_067",
        text: "A retail chain’s succession planning flags turnover in store manager roles at 25% annually. HR must inform a strategy shift. What’s the most impactful data to present?",
        options: [
            "Turnover trends by region over five years",
            "Skills gap analysis of current managers",
            "Exit survey data on job dissatisfaction",
            "Performance ratings of departing managers"
        ],
        correctAnswer: "Exit survey data on job dissatisfaction",
        explanation: "Exit surveys reveal why managers leave, offering actionable insights for retention strategies—a critical input for succession planning. Trends contextualize, skills gaps focus on replacements, and ratings miss motivational factors."
    },
    {
        id: "LND_068",
        text: "A consulting firm’s management training yields mixed results: some teams excel, others stagnate. HR finds no pattern in demographics or tenure. What’s the best evaluation method?",
        options: [
            "Correlating training with team performance metrics",
            "Conducting a trainer effectiveness review",
            "Assessing participant engagement levels",
            "Benchmarking against competitor programs"
        ],
        correctAnswer: "Correlating training with team performance metrics",
        explanation: "Performance correlation isolates training’s impact on outcomes, a rigorous Level 4 Kirkpatrick evaluation—key for pinpointing variability. Trainer reviews and engagement are inputs, benchmarking lacks specificity."
    },
    {
        id: "LND_069",
        text: "A logistics firm launches a career pathing program, but senior drivers report it feels disconnected from their roles after a decade on the job. Participation dips. What’s the best HR intervention?",
        options: [
            "Offering lateral move options in training",
            "Redesigning pathing with veteran input",
            "Pairing drivers with mentors for guidance",
            "Highlighting retirement planning benefits"
        ],
        correctAnswer: "Redesigning pathing with veteran input",
        explanation: "Veteran input ensures relevance and buy-in, leveraging andragogy’s self-direction principle—a root fix. Lateral moves help, mentors guide, and retirement shifts focus away from current roles."
    },
    {
        id: "LND_070",
        text: "A bank’s compliance training for a new regulation passes 95% of staff, but audits reveal persistent errors in transaction reporting. HR must refine the program. What’s the most strategic step?",
        options: [
            "Adding practical simulations to training",
            "Reviewing audit errors to adjust content",
            "Increasing training frequency for all",
            "Tracking individual completion rates"
        ],
        correctAnswer: "Reviewing audit errors to adjust content",
        explanation: "Audit error analysis targets specific compliance gaps, refining training with precision—a data-informed approach rooted in continuous improvement. Simulations enhance, frequency burdens, and tracking misses the why."
    }
]
]
]
    // Add more learning and development questions
];

export default questions;
