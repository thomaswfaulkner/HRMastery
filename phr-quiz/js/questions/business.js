// business.js
const questions = [
    {
        id: "BUS_001",
        text: "A tech company's employee survey shows 30% disengagement after a major restructuring. HR analyzes the data to guide strategy. What's the most effective approach?",
        options: [
            "Share survey response trends",
            "Apply change management metrics to identify resistance patterns",
            "Present productivity statistics",
            "Review departmental satisfaction scores"
        ],
        correctAnswer: "Apply change management metrics to identify resistance patterns",
        explanation: "Change management metrics provide systemic insight into resistance patterns, enabling strategic intervention. Trends describe tactically, productivity shifts focus, and satisfaction scores provide limited departmental view."
    },
    {
        id: "BUS_002",
        text: "A retail firm's HR metrics show high turnover costs despite competitive pay. HR must analyze retention drivers. What's the most strategic data contribution?",
        options: [
            "Present turnover rate trends",
            "Correlate engagement factors with retention outcomes",
            "Share exit interview themes",
            "Compare industry salary data"
        ],
        correctAnswer: "Correlate engagement factors with retention outcomes",
        explanation: "Correlating engagement with retention provides systemic insight into turnover causes. Trends describe tactically, themes summarize partially, and salary data focuses narrowly on compensation."
    },
    {
        id: "BUS_003",
        text: "An organization's HRIS implementation exceeds budget by 20%. HR must analyze ROI for stakeholders. What's the most rigorous approach?",
        options: [
            "Show cost variance reports",
            "Apply Phillips' ROI Methodology to quantify system benefits",
            "Present user adoption rates",
            "Share efficiency metrics"
        ],
        correctAnswer: "Apply Phillips' ROI Methodology to quantify system benefits",
        explanation: "Phillips' ROI Methodology systematically evaluates both tangible and intangible benefits, providing comprehensive value analysis. Cost reports describe tactically, adoption rates focus partially, and efficiency metrics limit scope."
    },
    {
        id: "BUS_004",
        text: "A company's strategic plan targets 15% growth but HR metrics indicate capability gaps. What's the most effective analytical contribution?",
        options: [
            "Present headcount projections",
            "Model capability requirements against development timelines",
            "Share training completion rates",
            "Review recruitment metrics"
        ],
        correctAnswer: "Model capability requirements against development timelines",
        explanation: "Modeling capabilities against timelines provides systemic insight for strategic planning. Projections describe tactically, completion rates focus narrowly, and recruitment metrics shift focus from development needs."
    },
    {
        id: "BUS_005",
        text: "A merger's HR integration shows declining engagement despite communication efforts. What's the most strategic analytical approach?",
        options: [
            "Track communication metrics",
            "Apply cultural assessment tools to identify integration barriers",
            "Share productivity data",
            "Review turnover statistics"
        ],
        correctAnswer: "Apply cultural assessment tools to identify integration barriers",
        explanation: "Cultural assessment tools provide systemic insight into integration challenges, enabling strategic intervention. Metrics track tactically, productivity data shifts focus, and turnover reacts to symptoms."
    },
    {
    "id": "BUS_011",
    "text": "HR professionals play a role in risk acceptance by:",
    "options": [
        "Ignoring risks that are unlikely to happen",
        "Ensuring leadership is aware of and prepared for risks",
        "Eliminating all workplace hazards",
        "Terminating employees who report potential risks"
    ],
    "correctAnswer": "Ensuring leadership is aware of and prepared for risks",
    "explanation": "HR must facilitate risk awareness and mitigation strategies within leadership to maintain organizational stability. Ignoring risks (A) is negligent, eliminating all hazards (C) is impractical, and terminating employees for reporting risks (D) violates ethical and legal standards."
},
{
    "id": "BUS_012",
    "text": "Why is hiring and diversity statistics auditing important?",
    "options": [
        "It helps an organization track diversity and minimize discrimination claims",
        "It ensures that employees are paid the same salary",
        "It allows HR to create new job roles based on employee feedback",
        "It determines which employees are eligible for promotions"
    ],
    "correctAnswer": "It helps an organization track diversity and minimize discrimination claims",
    "explanation": "Auditing hiring and diversity statistics enables organizations to measure equity in recruitment and mitigate legal risks. Salary equity (B) is part of compensation audits, job role creation (C) is separate, and promotion eligibility (D) is performance-based."
},
{
    "id": "BUS_013",
    "text": "What is the primary purpose of a Form I-9 audit?",
    "options": [
        "To ensure employees have completed performance reviews",
        "To verify employment eligibility and compliance with immigration laws",
        "To assess compliance with OSHA safety regulations",
        "To monitor employee attendance patterns"
    ],
    "correctAnswer": "To verify employment eligibility and compliance with immigration laws",
    "explanation": "A Form I-9 audit ensures that employees are legally authorized to work in the U.S. Performance reviews (A) and attendance monitoring (D) relate to performance management, while OSHA compliance (C) pertains to workplace safety, not employment eligibility."
},
{
    "id": "BUS_014",
    "text": "How can HR reduce the risk of biased hiring practices?",
    "options": [
        "By using a single recruiting source for all job postings",
        "By focusing on internal referrals only",
        "By ensuring diverse recruiting sources are used",
        "By eliminating job descriptions"
    ],
    "correctAnswer": "By ensuring diverse recruiting sources are used",
    "explanation": "Using varied recruitment channels helps create an inclusive hiring process. Relying on a single source (A) or internal referrals (B) limits diversity. Eliminating job descriptions (D) removes clarity and structure in hiring."
},
{
    "id": "BUS_015",
    "text": "Why is harassment claim management an important part of HR audits?",
    "options": [
        "It ensures compliance with state and federal laws and helps create a respectful workplace",
        "It reduces employee engagement initiatives",
        "It eliminates the need for HR training programs",
        "It prevents employees from filing complaints"
    ],
    "correctAnswer": "It ensures compliance with state and federal laws and helps create a respectful workplace",
    "explanation": "Managing harassment claims ensures compliance with legal regulations and promotes a safe workplace. Reducing engagement (B) is counterproductive, eliminating HR training (C) weakens prevention, and preventing complaints (D) suppresses employee rights."
},
{
    "id": "BUS_016",
    "text": "What is the main goal of a policy and procedure audit?",
    "options": [
        "To verify that company policies align with federal and state laws",
        "To assess the quality of employee benefits packages",
        "To evaluate employee work performance",
        "To determine hiring trends in the organization"
    ],
    "correctAnswer": "To verify that company policies align with federal and state laws",
    "explanation": "Policy and procedure audits ensure company guidelines comply with legal requirements. Assessing benefits (B) pertains to compensation analysis, evaluating performance (C) falls under employee reviews, and hiring trends (D) are tracked in recruitment metrics."
},
{
    "id": "BUS_017",
    "text": "What does a leave and accommodation audit focus on?",
    "options": [
        "Ensuring compliance with laws like the Family Medical Leave Act (FMLA)",
        "Verifying the correct payroll deductions for employee benefits",
        "Reviewing employee attendance records for disciplinary actions",
        "Determining salary increases based on tenure"
    ],
    "correctAnswer": "Ensuring compliance with laws like the Family Medical Leave Act (FMLA)",
    "explanation": "A leave and accommodation audit ensures that workplace leave policies adhere to laws like FMLA. Payroll deductions (B) relate to compensation compliance, attendance records (C) pertain to disciplinary policies, and salary increases (D) fall under compensation planning."
},
{
    "id": "BUS_018",
    "text": "Which of the following is an advantage of using internal HR resources for audits?",
    "options": [
        "Greater objectivity and impartiality",
        "Lower cost and familiarity with the organization’s culture",
        "Increased expertise in industry best practices",
        "More stringent compliance with legal standards"
    ],
    "correctAnswer": "Lower cost and familiarity with the organization’s culture",
    "explanation": "Internal HR audits are cost-effective and leverage existing knowledge of company policies. External audits (A) provide more objectivity, while third-party experts (C) often bring best practices, and compliance (D) depends on the audit’s thoroughness rather than its source."
},
{
    "id": "BUS_019",
    "text": "Which risk management technique involves transferring risk to another party, such as through insurance?",
    "options": [
        "Accept",
        "Mitigate",
        "Transfer",
        "Avoid"
    ],
    "correctAnswer": "Transfer",
    "explanation": "Transferring risk shifts liability to another party, such as insurers or contractors. Accepting risk (A) involves tolerating potential issues, mitigating risk (B) seeks to reduce impact, and avoiding risk (D) eliminates exposure altogether."
},
{
    "id": "BUS_020",
    "text": "Which risk management approach involves eliminating the possibility of a risk occurring?",
    "options": [
        "Accept",
        "Transfer",
        "Avoid",
        "Mitigate"
    ],
    "correctAnswer": "Avoid",
    "explanation": "Avoiding risk removes exposure by eliminating high-risk processes or decisions. Accepting risk (A) acknowledges and tolerates it, transferring risk (B) shifts responsibility elsewhere, and mitigating risk (D) reduces its likelihood or impact."
},
{
    "id": "BUS_021",
    "text": "What is the primary purpose of Enterprise Risk Management (ERM)?",
    "options": [
        "To eliminate all risks in an organization",
        "To forecast potential risks and take steps to mitigate their impact",
        "To transfer all risks to external insurance providers",
        "To focus only on compliance with labor laws"
    ],
    "correctAnswer": "To forecast potential risks and take steps to mitigate their impact",
    "explanation": "ERM focuses on identifying and addressing potential risks to minimize their impact on an organization. Eliminating all risks (A) is unrealistic, transferring risks (C) is just one component, and labor law compliance (D) is a subset of ERM."
},
{
    "id": "BUS_022",
    "text": "What is the first step HR should take in identifying workplace risks?",
    "options": [
        "Implementing risk avoidance strategies",
        "Conducting an HR audit",
        "Hiring an external consultant",
        "Filing a report with government agencies"
    ],
    "correctAnswer": "Conducting an HR audit",
    "explanation": "An HR audit identifies workplace risks by evaluating policies, compliance, and potential vulnerabilities. Implementing strategies (A) comes after identification, hiring a consultant (C) is optional, and filing reports (D) is necessary only when violations occur."
},
{
    "id": "BUS_023",
    "text": "Which type of HR audit evaluates compliance with employment laws and regulations?",
    "options": [
        "Policy and procedure audit",
        "Cybersecurity audit",
        "Compliance audit",
        "Training audit"
    ],
    "correctAnswer": "Compliance audit",
    "explanation": "A compliance audit ensures HR policies adhere to employment laws and regulations. Policy audits (A) focus on internal guidelines, cybersecurity audits (B) assess data security, and training audits (D) evaluate employee development programs."
},
{
    "id": "BUS_024",
    "text": "A workers' compensation class audit ensures that:",
    "options": [
        "Employee salaries are aligned with market rates",
        "Employees are properly classified based on their job risks",
        "Payroll taxes are correctly calculated",
        "Employees receive equal benefits"
    ],
    "correctAnswer": "Employees are properly classified based on their job risks",
    "explanation": "Workers' compensation audits verify that employees are classified correctly according to their job-related risks. Salary alignment (A) relates to compensation analysis, payroll tax calculations (C) involve financial audits, and equal benefits (D) fall under compensation policy."
},
{
    "id": "BUS_025",
    "text": "What is the primary focus of a cybersecurity audit in HR?",
    "options": [
        "Evaluating employee satisfaction with IT services",
        "Ensuring HR policies comply with local labor laws",
        "Identifying vulnerabilities in digital HR systems and protecting sensitive data",
        "Reviewing compensation plans for IT employees"
    ],
    "correctAnswer": "Identifying vulnerabilities in digital HR systems and protecting sensitive data",
    "explanation": "Cybersecurity audits assess the security of HR data and systems to prevent breaches. Employee satisfaction (A) focuses on service perception, labor law compliance (B) is a legal matter, and IT compensation plans (D) are unrelated to cybersecurity."
},
{
    "id": "BUS_026",
    "text": "How do market trends affect HR strategies?",
    "options": [
        "They have no impact on HR as market trends only affect sales",
        "They require HR professionals to adapt talent acquisition, retention, and development strategies",
        "They only affect external business functions such as marketing and sales",
        "They reduce the need for HR professionals to focus on employee engagement"
    ],
    "correctAnswer": "They require HR professionals to adapt talent acquisition, retention, and development strategies",
    "explanation": "Market trends influence workforce planning by shaping recruitment, retention, and training initiatives. Ignoring trends (A) overlooks HR's strategic role, limiting focus to external functions (C) is incorrect, and reducing employee engagement (D) contradicts workforce sustainability."
},
{
    "id": "BUS_027",
    "text": "What is the primary purpose of HR professionals in addressing workforce challenges?",
    "options": [
        "To ensure employees comply with company policies",
        "To maintain diversity, equity, and inclusion while fostering a positive work environment",
        "To maximize corporate profits by reducing employee salaries",
        "To eliminate the need for training and development"
    ],
    "correctAnswer": "To maintain diversity, equity, and inclusion while fostering a positive work environment",
    "explanation": "HR plays a vital role in promoting diversity, equity, and inclusion to enhance workplace culture and productivity. Focusing only on policy compliance (A) is restrictive, cutting salaries (C) harms retention, and eliminating training (D) weakens workforce competency."
},
{
    "id": "BUS_028",
    "text": "Who are considered stakeholders in an organization?",
    "options": [
        "Only employees and managers",
        "Customers, employees, regulatory bodies, and shareholders",
        "Only shareholders and business executives",
        "Vendors and suppliers exclusively"
    ],
    "correctAnswer": "Customers, employees, regulatory bodies, and shareholders",
    "explanation": "Stakeholders include anyone impacted by the organization's actions, including employees, customers, regulatory agencies, and investors. Limiting stakeholders to employees and managers (A) or only executives (C) is too narrow, and vendors alone (D) do not encompass all affected parties."
},
{
    "id": "BUS_029",
    "text": "Why is an organizational chart important for a business?",
    "options": [
        "It determines employee salaries and benefits",
        "It visually represents relationships, authority, and reporting structures within an organization",
        "It eliminates the need for strategic HR management",
        "It focuses exclusively on external stakeholder relations"
    ],
    "correctAnswer": "It visually represents relationships, authority, and reporting structures within an organization",
    "explanation": "An organizational chart clarifies hierarchy and reporting relationships to improve communication and efficiency. Salary determination (A) falls under compensation policies, eliminating HR strategy (C) is incorrect, and external relations (D) are not its primary function."
},
{
    "id": "BUS_030",
    "text": "How does company culture impact stakeholders?",
    "options": [
        "It has no measurable effect on business outcomes",
        "It influences customer loyalty, employee morale, and investor confidence",
        "It only affects employees and does not extend to other stakeholders",
        "It is solely the responsibility of the HR department and does not involve leadership"
    ],
    "correctAnswer": "It influences customer loyalty, employee morale, and investor confidence",
    "explanation": "Company culture shapes brand perception, employee engagement, and stakeholder trust. Stating it has no impact (A) ignores research on culture-driven performance, limiting its influence to employees (C) is incorrect, and excluding leadership (D) is unrealistic."
},
{
    "id": "BUS_031",
    "text": "What is a key function of HR in the business environment?",
    "options": [
        "Controlling all financial decisions of a company",
        "Ensuring businesses have the right talent, skills, and organizational culture to thrive",
        "Replacing technology with manual HR processes",
        "Avoiding compliance with employment laws and workplace regulations"
    ],
    "correctAnswer": "Ensuring businesses have the right talent, skills, and organizational culture to thrive",
    "explanation": "HR plays a strategic role in workforce planning, talent acquisition, and culture-building to drive business success. Controlling finances (A) is a finance function, removing technology (C) is regressive, and avoiding compliance (D) exposes businesses to legal risks."
},
{
    "id": "BUS_032",
    "text": "What is the primary role of a business in an economy?",
    "options": [
        "To provide employment opportunities",
        "To generate profit and sustain growth",
        "To regulate market competition",
        "To ensure compliance with labor laws"
    ],
    "correctAnswer": "To generate profit and sustain growth",
    "explanation": "The primary function of a business is to generate profit and ensure sustainable growth. Providing employment (A) is a result of business operations, regulating competition (C) is a government function, and compliance (D) is a legal requirement, not a core business purpose."
},
{
    "id": "BUS_033",
    "text": "How do services differ from goods in a business environment?",
    "options": [
        "Services are tangible and can be inventoried",
        "Goods are intangible and consumed at the point of delivery",
        "Services require direct interaction between providers and consumers",
        "Goods are always customized to individual preferences"
    ],
    "correctAnswer": "Services require direct interaction between providers and consumers",
    "explanation": "Services are intangible and typically require interaction between provider and consumer. Goods (A) are physical items, goods (B) are tangible and not consumed at delivery, and customization (D) varies based on business strategy rather than being a defining feature."
},
{
    "id": "BUS_034",
    "text": "Which of the following is NOT a factor influencing the commercial landscape?",
    "options": [
        "Economic indicators",
        "Employee preferences",
        "Sociopolitical factors",
        "Market trends"
    ],
    "correctAnswer": "Employee preferences",
    "explanation": "While employee preferences affect internal policies, they do not shape the broader commercial landscape like economic indicators (A), sociopolitical factors (C), and market trends (D), which directly influence business operations."
},
{
    "id": "BUS_035",
    "text": "Which of the following is an example of an economic indicator?",
    "options": [
        "Employee turnover rate",
        "Unemployment rate",
        "Organizational chart structure",
        "Training and development budgets"
    ],
    "correctAnswer": "Unemployment rate",
    "explanation": "Economic indicators measure overall economic health, with the unemployment rate being a key metric. Turnover rate (A) pertains to internal HR, organizational structure (C) is an operational tool, and training budgets (D) relate to workforce development."
},
{
    "id": "BUS_036",
    "text": "How does HR technology improve business operations?",
    "options": [
        "By eliminating the need for human involvement in decision-making",
        "By automating administrative tasks and optimizing talent management",
        "By enforcing strict regulations without human oversight",
        "By reducing the importance of employee engagement"
    ],
    "correctAnswer": "By automating administrative tasks and optimizing talent management",
    "explanation": "HR technology streamlines processes and enhances efficiency. Eliminating human decision-making (A) is impractical, enforcing regulations without oversight (C) is risky, and reducing engagement (D) contradicts HR’s role in workforce management."
},
{
    "id": "BUS_037",
    "text": "Which of the following best describes sociopolitical factors in business?",
    "options": [
        "Economic trends influencing market growth",
        "The combination of social and political influences affecting workforce dynamics",
        "Advances in artificial intelligence and data analytics",
        "The financial health of an organization"
    ],
    "correctAnswer": "The combination of social and political influences affecting workforce dynamics",
    "explanation": "Sociopolitical factors include legislation, cultural shifts, and political climate impacting workforce dynamics. Economic trends (A) focus on financial growth, AI advancements (C) relate to technology, and financial health (D) measures company stability."
},
{
    "id": "BUS_038",
    "text": "How does the Matrix Structure differ from the Functional Structure?",
    "options": [
        "It consolidates administrative functions into a centralized center",
        "It involves both functional and project-based reporting lines",
        "It eliminates the need for HR specialization",
        "It focuses solely on transactional HR activities"
    ],
    "correctAnswer": "It involves both functional and project-based reporting lines",
    "explanation": "The Matrix Structure allows employees to report to both functional and project-based managers, increasing flexibility. Centralizing administration (A) describes a shared services model, eliminating HR specialization (C) is incorrect, and focusing solely on transactions (D) misrepresents the matrix structure."
},
{
    "id": "BUS_039",
    "text": "What is the main purpose of a Shared Services Model in HR?",
    "options": [
        "To develop best practices in HR functions",
        "To streamline transactional HR processes like payroll and benefits administration",
        "To provide direct reports to senior leadership",
        "To manage employee relations and engagement exclusively"
    ],
    "correctAnswer": "To streamline transactional HR processes like payroll and benefits administration",
    "explanation": "A Shared Services Model centralizes and standardizes administrative HR functions for efficiency. Developing best practices (A) is a function of a Center of Excellence, direct reporting (C) relates to organizational hierarchy, and employee relations (D) is a separate HR function."
},
{
    "id": "BUS_040",
    "text": "A Center of Excellence (COE) in HR is best described as:",
    "options": [
        "A central office for handling employee grievances",
        "A team that develops best practices and policies for specific HR functions",
        "A general HR department responsible for all HR services",
        "A facility for training new hires exclusively"
    ],
    "correctAnswer": "A team that develops best practices and policies for specific HR functions",
    "explanation": "COEs are specialized HR units focused on innovating and refining best practices. Handling grievances (A) falls under employee relations, general HR services (C) are broader, and training (D) is just one HR function, not the core purpose of a COE."
},
{
    "id": "BUS_041",
    "text": "Which of the following is a key factor that influences HR service delivery?",
    "options": [
        "The personal preferences of HR managers",
        "The size of the company's product line",
        "The organization's position in the business lifecycle (infancy, growth, maturity, or decline)",
        "The color scheme of the HR office"
    ],
    "correctAnswer": "The organization's position in the business lifecycle (infancy, growth, maturity, or decline)",
    "explanation": "HR service delivery must align with the organization's stage of development. Managerial preferences (A) do not define strategy, product lines (B) are market-driven, and office aesthetics (D) do not influence HR strategy."
},
{
    "id": "BUS_042",
    "text": "What is the purpose of a contingency and miscellaneous expense allocation in an HR budget?",
    "options": [
        "To fund workplace diversity initiatives",
        "To cover unforeseen HR-related expenses and emergencies",
        "To provide additional compensation for HR managers",
        "To expand employee benefits packages"
    ],
    "correctAnswer": "To cover unforeseen HR-related expenses and emergencies",
    "explanation": "Contingency funds prepare HR for unexpected costs such as legal issues, compliance changes, or emergency hires. Diversity initiatives (A) require separate funding, additional HR compensation (C) is unrelated, and benefit expansions (D) follow a structured review process."
},
{
    "id": "BUS_043",
    "text": "Which HR function focuses on succession planning and talent management?",
    "options": [
        "Recruitment and Hiring",
        "Employee Relations",
        "Training and Development",
        "Strategic Planning"
    ],
    "correctAnswer": "Strategic Planning",
    "explanation": "Strategic Planning ensures long-term workforce sustainability through leadership development and succession planning. Recruitment (A) focuses on immediate hiring needs, Employee Relations (B) manages workplace dynamics, and Training (C) supports skills development."
},
{
    "id": "BUS_044",
    "text": "Which of the following is NOT typically included in an operational HR budget?",
    "options": [
        "Salaries and benefits for HR staff",
        "Marketing expenses for new product launches",
        "Recruitment and hiring expenses",
        "Compliance and legal costs"
    ],
    "correctAnswer": "Marketing expenses for new product launches",
    "explanation": "Operational HR budgets focus on workforce-related expenses such as salaries, hiring, and compliance. Marketing costs (B) relate to product promotion and are not managed by HR."
},
{
    "id": "BUS_045",
    "text": "What does the labor cost component of an HR budget include?",
    "options": [
        "Salaries, wages, bonuses, and benefits for HR staff",
        "Costs associated with legal consultations",
        "Budget allocation for training programs",
        "Contingency funds for emergencies"
    ],
    "correctAnswer": "Salaries, wages, bonuses, and benefits for HR staff",
    "explanation": "Labor costs cover direct employee compensation, including wages, salaries, and benefits. Legal costs (B), training budgets (C), and contingency funds (D) are separate HR budget allocations."
},
{
    "id": "BUS_046",
    "text": "Which of the following expenses would fall under the recruitment and hiring budget?",
    "options": [
        "Employee assistance programs",
        "Background checks and pre-employment assessments",
        "Performance management initiatives",
        "Employee wellness programs"
    ],
    "correctAnswer": "Background checks and pre-employment assessments",
    "explanation": "Recruitment budgets include expenses related to sourcing and evaluating candidates. Employee assistance (A) and wellness programs (D) focus on employee well-being, while performance management (C) is part of ongoing workforce development."
},
{
    "id": "BUS_047",
    "text": "Why is compliance and legal cost allocation important in an HR budget?",
    "options": [
        "To cover recruitment marketing campaigns",
        "To ensure adherence to labor laws and workplace safety regulations",
        "To fund employee engagement initiatives",
        "To support leadership development programs"
    ],
    "correctAnswer": "To ensure adherence to labor laws and workplace safety regulations",
    "explanation": "Legal compliance budgets ensure organizations meet labor laws and regulatory requirements. Recruitment marketing (A) and leadership development (D) serve different purposes, while engagement initiatives (C) focus on workplace culture."
},
{
    "id": "BUS_048",
    "text": "Which of the following HR functions is primarily responsible for onboarding new employees?",
    "options": [
        "Compensation and Benefits",
        "Employee Relations",
        "Talent Acquisition",
        "Strategic Planning"
    ],
    "correctAnswer": "Talent Acquisition",
    "explanation": "Talent Acquisition manages onboarding to integrate new hires into the organization. Compensation and Benefits (A) focus on pay structures, Employee Relations (B) manages workplace interactions, and Strategic Planning (D) is a long-term workforce initiative."
},
{
    "id": "BUS_049",
    "text": "Which HR structure is characterized by HR functions being grouped based on specialized areas such as recruitment, training, and compensation?",
    "options": [
        "Functional Structure",
        "Matrix Structure",
        "Shared Services Model",
        "Centers of Excellence"
    ],
    "correctAnswer": "Functional Structure",
    "explanation": "A Functional Structure organizes HR into specialized teams handling distinct functions. The Matrix Structure (B) blends functional and project reporting, Shared Services (C) centralizes operations, and Centers of Excellence (D) focus on best practices."
}
];

export default questions;
