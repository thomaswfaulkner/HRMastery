// engagement.js
const questions = [
    {
        id: "ENG_001",
        text: "A manufacturing firm's engagement survey shows 40% decline after implementing new shift schedules. HR must analyze impact. What's the most effective approach?",
        options: [
            "Present attendance trends",
            "Analyze work-life factors using engagement drivers framework",
            "Share productivity metrics",
            "Review overtime patterns"
        ],
        correctAnswer: "Analyze work-life factors using engagement drivers framework",
        explanation: "Using an engagement drivers framework provides systemic insight into how schedule changes affect multiple work-life dimensions. Attendance trends describe tactically, productivity shifts focus, and overtime patterns address only time factors."
    },
    {
        id: "ENG_002",
        text: "A tech company's pulse surveys reveal declining team cohesion in remote work. HR needs to analyze intervention points. What's the best analytical method?",
        options: [
            "Track collaboration tool usage",
            "Apply social network analysis to identify communication patterns",
            "Share meeting attendance data",
            "Review project completion rates"
        ],
        correctAnswer: "Apply social network analysis to identify communication patterns",
        explanation: "Social network analysis systematically maps communication patterns and gaps, enabling targeted interventions. Tool usage tracks tactically, attendance data informs partially, and completion rates miss team dynamics."
    },
    {
        id: "ENG_003",
        text: "An organization's recognition program shows uneven participation across departments despite consistent funding. What's the most rigorous analytical approach?",
        options: [
            "Present participation rates",
            "Correlate recognition patterns with cultural indicators",
            "Share budget utilization data",
            "Review award distributions"
        ],
        correctAnswer: "Correlate recognition patterns with cultural indicators",
        explanation: "Correlating recognition with cultural indicators provides systemic insight into departmental variations. Rates describe tactically, budget data focuses narrowly, and distributions show symptoms without causes."
    },
    {
        id: "ENG_004",
        text: "A retail chain's engagement metrics drop in high-performing stores. HR must analyze the disconnect. What's the most strategic contribution?",
        options: [
            "Track performance trends",
            "Model engagement-performance relationship factors",
            "Share customer satisfaction scores",
            "Review management feedback"
        ],
        correctAnswer: "Model engagement-performance relationship factors",
        explanation: "Modeling engagement-performance factors reveals systemic relationships and potential burnout risks. Trends describe tactically, satisfaction scores shift focus, and feedback provides limited perspective."
    },
    {
        id: "ENG_005",
        text: "A healthcare provider's employee voice channels show declining participation despite increased communications. What's the best analytical approach?",
        options: [
            "Present feedback submission rates",
            "Analyze psychological safety indicators across units",
            "Share communication metrics",
            "Review issue resolution times"
        ],
        correctAnswer: "Analyze psychological safety indicators across units",
        explanation: "Analyzing psychological safety indicators systematically evaluates trust and voice barriers. Submission rates describe tactically, communication metrics focus narrowly, and resolution times address symptoms."
    },
    {
        id: "ENG_006",
        text: "A company's wellness program data shows 35% participation but minimal health cost impact. HR must evaluate effectiveness. What's the most effective approach?",
        options: [
            "Track participation trends",
            "Apply holistic wellness metrics to assess behavior change",
            "Share cost savings data",
            "Review program satisfaction scores"
        ],
        correctAnswer: "Apply holistic wellness metrics to assess behavior change",
        explanation: "Holistic wellness metrics provide systemic insight into actual behavior change and program impact. Trends describe tactically, cost data focuses narrowly, and satisfaction scores miss behavioral outcomes."
    },
    {
        id: "ENG_007",
        text: "A firm's mentoring program shows inconsistent impact on engagement metrics. HR needs to analyze effectiveness. What's the best analytical method?",
        options: [
            "Present meeting frequency data",
            "Map relationship quality factors to engagement outcomes",
            "Share program completion rates",
            "Review participant feedback"
        ],
        correctAnswer: "Map relationship quality factors to engagement outcomes",
        explanation: "Mapping relationship factors to outcomes provides systemic insight into program effectiveness. Frequency data tracks tactically, completion rates shift focus, and feedback provides limited perspective."
    },
    {
    id: "ENG_011",
    text: "An HR team analyzes engagement survey data and finds that employees with high engagement scores tend to work in departments with strong mentorship programs. What should HR do next?",
    options: [
        "Expand mentorship programs across all departments to see if engagement improves",
        "Conduct exit interviews to understand why employees leave",
        "Offer higher salaries in departments with lower engagement",
        "Assume correlation means causation and attribute all engagement success to mentorship"
    ],
    correctAnswer: "Expand mentorship programs across all departments to see if engagement improves",
    explanation: "Using data to drive strategy is key. Expanding mentorship programs in a controlled manner allows HR to test whether they causally impact engagement."
},
{
    id: "ENG_012",
    text: "A company’s engagement survey reveals that employees want more work-life balance, but leadership is concerned about decreased productivity. What is the best solution?",
    options: [
        "Offer unlimited PTO with no tracking",
        "Pilot a hybrid work model and measure productivity changes",
        "Require employees to log every task they complete while working remotely",
        "Disregard work-life balance concerns to focus on business objectives"
    ],
    correctAnswer: "Pilot a hybrid work model and measure productivity changes",
    explanation: "Experimenting with flexible work models allows the organization to test effectiveness before full implementation."
},
{
    id: "ENG_013",
    text: "An employee joins a company expecting a collaborative, innovative environment based on recruitment messaging. However, they find the workplace to be hierarchical and rigid. What engagement risk does this situation illustrate?",
    options: [
        "Job dissatisfaction",
        "Psychological contract breach",
        "Compensation misalignment",
        "Poor onboarding process"
    ],
    correctAnswer: "Psychological contract breach",
    explanation: "When expectations set by the employer do not match reality, employees feel betrayed, leading to disengagement and turnover."
},
{
    id: "ENG_014",
    text: "A company wants to improve engagement through a peer-recognition program. However, participation is low. What is the most likely cause?",
    options: [
        "Employees do not value recognition",
        "Leadership has not set an example by participating",
        "The company does not offer monetary incentives for recognition",
        "Employees do not believe recognition improves engagement"
    ],
    correctAnswer: "Leadership has not set an example by participating",
    explanation: "Leadership participation is critical in shaping culture. Employees are more likely to engage if they see leaders actively recognizing others."
},
{
    id: "ENG_015",
    text: "A department has low engagement and high turnover, with employees citing lack of purpose in their work. What intervention would be most effective?",
    options: [
        "Implement job redesign to create more meaningful work",
        "Offer a one-time bonus to encourage engagement",
        "Increase weekly staff meetings to improve communication",
        "Replace the manager and hope engagement improves"
    ],
    correctAnswer: "Implement job redesign to create more meaningful work",
    explanation: "Employees want to see how their work contributes to a larger purpose. Job redesign can increase autonomy and meaning."
},
{
    id: "ENG_016",
    text: "An HR team wants to measure long-term engagement trends, not just short-term fluctuations. Which metric would provide the most valuable insight?",
    options: [
        "Daily employee mood surveys",
        "Annual engagement surveys with trend analysis",
        "The number of completed HR training sessions",
        "The frequency of all-hands meetings"
    ],
    correctAnswer: "Annual engagement surveys with trend analysis",
    explanation: "Engagement should be tracked over time to identify patterns and evaluate the impact of initiatives."
},
{
    id: "ENG_017",
    text: "Which HR strategy can help reduce the negative impact of layoffs and RIFs on remaining employees?",
    options: [
        "Increasing their workloads without communication",
        "Offering professional development opportunities and workload management",
        "Avoiding discussions about job security",
        "Withholding severance packages to save costs"
    ],
    correctAnswer: "Offering professional development opportunities and workload management",
    explanation: "Providing employees with development opportunities and managing workloads effectively helps mitigate stress and uncertainty, fostering resilience and engagement."
},
{
    id: "ENG_018",
    text: "What is a common emotional reaction among remaining employees after layoffs?",
    options: [
        "Increased trust in leadership",
        "Anxiety, stress, and decreased morale",
        "Stronger job satisfaction",
        "Indifference toward the organization"
    ],
    correctAnswer: "Anxiety, stress, and decreased morale",
    explanation: "Layoffs often create uncertainty, leading to anxiety, reduced morale, and decreased engagement among remaining employees."
},
{
    id: "ENG_019",
    text: "How can layoffs and RIFs affect team dynamics?",
    options: [
        "They strengthen trust between employees and management",
        "They can create a sense of loss and disrupt collaboration",
        "They have no impact on engagement levels",
        "They always lead to higher productivity"
    ],
    correctAnswer: "They can create a sense of loss and disrupt collaboration",
    explanation: "Layoffs can disrupt team cohesion, create uncertainty, and negatively impact workplace relationships and productivity."
},
{
    id: "ENG_020",
    text: "What is one long-term risk of layoffs and RIFs if not handled properly?",
    options: [
        "Increased employee engagement",
        "Reduced employee turnover",
        "Decline in trust, leading to lower productivity and retention",
        "Higher organizational profitability"
    ],
    correctAnswer: "Decline in trust, leading to lower productivity and retention",
    explanation: "Mishandled layoffs can erode trust, leading to disengagement, higher turnover, and long-term cultural damage."
},
{
    id: "ENG_021",
    text: "What action can HR take to support employees affected by a RIF?",
    options: [
        "Provide emotional support and career transition services",
        "Increase the remaining employees' workload without communication",
        "Avoid discussing the reasons for job eliminations",
        "Ignore employee concerns about job security"
    ],
    correctAnswer: "Provide emotional support and career transition services",
    explanation: "HR should provide outplacement services, counseling, and support to help employees transition and reduce the emotional toll of job loss."
},
{
    id: "ENG_022",
    text: "Why is transparent communication important during layoffs?",
    options: [
        "It increases job security for all employees",
        "It helps build trust and reduce uncertainty among remaining employees",
        "It eliminates the need for severance packages",
        "It guarantees employees will not leave the company"
    ],
    correctAnswer: "It helps build trust and reduce uncertainty among remaining employees",
    explanation: "Open communication reassures employees, clarifies business decisions, and fosters trust, reducing speculation and fear."
},
{
    id: "ENG_023",
    text: "What best practice can HR implement to help remaining employees after layoffs?",
    options: [
        "Ignore employee concerns to prevent panic",
        "Offer counseling and engagement initiatives to rebuild morale",
        "Avoid discussing job eliminations to move forward faster",
        "Terminate more employees to balance workload"
    ],
    correctAnswer: "Offer counseling and engagement initiatives to rebuild morale",
    explanation: "Providing emotional support and engagement initiatives helps employees recover, rebuild morale, and remain productive after layoffs."
},
{
    id: "ENG_024",
    text: "What is a major benefit of structured performance reviews?",
    options: [
        "They allow managers to discipline employees more easily",
        "They offer structured feedback and career development opportunities",
        "They replace the need for informal feedback and coaching",
        "They serve as a tool to justify involuntary terminations"
    ],
    correctAnswer: "They offer structured feedback and career development opportunities",
    explanation: "Performance reviews provide employees with formal feedback, clear career development paths, and performance expectations, fostering growth and engagement."
},
{
    id: "ENG_025",
    text: "How does a clear promotion path influence employee engagement?",
    options: [
        "It reduces the need for performance evaluations",
        "It provides employees with clear growth opportunities, reducing turnover",
        "It ensures employees remain in the same role for longer periods",
        "It eliminates the need for skill development programs"
    ],
    correctAnswer: "It provides employees with clear growth opportunities, reducing turnover",
    explanation: "A transparent promotion path enhances motivation and retention by giving employees a sense of progress and achievement."
},
{
    id: "ENG_026",
    text: "What is a best practice for employee recognition programs?",
    options: [
        "Making rewards generic and uniform for all employees",
        "Personalizing recognition based on individual achievements and preferences",
        "Using recognition solely as a disciplinary tool",
        "Only recognizing employees who reach senior leadership positions"
    ],
    correctAnswer: "Personalizing recognition based on individual achievements and preferences",
    explanation: "Recognition is most effective when tailored to employees' accomplishments and preferences, reinforcing positive behavior and engagement."
},
{
    id: "ENG_027",
    text: "Which performance improvement strategy involves structured plans with clear goals and timelines?",
    options: [
        "Job redesign",
        "Performance Improvement Plans (PIPs)",
        "Positive discipline",
        "Coaching"
    ],
    correctAnswer: "Performance Improvement Plans (PIPs)",
    explanation: "PIPs outline specific performance deficiencies, set measurable goals, and provide employees with a structured improvement timeline."
},
{
    id: "ENG_028",
    text: "How does coaching contribute to employee engagement?",
    options: [
        "By focusing only on disciplinary actions",
        "By offering personalized guidance and support for skill development",
        "By eliminating the need for performance improvement programs",
        "By enforcing strict performance benchmarks"
    ],
    correctAnswer: "By offering personalized guidance and support for skill development",
    explanation: "Coaching enhances engagement by providing employees with individualized support, skill development, and opportunities for growth."
},
{
    id: "ENG_029",
    text: "What is the primary goal of progressive discipline?",
    options: [
        "To create a high-turnover workplace",
        "To provide employees with opportunities to correct behavior before termination",
        "To immediately terminate underperforming employees",
        "To replace informal feedback with strict punishment"
    ],
    correctAnswer: "To provide employees with opportunities to correct behavior before termination",
    explanation: "Progressive discipline allows employees to improve performance or behavior before facing termination, promoting fairness and accountability."
},
{
    id: "ENG_030",
    text: "What is constructive discharge?",
    options: [
        "When an employee voluntarily resigns without notice",
        "When an employee is dismissed for violating company policies",
        "When an employee resigns due to an intolerable work environment created by the employer",
        "When an employer offers a severance package to an underperforming employee"
    ],
    correctAnswer: "When an employee resigns due to an intolerable work environment created by the employer",
    explanation: "Constructive discharge occurs when working conditions become so unbearable that an employee is forced to resign, leading to potential legal claims."
},
{
    id: "ENG_031",
    text: "How can employers minimize legal risks associated with involuntary terminations?",
    options: [
        "By ensuring clear and consistent performance management policies",
        "By implementing immediate terminations without prior warnings",
        "By avoiding employee feedback on performance-related matters",
        "By eliminating progressive discipline programs"
    ],
    correctAnswer: "By ensuring clear and consistent performance management policies",
    explanation: "A well-documented, consistent performance management approach reduces legal risks and ensures fair treatment in termination decisions."
},
{
    id: "ENG_032",
    text: "What is the primary reason organizations implement layoffs?",
    options: [
        "Employee performance issues",
        "Economic downturns, restructuring, or cost-cutting measures",
        "Employee requests for voluntary separation",
        "Lack of engagement among employees"
    ],
    correctAnswer: "Economic downturns, restructuring, or cost-cutting measures",
    explanation: "Layoffs are typically a result of economic conditions, company restructuring, or cost-saving efforts, rather than individual performance or voluntary separations."
},
{
    id: "ENG_033",
    text: "How does a Reduction in Force (RIF) differ from a layoff?",
    options: [
        "Layoffs are temporary, whereas RIFs permanently eliminate positions",
        "RIFs occur only in small businesses",
        "Layoffs result in immediate reemployment of workers in the same company",
        "RIFs are only used for seasonal employment reductions"
    ],
    correctAnswer: "Layoffs are temporary, whereas RIFs permanently eliminate positions",
    explanation: "A layoff is often temporary, with the possibility of recall, whereas a RIF permanently removes positions due to restructuring or downsizing."
},
{
    id: "ENG_034",
    text: "What is a common support service offered to employees affected by layoffs?",
    options: [
        "Automatic reinstatement after six months",
        "Outplacement assistance and career transition support",
        "Guaranteed job placement in another company",
        "Unlimited severance pay"
    ],
    correctAnswer: "Outplacement assistance and career transition support",
    explanation: "Organizations often provide outplacement services, including resume assistance and job search support, to help employees transition to new roles."
},
{
    id: "ENG_035",
    text: "An HR director notices a significant drop in engagement survey scores among mid-career employees. Exit interviews reveal that many are leaving due to a perceived lack of career growth. Which of the following strategies would best address this issue?",
    options: [
        "Increase salaries and offer monetary retention bonuses",
        "Implement a structured career development program, including mentorship and leadership pathways",
        "Encourage employees to take personal responsibility for their own professional growth",
        "Increase workload expectations to challenge employees and boost engagement"
    ],
    correctAnswer: "Implement a structured career development program, including mentorship and leadership pathways",
    explanation: "Mid-career employees value professional growth. Providing career development opportunities can increase engagement and retention."
},
{
    id: "ENG_036",
    text: "A company recently promoted a highly skilled technical employee to a leadership position. Within six months, the team’s engagement levels declined, with complaints about lack of communication and micromanagement. What should HR do next?",
    options: [
        "Demote the leader back to their technical role",
        "Provide leadership coaching focused on communication and empowerment strategies",
        "Conduct an anonymous engagement survey and use the data to implement targeted training",
        "Increase salaries and offer more benefits to counteract engagement loss"
    ],
    correctAnswer: "Provide leadership coaching focused on communication and empowerment strategies",
    explanation: "Technical skills do not always translate to leadership. Coaching and training can help newly promoted leaders develop essential managerial skills."
},
{
    id: "ENG_037",
    text: "An organization wants to improve employee engagement while also driving innovation. Which of the following would be the most effective approach?",
    options: [
        "Encourage employees to submit innovative ideas and recognize those who contribute",
        "Increase salaries and bonuses for high performers",
        "Implement strict performance metrics to ensure productivity",
        "Require all employees to attend innovation workshops, regardless of their role"
    ],
    correctAnswer: "Encourage employees to submit innovative ideas and recognize those who contribute",
    explanation: "Recognizing and rewarding employee innovation fosters engagement and helps align employee contributions with business goals."
},
{
    id: "ENG_038",
    text: "A company introduces a new engagement program that includes peer recognition and flexible work arrangements. However, some senior employees resist, arguing that 'real work happens in the office.' What is the best course of action?",
    options: [
        "Mandate participation in the engagement program",
        "Ignore resistance and continue the program as planned",
        "Facilitate discussions with resistant employees to understand their concerns and align initiatives with their needs",
        "Remove engagement programs that receive negative feedback"
    ],
    correctAnswer: "Facilitate discussions with resistant employees to understand their concerns and align initiatives with their needs",
    explanation: "Open communication helps address resistance to change, ensuring new initiatives align with employee expectations and company culture."
},
{
    id: "ENG_039",
    text: "What is the main function of Employee Resource Groups (ERGs)?",
    options: [
        "To enforce company policies and monitor employee behavior",
        "To serve as a platform for employees to share experiences related to identity, culture, and professional development",
        "To provide legal representation for employees in workplace disputes",
        "To replace HR’s role in handling employee feedback"
    ],
    correctAnswer: "To serve as a platform for employees to share experiences related to identity, culture, and professional development",
    explanation: "ERGs foster inclusion by providing spaces for employees to connect, share experiences, and support career growth through networking and mentorship."
},
{
    id: "ENG_040",
    text: "What is a critical step in ensuring employee feedback leads to organizational improvements?",
    options: [
        "Conducting surveys without taking any follow-up action",
        "Prioritizing feedback based on its impact and setting measurable goals",
        "Collecting feedback but keeping results confidential from employees",
        "Relying only on management opinions rather than employee surveys"
    ],
    correctAnswer: "Prioritizing feedback based on its impact and setting measurable goals",
    explanation: "Effective feedback management involves identifying key areas for improvement, setting measurable goals, and taking action to enhance the workplace."
},
{
    id: "ENG_041",
    text: "What does psychological safety in the workplace mean?",
    options: [
        "Employees feel comfortable taking risks and voicing concerns without fear of negative consequences",
        "Employees avoid speaking up to prevent conflicts with management",
        "Only senior leaders have the ability to express their ideas freely",
        "Employees are discouraged from questioning workplace policies"
    ],
    correctAnswer: "Employees feel comfortable taking risks and voicing concerns without fear of negative consequences",
    explanation: "Psychological safety encourages open communication, innovation, and trust within teams by allowing employees to share concerns without fear."
},
{
    id: "ENG_042",
    text: "What is one key factor that early-career professionals prioritize in the workplace?",
    options: [
        "Immediate leadership roles",
        "Opportunities for learning and career development",
        "A strict work schedule with no flexibility",
        "Job security with minimal responsibilities"
    ],
    correctAnswer: "Opportunities for learning and career development",
    explanation: "Early-career employees seek growth through training, mentorship, and career progression opportunities to build skills and advance professionally."
},
{
    id: "ENG_043",
    text: "How can HR tailor benefits to engage younger workers effectively?",
    options: [
        "Offering rigid work schedules to ensure consistency",
        "Providing tuition reimbursement or family benefits based on career stage",
        "Reducing career development programs to focus on retention",
        "Eliminating remote work opportunities"
    ],
    correctAnswer: "Providing tuition reimbursement or family benefits based on career stage",
    explanation: "HR can engage younger employees by offering career development incentives such as tuition reimbursement and benefits that align with their life stage."
},
{
    id: "ENG_044",
    text: "What is a common career engagement priority for mid-career employees?",
    options: [
        "A focus on mentorship and skill-building opportunities",
        "A desire for more career progression, stability, and work-life balance",
        "The need for phased retirement planning",
        "A preference for entry-level job rotations"
    ],
    correctAnswer: "A desire for more career progression, stability, and work-life balance",
    explanation: "Mid-career employees often seek career advancement, stability, and flexibility to balance professional and personal responsibilities."
},
{
    id: "ENG_045",
    text: "What workplace initiative is most likely to help retain late-career employees?",
    options: [
        "Expanding internship opportunities",
        "Increasing short-term project assignments",
        "Offering flexible work arrangements and legacy-building opportunities",
        "Requiring mandatory career advancement training"
    ],
    correctAnswer: "Offering flexible work arrangements and legacy-building opportunities",
    explanation: "Late-career employees value flexibility, mentorship opportunities, and roles that allow them to pass on expertise while maintaining work-life balance."
},
{
    id: "ENG_046",
    text: "Why do some companies hesitate to invest in employee training and development?",
    options: [
        "They fear employees will leave after gaining new skills",
        "They believe training has no impact on productivity",
        "They think employees should learn on their own time",
        "They prefer to rely on financial rewards instead of skill-building"
    ],
    correctAnswer: "They fear employees will leave after gaining new skills",
    explanation: "Some companies avoid training investments due to concerns that employees will leave for better opportunities after developing new skills. However, lack of development can also drive turnover."
},
{
    id: "ENG_047",
    text: "Why should organizations avoid over-reliance on monetary rewards for engagement?",
    options: [
        "Financial incentives alone do not create long-term commitment or job satisfaction",
        "Monetary rewards always lead to increased turnover",
        "Employees do not value financial compensation in any culture",
        "Employers legally cannot use financial incentives to motivate employees"
    ],
    correctAnswer: "Financial incentives alone do not create long-term commitment or job satisfaction",
    explanation: "While monetary rewards are important, long-term engagement relies on intrinsic motivators such as career growth, recognition, and meaningful work."
},
{
    id: "ENG_048",
    text: "What is a best practice for ensuring a structured and positive offboarding process?",
    options: [
        "Conducting exit interviews and knowledge transfer sessions",
        "Ignoring departing employees once they submit a resignation",
        "Avoiding discussions about future opportunities with the employee",
        "Refusing to allow employees to return in the future"
    ],
    correctAnswer: "Conducting exit interviews and knowledge transfer sessions",
    explanation: "A structured offboarding process helps retain institutional knowledge and maintains positive relationships with former employees, fostering potential rehires or referrals."
},
{
    id: "ENG_049",
    text: "How can organizations improve offboarding for international employees?",
    options: [
        "By ensuring compliance with local labor laws and cultural practices",
        "By standardizing all offboarding processes globally",
        "By avoiding severance packages to reduce costs",
        "By keeping all exit interviews short and impersonal"
    ],
    correctAnswer: "By ensuring compliance with local labor laws and cultural practices",
    explanation: "International offboarding should account for legal and cultural differences to ensure compliance and a smooth transition for departing employees."
},
{
    id: "ENG_050",
    text: "What is the primary goal of employee involvement in decision-making?",
    options: [
        "To ensure management makes all key decisions without employee input",
        "To increase employee commitment and engagement by giving them ownership over their work",
        "To reduce employee participation in organizational improvements",
        "To prevent employees from voicing their concerns"
    ],
    correctAnswer: "To increase employee commitment and engagement by giving them ownership over their work",
    explanation: "Involving employees in decision-making fosters a sense of ownership, engagement, and commitment to the organization’s success."
},
{
    id: "ENG_051",
    text: "What is a key advantage of using focus groups for employee feedback?",
    options: [
        "They provide in-depth qualitative insights that may not emerge from surveys",
        "They eliminate the need for anonymous employee feedback",
        "They replace the need for any other employee involvement programs",
        "They focus solely on individual performance rather than organizational issues"
    ],
    correctAnswer: "They provide in-depth qualitative insights that may not emerge from surveys",
    explanation: "Focus groups allow employees to discuss concerns and ideas in detail, uncovering insights that quantitative surveys may not fully capture."
},
{
    id: "ENG_052",
    text: "According to research, what is a primary reason employees become disengaged at work?",
    options: [
        "Low pay compared to competitors",
        "Complacent leadership with little commitment to culture initiatives",
        "Excessive remote work flexibility",
        "Lack of formal education opportunities"
    ],
    correctAnswer: "Complacent leadership with little commitment to culture initiatives",
    explanation: "Leadership plays a crucial role in shaping workplace culture. When leaders fail to engage with culture initiatives, employees may feel undervalued and disconnected."
},
{
    id: "ENG_053",
    text: "How does a Workplace Value Proposition (WVP) contribute to employee engagement?",
    options: [
        "It strictly focuses on increasing salaries and benefits.",
        "It integrates rewards, career development, work-life balance, and recognition programs to align with employee needs.",
        "It forces employees to comply with company rules and policies.",
        "It is solely focused on increasing stock prices for shareholders."
    ],
    correctAnswer: "It integrates rewards, career development, work-life balance, and recognition programs to align with employee needs.",
    explanation: "A well-structured WVP enhances engagement by aligning organizational offerings with employee expectations in compensation, development, and work-life balance."
},
{
    id: "ENG_054",
    text: "What is one reason organizations struggle to implement a strong WVP?",
    options: [
        "Employees do not care about workplace culture.",
        "There is often misalignment between organizational goals and employee expectations.",
        "WVP does not include compensation and benefits.",
        "Companies lack access to engagement research."
    ],
    correctAnswer: "There is often misalignment between organizational goals and employee expectations.",
    explanation: "A disconnect between leadership priorities and employee needs can result in an ineffective WVP that fails to enhance engagement."
},
{
    id: "ENG_055",
    text: "What is the impact of return-to-office mandates on employee engagement?",
    options: [
        "They always increase employee retention and engagement.",
        "They may lead to decreased engagement if employees prefer flexible work arrangements.",
        "They have no impact on employee engagement.",
        "They always lead to higher profitability."
    ],
    correctAnswer: "They may lead to decreased engagement if employees prefer flexible work arrangements.",
    explanation: "Rigid return-to-office policies can lower engagement among employees who value work-life balance and remote work flexibility."
},
{
    id: "ENG_056",
    text: "Which employee lifecycle phase is most critical for long-term engagement?",
    options: [
        "Hiring",
        "Onboarding",
        "Exit interviews",
        "Performance evaluations"
    ],
    correctAnswer: "Onboarding",
    explanation: "A well-structured onboarding process sets the tone for employee engagement, retention, and long-term job satisfaction."
},
{
    id: "ENG_057",
    text: "What metric is commonly used to evaluate the effectiveness of hiring practices in relation to employee engagement?",
    options: [
        "Number of rejected applicants",
        "Candidate experience surveys and quality-of-hire assessments",
        "Employee birthday celebrations",
        "Number of internal emails sent by HR"
    ],
    correctAnswer: "Candidate experience surveys and quality-of-hire assessments",
    explanation: "Candidate experience and quality-of-hire metrics help assess how well hiring practices align with long-term engagement and performance."
},
{
    id: "ENG_058",
    text: "Which of the following is a key strategy for improving employee engagement during onboarding?",
    options: [
        "Providing employees with minimal information and letting them adjust naturally",
        "Ensuring employees receive a comprehensive introduction to company culture, values, and job expectations",
        "Using onboarding solely as a time for paperwork completion",
        "Assigning new employees minimal tasks to avoid overwhelming them"
    ],
    correctAnswer: "Ensuring employees receive a comprehensive introduction to company culture, values, and job expectations",
    explanation: "A structured onboarding process fosters engagement by providing new employees with clear expectations, company values, and necessary resources for success."
},
{
    id: "ENG_059",
    text: "What is one of the key benefits of continuous training and development for employees?",
    options: [
        "It ensures employees remain in the same job role indefinitely",
        "It helps employees develop new skills and increases engagement",
        "It discourages employees from seeking career advancement",
        "It primarily benefits only the employer and not the workforce"
    ],
    correctAnswer: "It helps employees develop new skills and increases engagement",
    explanation: "Continuous learning opportunities enhance employee skills, engagement, and career satisfaction, leading to higher retention and performance."
},
{
    id: "ENG_060",
    text: "What is the primary difference between job satisfaction and employee engagement?",
    options: [
        "Job satisfaction focuses on pay, while engagement focuses on benefits.",
        "Engagement measures emotional and psychological commitment, while job satisfaction measures contentment with work conditions.",
        "Employee engagement is irrelevant to organizational performance.",
        "Job satisfaction is solely about employee loyalty to the company."
    ],
    correctAnswer: "Engagement measures emotional and psychological commitment, while job satisfaction measures contentment with work conditions.",
    explanation: "Job satisfaction relates to employees’ contentment with factors like pay, workload, and environment, while engagement measures their commitment, motivation, and involvement in their work."
},
{
    id: "ENG_061",
    text: "Which of the following is NOT a characteristic of an actively disengaged worker?",
    options: [
        "Negative attitude toward work and colleagues",
        "Consistently exceeding job expectations",
        "Below-standard performance",
        "Resistance to rules and authority"
    ],
    correctAnswer: "Consistently exceeding job expectations",
    explanation: "Actively disengaged workers tend to be dissatisfied, unmotivated, and resistant to organizational goals, whereas exceeding expectations is a sign of high engagement."
},
{
    id: "ENG_062",
    text: "What is one major consequence of high employee engagement?",
    options: [
        "Increased absenteeism",
        "Higher turnover",
        "Improved customer service",
        "Decreased productivity"
    ],
    correctAnswer: "Improved customer service",
    explanation: "Engaged employees tend to be more motivated, productive, and customer-focused, leading to better service and stronger organizational performance."
}
];

export default questions;
