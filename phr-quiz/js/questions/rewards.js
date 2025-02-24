// rewards.js
const questions = [
    {
        id: "REW_001",
        text: "A tech firm's compensation data shows 25% pay disparity in similar roles. HR must analyze equity issues. What's the most effective approach?",
        options: [
            "Present salary range distributions",
            "Apply regression analysis to identify systemic pay factors",
            "Share market benchmark data",
            "Review performance ratings correlation"
        ],
        correctAnswer: "Apply regression analysis to identify systemic pay factors",
        explanation: "Regression analysis systematically identifies underlying pay disparities while controlling for legitimate factors, enabling strategic correction. Range distributions describe tactically, benchmarks compare externally, and ratings correlation addresses only performance factors."
    },
    {
        id: "REW_002",
        text: "A healthcare provider's benefits utilization shows 30% below target despite high costs. HR needs to analyze participation barriers. What's the best analytical method?",
        options: [
            "Track enrollment trends",
            "Model cost-value analysis against employee segments",
            "Share industry benchmarks",
            "Review communication metrics"
        ],
        correctAnswer: "Model cost-value analysis against employee segments",
        explanation: "Cost-value analysis by segment provides systemic insight into benefit value perception and barriers. Trends describe tactically, benchmarks compare externally, and communication metrics focus narrowly on awareness."
    },
    {
        id: "REW_003",
        text: "A company's sales incentive program shows declining motivation despite market-competitive payouts. What's the most rigorous analytical approach?",
        options: [
            "Present payout distribution data",
            "Apply expectancy theory metrics to evaluate motivation factors",
            "Share competitor incentive plans",
            "Review sales performance trends"
        ],
        correctAnswer: "Apply expectancy theory metrics to evaluate motivation factors",
        explanation: "Expectancy theory metrics systematically evaluate effort-reward relationships and perceived value. Distributions describe tactically, competitor plans benchmark narrowly, and performance trends show symptoms without causes."
    },
    {
        id: "REW_004",
        text: "An organization's merit budget faces cuts while targeting high performance. HR must analyze impact. What's the most strategic contribution?",
        options: [
            "Share historical merit trends",
            "Model retention risk against compensation elasticity",
            "Present market pay gaps",
            "Review performance distribution"
        ],
        correctAnswer: "Model retention risk against compensation elasticity",
        explanation: "Modeling retention risk with compensation elasticity provides systemic insight into budget impact on talent retention. Trends describe tactically, gaps compare externally, and performance distribution shifts focus from retention."
    },
    {
        id: "REW_005",
        text: "A retail chain's variable pay program shows inconsistent impact across locations. HR needs to analyze effectiveness. What's the best approach?",
        options: [
            "Track payout variations",
            "Analyze store performance factors with pay-productivity correlation",
            "Share industry incentive data",
            "Review employee feedback themes"
        ],
        correctAnswer: "Analyze store performance factors with pay-productivity correlation",
        explanation: "Analyzing performance factors with pay correlation provides systemic insight into program effectiveness. Variations describe tactically, industry data compares externally, and feedback themes provide limited perspective."
    },
    {
    "id": "REW_007",
    "text": "What is a key difference between a Health FSA and a Dependent Care FSA?",
    "options": [
        "Dependent Care FSAs have no contribution limits",
        "Health FSAs allow reimbursement before funds are deducted, whereas Dependent Care FSAs do not",
        "Dependent Care FSAs cover medical expenses, while Health FSAs do not",
        "Health FSAs can be changed at any time, while Dependent Care FSAs cannot"
    ],
    correctAnswer: "Health FSAs allow reimbursement before funds are deducted, whereas Dependent Care FSAs do not",
    "explanation": "Health FSAs provide immediate access to the full annual contribution amount, whereas Dependent Care FSAs require funds to be available before reimbursement. Dependent Care FSAs (A) do have contribution limits, they do not cover medical expenses (C), and FSAs (D) can only be changed during qualifying life events."
},
{
    "id": "REW_008",
    "text": "What is the primary purpose of a cafeteria plan in employee benefits?",
    "options": [
        "To provide meal reimbursements for employees",
        "To allow employees to choose from a variety of pre-tax benefit options",
        "To provide free snacks and beverages in the workplace",
        "To ensure all employees receive the same benefits package"
    ],
    "correctAnswer": "To allow employees to choose from a variety of pre-tax benefit options",
    "explanation": "Cafeteria plans offer employees flexibility in selecting benefits that best suit their needs on a pre-tax basis. Meal reimbursements (A) are separate, free snacks (C) are a workplace perk, and equal benefits for all (D) contradicts the plan’s customization intent."
},
{
    "id": "REW_009",
    "text": "Which of the following is a key advantage of an Employee Assistance Program (EAP)?",
    "options": [
        "It eliminates the need for employee wellness programs",
        "It provides counseling and support services to employees at a low cost to employers",
        "It allows employees to access emergency healthcare services",
        "It replaces workers’ compensation coverage for mental health claims"
    ],
    "correctAnswer": "It provides counseling and support services to employees at a low cost to employers",
    "explanation": "EAPs offer confidential counseling and support services, improving employee well-being while being cost-effective for employers. They do not replace wellness programs (A), emergency healthcare (C), or workers’ compensation coverage (D)."
},
{
    "id": "REW_010",
    "text": "Which of the following is an example of required written communication for employee benefits under ERISA?",
    "options": [
        "Employee Referral Bonus Notice",
        "Summary Plan Description (SPD)",
        "Internal Company Newsletter",
        "Annual Employee Performance Review Notice"
    ],
    "correctAnswer": "Summary Plan Description (SPD)",
    "explanation": "ERISA mandates that employers provide employees with an SPD outlining their benefits and rights. Referral bonus notices (A) and newsletters (C) are internal communications, and performance review notices (D) relate to employee evaluations, not benefits."
},
{
    "id": "REW_011",
    "text": "How do Employee Self-Service (ESS) platforms benefit both employees and employers?",
    "options": [
        "They allow employees to enroll in benefits and update information while reducing HR workload",
        "They replace the need for HR departments altogether",
        "They provide guaranteed raises and bonuses for employees",
        "They eliminate the need for employee performance reviews"
    ],
    "correctAnswer": "They allow employees to enroll in benefits and update information while reducing HR workload",
    "explanation": "ESS platforms empower employees to manage their benefits and personal data, reducing HR's administrative burden. They do not replace HR entirely (B), guarantee raises (C), or eliminate performance reviews (D)."
},
{
    "id": "REW_012",
    "text": "What is a key factor to consider when communicating compensation and benefits to employees?",
    "options": [
        "Avoid providing too much detail to prevent employee confusion",
        "Ensure communication is clear, timely, and aligned with compensation philosophy",
        "Only provide communication during onboarding",
        "Limit access to information to avoid complaints"
    ],
    "correctAnswer": "Ensure communication is clear, timely, and aligned with compensation philosophy",
    "explanation": "Effective communication ensures employees understand their total rewards package, fostering engagement and satisfaction. Withholding details (A) and limiting access (D) create transparency issues, while restricting communication to onboarding (C) overlooks ongoing updates."
},
{
    "id": "REW_013",
    "text": "Which of the following is an example of a workplace amenity designed to encourage employees to return to the office?",
    "options": [
        "Remote work stipends",
        "Virtual wellness programs",
        "On-site fitness centers and free meals",
        "Paid internet for home office setups"
    ],
    "correctAnswer": "On-site fitness centers and free meals",
    "explanation": "Physical workplace amenities such as fitness centers and meals enhance the in-office experience and incentivize employees to return. Remote stipends (A), virtual programs (B), and home internet (D) support remote work rather than office attendance."
},
{
    "id": "REW_014",
    "text": "How can HR help reduce perceived inequity between remote and in-office employees regarding workplace amenities?",
    "options": [
        "Offering on-site gym access to remote employees",
        "Providing equivalent benefits such as wellness stipends and meal reimbursements",
        "Mandating all employees return to the office",
        "Eliminating workplace amenities altogether"
    ],
    "correctAnswer": "Providing equivalent benefits such as wellness stipends and meal reimbursements",
    "explanation": "Offering comparable perks for remote employees, such as stipends and reimbursements, ensures fairness. Gym access (A) is impractical for remote workers, mandatory office return (C) may reduce flexibility, and removing amenities (D) negates retention incentives."
},
{
    "id": "REW_015",
    "text": "What is a common issue with 'Employee of the Month' recognition programs?",
    "options": [
        "They always result in higher employee turnover",
        "They can create unhealthy competition and resentment among employees",
        "They are too expensive to maintain",
        "Employees do not care about recognition programs"
    ],
    "correctAnswer": "They can create unhealthy competition and resentment among employees",
    "explanation": "While well-intentioned, 'Employee of the Month' programs can foster favoritism or resentment if not implemented fairly. They do not inherently increase turnover, cost concerns depend on implementation, and most employees value recognition."
},
{
    "id": "REW_016",
    "text": "Which employee recognition method allows team members to acknowledge each other's contributions?",
    "options": [
        "Spot awards",
        "Employee of the Month",
        "Peer-to-peer recognition",
        "Longevity awards"
    ],
    "correctAnswer": "Peer-to-peer recognition",
    "explanation": "Peer-to-peer recognition encourages inclusivity by allowing colleagues to celebrate each other's contributions. Spot awards are manager-driven, Employee of the Month is top-down, and longevity awards recognize tenure rather than daily contributions."
},
{
    "id": "REW_017",
    "text": "Which of the following is NOT a typical benefit of workplace wellness programs?",
    "options": [
        "Increased productivity",
        "Reduced turnover",
        "Guaranteed elimination of healthcare costs",
        "Reduced absenteeism"
    ],
    "correctAnswer": "Guaranteed elimination of healthcare costs",
    "explanation": "Wellness programs improve productivity, retention, and attendance but cannot completely eliminate healthcare costs. Productivity, turnover reduction, and absenteeism improvements are documented benefits."
},
{
    "id": "REW_018",
    "text": "Why must Flexible Spending Account (FSA) contributions be carefully estimated by employees?",
    "options": [
        "Contributions are taxable if not used within the calendar year",
        "Any unused funds are forfeited at year-end unless the employer offers a rollover option",
        "Employees must return the unused funds to the IRS",
        "Contributions cannot be adjusted under any circumstances"
    ],
    "correctAnswer": "Any unused funds are forfeited at year-end unless the employer offers a rollover option",
    "explanation": "FSAs operate on a 'use it or lose it' basis unless the employer allows limited rollovers. FSAs remain tax-free, funds do not go to the IRS, and contribution adjustments are possible under qualifying events."
},
{
    "id": "REW_019",
    "text": "How does the IRS treat employer-paid group life insurance policies exceeding $50,000?",
    "options": [
        "The entire amount is tax-exempt",
        "The excess amount is treated as taxable imputed income",
        "Employees must pay an additional premium to retain the benefit",
        "The insurance payout is taxed at the time of the employee’s retirement"
    ],
    "correctAnswer": "The excess amount is treated as taxable imputed income",
    "explanation": "Under IRS rules, employer-paid group life insurance coverage exceeding $50,000 is considered a taxable benefit, and the excess portion is subject to imputed income tax. The entire amount is not tax-exempt, additional premiums are not required to maintain the benefit, and insurance payouts are typically tax-free."
},
{
    "id": "REW_020",
    "text": "What is the primary purpose of stop-loss insurance in a self-funded health plan?",
    "options": [
        "To eliminate the need for a third-party administrator",
        "To provide coverage for employees’ dependents at no extra cost",
        "To protect the employer from excessive claims exceeding a preset limit",
        "To ensure that all medical expenses are reimbursed in full"
    ],
    "correctAnswer": "To protect the employer from excessive claims exceeding a preset limit",
    "explanation": "Stop-loss insurance safeguards self-insured employers by capping financial liability on high claims. It does not eliminate third-party administrators, automatically cover dependents, or guarantee full reimbursement of medical expenses."
},
{
    "id": "REW_021",
    "text": "Which of the following is an example of a non-monetary health benefit?",
    "options": [
        "Paid time off for medical appointments",
        "Employee Stock Purchase Plans (ESPPs)",
        "Profit-sharing bonuses",
        "Reimbursement for relocation expenses"
    ],
    "correctAnswer": "Paid time off for medical appointments",
    "explanation": "Non-monetary health benefits improve employee well-being without direct financial compensation, such as PTO for medical needs. Employee stock purchase plans and profit-sharing involve financial incentives, while relocation reimbursement supports job transitions."
},
{
    "id": "REW_022",
    "text": "How do health purchasing alliances (HPAs) benefit smaller employers?",
    "options": [
        "They allow small businesses to self-insure their employees",
        "They enable small businesses to negotiate lower insurance costs by pooling resources",
        "They replace employer-sponsored insurance with government-funded healthcare",
        "They provide unlimited access to Fee-for-Service (FFS) plans"
    ],
    "correctAnswer": "They enable small businesses to negotiate lower insurance costs by pooling resources",
    "explanation": "HPAs help small businesses leverage group purchasing power to lower insurance costs. They do not promote self-insurance, replace employer-sponsored insurance, or guarantee unlimited access to Fee-for-Service plans."
},
{
    "id": "REW_023",
    "text": "What is the primary goal of wellness programs in employer-sponsored health plans?",
    "options": [
        "To replace traditional health insurance plans",
        "To improve employee health and reduce insurance claim costs",
        "To provide free gym memberships for employees",
        "To eliminate employer liability for employee health issues"
    ],
    "correctAnswer": "To improve employee health and reduce insurance claim costs",
    "explanation": "Wellness programs aim to enhance employee health, leading to lower healthcare costs and fewer claims. They do not replace health insurance, focus solely on gym memberships, or absolve employers of liability."
},
{
    id: "REW_024",
    text: "What is a key characteristic of an Accidental Death & Dismemberment (AD&D) insurance policy?",
    options: [
        "It covers medical expenses for injuries from any cause",
        "It provides benefits only in cases of death due to illness",
        "It provides payouts for accidental death or loss of bodily function",
        "It replaces workers’ compensation benefits"
    ],
    correctAnswer: "It provides payouts for accidental death or loss of bodily function",
    explanation: "AD&D insurance covers death or severe injury resulting from accidents. It does not cover general medical expenses, illness-related deaths, or serve as a substitute for workers’ compensation."
},
{
    id: "REW_025",
    text: "What is a primary advantage of an unlimited paid time off (PTO) policy for employers?",
    options: [
        "Employees are less likely to take time off",
        "Employers are not required to track accrued leave",
        "It guarantees that employees will not take excessive leave",
        "It eliminates the need for sick leave policies"
    ],
    correctAnswer: "Employers are not required to track accrued leave",
    explanation: "Unlimited PTO removes the administrative burden of tracking leave balances. It does not reduce time-off requests, guarantee controlled usage, or replace sick leave policies, which may still be required."
},
{
    id: "REW_026",
    text: "Which health plan provides flexibility by allowing employees to see both in-network and out-of-network providers with different cost structures?",
    options: [
        "Exclusive Provider Organization (EPO)",
        "Health Maintenance Organization (HMO)",
        "Preferred Provider Organization (PPO)",
        "Fee-for-Service (FFS)"
    ],
    correctAnswer: "Preferred Provider Organization (PPO)",
    explanation: "PPOs offer flexibility by allowing members to use both in-network and out-of-network providers, though out-of-network care is more expensive. EPOs limit coverage to in-network providers, HMOs require referrals and restrict provider choice, and FFS plans require full out-of-pocket payment before reimbursement."
},
{
    id: "REW_027",
    text: "What is the primary characteristic of a Fee-for-Service (FFS) medical plan?",
    options: [
        "It is typically the most expensive option for employers and employees",
        "It limits access to specific hospitals and providers",
        "It requires a primary care physician for referrals",
        "It offers discounted rates through provider networks"
    ],
    correctAnswer: "It is typically the most expensive option for employers and employees",
    explanation: "FFS plans allow full provider choice but are costly due to higher premiums and out-of-pocket expenses. They do not limit provider access, require referrals, or offer negotiated network discounts like managed care plans."
},
{
    id: "REW_028",
    text: "What is the key difference between an Exclusive Provider Organization (EPO) and a Preferred Provider Organization (PPO)?",
    options: [
        "EPOs do not cover out-of-network care, whereas PPOs allow it at a higher cost",
        "PPOs require referrals from a primary care physician, whereas EPOs do not",
        "EPOs are only available for large employers, while PPOs are for small businesses",
        "PPOs limit hospital networks, whereas EPOs allow any hospital"
    ],
    correctAnswer: "EPOs do not cover out-of-network care, whereas PPOs allow it at a higher cost",
    explanation: "EPOs require members to use in-network providers, while PPOs offer partial reimbursement for out-of-network services. PPOs do not require referrals, EPOs are not exclusive to large employers, and neither plan allows unrestricted hospital choice."
},
{
    id: "REW_029",
    text: "What is an experience rating in healthcare insurance?",
    options: [
        "A method used to set premiums based on a group’s claim history",
        "A patient review system for doctors",
        "A measure of how long an employee has been covered by insurance",
        "A fixed employer contribution toward employee health benefits"
    ],
    correctAnswer: "A method used to set premiums based on a group’s claim history",
    explanation: "Experience rating adjusts insurance premiums based on a group’s past medical claims. It is unrelated to doctor reviews, employee tenure, or fixed employer contributions."
},
{
    id: "REW_030",
    text: "Which of the following benefits is most commonly bundled with medical or dental insurance at a low rate?",
    options: [
        "Disability insurance",
        "Life insurance",
        "Paid time off (PTO)",
        "Student loan repayment"
    ],
    correctAnswer: "Life insurance",
    explanation: "Life insurance is frequently bundled with medical or dental plans due to its low cost and simple administration. Disability insurance requires separate underwriting, PTO is a workplace policy rather than an insurance benefit, and student loan repayment is unrelated to health coverage."
},
{
    id: "REW_031",
    text: "Which health plan type provides the highest level of control over provider selection but requires the insured to submit claims for reimbursement?",
    options: [
        "Fee-for-Service (FFS)",
        "Preferred Provider Organization (PPO)",
        "Exclusive Provider Organization (EPO)",
        "Health Maintenance Organization (HMO)"
    ],
    correctAnswer: "Fee-for-Service (FFS)",
    explanation: "FFS plans allow unrestricted provider choice but require employees to pay upfront and submit claims for reimbursement. PPOs, EPOs, and HMOs offer varying levels of network restrictions and cost-sharing but do not require claims submission in the same way."
},
{
    id: "REW_032",
    text: "What is the purpose of the coordination of benefits (COB) process in health insurance?",
    options: [
        "To determine the total premium an employee must pay",
        "To coordinate employer and employee contributions to healthcare plans",
        "To determine which insurance pays first when an employee has multiple plans",
        "To ensure that employees only have one health insurance provider"
    ],
    correctAnswer: "To determine which insurance pays first when an employee has multiple plans",
    explanation: "COB establishes the primary and secondary insurance providers when an employee has multiple policies, ensuring proper claim payments. It does not determine premiums, coordinate contributions, or limit employees to one provider."
},  
{
    id: "REW_033",
    text: "Which of the following benefits is typically included in a cafeteria plan?",
    options: [
        "Employer-mandated health benefits only",
        "A fixed set of employer-chosen benefits with no customization",
        "A menu of benefits that employees can choose based on personal needs",
        "Only employer-funded retirement contributions"
    ],
    correctAnswer: "A menu of benefits that employees can choose based on personal needs",
    explanation: "Cafeteria plans allow employees to select from a variety of pre-tax benefits tailored to their needs. Employer-mandated benefits are required but not part of cafeteria plans, fixed benefit sets limit customization, and these plans typically include more than just retirement contributions."
},
{
    id: "REW_034",
    text: "Which of the following is an example of a work-life balance benefit?",
    options: [
        "401(k) retirement plan",
        "Life insurance",
        "Paid parental leave",
        "COBRA continuation coverage"
    ],
    correctAnswer: "Paid parental leave",
    explanation: "Work-life balance benefits support employees' personal and professional lives, such as paid parental leave. Retirement plans and life insurance are financial benefits, while COBRA ensures continued health coverage but does not directly enhance work-life balance."
},
{
    id: "REW_035",
    text: "What does a profit-sharing plan involve?",
    options: [
        "A set percentage of company earnings distributed to employees' retirement accounts",
        "Employees contributing a percentage of their wages to retirement",
        "Government-mandated pension contributions",
        "Fixed employer contributions based on employees' tenure"
    ],
    correctAnswer: "A set percentage of company earnings distributed to employees' retirement accounts",
    explanation: "Profit-sharing plans allocate a portion of company profits to employees' retirement accounts. Employee contributions refer to traditional retirement plans, government-mandated pensions follow separate regulations, and employer tenure-based contributions apply to some pension structures but not profit-sharing."
},
{
    id: "REW_036",
    text: "What is the purpose of a vesting schedule in an employer-sponsored retirement plan?",
    options: [
        "It determines how much an employee can withdraw before age 65",
        "It sets the timeline for employees to gain full ownership of employer contributions",
        "It limits employer contributions to retirement accounts",
        "It determines the interest rate on 401(k) accounts"
    ],
    correctAnswer: "It sets the timeline for employees to gain full ownership of employer contributions",
    explanation: "Vesting schedules dictate when employees fully own employer contributions to their retirement plans. Withdrawal limits, employer contribution caps, and interest rates are governed by other plan rules and financial institutions."
},
{
    id: "REW_037",
    text: "Which law established minimum funding requirements for pension plans?",
    options: [
        "Fair Labor Standards Act (FLSA)",
        "Consolidated Omnibus Budget Reconciliation Act (COBRA)",
        "Employee Retirement Income Security Act (ERISA)",
        "Social Security Act"
    ],
    correctAnswer: "Employee Retirement Income Security Act (ERISA)",
    explanation: "ERISA regulates pension plans, setting minimum funding and fiduciary responsibilities. FLSA governs wages, COBRA provides continued health coverage, and the Social Security Act administers federal retirement benefits."
},
{
    id: "REW_038",
    text: "Which of the following is NOT considered a health and welfare benefit?",
    options: [
        "Disability insurance",
        "Life insurance",
        "Profit-sharing plan",
        "Dental insurance"
    ],
    correctAnswer: "Profit-sharing plan",
    explanation: "Health and welfare benefits include insurance and healthcare-related programs, while profit-sharing is a financial incentive tied to company performance rather than employee well-being."
},
{
    id: "REW_039",
    text: "What is the main feature of a Health Maintenance Organization (HMO)?",
    options: [
        "It allows patients to see any doctor without a referral",
        "It requires a primary care physician (PCP) to coordinate care",
        "It provides unlimited out-of-network coverage",
        "It reimburses patients for any out-of-pocket medical expenses"
    ],
    correctAnswer: "It requires a primary care physician (PCP) to coordinate care",
    explanation: "HMOs require members to choose a primary care physician who manages referrals and care. They restrict out-of-network coverage, do not allow unrestricted provider access, and do not guarantee reimbursement for all medical expenses."
}


];

export default questions;
