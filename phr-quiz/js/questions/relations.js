// relations.js
const questions = [
    {
        id: "REL_001",
        text: "A manufacturing plant sees increased union activity after implementing new safety protocols. HR must analyze workforce data. What's the most effective approach?",
        options: [
            "Review safety incident reports",
            "Apply root cause analysis to identify worker concerns systematically",
            "Track union leaflet distribution",
            "Share safety compliance rates"
        ],
        correctAnswer: "Apply root cause analysis to identify worker concerns systematically",
        explanation: "Root cause analysis systematically identifies underlying issues driving union activity, enabling strategic intervention. Incident reports describe tactically, leaflet tracking reacts to symptoms, and compliance rates miss worker concerns."
    },
    {
        id: "REL_002",
        text: "A unionized facility's grievance data shows 50% increase in scheduling disputes. HR needs to analyze patterns. What's the best analytical method?",
        options: [
            "Present grievance frequency trends",
            "Map grievance patterns against operational changes",
            "Share overtime distribution data",
            "Review supervisor responses"
        ],
        correctAnswer: "Map grievance patterns against operational changes",
        explanation: "Mapping grievances to operations provides systemic insight into dispute root causes. Frequency trends describe tactically, overtime data focuses narrowly, and supervisor responses provide limited perspective."
    },
    {
        id: "REL_003",
        text: "A company faces NLRB charges despite positive employee relations metrics. What's the most rigorous analytical approach?",
        options: [
            "Track charge categories",
            "Analyze disconnect between metrics and employee voice channels",
            "Share employee survey results",
            "Review management practices"
        ],
        correctAnswer: "Analyze disconnect between metrics and employee voice channels",
        explanation: "Analyzing metric-voice disconnects reveals systemic gaps in employee relations monitoring. Categories describe tactically, survey results inform partially, and practice reviews miss systemic issues."
    },
    {
        id: "REL_004",
        text: "During contract negotiations, union cites inequitable discipline patterns. HR must analyze disciplinary data. What's the most strategic contribution?",
        options: [
            "Present discipline rate trends",
            "Apply adverse impact analysis to disciplinary actions",
            "Share industry benchmark data",
            "Review supervisor training completion"
        ],
        correctAnswer: "Apply adverse impact analysis to disciplinary actions",
        explanation: "Adverse impact analysis systematically evaluates discipline equity, providing objective data for negotiations. Trends describe tactically, benchmarks compare externally, and training data shifts focus from outcomes."
    },
    {
        id: "REL_005",
        text: "A logistics company's labor relations metrics show increasing arbitration costs. HR needs to analyze dispute patterns. What's the best approach?",
        options: [
            "Track arbitration outcomes",
            "Correlate grievance types with settlement stages",
            "Share cost per case data",
            "Review contract interpretation issues"
        ],
        correctAnswer: "Correlate grievance types with settlement stages",
        explanation: "Correlating grievances with settlements provides systemic insight into dispute escalation patterns. Outcomes track tactically, costs focus narrowly, and interpretation reviews miss resolution opportunities."
    },
    {
        id: "REL_006",
        text: "After a contentious contract ratification, HR must analyze union-management relationship data. What's the most effective method?",
        options: [
            "Present voting pattern data",
            "Apply relationship assessment model to identify trust factors",
            "Share grievance statistics",
            "Review communication frequency"
        ],
        correctAnswer: "Apply relationship assessment model to identify trust factors",
        explanation: "Relationship assessment models systematically evaluate trust and cooperation factors. Voting patterns describe tactically, grievance stats show symptoms, and communication frequency misses relationship quality."
    },
    {
        id: "REL_007",
        text: "During union avoidance campaign, turnover spikes in key departments. HR must analyze retention factors. What's the most strategic approach?",
        options: [
            "Track exit interview themes",
            "Model employee sentiment using multi-source feedback",
            "Share market pay comparisons",
            "Review supervisor ratings"
        ],
        correctAnswer: "Model employee sentiment using multi-source feedback",
        explanation: "Multi-source sentiment modeling provides systemic insight into retention risk factors. Exit themes describe tactically, pay data focuses narrowly, and ratings provide limited perspective on sentiment."
    },
    {
    id: "ELR_010",
    text: "Which of the following is an example of workplace incivility?",
    options: [
        "Offering constructive criticism to improve work performance",
        "Encouraging employees to participate in decision-making",
        "Ignoring a colleague’s emails and talking over them in meetings",
        "Providing positive recognition for achievements"
    ],
    correctAnswer: "Ignoring a colleague’s emails and talking over them in meetings",
    explanation: "Ignoring a colleague or speaking over them demonstrates a lack of respect and contributes to workplace incivility."
},
{
    id: "ELR_011",
    text: "What is a potential consequence of workplace incivility?",
    options: [
        "Increased collaboration among teams",
        "Higher employee morale and productivity",
        "Increased turnover and decreased job satisfaction",
        "Greater retention of top talent"
    ],
    correctAnswer: "Increased turnover and decreased job satisfaction",
    explanation: "Workplace incivility can lead to disengagement, lower morale, and higher turnover."
},
{
    id: "ELR_012",
    text: "What is the difference between workplace incivility and counterproductive work behaviors (CWBs)?",
    options: [
        "Incivility refers to legal actions, while CWBs refer to policy violations",
        "Incivility includes minor rudeness, while CWBs involve intentional harm to the organization or employees",
        "Incivility occurs in personal interactions, while CWBs only occur at the organizational level",
        "Incivility is always physical, while CWBs are always verbal"
    ],
    correctAnswer: "Incivility includes minor rudeness, while CWBs involve intentional harm to the organization or employees",
    explanation: "Workplace incivility includes rudeness and lack of respect, whereas CWBs include more harmful behaviors such as theft, sabotage, and harassment."
},
{
    id: "ELR_013",
    text: "Which of the following is an example of a counterproductive work behavior (CWB)?",
    options: [
        "An employee taking an extended lunch break once a month",
        "An employee stealing office supplies for personal use",
        "A supervisor giving regular performance feedback",
        "A team leader conducting a weekly team-building session"
    ],
    correctAnswer: "An employee stealing office supplies for personal use",
    explanation: "Stealing office supplies is an example of organizational deviance, which is a type of CWB."
},
{
    id: "ELR_014",
    text: "How can HR help prevent workplace incivility?",
    options: [
        "Ignoring minor workplace conflicts to avoid escalation",
        "Implementing clear policies defining acceptable behavior and consequences for violations",
        "Encouraging employees to compete aggressively for promotions",
        "Avoiding the topic to prevent employees from feeling micromanaged"
    ],
    correctAnswer: "Implementing clear policies defining acceptable behavior and consequences for violations",
    explanation: "Establishing clear policies, training, and consequences can help maintain a civil and respectful work environment."
},
{
    id: "ELR_015",
    text: "What does SHRM’s Civility Index measure?",
    options: [
        "Employee salaries in relation to workplace fairness",
        "The level of civility and respectful behavior in U.S. workplaces",
        "The percentage of employees engaged in workplace incivility",
        "The effectiveness of company policies on employee compensation"
    ],
    correctAnswer: "The level of civility and respectful behavior in U.S. workplaces",
    explanation: "SHRM’s Civility Index assesses the prevalence of incivility and its effects on workplace culture."
},
{
    id: "ELR_016",
    text: "What is a recommended strategy to reduce counterproductive work behaviors (CWBs)?",
    options: [
        "Only addressing severe violations to avoid unnecessary conflict",
        "Providing regular training on effective communication and conflict resolution",
        "Promoting a high-pressure work environment to encourage competition",
        "Implementing policies but not enforcing them to maintain flexibility"
    ],
    correctAnswer: "Providing regular training on effective communication and conflict resolution",
    explanation: "Training employees on communication, conflict resolution, and workplace expectations can help reduce CWBs."
},
{
    id: "HRW_001",
    text: "An employee anonymously reports unsafe working conditions, citing a malfunctioning machine that has already caused minor injuries. What is HR’s first responsibility under OSHA?",
    options: [
        "Conduct an immediate workplace safety inspection and document findings",
        "Wait for an official OSHA complaint before taking any action",
        "Inform employees that safety violations will only be addressed if reported through formal channels",
        "Ignore the complaint unless a serious injury has occurred"
    ],
    correctAnswer: "Conduct an immediate workplace safety inspection and document findings",
    explanation: "OSHA requires proactive safety investigations to mitigate hazards. Waiting for an official complaint or ignoring the issue can lead to serious liabilities."
},
{
    id: "HRW_002",
    text: "If HR’s investigation confirms the presence of safety hazards, what should be the next step?",
    options: [
        "Shut down the affected work area and implement corrective actions immediately",
        "Notify employees that the issue will be addressed but delay action to save costs",
        "Discipline employees who reported the hazard for creating unnecessary concern",
        "Dismiss the report unless OSHA formally mandates corrective action"
    ],
    correctAnswer: "Shut down the affected work area and implement corrective actions immediately",
    explanation: "OSHA mandates immediate corrective actions for identified hazards to prevent injuries and ensure workplace safety."
},
{
    id: "HRW_003",
    text: "An employee claims they were denied overtime pay despite working over 40 hours in a week. HR must ensure compliance with FLSA regulations. What is the best approach to start the investigation?",
    options: [
        "Review payroll records and timekeeping logs to verify whether overtime was worked and unpaid",
        "Ask the manager to explain why overtime was not paid before checking records",
        "Automatically compensate the employee without verifying the claim",
        "Ignore the complaint unless multiple employees file similar claims"
    ],
    correctAnswer: "Review payroll records and timekeeping logs to verify whether overtime was worked and unpaid",
    explanation: "The first step is to verify the claim using payroll and timekeeping records to ensure compliance with FLSA regulations."
},
{
    id: "HRW_004",
    text: "If HR discovers that multiple employees were improperly denied overtime, what should the company do?",
    options: [
        "Issue back pay to affected employees and update payroll policies to prevent future violations",
        "Only compensate the complaining employee to minimize financial losses",
        "Dismiss the issue since the employees did not formally escalate their concerns earlier",
        "Reduce employee work hours moving forward to avoid potential overtime payments"
    ],
    correctAnswer: "Issue back pay to affected employees and update payroll policies to prevent future violations",
    explanation: "FLSA compliance requires back pay for affected employees and policy corrections to prevent future violations."
},
{
    id: "HRW_005",
    text: "An employee with a mobility disability requests a height-adjustable workstation as a reasonable accommodation, but their manager denies the request, claiming it is 'too expensive.' The employee files an ADA complaint. What is the correct initial response from HR?",
    options: [
        "Initiate an interactive process to determine if the accommodation is reasonable",
        "Immediately provide the workstation without discussion",
        "Support the manager’s denial since accommodations are optional",
        "Ignore the request unless legal action is threatened"
    ],
    correctAnswer: "Initiate an interactive process to determine if the accommodation is reasonable",
    explanation: "The ADA requires an interactive process between the employer and employee to determine reasonable accommodations."
},
{
    id: "HRW_006",
    text: "If HR determines that providing the workstation is a reasonable accommodation but the company cannot afford it, what should HR do?",
    options: [
        "Explore alternative accommodations that meet the employee’s needs without imposing undue hardship",
        "Deny the request and instruct the employee to buy the workstation themselves",
        "Only approve similar requests in the future if the employee threatens to sue",
        "Tell the employee they must work without accommodations if they want to keep their job"
    ],
    correctAnswer: "Explore alternative accommodations that meet the employee’s needs without imposing undue hardship",
    explanation: "If an accommodation creates undue hardship, the ADA requires HR to explore alternative solutions that still meet the employee’s needs."
},
{
    id: "HRW_007",
    text: "What is workplace incivility?",
    options: [
        "Encouraging employees to voice their opinions openly",
        "Rude, discourteous behavior that negatively impacts the work environment",
        "A formal process for resolving workplace disputes",
        "An organizational policy promoting diversity and inclusion"
    ],
    correctAnswer: "Rude, discourteous behavior that negatively impacts the work environment",
    explanation: "Workplace incivility refers to behavior that lacks respect and contributes to a toxic work environment."
},
{
    id: "HRW_008",
    text: "Two employees have a long-standing conflict that disrupts their team’s productivity. HR suggests mediation, but one employee refuses, saying the other should be disciplined instead. What is the best approach to encourage participation?",
    options: [
        "Force both employees into mediation, threatening disciplinary action if they refuse",
        "Reassign one of the employees to another department to avoid future conflicts",
        "Explain how mediation benefits both parties and encourage voluntary participation",
        "Ignore the issue and hope the conflict resolves itself over time"
    ],
    correctAnswer: "Explain how mediation benefits both parties and encourage voluntary participation",
    explanation: "Encouraging voluntary participation and explaining the benefits of mediation helps foster a productive resolution."
},
{
    id: "HRW_009",
    text: "An employee files a complaint alleging racial discrimination in promotion decisions. The HR department is responsible for conducting an internal investigation. What should be HR’s first step in addressing this complaint?",
    options: [
        "Immediately discipline the accused manager to demonstrate commitment to diversity",
        "Gather initial facts, review relevant policies, and ensure confidentiality before proceeding",
        "Publicly announce the investigation to maintain workplace transparency",
        "Dismiss the complaint unless there is clear proof of discrimination at the time of filing"
    ],
    correctAnswer: "Gather initial facts, review relevant policies, and ensure confidentiality before proceeding",
    explanation: "The first step is to fact-find and ensure confidentiality before making any decisions."
},
{
    id: "HRW_010",
    text: "If HR finds that multiple employees of a particular race have been overlooked for promotions, what should the company do next?",
    options: [
        "Conduct a deeper review of promotion policies to determine if implicit bias is affecting decisions",
        "Retroactively promote the employees who were previously overlooked",
        "Ignore the findings and hope employees do not take legal action",
        "Fire the manager responsible without further investigation"
    ],
    correctAnswer: "Conduct a deeper review of promotion policies to determine if implicit bias is affecting decisions",
    explanation: "If a pattern of bias is discovered, HR must address systemic issues rather than simply reversing past decisions."
},
{
    id: "HRW_011",
    text: "An employee complains that they were denied FMLA leave despite meeting all eligibility requirements. HR launches an investigation to verify the claim. What is the most appropriate first action for HR?",
    options: [
        "Check the employee’s eligibility and review company FMLA records to ensure compliance",
        "Immediately approve the leave without verifying the details",
        "Ignore the complaint since FMLA leave is at the discretion of the employer",
        "Tell the employee to resolve the issue directly with their manager"
    ],
    correctAnswer: "Check the employee’s eligibility and review company FMLA records to ensure compliance",
    explanation: "HR must verify eligibility and compliance before taking any action regarding FMLA leave requests."
},
{
    id: "HRW_012",
    text: "During the investigation, HR finds that some employees have been approved for FMLA leave inconsistently. What should HR do next?",
    options: [
        "Audit FMLA processes, provide refresher training to managers, and ensure compliance",
        "Do nothing, as inconsistent approvals do not necessarily indicate a violation",
        "Only discipline the managers who denied the leave, without addressing broader inconsistencies",
        "Revoke previously approved FMLA leaves to maintain fairness"
    ],
    correctAnswer: "Audit FMLA processes, provide refresher training to managers, and ensure compliance",
    explanation: "If inconsistencies are found in FMLA approvals, HR should take corrective steps by auditing processes and training managers."
},
{
    id: "ELR_011",
    text: "An organization introduces a confidential hotline for employees to report workplace concerns. However, employees hesitate to use it due to fear of retaliation and a general distrust of HR. What would be the most effective additional step the company could take to improve employee confidence in reporting?",
    options: [
        "Require all employees to submit at least one complaint per year to normalize the reporting process",
        "Appoint an external third-party vendor to manage complaints and conduct follow-ups independently",
        "Make reporting complaints mandatory and track employees who don’t participate",
        "Publicly discipline managers who have received complaints to show HR takes issues seriously"
    ],
    correctAnswer: "Appoint an external third-party vendor to manage complaints and conduct follow-ups independently",
    explanation: "Using a third-party vendor adds neutrality and transparency, which can increase trust in the process."
},
{
    id: "ELR_012",
    text: "A company requires new hires to sign an arbitration agreement waiving their right to file workplace disputes in court. Some employees later express frustration, saying they did not fully understand what they signed. What is the most ethical and legally sound way to handle arbitration agreements moving forward?",
    options: [
        "Continue requiring arbitration agreements but allow employees to revoke them within a specific time frame",
        "Make signing the arbitration agreement optional to give employees more control over their rights",
        "Provide clear explanations and legal resources to employees before requiring signatures",
        "Eliminate arbitration agreements entirely to avoid potential legal challenges"
    ],
    correctAnswer: "Provide clear explanations and legal resources to employees before requiring signatures",
    explanation: "Ensuring employees fully understand the agreement before signing protects both employer and employee rights while maintaining legal compliance."
},
{
    id: "ELR_013",
    text: "An employee files a formal complaint against a senior executive, alleging harassment. Some employees believe an internal investigation would be biased, but the company prefers internal handling to control costs. What should HR consider before deciding between an internal or external investigation?",
    options: [
        "The cost of hiring an external investigator versus the risk of an internal bias perception",
        "The likelihood of the complaint leading to legal action and the need for third-party credibility",
        "The company’s ability to conduct a thorough and impartial internal investigation",
        "All of the above"
    ],
    correctAnswer: "All of the above",
    explanation: "All these factors are critical in determining whether an internal or external investigation is appropriate."
},
{
    id: "ELR_014",
    text: "A unionized company experiences an increase in employee grievances related to unfair workloads. What proactive measure should HR take to prevent complaints from escalating?",
    options: [
        "Encourage managers to dismiss minor complaints and focus only on formal grievances",
        "Implement regular check-ins with employees to address concerns before they escalate",
        "Wait until the union files an official grievance before addressing employee concerns",
        "Make all employee complaints confidential and avoid discussing them openly"
    ],
    correctAnswer: "Implement regular check-ins with employees to address concerns before they escalate",
    explanation: "Addressing concerns proactively through regular check-ins can prevent minor issues from turning into full grievances."
},
{
    id: "ELR_015",
    text: "Several employees report feeling that promotions are based on favoritism rather than merit. Leadership denies any bias, but HR notices a pattern of subjective decision-making. What is the most effective way to improve trust in the promotion process?",
    options: [
        "Implement clear, documented promotion criteria and increase transparency in decision-making",
        "Ignore complaints since promotions are at management’s discretion",
        "Randomly select employees for promotion to avoid bias concerns",
        "Ban all internal promotions and only hire externally to ensure fairness"
    ],
    correctAnswer: "Implement clear, documented promotion criteria and increase transparency in decision-making",
    explanation: "Transparent promotion criteria ensure fairness and improve trust in the process."
},
{
    id: "ELR_016",
    text: "An employee submits an anonymous complaint accusing a manager of harassment. The manager denies the allegations, and there is no additional evidence. What is the best course of action for HR?",
    options: [
        "Dismiss the complaint since it lacks supporting evidence and is anonymous",
        "Immediately fire the accused manager to protect the company’s reputation",
        "Conduct a discreet investigation, gather any available evidence, and interview potential witnesses",
        "Publicly announce the complaint to encourage others to come forward"
    ],
    correctAnswer: "Conduct a discreet investigation, gather any available evidence, and interview potential witnesses",
    explanation: "Conducting an investigation, even with limited information, ensures due diligence and fairness."
},
{
    id: "ELR_017",
    text: "What is the primary purpose of company policies?",
    options: [
        "To establish consistent guidelines for decision-making and ensure fair treatment of employees",
        "To create complex rules that employees must follow without explanation",
        "To provide step-by-step instructions for completing tasks",
        "To set arbitrary restrictions on employee behavior"
    ],
    correctAnswer: "To establish consistent guidelines for decision-making and ensure fair treatment of employees",
    explanation: "Policies serve as high-level guidelines that govern workplace behavior and decision-making."
},
{
    id: "ELR_018",
    text: "How do procedures differ from policies in an organization?",
    options: [
        "Procedures provide detailed steps on how to carry out a policy, while policies set general guidelines",
        "Procedures outline the company’s mission statement, while policies focus on daily operations",
        "Policies are optional, whereas procedures are legally required in all companies",
        "Procedures establish the consequences of rule violations, while policies only apply to new employees"
    ],
    correctAnswer: "Procedures provide detailed steps on how to carry out a policy, while policies set general guidelines",
    explanation: "Policies outline broad expectations, while procedures detail step-by-step processes to implement those policies."
},
{
    id: "ELR_019",
    text: "Which of the following is not typically found in an employee handbook?",
    options: [
        "Workplace behavior and anti-harassment policies",
        "Performance review results for each employee",
        "Attendance and leave policies",
        "Expense reimbursement procedures"
    ],
    correctAnswer: "Performance review results for each employee",
    explanation: "Employee handbooks contain company-wide policies and procedures, but individual performance reviews are private."
},
{
    id: "ELR_020",
    text: "What is the main function of Standard Operating Procedures (SOPs)?",
    options: [
        "To define the company’s overall mission and values",
        "To provide step-by-step instructions for performing specific tasks consistently",
        "To list all employees and their job responsibilities",
        "To outline only disciplinary actions for employees"
    ],
    correctAnswer: "To provide step-by-step instructions for performing specific tasks consistently",
    explanation: "SOPs ensure tasks are completed efficiently, consistently, and safely by providing detailed instructions."
},
{
    id: "ELR_021",
    text: "How do ISO standards benefit HR practices in employee and labor relations?",
    options: [
        "By providing best practices for consistency, compliance, and HR metrics tracking",
        "By ensuring employees receive automatic promotions after two years of service",
        "By requiring all companies to implement the same HR policies worldwide",
        "By replacing company policies with external government regulations"
    ],
    correctAnswer: "By providing best practices for consistency, compliance, and HR metrics tracking",
    explanation: "ISO standards help organizations improve HR reporting, workplace safety, and policy consistency."
},
{
    id: "ELR_022",
    text: "What does ISO 45001 focus on?",
    options: [
        "Occupational health and safety management systems",
        "Diversity and inclusion best practices",
        "Financial management policies",
        "Training and development strategies"
    ],
    correctAnswer: "Occupational health and safety management systems",
    explanation: "ISO 45001 is a standard that helps organizations reduce workplace risks and improve safety."
},
{
    id: "ELR_023",
    text: "Which of the following is not a direct benefit of ISO certification for a company?",
    options: [
        "Improved operational efficiency",
        "Enhanced reputation and trust",
        "Guaranteed increase in employee salaries",
        "Better risk management and compliance"
    ],
    correctAnswer: "Guaranteed increase in employee salaries",
    explanation: "ISO certification improves efficiency, compliance, and reputation, but does not mandate salary increases."
},
{
    id: "ELR_024",
    text: "Which of the following is a critical element of a workplace rule?",
    options: [
        "It must be specific and clearly defined",
        "It should be optional for employees to follow",
        "It must only apply to new hires",
        "It should be written in complex legal language that employees may not fully understand"
    ],
    correctAnswer: "It must be specific and clearly defined",
    explanation: "Workplace rules must be clear, specific, and consistently enforced to ensure compliance and fairness."
},
{
    id: "ELR_025",
    text: "How long must employers retain I-9 employment eligibility verification forms?",
    options: [
        "Three years from the hire date or one year after termination, whichever is later",
        "One year after an employee resigns",
        "As long as the employee remains with the company",
        "Indefinitely, to comply with federal recordkeeping rules"
    ],
    correctAnswer: "Three years from the hire date or one year after termination, whichever is later",
    explanation: "I-9 forms must be retained for three years after hiring or one year after termination, per federal law."
},
{
    id: "ELR_026",
    text: "Which of the following must be documented when tracking employee training?",
    options: [
        "Date of training, topics covered, and employee attendance",
        "Employees’ personal opinions on the training material",
        "A list of employees who refused to participate",
        "The number of employees who failed the training test"
    ],
    correctAnswer: "Date of training, topics covered, and employee attendance",
    explanation: "Training documentation should include dates, topics, and attendance records to demonstrate compliance and ensure accountability."
},
{
    id: "ELR_027",
    text: "What is a key requirement when documenting leave of absence requests?",
    options: [
        "Verifying whether the employee is using leave for vacation or personal errands",
        "Maintaining leave request forms, approval notices, and leave balances",
        "Asking employees to submit a written explanation of their leave in detail",
        "Requiring employees to provide doctor’s notes for all absences"
    ],
    correctAnswer: "Maintaining leave request forms, approval notices, and leave balances",
    explanation: "HR must document leave requests, approvals, and remaining balances to track compliance with company policies and laws."
},
{
    id: "ELR_028",
    text: "Which of the following must be visibly posted in the workplace to comply with federal labor laws?",
    options: [
        "The employer’s mission statement",
        "FMLA, OSHA, and EEO notices",
        "A list of employees’ birthdays",
        "A company-wide ranking of employee performance"
    ],
    correctAnswer: "FMLA, OSHA, and EEO notices",
    explanation: "Employers must post federal labor law notices like FMLA, OSHA, and EEO in visible locations."
},
{
    id: "ELR_029",
    text: "Which of the following documents is required to be maintained for employee benefits compliance?",
    options: [
        "Employee comments on their coworkers’ benefit selections",
        "Enrollment forms for health insurance and retirement plans",
        "Personal records of employees' medical diagnoses",
        "A list of employees who don’t use company benefits"
    ],
    correctAnswer: "Enrollment forms for health insurance and retirement plans",
    explanation: "HR must retain benefits records such as enrollment forms and COBRA notices to ensure compliance with benefit laws."
},
{
    id: "ELR_030",
    text: "Why is it important for employers to document COBRA notices?",
    options: [
        "To track which employees requested extended vacation time",
        "To ensure compliance with federal laws for continuing health benefits after employment ends",
        "To monitor employee participation in wellness programs",
        "To prove that employees were fired for misconduct"
    ],
    correctAnswer: "To ensure compliance with federal laws for continuing health benefits after employment ends",
    explanation: "COBRA notices inform employees about their rights to continue health coverage after leaving employment."
},
{
    id: "ELR_031",
    text: "Which of the following is a best practice for documenting employee performance?",
    options: [
        "Keeping performance reviews consistent, detailed, and objective",
        "Writing vague notes about an employee’s behavior without specific examples",
        "Only documenting performance issues when an employee is about to be terminated",
        "Avoiding written performance records to prevent lawsuits"
    ],
    correctAnswer: "Keeping performance reviews consistent, detailed, and objective",
    explanation: "Performance documentation should be clear, objective, and consistent to support decisions about promotions, disciplinary actions, or terminations."
},
{
    id: "ELR_032",
    text: "Why is having an accurate job description important for the RTW process?",
    options: [
        "It helps doctors determine medical restrictions and return-to-work capabilities",
        "It allows employees to negotiate a completely different job upon returning",
        "It eliminates the need for medical clearance",
        "It ensures employees return to work with no modifications"
    ],
    correctAnswer: "It helps doctors determine medical restrictions and return-to-work capabilities",
    explanation: "Job descriptions assist doctors in assessing whether an employee can perform job duties or needs modifications."
},
{
    id: "ELR_033",
    text: "Which of the following best describes HR’s role in an RTW program?",
    options: [
        "Enforcing strict policies that prevent employees from returning until fully recovered",
        "Overseeing compliance, ensuring proper documentation, and coordinating accommodations",
        "Reassigning employees to new roles permanently after a medical leave",
        "Only getting involved when an employee refuses to return to work"
    ],
    correctAnswer: "Overseeing compliance, ensuring proper documentation, and coordinating accommodations",
    explanation: "HR is responsible for managing policies, ensuring legal compliance, and assisting with accommodations for employees returning to work."
},
{
    id: "ELR_034",
    text: "What is the primary reason HR professionals must maintain accurate and complete documentation?",
    options: [
        "To track employee attendance for annual reviews",
        "To ensure compliance with labor laws, protect against legal claims, and maintain accurate records",
        "To store unnecessary paperwork for future reference",
        "To provide employees with copies of their documents for personal use"
    ],
    correctAnswer: "To ensure compliance with labor laws, protect against legal claims, and maintain accurate records",
    explanation: "Documentation helps HR professionals comply with legal regulations, mitigate risks, and maintain accurate employment records."
},
{
    id: "ELR_035",
    text: "Which of the following must be documented in an employee's personnel file?",
    options: [
        "The employee’s personal opinions on company policies",
        "Job applications, offer letters, job descriptions, and performance reviews",
        "Personal notes taken by a manager during informal conversations",
        "Employee vacation photos shared on social media"
    ],
    correctAnswer: "Job applications, offer letters, job descriptions, and performance reviews",
    explanation: "Employment records include essential documents like job applications, contracts, and evaluations, but not informal or personal records."
},
{
    id: "ELR_036",
    text: "Which of the following is not a required payroll record for compliance?",
    options: [
        "Time sheets documenting hours worked",
        "Payroll registers showing wages and deductions",
        "Copies of tax forms (W-2s, 1099s)",
        "Employee lunch preferences for tax deduction purposes"
    ],
    correctAnswer: "Employee lunch preferences for tax deduction purposes",
    explanation: "Payroll records must document wages, taxes, and hours worked, but lunch preferences are not a legal requirement."
},
{
    id: "ELR_037",
    text: "What is the primary goal of a return-to-work (RTW) program?",
    options: [
        "To encourage employees to return to work as quickly as possible, regardless of their condition",
        "To reduce the risk of re-injury while ensuring a safe transition back to work",
        "To allow employees to take as much time off as they want without medical certification",
        "To eliminate the need for medical documentation when returning to work"
    ],
    correctAnswer: "To reduce the risk of re-injury while ensuring a safe transition back to work",
    explanation: "RTW programs help employees transition back to work safely while minimizing the risk of further injury."
},
{
    id: "ELR_038",
    text: "Who is typically eligible for an RTW program?",
    options: [
        "Only employees returning from work-related injuries",
        "Only employees with non-work-related medical leave",
        "Employees returning from both work-related and non-work-related medical leaves",
        "Employees who have been terminated and rehired"
    ],
    correctAnswer: "Employees returning from both work-related and non-work-related medical leaves",
    explanation: "RTW programs apply to employees regardless of whether their medical leave is work-related or non-work-related."
},
{
    id: "ELR_039",
    text: "Which of the following must be included in an RTW policy to ensure compliance with legal requirements?",
    options: [
        "A statement ensuring compliance with FMLA, workers’ compensation laws, and other regulations",
        "A guarantee that employees can return to their exact previous job, regardless of business needs",
        "A policy allowing indefinite medical leave extensions without employer approval",
        "A requirement that employees return to work within two weeks, regardless of medical status"
    ],
    correctAnswer: "A statement ensuring compliance with FMLA, workers’ compensation laws, and other regulations",
    explanation: "RTW policies must align with legal standards such as FMLA and workers' compensation laws to protect both employees and employers."
},
{
    id: "ELR_040",
    text: "What is one key benefit of offering modified-duty assignments to employees in an RTW program?",
    options: [
        "It allows employees to work while ignoring medical restrictions",
        "It ensures that employees take longer to return to full duty",
        "It helps employees return to work sooner and reduces overall injury costs",
        "It guarantees that employees can return to their original job without changes"
    ],
    correctAnswer: "It helps employees return to work sooner and reduces overall injury costs",
    explanation: "Modified duty expedites recovery and lowers costs by helping employees transition back to work safely."
},
{
    id: "ELR_041",
    text: "How does reasonable accommodation differ from modified duty in RTW programs?",
    options: [
        "Modified duty is a long-term solution, while reasonable accommodation is always temporary",
        "Reasonable accommodation applies to employees with disabilities, while modified duty is typically temporary for injured workers",
        "Modified duty is required by law, while reasonable accommodation is only for employees who request it",
        "Reasonable accommodation is only available for non-work-related injuries"
    ],
    correctAnswer: "Reasonable accommodation applies to employees with disabilities, while modified duty is typically temporary for injured workers",
    explanation: "Modified duty is short-term and focused on helping injured employees return to work, while reasonable accommodation applies to employees with disabilities under the ADA."
},
{
    id: "ELR_042",
    text: "What is the primary purpose of an Independent Medical Exam (IME) in an RTW process?",
    options: [
        "To allow employees to choose their return-to-work date",
        "To confirm an employee is medically fit to return to work and prevent fraudulent claims",
        "To extend an employee’s medical leave indefinitely",
        "To force employees to return to work before they are fully recovered"
    ],
    correctAnswer: "To confirm an employee is medically fit to return to work and prevent fraudulent claims",
    explanation: "IMEs provide an unbiased medical review to ensure employees are ready to work and prevent fraud or unnecessary leave extensions."
},
[
    {
        "id": "ELR_043",
        "text": "Which of the following is prohibited in the workplace regarding prescription medication?",
        "options": [
            "Employees using medication prescribed by their doctor",
            "Employees taking over-the-counter pain relievers for headaches",
            "Employees borrowing and using someone else’s prescription medication",
            "Employees keeping a prescription in their desk drawer"
        ],
        "correctAnswer": "Employees borrowing and using someone else’s prescription medication",
        "explanation": "Employees cannot legally use another person’s prescription medication, even if it was originally prescribed by a doctor."
    },
    {
        "id": "ELR_044",
        "text": "How can employers best handle legal marijuana use in states where it is permitted?",
        "options": [
            "Prohibit marijuana use during work hours and enforce impairment-based policies",
            "Allow employees to use marijuana at work as long as they are not in safety-sensitive positions",
            "Follow state law and ignore marijuana use altogether",
            "Require all employees to submit to daily drug testing"
        ],
        "correctAnswer": "Prohibit marijuana use during work hours and enforce impairment-based policies",
        "explanation": "Employers should focus on impairment rather than past drug use and ensure compliance with state laws while maintaining workplace safety."
    },
    {
        "id": "ELR_045",
        "text": "Under the Drug-Free Workplace Act, how must federal contractors handle marijuana use?",
        "options": [
            "Follow state laws regarding marijuana",
            "Treat marijuana as an illegal substance regardless of state laws",
            "Allow marijuana use outside of work hours",
            "Conduct random drug testing for all employees daily"
        ],
        "correctAnswer": "Treat marijuana as an illegal substance regardless of state laws",
        "explanation": "Federal contractors must comply with federal regulations, which still classify marijuana as illegal under the Drug-Free Workplace Act."
    },
    {
        "id": "ELR_046",
        "text": "Which of the following best describes reasonable-suspicion drug testing?",
        "options": [
            "Testing that occurs after an employee is suspected of being under the influence at work",
            "Testing that occurs on a completely random basis, regardless of suspicion",
            "Testing that only applies to job applicants before employment begins",
            "Testing that occurs at scheduled intervals as part of a recovery program"
        ],
        "correctAnswer": "Testing that occurs after an employee is suspected of being under the influence at work",
        "explanation": "Reasonable-suspicion drug testing is used when supervisors or management suspect impairment based on observed behavior or an accident."
    },
    {
        "id": "ELR_047",
        "text": "To ensure fairness and avoid discrimination claims, how should random drug testing be conducted?",
        "options": [
            "Employees should volunteer to be tested",
            "Testing should apply only to specific individuals based on their job title",
            "Employers should use a computer program to randomly select employees",
            "Managers should handpick employees they suspect are using drugs"
        ],
        "correctAnswer": "Employers should use a computer program to randomly select employees",
        "explanation": "Using a truly random selection process (e.g., a computer program) reduces legal risk and prevents claims of bias."
    },
    {
        "id": "ELR_048",
        "text": "Under the Americans with Disabilities Act (ADA), which of the following employees is protected?",
        "options": [
            "An employee who is currently using illegal drugs",
            "An employee who is in recovery for substance abuse",
            "An employee who is intoxicated at work due to alcohol use",
            "An employee who refuses to take a drug test"
        ],
        "correctAnswer": "An employee who is in recovery for substance abuse",
        "explanation": "The ADA does not protect current illegal drug users, but employees in recovery for substance abuse are protected."
    },
    {
        "id": "ELR_049",
        "text": "Which of the following best describes how employers should handle safety-sensitive positions regarding drug use?",
        "options": [
            "Employers should maintain strict no-use policies and enforce zero-tolerance rules",
            "Employers should allow employees to use substances as long as they are off the clock",
            "Employers should ignore drug policies to avoid lawsuits",
            "Employers should only conduct testing after a serious accident has occurred"
        ],
        "correctAnswer": "Employers should maintain strict no-use policies and enforce zero-tolerance rules",
        "explanation": "Employees in safety-sensitive positions (e.g., machinery operators, drivers) should not use substances that impair performance, even if legal."
    },
    [
    {
        "id": "ELR_050",
        "text": "Which of the following is not a recommended step for preventing workplace violence?",
        "options": [
            "Conducting risk assessments to identify potential threats",
            "Establishing a zero-tolerance workplace violence policy",
            "Allowing employees to handle workplace disputes on their own",
            "Enhancing security measures like access control and surveillance"
        ],
        "correctAnswer": "Allowing employees to handle workplace disputes on their own",
        "explanation": "Employers should not leave workplace disputes unaddressed. Instead, they should establish clear policies and reporting procedures to manage violence effectively."
    },
    {
        "id": "ELR_051",
        "text": "Why is intimate partner violence (IPV) a workplace concern for employers?",
        "options": [
            "It has no effect on the workplace since it is a personal issue",
            "Victims of IPV may experience job loss, decreased productivity, and workplace safety risks",
            "Only law enforcement agencies are responsible for addressing IPV, not employers",
            "IPV only affects employees in specific industries"
        ],
        "correctAnswer": "Victims of IPV may experience job loss, decreased productivity, and workplace safety risks",
        "explanation": "IPV can spill over into the workplace, affecting employee performance, safety, and retention, making it an HR concern."
    },
    {
        "id": "ELR_052",
        "text": "Which statement about workers' compensation insurance is false?",
        "options": [
            "It covers both injuries and work-related illnesses",
            "It is regulated at the state level",
            "Employers can self-insure instead of using a third-party carrier",
            "It only applies if an employer was at fault for the injury"
        ],
        "correctAnswer": "It only applies if an employer was at fault for the injury",
        "explanation": "Workers’ compensation is a no-fault system, meaning employees receive benefits regardless of who was at fault."
    },
    {
        "id": "ELR_053",
        "text": "Which of the following is an essential element of a workplace violence prevention program?",
        "options": [
            "A confidential and accessible system for reporting threats and violence",
            "A strict policy that only managers can report workplace violence",
            "A policy that requires proof before an employee can report an incident",
            "A process where only physical assaults qualify as workplace violence"
        ],
        "correctAnswer": "A confidential and accessible system for reporting threats and violence",
        "explanation": "Employees must feel safe reporting workplace violence incidents without fear of retaliation."
    },
    {
        "id": "ELR_054",
        "text": "Which of the following would be most effective in preventing workplace violence?",
        "options": [
            "Requiring employees to sign a workplace violence policy without any additional training",
            "Conducting regular workplace violence prevention training and emergency response drills",
            "Encouraging employees to ignore minor threats and only report serious incidents",
            "Relying solely on law enforcement to handle all workplace violence concerns"
        ],
        "correctAnswer": "Conducting regular workplace violence prevention training and emergency response drills",
        "explanation": "Training educates employees on recognizing, preventing, and responding to workplace violence effectively."
    },
    {
        "id": "ELR_055",
        "text": "Which of the following security measures would best help prevent workplace violence?",
        "options": [
            "Limiting employees’ ability to report incidents",
            "Implementing access controls, security cameras, and emergency response plans",
            "Only providing security training to executives and managers",
            "Waiting until an incident occurs before taking any action"
        ],
        "correctAnswer": "Implementing access controls, security cameras, and emergency response plans",
        "explanation": "Proactive security measures help deter workplace violence and protect employees from potential threats."
    },
    {
        "id": "ELR_056",
        "text": "How much does substance abuse in the workplace cost American employers annually?",
        "options": [
            "$10 billion",
            "$25 billion",
            "$81 billion",
            "$100 billion"
        ],
        "correctAnswer": "$81 billion",
        "explanation": "Substance abuse results in decreased productivity, absenteeism, turnover, and healthcare costs, totaling approximately $81 billion per year."
    },
    [
    {
        "id": "CSR_010",
        "text": "What is the primary role of a nongovernmental organization (NGO) in corporate social responsibility efforts?",
        "options": [
            "Enforcing corporate compliance with environmental laws",
            "Acting as an independent group to address social and humanitarian issues",
            "Overseeing employee compensation and labor union agreements",
            "Providing financial reports for corporations to share with stakeholders"
        ],
        "correctAnswer": "Acting as an independent group to address social and humanitarian issues",
        "explanation": "NGOs are nonprofit organizations that operate independently to address social, political, and environmental issues through advocacy, service, and grassroots organizing."
    },
    {
        "id": "CSR_011",
        "text": "Which of the following is not a benefit of corporate-sponsored volunteerism?",
        "options": [
            "Strengthens the company’s relationship with the community",
            "Creates tax-deductible opportunities for the employer",
            "Increases employee engagement and morale",
            "Guarantees higher profits for the business"
        ],
        "correctAnswer": "Guarantees higher profits for the business",
        "explanation": "While volunteerism improves community engagement and employee morale, it does not directly guarantee increased profits."
    },
    {
        "id": "CSR_012",
        "text": "Which of the following best describes how partnerships enhance CSR initiatives?",
        "options": [
            "They allow companies to share costs with competitors to reduce financial risks.",
            "They combine resources, expertise, and networks to achieve shared social and environmental goals.",
            "They provide corporations with direct control over governmental regulations.",
            "They ensure businesses remain exempt from legal CSR obligations."
        ],
        "correctAnswer": "They combine resources, expertise, and networks to achieve shared social and environmental goals.",
        "explanation": "CSR partnerships help businesses work with nonprofits, government agencies, and other organizations to maximize social and environmental impact."
    },
    {
        "id": "SAFETY_010",
        "text": "What is the purpose of the General Duty Clause in the Occupational Safety and Health Act (OSHA)?",
        "options": [
            "To provide specific regulations for all workplace hazards",
            "To require employers to maintain health insurance for employees",
            "To mandate that employers provide a workplace free from recognized hazards",
            "To ensure employees receive safety training before starting a job"
        ],
        "correctAnswer": "To mandate that employers provide a workplace free from recognized hazards",
        "explanation": "The General Duty Clause is a catch-all provision that requires employers to keep workplaces free from recognized hazards that could cause serious injury or death."
    },
    {
        "id": "SAFETY_011",
        "text": "How does the no-fault system in workers’ compensation benefit employees?",
        "options": [
            "Employees must prove their employer was negligent to receive compensation",
            "Employees are covered for work-related injuries even if they were partially at fault",
            "Only injuries caused by employer negligence are covered",
            "Employers are not required to provide compensation for workplace injuries"
        ],
        "correctAnswer": "Employees are covered for work-related injuries even if they were partially at fault",
        "explanation": "The no-fault system ensures that employees receive benefits for work-related injuries regardless of who was at fault."
    },
    {
        "id": "SAFETY_012",
        "text": "What determines the premium costs of workers' compensation insurance for employers?",
        "options": [
            "The industry standard for insurance costs",
            "The number of employees in the company",
            "The employer’s claims history and severity of past workplace injuries",
            "A fixed national rate set by OSHA"
        ],
        "correctAnswer": "The employer’s claims history and severity of past workplace injuries",
        "explanation": "Workers’ compensation is experience-rated, meaning higher claims lead to higher premiums, and fewer claims reduce costs."
    },
    {
        "id": "SAFETY_013",
        "text": "Which of the following best describes workplace violence?",
        "options": [
            "Any physical attack that occurs at a job site",
            "Any act or threat of physical violence, harassment, intimidation, or disruptive behavior at work",
            "Verbal disagreements between employees",
            "A situation where an employee refuses to follow company policies"
        ],
        "correctAnswer": "Any act or threat of physical violence, harassment, intimidation, or disruptive behavior at work",
        "explanation": "Workplace violence includes threats, harassment, physical attacks, and intimidation affecting employees, clients, or visitors."
    },
    [
    {
        "id": "DEI_010",
        "text": "How can HR best ensure that DEI initiatives remain effective over time?",
        "options": [
            "By making one-time adjustments to hiring processes.",
            "By regularly auditing and updating DEI policies based on workforce trends.",
            "By focusing only on recruitment and ignoring employee retention.",
            "By keeping DEI efforts separate from employee relations policies."
        ],
        "correctAnswer": "By regularly auditing and updating DEI policies based on workforce trends.",
        "explanation": "DEI initiatives must be continuously reviewed to adapt to changing workforce needs."
    },
    {
        "id": "DEI_011",
        "text": "A company wants to improve representation of women and minorities in leadership roles. What is the most effective way to achieve this?",
        "options": [
            "Setting strict hiring quotas for leadership positions.",
            "Implementing mentorship programs and leadership development training.",
            "Giving underrepresented employees automatic promotions.",
            "Avoiding leadership diversity discussions to maintain neutrality."
        ],
        "correctAnswer": "Implementing mentorship programs and leadership development training.",
        "explanation": "Career development programs create a long-term pipeline for diverse leadership representation."
    },
    {
        "id": "DEI_012",
        "text": "Which statement is true about voluntary affirmative action?",
        "options": [
            "Companies can voluntarily adopt affirmative action programs to promote workplace diversity.",
            "Companies can implement strict quotas to improve diversity.",
            "Only government-mandated affirmative action programs are legally valid.",
            "Affirmative action programs must replace non-diverse employees with underrepresented groups."
        ],
        "correctAnswer": "Companies can voluntarily adopt affirmative action programs to promote workplace diversity.",
        "explanation": "Many organizations choose to implement voluntary affirmative action to support corporate diversity goals."
    },
    {
        "id": "DEI_013",
        "text": "An employee complains that DEI initiatives favor certain groups and create reverse discrimination. What is the best response from HR?",
        "options": [
            "Explain that affirmative action is about ensuring equal opportunity, not favoritism.",
            "End all DEI programs to avoid controversy.",
            "Ignore the concern because DEI is legally required.",
            "Tell the employee that their concern is not valid."
        ],
        "correctAnswer": "Explain that affirmative action is about ensuring equal opportunity, not favoritism.",
        "explanation": "Education and communication are key to addressing misunderstandings about affirmative action and DEI."
    },
    {
        "id": "DEI_014",
        "text": "Which government agency enforces affirmative action compliance for federal contractors?",
        "options": [
            "Equal Employment Opportunity Commission (EEOC).",
            "Office of Federal Contract Compliance Programs (OFCCP).",
            "National Labor Relations Board (NLRB).",
            "Department of Homeland Security (DHS)."
        ],
        "correctAnswer": "Office of Federal Contract Compliance Programs (OFCCP).",
        "explanation": "The OFCCP enforces affirmative action requirements for federal contractors under Executive Order 11246."
    },
    {
        "id": "CSR_013",
        "text": "What are the three key components of the Triple Bottom Line (TBL) framework?",
        "options": [
            "Profit, People, and Planet",
            "Revenue, Responsibility, and Reputation",
            "Social, Economic, and Ethical Impact",
            "Sustainability, Governance, and Community"
        ],
        "correctAnswer": "Profit, People, and Planet",
        "explanation": "The Triple Bottom Line (TBL) concept, coined by John Elkington, emphasizes financial (profit), social (people), and environmental (planet) performance in business."
    },
    {
        "id": "CSR_014",
        "text": "Which of the following best describes corporate philanthropy as a CSR initiative?",
        "options": [
            "Encouraging employees to volunteer in local community projects",
            "Making charitable donations to support social causes and nonprofit organizations",
            "Forming business partnerships to address global economic issues",
            "Launching environmentally friendly products for consumers"
        ],
        "correctAnswer": "Making charitable donations to support social causes and nonprofit organizations",
        "explanation": "Philanthropy in CSR involves businesses making financial or in-kind donations to charitable organizations and social causes."
    },
[
    {
        "id": "ELR_011",
        "text": "A company is implementing a diversity, equity, and inclusion (DEI) strategy to foster an inclusive workplace. What is the most effective way for Employee and Labor Relations (ELR) professionals to contribute?",
        "options": [
            "Ensuring all employees receive mandatory diversity training once a year.",
            "Creating clear policies that address systemic biases and ensure equal opportunities.",
            "Requiring all hiring managers to meet strict diversity quotas in recruitment.",
            "Encouraging employees from underrepresented groups to advocate for themselves without HR involvement."
        ],
        "correctAnswer": "Creating clear policies that address systemic biases and ensure equal opportunities.",
        "explanation": "ELR professionals must go beyond training programs and focus on structural policies that embed DEI into hiring, promotions, and workplace culture."
    },
    {
        "id": "ELR_012",
        "text": "Which of the following statements about affirmative action is FALSE?",
        "options": [
            "Affirmative action is about providing unearned advantages to certain groups.",
            "Affirmative action does not legally allow for strict quotas in hiring.",
            "Affirmative action is used to remedy historical disparities in employment opportunities.",
            "Federal contractors meeting specific thresholds are required to have affirmative action plans."
        ],
        "correctAnswer": "Affirmative action is about providing unearned advantages to certain groups.",
        "explanation": "Affirmative action is not about favoritism; it aims to ensure equal access to opportunities, not give unfair advantages."
    },
    {
        "id": "ELR_013",
        "text": "A company is required to implement an affirmative action program after a discrimination lawsuit settlement. What is the primary purpose of this program?",
        "options": [
            "To ensure only underrepresented groups are hired for a set period.",
            "To establish placement goals for improving workforce diversity without imposing quotas.",
            "To replace existing employees with candidates from underrepresented backgrounds.",
            "To offer automatic promotions to employees from historically marginalized groups."
        ],
        "correctAnswer": "To establish placement goals for improving workforce diversity without imposing quotas.",
        "explanation": "Court-ordered affirmative action requires corrective steps, such as placement goals and targeted recruitment efforts—without mandating quotas."
    },
    {
        "id": "ELR_014",
        "text": "Which of the following is NOT a key component of an affirmative action plan (AAP)?",
        "options": [
            "Strict diversity quotas to ensure workforce representation.",
            "Availability analysis to compare labor market demographics with company workforce data.",
            "Placement goals to address underrepresentation in specific job groups.",
            "Internal audit and reporting system to track progress and compliance."
        ],
        "correctAnswer": "Strict diversity quotas to ensure workforce representation.",
        "explanation": "Quotas are illegal under affirmative action laws; instead, placement goals and workforce analysis help promote diversity."
    },
    {
        "id": "ELR_015",
        "text": "Which of the following organizations is most likely required by law to implement an affirmative action plan (AAP)?",
        "options": [
            "A private company with 40 employees.",
            "A federal contractor with a contract worth $60,000.",
            "A federal contractor with a contract worth $500,000.",
            "A small nonprofit with no government contracts."
        ],
        "correctAnswer": "A federal contractor with a contract worth $500,000.",
        "explanation": "Under Executive Order 11246, federal contractors with contracts exceeding $50,000 and 50+ employees must maintain an AAP."
    },
    {
        "id": "ELR_016",
        "text": "A company wants to build a sustainable DEI strategy. What is the most effective first step?",
        "options": [
            "Releasing a statement of commitment to DEI on the company website.",
            "Conducting a workforce demographic analysis to identify gaps in diversity.",
            "Implementing diversity training for all employees.",
            "Creating an employee resource group (ERG) for underrepresented employees."
        ],
        "correctAnswer": "Conducting a workforce demographic analysis to identify gaps in diversity.",
        "explanation": "Data-driven analysis allows HR to develop targeted DEI strategies based on actual workforce needs."
    },
    {
        "id": "ELR_017",
        "text": "An organization compares its current workforce demographics to external labor market data. This process is known as:",
        "options": [
            "Job group analysis.",
            "Incumbency-to-availability comparison.",
            "Internal workforce audit.",
            "Workforce benchmarking."
        ],
        "correctAnswer": "Incumbency-to-availability comparison.",
        "explanation": "This step in an AAP helps identify where underrepresentation exists and where recruitment efforts should focus."
    },
    [
    {
        "id": "ELR_018",
        "text": "A company is undergoing major restructuring, leading to layoffs. To minimize legal risks and maintain morale, HR should:",
        "options": [
            "Communicate business reasons for layoffs clearly and provide outplacement services.",
            "Keep details confidential to prevent employee anxiety.",
            "Announce layoffs suddenly to avoid speculation.",
            "Terminate senior employees first to preserve younger talent."
        ],
        "correctAnswer": "Communicate business reasons for layoffs clearly and provide outplacement services.",
        "explanation": "Transparency and support services help mitigate legal risks and maintain morale among remaining employees."
    },
    {
        "id": "ELR_019",
        "text": "Which of the following represents the best proactive approach to reducing employee disputes?",
        "options": [
            "Waiting for employees to raise concerns before addressing issues.",
            "Implementing regular feedback mechanisms, such as surveys and focus groups.",
            "Relying on disciplinary action as a deterrent for workplace conflicts.",
            "Using a reactive approach to disputes to avoid unnecessary policy changes."
        ],
        "correctAnswer": "Implementing regular feedback mechanisms, such as surveys and focus groups.",
        "explanation": "Proactively gathering feedback helps HR identify and address potential issues before they escalate."
    },
    {
        "id": "ELR_020",
        "text": "A tech company with a strong remote workforce is experiencing disengagement. Which approach would best strengthen employee relations?",
        "options": [
            "Mandate in-office work to improve engagement.",
            "Offer virtual team-building activities and remote collaboration tools.",
            "Provide higher salaries to increase motivation.",
            "Implement strict time tracking to improve accountability."
        ],
        "correctAnswer": "Offer virtual team-building activities and remote collaboration tools.",
        "explanation": "Engagement strategies must be tailored to remote work environments to maintain employee connection."
    },
    {
        "id": "ELR_021",
        "text": "Which of the following industries is most likely to require strict ELR compliance due to government regulations?",
        "options": [
            "Technology startups",
            "Healthcare organizations",
            "Marketing agencies",
            "Freelance consulting firms"
        ],
        "correctAnswer": "Healthcare organizations",
        "explanation": "Healthcare is highly regulated, requiring HR to manage compliance, labor laws, and potential union relations."
    },
    {
        "id": "ELR_022",
        "text": "HR wants to improve trust between employees and leadership. The most effective long-term strategy is:",
        "options": [
            "Encouraging open communication and transparency.",
            "Increasing salaries and bonuses.",
            "Restricting employee access to senior leadership to maintain authority.",
            "Only responding to issues when employees file complaints."
        ],
        "correctAnswer": "Encouraging open communication and transparency.",
        "explanation": "Trust is built through consistent, honest, and two-way communication."
    },
    {
        "id": "ELR_023",
        "text": "HR wants to use data analytics to improve employee relations. Which approach is most effective?",
        "options": [
            "Tracking engagement survey trends and identifying patterns over time.",
            "Relying on anecdotal feedback from managers.",
            "Focusing only on turnover rates to determine employee satisfaction.",
            "Ignoring qualitative data and relying only on quantitative metrics."
        ],
        "correctAnswer": "Tracking engagement survey trends and identifying patterns over time.",
        "explanation": "Long-term data trends provide valuable insights into engagement and retention."
    },
    {
        "id": "ELR_024",
        "text": "During a collective bargaining agreement negotiation, HR should focus on:",
        "options": [
            "Finding a win-win solution that benefits both employees and the company.",
            "Prioritizing cost-cutting measures over employee concerns.",
            "Avoiding negotiations to reduce union influence.",
            "Making concessions only when legally required."
        ],
        "correctAnswer": "Finding a win-win solution that benefits both employees and the company.",
        "explanation": "Effective negotiations foster positive labor relations and long-term stability."
    },
    [
    {
        "id": "ELR_025",
        "text": "A rapidly growing tech startup is experiencing an increase in employee disputes and compliance concerns. Currently, the HR department consists of one generalist handling all HR functions. Given the organization's expansion, which of the following actions would best align with effective employee and labor relations (ELR) management?",
        "options": [
            "Continue with the generalist model to maintain flexibility and cost-effectiveness.",
            "Hire a specialized ELR professional to manage compliance and conflict resolution.",
            "Train managers to handle conflicts without direct HR involvement.",
            "Outsource employee relations and compliance to an external legal firm."
        ],
        "correctAnswer": "Hire a specialized ELR professional to manage compliance and conflict resolution.",
        "explanation": "As the company grows, so do its compliance obligations and employee concerns. A dedicated ELR specialist ensures that disputes, compliance, and workplace culture are proactively managed."
    },
    {
        "id": "ELR_026",
        "text": "A multinational manufacturing company has locations in multiple countries, each with its own labor laws and cultural expectations. What should HR do to ensure consistent employee relations practices while respecting local differences?",
        "options": [
            "Standardize HR policies across all locations to ensure uniform compliance.",
            "Establish regional HR teams that tailor policies while aligning with corporate values.",
            "Rely on local managers to interpret and apply HR policies independently.",
            "Require all global employees to follow U.S. labor laws to maintain consistency."
        ],
        "correctAnswer": "Establish regional HR teams that tailor policies while aligning with corporate values.",
        "explanation": "While corporate values should remain consistent, local labor laws and cultural norms require region-specific adaptation of employee relations practices."
    },
    {
        "id": "ELR_027",
        "text": "An HR manager is responsible for handling disputes in both unionized and non-unionized environments. How should their approach differ?",
        "options": [
            "In unionized environments, follow grievance procedures outlined in the collective bargaining agreement (CBA); in non-unionized workplaces, use direct mediation and progressive discipline.",
            "Treat both workplaces the same to ensure fairness in handling disputes.",
            "Encourage employees in unionized workplaces to handle conflicts directly with supervisors, avoiding the union.",
            "Prioritize arbitration in non-unionized settings and informal resolution in unionized settings."
        ],
        "correctAnswer": "In unionized environments, follow grievance procedures outlined in the collective bargaining agreement (CBA); in non-unionized workplaces, use direct mediation and progressive discipline.",
        "explanation": "Unionized settings require adherence to contractual grievance procedures, while non-unionized workplaces offer more flexibility in progressive discipline and mediation."
    },
    {
        "id": "ELR_028",
        "text": "A U.S.-based company is expanding to Southeast Asia, where workplace communication is often indirect and hierarchical. What is the best approach for HR to ensure effective employee relations?",
        "options": [
            "Train local employees to adopt Western-style direct communication.",
            "Adapt HR strategies to respect cultural communication norms.",
            "Apply the same performance feedback process used in the U.S. to maintain fairness.",
            "Encourage employees to speak up in meetings by implementing an anonymous feedback tool."
        ],
        "correctAnswer": "Adapt HR strategies to respect cultural communication norms.",
        "explanation": "Cultural intelligence means adjusting HR practices to fit local norms, ensuring that engagement and feedback align with regional expectations."
    }
];

export default questions;
