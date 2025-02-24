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
    id: "REW_007",
    text: "What is a key difference between a Health FSA and a Dependent Care FSA?",
    options: [
        "Dependent Care FSAs have no contribution limits",
        "Health FSAs allow reimbursement before funds are deducted, whereas Dependent Care FSAs do not",
        "Dependent Care FSAs cover medical expenses, while Health FSAs do not",
        "Health FSAs can be changed at any time, while Dependent Care FSAs cannot"
    ],
    correctAnswer: "Health FSAs allow reimbursement before funds are deducted, whereas Dependent Care FSAs do not",
    explanation: "Health FSAs provide immediate access to the full annual contribution amount, whereas Dependent Care FSAs require funds to be available before reimbursement. Dependent Care FSAs (A) do have contribution limits, they do not cover medical expenses (C), and FSAs (D) can only be changed during qualifying life events."
},
{
    id: "REW_008",
    text: "What is the primary purpose of a cafeteria plan in employee benefits?",
    options: [
        "To provide meal reimbursements for employees",
        "To allow employees to choose from a variety of pre-tax benefit options",
        "To provide free snacks and beverages in the workplace",
        "To ensure all employees receive the same benefits package"
    ],
    correctAnswer: "To allow employees to choose from a variety of pre-tax benefit options",
    explanation: "Cafeteria plans offer employees flexibility in selecting benefits that best suit their needs on a pre-tax basis. Meal reimbursements (A) are separate, free snacks (C) are a workplace perk, and equal benefits for all (D) contradicts the plan’s customization intent."
},
{
    id: "REW_009",
    text: "Which of the following is a key advantage of an Employee Assistance Program (EAP)?",
    options: [
        "It eliminates the need for employee wellness programs",
        "It provides counseling and support services to employees at a low cost to employers",
        "It allows employees to access emergency healthcare services",
        "It replaces workers’ compensation coverage for mental health claims"
    ],
    correctAnswer: "It provides counseling and support services to employees at a low cost to employers",
    explanation: "EAPs offer confidential counseling and support services, improving employee well-being while being cost-effective for employers. They do not replace wellness programs (A), emergency healthcare (C), or workers’ compensation coverage (D)."
},
{
    id: "REW_010",
    text: "Which of the following is an example of required written communication for employee benefits under ERISA?",
    options: [
        "Employee Referral Bonus Notice",
        "Summary Plan Description (SPD)",
        "Internal Company Newsletter",
        "Annual Employee Performance Review Notice"
    ],
    correctAnswer: "Summary Plan Description (SPD)",
    explanation: "ERISA mandates that employers provide employees with an SPD outlining their benefits and rights. Referral bonus notices (A) and newsletters (C) are internal communications, and performance review notices (D) relate to employee evaluations, not benefits."
},
{
    id: "REW_011",
    text: "How do Employee Self-Service (ESS) platforms benefit both employees and employers?",
    options: [
        "They allow employees to enroll in benefits and update information while reducing HR workload",
        "They replace the need for HR departments altogether",
        "They provide guaranteed raises and bonuses for employees",
        "They eliminate the need for employee performance reviews"
    ],
    correctAnswer: "They allow employees to enroll in benefits and update information while reducing HR workload",
    explanation: "ESS platforms empower employees to manage their benefits and personal data, reducing HR's administrative burden. They do not replace HR entirely (B), guarantee raises (C), or eliminate performance reviews (D)."
},
{
    id: "REW_012",
    text: "What is a key factor to consider when communicating compensation and benefits to employees?",
    options: [
        "Avoid providing too much detail to prevent employee confusion",
        "Ensure communication is clear, timely, and aligned with compensation philosophy",
        "Only provide communication during onboarding",
        "Limit access to information to avoid complaints"
    ],
    correctAnswer: "Ensure communication is clear, timely, and aligned with compensation philosophy",
    explanation: "Effective communication ensures employees understand their total rewards package, fostering engagement and satisfaction. Withholding details (A) and limiting access (D) create transparency issues, while restricting communication to onboarding (C) overlooks ongoing updates."
},
{
    id: "REW_013",
    text: "Which of the following is an example of a workplace amenity designed to encourage employees to return to the office?",
    options: [
        "Remote work stipends",
        "Virtual wellness programs",
        "On-site fitness centers and free meals",
        "Paid internet for home office setups"
    ],
    correctAnswer: "On-site fitness centers and free meals",
    explanation: "Physical workplace amenities such as fitness centers and meals enhance the in-office experience and incentivize employees to return. Remote stipends (A), virtual programs (B), and home internet (D) support remote work rather than office attendance."
},
{
    id: "REW_014",
    text: "How can HR help reduce perceived inequity between remote and in-office employees regarding workplace amenities?",
    options: [
        "Offering on-site gym access to remote employees",
        "Providing equivalent benefits such as wellness stipends and meal reimbursements",
        "Mandating all employees return to the office",
        "Eliminating workplace amenities altogether"
    ],
    correctAnswer: "Providing equivalent benefits such as wellness stipends and meal reimbursements",
    explanation: "Offering comparable perks for remote employees, such as stipends and reimbursements, ensures fairness. Gym access (A) is impractical for remote workers, mandatory office return (C) may reduce flexibility, and removing amenities (D) negates retention incentives."
},
{
    id: "REW_015",
    text: "What is a common issue with 'Employee of the Month' recognition programs?",
    options: [
        "They always result in higher employee turnover",
        "They can create unhealthy competition and resentment among employees",
        "They are too expensive to maintain",
        "Employees do not care about recognition programs"
    ],
    correctAnswer: "They can create unhealthy competition and resentment among employees",
    explanation: "While well-intentioned, 'Employee of the Month' programs can foster favoritism or resentment if not implemented fairly. They do not inherently increase turnover, cost concerns depend on implementation, and most employees value recognition."
},
{
    id: "REW_016",
    text: "Which employee recognition method allows team members to acknowledge each other's contributions?",
    options: [
        "Spot awards",
        "Employee of the Month",
        "Peer-to-peer recognition",
        "Longevity awards"
    ],
    correctAnswer: "Peer-to-peer recognition",
    explanation: "Peer-to-peer recognition encourages inclusivity by allowing colleagues to celebrate each other's contributions. Spot awards are manager-driven, Employee of the Month is top-down, and longevity awards recognize tenure rather than daily contributions."
},
{
    id: "REW_017",
    text: "Which of the following is NOT a typical benefit of workplace wellness programs?",
    options: [
        "Increased productivity",
        "Reduced turnover",
        "Guaranteed elimination of healthcare costs",
        "Reduced absenteeism"
    ],
    correctAnswer: "Guaranteed elimination of healthcare costs",
    explanation: "Wellness programs improve productivity, retention, and attendance but cannot completely eliminate healthcare costs. Productivity, turnover reduction, and absenteeism improvements are documented benefits."
},
{
    id: "REW_018",
    text: "Why must Flexible Spending Account (FSA) contributions be carefully estimated by employees?",
    options: [
        "Contributions are taxable if not used within the calendar year",
        "Any unused funds are forfeited at year-end unless the employer offers a rollover option",
        "Employees must return the unused funds to the IRS",
        "Contributions cannot be adjusted under any circumstances"
    ],
    correctAnswer: "Any unused funds are forfeited at year-end unless the employer offers a rollover option",
    explanation: "FSAs operate on a 'use it or lose it' basis unless the employer allows limited rollovers. FSAs remain tax-free, funds do not go to the IRS, and contribution adjustments are possible under qualifying events."
},
{
    id: "REW_019",
    text: "How does the IRS treat employer-paid group life insurance policies exceeding $50,000?",
    options: [
        "The entire amount is tax-exempt",
        "The excess amount is treated as taxable imputed income",
        "Employees must pay an additional premium to retain the benefit",
        "The insurance payout is taxed at the time of the employee’s retirement"
    ],
    correctAnswer: "The excess amount is treated as taxable imputed income",
    explanation: "Under IRS rules, employer-paid group life insurance coverage exceeding $50,000 is considered a taxable benefit, and the excess portion is subject to imputed income tax. The entire amount is not tax-exempt, additional premiums are not required to maintain the benefit, and insurance payouts are typically tax-free."
},
{
    id: "REW_020",
    text: "What is the primary purpose of stop-loss insurance in a self-funded health plan?",
    options: [
        "To eliminate the need for a third-party administrator",
        "To provide coverage for employees’ dependents at no extra cost",
        "To protect the employer from excessive claims exceeding a preset limit",
        "To ensure that all medical expenses are reimbursed in full"
    ],
    correctAnswer: "To protect the employer from excessive claims exceeding a preset limit",
    explanation: "Stop-loss insurance safeguards self-insured employers by capping financial liability on high claims. It does not eliminate third-party administrators, automatically cover dependents, or guarantee full reimbursement of medical expenses."
},
{
    id: "REW_021",
    text: "Which of the following is an example of a non-monetary health benefit?",
    options: [
        "Paid time off for medical appointments",
        "Employee Stock Purchase Plans (ESPPs)",
        "Profit-sharing bonuses",
        "Reimbursement for relocation expenses"
    ],
    correctAnswer: "Paid time off for medical appointments",
    explanation: "Non-monetary health benefits improve employee well-being without direct financial compensation, such as PTO for medical needs. Employee stock purchase plans and profit-sharing involve financial incentives, while relocation reimbursement supports job transitions."
},
{
    id: "REW_022",
    text: "How do health purchasing alliances (HPAs) benefit smaller employers?",
    options: [
        "They allow small businesses to self-insure their employees",
        "They enable small businesses to negotiate lower insurance costs by pooling resources",
        "They replace employer-sponsored insurance with government-funded healthcare",
        "They provide unlimited access to Fee-for-Service (FFS) plans"
    ],
    correctAnswer: "They enable small businesses to negotiate lower insurance costs by pooling resources",
    explanation: "HPAs help small businesses leverage group purchasing power to lower insurance costs. They do not promote self-insurance, replace employer-sponsored insurance, or guarantee unlimited access to Fee-for-Service plans."
},
{
    id: "REW_023",
    text: "What is the primary goal of wellness programs in employer-sponsored health plans?",
    options: [
        "To replace traditional health insurance plans",
        "To improve employee health and reduce insurance claim costs",
        "To provide free gym memberships for employees",
        "To eliminate employer liability for employee health issues"
    ],
    correctAnswer: "To improve employee health and reduce insurance claim costs",
    explanation: "Wellness programs aim to enhance employee health, leading to lower healthcare costs and fewer claims. They do not replace health insurance, focus solely on gym memberships, or absolve employers of liability."
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
},
{
    id: "REW_040",
    text: "What is the primary distinction between defined-benefit and defined-contribution retirement plans?",
    options: [
        "Defined-benefit plans guarantee a specific payout at retirement, whereas defined-contribution plans depend on investment returns",
        "Defined-contribution plans are exclusively for executives",
        "Defined-benefit plans require employees to contribute, whereas defined-contribution plans do not",
        "Defined-contribution plans only apply to federal employees"
    ],
    correctAnswer: "Defined-benefit plans guarantee a specific payout at retirement, whereas defined-contribution plans depend on investment returns",
    explanation: "Defined-benefit plans promise a fixed retirement income based on salary and tenure, while defined-contribution plans rely on employee contributions and investment performance. Defined-contribution plans are available to all employees, not just executives or federal employees."
},
{
    id: "REW_041",
    text: "Which federal law established regulations to protect employees’ retirement benefits from mismanagement?",
    options: [
        "Fair Labor Standards Act (FLSA)",
        "Employee Retirement Income Security Act (ERISA)",
        "Affordable Care Act (ACA)",
        "Family and Medical Leave Act (FMLA)"
    ],
    correctAnswer: "Employee Retirement Income Security Act (ERISA)",
    explanation: "ERISA sets standards for private retirement plans to prevent mismanagement and protect employees’ benefits. FLSA regulates wages, ACA governs healthcare, and FMLA provides job-protected leave."
},
{
    id: "REW_042",
    text: "Which type of plan allows employees to use payroll deductions to purchase company stock at a discount?",
    options: [
        "401(k) Plan",
        "Employee Stock Purchase Plan (ESPP)",
        "Employee Assistance Plan (EAP)",
        "Deferred Compensation Plan"
    ],
    correctAnswer: "Employee Stock Purchase Plan (ESPP)",
    explanation: "ESPPs let employees buy company stock at a discounted rate through payroll deductions. 401(k) plans focus on retirement savings, EAPs provide wellness support, and deferred compensation plans delay earnings for future payout."
},
{
    id: "REW_043",
    text: "What is a key benefit of a cash-balance plan (CBP)?",
    options: [
        "Employees receive a guaranteed monthly pension upon retirement",
        "Contributions are pooled, and investment risk is carried by employees",
        "Employees have a portable retirement account with an employer contribution formula",
        "It is an entirely employee-funded pension plan"
    ],
    correctAnswer: "Employees have a portable retirement account with an employer contribution formula",
    explanation: "Cash-balance plans combine features of defined-benefit and defined-contribution plans, providing employer-funded accounts that grow over time and are portable. Traditional pensions guarantee monthly payouts, and investment risk is borne by the employer, not employees."
},
{
    id: "REW_044",
    text: "What is the primary purpose of COBRA (Consolidated Omnibus Budget Reconciliation Act)?",
    options: [
        "To provide tax advantages for employer-sponsored health plans",
        "To allow employees to continue group health coverage after leaving a job",
        "To regulate employer contributions to pension plans",
        "To ensure mandatory employer-paid disability benefits"
    ],
    correctAnswer: "To allow employees to continue group health coverage after leaving a job",
    explanation: "COBRA allows employees and dependents to maintain group health insurance for a limited period after job loss. It does not regulate pensions, mandate disability benefits, or provide tax advantages."
},
{
    id: "REW_045",
    text: "Which of the following is an example of a voluntary benefit?",
    options: [
        "Medicare",
        "Unemployment insurance",
        "Vision insurance",
        "Social Security"
    ],
    correctAnswer: "Vision insurance",
    explanation: "Vision insurance is an optional benefit provided by employers or purchased by employees. Medicare, unemployment insurance, and Social Security are government-mandated programs."
},
{
    id: "REW_046",
    text: "What is a key characteristic of a nonqualified deferred compensation (NQDC) plan?",
    options: [
        "It must be made available to all employees equally",
        "It is exempt from ERISA discrimination testing requirements",
        "It provides full protection from employer bankruptcy",
        "It guarantees a specific payout upon retirement"
    ],
    correctAnswer: "It is exempt from ERISA discrimination testing requirements",
    explanation: "NQDC plans are exempt from ERISA rules, allowing employers to offer them selectively. They do not guarantee payouts, provide bankruptcy protection, or require universal availability."
},
{
    id: "REW_047",
    text: "What is the primary difference between a qualified and nonqualified retirement plan?",
    options: [
        "Qualified plans are regulated by ERISA and provide tax advantages",
        "Nonqualified plans are open to all employees",
        "Qualified plans allow unlimited contributions",
        "Nonqualified plans have stricter reporting requirements"
    ],
    correctAnswer: "Qualified plans are regulated by ERISA and provide tax advantages",
    explanation: "Qualified plans must follow ERISA regulations and offer tax benefits, whereas nonqualified plans are not subject to the same rules. Nonqualified plans are not open to all employees and often have limited reporting requirements."
},
{
    id: "REW_048",
    text: "Which of the following laws protects employees from termination if their wages are garnished for a single debt?",
    options: [
        "The Fair Labor Standards Act (FLSA)",
        "The Equal Pay Act",
        "Title III of the Consumer Credit Protection Act (CCPA)",
        "The Family and Medical Leave Act (FMLA)"
    ],
    correctAnswer: "Title III of the Consumer Credit Protection Act (CCPA)",
    explanation: "Title III of the CCPA prohibits employers from terminating employees whose wages are garnished for a single debt. The FLSA governs wage and hour laws, the Equal Pay Act addresses pay equity, and FMLA provides job-protected leave but does not cover wage garnishments."
},
{
    id: "REW_049",
    text: "An employee works remotely in a different state from their company’s headquarters. Which of the following payroll tax considerations applies?",
    options: [
        "The employer must only withhold payroll taxes for the state where the company is headquartered",
        "Payroll taxes are withheld for the state where the remote worker resides",
        "The employee must self-report taxes, and the employer has no obligation",
        "Remote employees are exempt from payroll taxes"
    ],
    correctAnswer: "Payroll taxes are withheld for the state where the remote worker resides",
    explanation: "Employers must withhold payroll taxes based on the employee’s work location, not the company’s headquarters. Employees are not exempt from payroll taxes, and self-reporting does not remove employer obligations."
},
{
    id: "REW_050",
    text: "How is disposable income calculated for wage garnishments?",
    options: [
        "Gross earnings before any deductions",
        "Gross earnings minus only voluntary deductions",
        "Gross earnings minus legally required deductions, such as taxes and Social Security",
        "Net earnings minus all deductions, including voluntary benefits"
    ],
    correctAnswer: "Gross earnings minus legally required deductions, such as taxes and Social Security",
    explanation: "Disposable income for garnishments is determined after legally required deductions like taxes but before voluntary deductions. Gross earnings before deductions do not account for taxes, and net earnings include voluntary reductions not considered in garnishment calculations."
},
{
    id: "REW_051",
    text: "Which payroll deduction is an example of an involuntary deduction?",
    options: [
        "401(k) contributions",
        "Union dues",
        "Wage garnishment for child support",
        "Health insurance premiums"
    ],
    correctAnswer: "Wage garnishment for child support",
    explanation: "Involuntary deductions, such as child support garnishments, are court-ordered and required by law. 401(k) contributions, union dues, and health insurance premiums are voluntary and elected by the employee."
},
{
    id: "REW_052",
    text: "Which of the following is a legal maximum for child support wage garnishments?",
    options: [
        "Up to 25% of an employee’s disposable earnings",
        "Up to 50% of disposable earnings if the employee is supporting another spouse or child",
        "Up to 75% of disposable earnings in all cases",
        "No legal maximum applies"
    ],
    correctAnswer: "Up to 50% of disposable earnings if the employee is supporting another spouse or child",
    explanation: "Federal law limits child support garnishments to 50% of disposable earnings if the employee supports another spouse or child, or up to 60% otherwise. The 25% limit applies to other wage garnishments, and 75% is not a legal maximum."
},
{
    id: "REW_053",
    text: "When are employers required to file federal payroll tax reports?",
    options: [
        "Monthly, regardless of company size",
        "Annually, along with corporate tax returns",
        "At the end of each calendar quarter",
        "Every time an employee is paid"
    ],
    correctAnswer: "At the end of each calendar quarter",
    explanation: "Employers must file federal payroll tax reports quarterly using Form 941. Monthly filings depend on deposit frequency, annual filings apply to some small businesses, and reporting is not required every pay period."
},
{
    id: "REW_054",
    text: "Which of the following is NOT an example of a legally mandated benefit?",
    options: [
        "Social Security",
        "Family and Medical Leave Act (FMLA)",
        "Workers’ Compensation",
        "401(k) employer match"
    ],
    correctAnswer: "401(k) employer match",
    explanation: "Social Security, FMLA leave, and workers' compensation are legally required benefits, whereas employer 401(k) contributions are voluntary and not mandated by law."
},
{
    id: "REW_055",
    text: "What is the primary function of payroll administration?",
    options: [
        "To ensure all employees receive equal pay",
        "To calculate employee earnings and deductions while maintaining payroll records",
        "To provide financial planning advice to employees",
        "To handle only employee tax deductions"
    ],
    correctAnswer: "To calculate employee earnings and deductions while maintaining payroll records",
    explanation: "Payroll administration involves accurately processing employee compensation, withholding deductions, and maintaining payroll records. It does not guarantee equal pay, provide financial advice, or focus solely on tax deductions."
},
{
    id: "REW_056",
    text: "Which of the following is NOT a basic requirement of a payroll system?",
    options: [
        "Tracking payroll tax payments owed to federal and state agencies",
        "Accurately calculating payments due to employees",
        "Forecasting financial market trends",
        "Providing security for payroll information"
    ],
    correctAnswer: "Forecasting financial market trends",
    explanation: "Payroll systems focus on employee compensation, tax compliance, and data security. They do not analyze financial markets, which falls under financial planning and investment management."
},
{
    id: "REW_057",
    text: "Under federal law, when must a terminated employee receive their final paycheck?",
    options: [
        "On the last day of employment",
        "Within 24 hours of termination",
        "Based on the company’s regular payroll processing schedule",
        "Within 30 days of termination"
    ],
    correctAnswer: "Based on the company’s regular payroll processing schedule",
    explanation: "Federal law allows final paychecks to be processed on the next regular payroll cycle unless state laws require earlier payment. Immediate or 24-hour payments depend on state regulations, and a 30-day delay is not federally mandated."
},
{
    id: "REW_058",
    text: "Which of the following payroll deductions is considered voluntary?",
    options: [
        "Social Security tax",
        "Federal income tax",
        "401(k) contributions",
        "Medicare tax"
    ],
    correctAnswer: "401(k) contributions",
    explanation: "401(k) contributions are elective, while Social Security, Medicare, and federal income taxes are mandatory payroll deductions required by law."
},
{
    id: "REW_059",
    text: "What is the purpose of a service bureau in payroll processing?",
    options: [
        "To create government tax policies",
        "To handle manual payroll calculations for small businesses",
        "To process payroll calculations, issue paychecks, and submit tax payments for organizations",
        "To replace HR departments in companies"
    ],
    correctAnswer: "To process payroll calculations, issue paychecks, and submit tax payments for organizations",
    explanation: "Service bureaus manage payroll functions for companies, ensuring tax compliance and paycheck distribution. They do not create tax policies, perform manual payroll exclusively for small businesses, or replace HR functions."
},
{
    id: "REW_060",
    text: "What is the employer's responsibility in payroll tax withholding?",
    options: [
        "Employers must match Social Security and Medicare taxes withheld from employees",
        "Employers only withhold taxes but do not contribute any portion",
        "Employers are responsible only for collecting state income taxes",
        "Employers must pay employees their full earnings before withholding any deductions"
    ],
    correctAnswer: "Employers must match Social Security and Medicare taxes withheld from employees",
    explanation: "Employers are required to match Social Security and Medicare taxes under FICA. They do not simply collect taxes without contributing, state income taxes are additional, and earnings are subject to deductions before payment."
},
{
    id: "REW_061",
    text: "What is the purpose of a compensation communication plan?",
    options: [
        "To ensure that employees blindly accept their salaries",
        "To educate employees and managers on how pay decisions are made",
        "To prevent employees from negotiating salaries",
        "To eliminate transparency in salary structures"
    ],
    correctAnswer: "To educate employees and managers on how pay decisions are made",
    explanation: "A compensation communication plan helps employees and managers understand how pay decisions are made, promoting transparency. It does not prevent negotiations, reduce transparency, or enforce blind acceptance of salaries."
},
{
    id: "REW_062",
    text: "What is the meaning of 'green circle pay'?",
    options: [
        "Pay that is above the maximum of the salary range",
        "Pay that is below the minimum of the salary range",
        "Pay that is at the exact mid-point of the salary range",
        "Pay that increases every year automatically"
    ],
    correctAnswer: "Pay that is below the minimum of the salary range",
    explanation: "Green circle pay occurs when an employee’s salary falls below the minimum of the designated pay range. It is not above the range, at the mid-point, or an automatically increasing salary."
},
{
    id: "REW_063",
    text: "What is 'wage compression'?",
    options: [
        "When new hires are paid more than existing employees with similar skills and experience",
        "When all employees receive the same pay regardless of job level",
        "When an employee’s salary exceeds the maximum range for their job",
        "When organizations reduce wages due to financial constraints"
    ],
    correctAnswer: "When new hires are paid more than existing employees with similar skills and experience",
    explanation: "Wage compression happens when new employees receive higher pay than existing staff with similar experience, leading to pay disparities. It is not related to uniform pay, salary reductions, or exceeding salary ranges."
},
{
    id: "REW_064",
    text: "What is a compa-ratio used for?",
    options: [
        "To compare an employee’s pay to the mid-point of the salary range",
        "To determine how many employees are in each pay grade",
        "To calculate annual bonuses",
        "To analyze total payroll expenses"
    ],
    correctAnswer: "To compare an employee’s pay to the mid-point of the salary range",
    explanation: "A compa-ratio measures how an employee’s salary compares to the mid-point of the salary range, helping to assess pay competitiveness. It does not track employee numbers, bonuses, or total payroll expenses."
},
{
    id: "REW_065",
    text: "If an organization ties salary increases to inflation, what method is it using?",
    options: [
        "Merit-based increases",
        "Cost-of-living adjustments (COLAs)",
        "Variable pay incentives",
        "Seniority-based pay"
    ],
    correctAnswer: "Cost-of-living adjustments (COLAs)",
    explanation: "COLAs are salary increases linked to inflation to maintain employees’ purchasing power. They differ from merit-based pay, performance incentives, and seniority-based pay structures."
},
{
    id: "REW_066",
    text: "What is the key difference between competency-based pay and traditional job-based pay?",
    options: [
        "Competency-based pay rewards employees for demonstrated skills and knowledge, rather than specific job duties",
        "Traditional pay focuses on employee potential rather than actual performance",
        "Competency-based pay eliminates salary ranges and fixed compensation levels",
        "Traditional pay structures allow employees to move between jobs without changes in pay"
    ],
    correctAnswer: "Competency-based pay rewards employees for demonstrated skills and knowledge, rather than specific job duties",
    explanation: "Competency-based pay compensates employees for skills and knowledge, unlike traditional structures that base pay on job duties. It does not eliminate salary structures or focus on potential instead of performance."
},
{
    id: "REW_067",
    text: "What is broadbanding in compensation structures?",
    options: [
        "A method of grouping multiple job grades into broader pay bands",
        "A system where pay is only based on years of service",
        "A government-mandated structure that standardizes pay",
        "A strategy used to limit employee salary growth"
    ],
    correctAnswer: "A method of grouping multiple job grades into broader pay bands",
    explanation: "Broadbanding consolidates multiple job grades into fewer, broader pay bands, providing flexibility. It is not a tenure-based, government-mandated, or salary-limiting approach."
},
{
    id: "REW_068",
    text: "What is a key benefit of broadbanding compared to traditional narrow salary structures?",
    options: [
        "It promotes greater career flexibility and lateral movement within organizations",
        "It eliminates salary increases for employees",
        "It standardizes all salaries regardless of experience",
        "It reduces transparency in pay decisions"
    ],
    correctAnswer: "It promotes greater career flexibility and lateral movement within organizations",
    explanation: "Broadbanding allows employees to develop skills across roles with flexible salary growth. It does not eliminate raises, standardize salaries, or decrease pay transparency."
},
{
    id: "REW_069",
    text: "An employee earns $20 per hour and works 50 hours in a given workweek. According to the Fair Labor Standards Act (FLSA), overtime pay is required for hours worked beyond 40 at 1.5 times the regular hourly rate. What is the employee’s total gross pay for the week?",
    options: [
        "$1,000",
        "$1,100",
        "$1,200",
        "$1,300"
    ],
    correctAnswer: "$1,100",
    explanation: "Regular pay is calculated as $20 × 40 = $800. Overtime pay is determined as ($20 × 1.5) × 10 = $300. The total gross pay is $800 + $300 = $1,100."
},
{
    id: "REW_070",
    text: "An IT company headquartered in San Francisco has a remote employee working in Texas. The company uses geographic pay differentials to adjust salaries based on cost of labor. If an entry-level software engineer earns $120,000 in San Francisco, and Texas has a cost-of-labor adjustment of 80% compared to San Francisco, what should be the adjusted salary for the Texas employee?",
    options: [
        "$96,000",
        "$100,000",
        "$108,000",
        "$120,000"
    ],
    correctAnswer: "$96,000",
    explanation: "The adjusted salary is calculated by multiplying the base salary by the geographic pay factor: $120,000 × 0.80 = $96,000."
},
{
    id: "REW_071",
    text: "A sales manager is designing an incentive plan where employees receive a 10% bonus on sales exceeding $50,000 per quarter. A sales representative generated $85,000 in sales this quarter. How much incentive pay should the employee receive?",
    options: [
        "$3,500",
        "$4,500",
        "$5,000",
        "$8,500"
    ],
    correctAnswer: "$3,500",
    explanation: "The eligible bonus amount is calculated as ($85,000 - $50,000) × 10%. The incentive pay is $35,000 × 10% = $3,500."
},
{
    id: "REW_072",
    text: "An HR audit discovers that some employees classified as exempt are working 60-hour weeks but are not receiving additional compensation. Which of the following actions should the HR department take to ensure compliance with FLSA regulations?",
    options: [
        "Convert the employees to nonexempt status and pay overtime",
        "Allow employees to voluntarily track hours but not change their pay status",
        "Offer a bonus program to offset additional hours worked",
        "Reduce work hours without adjusting compensation"
    ],
    correctAnswer: "Convert the employees to nonexempt status and pay overtime",
    explanation: "Employees classified as nonexempt under FLSA must receive overtime pay for hours worked beyond 40 per week. Allowing voluntary tracking, offering bonuses, or reducing hours without changing pay status does not ensure compliance."
},
{
    id: "REW_073",
    text: "What is the primary purpose of a salary structure in compensation administration?",
    options: [
        "To establish arbitrary pay differences between employees",
        "To provide a systematic way of determining base pay for different jobs",
        "To ensure all employees receive the same salary regardless of job role",
        "To eliminate pay adjustments over time"
    ],
    correctAnswer: "To provide a systematic way of determining base pay for different jobs",
    explanation: "A salary structure organizes pay levels to ensure fairness and consistency. It does not create arbitrary differences, enforce equal pay across roles, or eliminate future adjustments."
},
{
    id: "REW_074",
    text: "When developing a salary structure, what is commonly used as the market comparison point for each job?",
    options: [
        "25th percentile",
        "50th percentile (market median)",
        "75th percentile",
        "Maximum salary range"
    ],
    correctAnswer: "50th percentile (market median)",
    explanation: "The 50th percentile, or market median, is commonly used as a benchmark for competitive salaries. The 25th and 75th percentiles represent lower and upper market positions, while the maximum salary range is not typically used as a standard reference point."
},
{
    id: "REW_075",
    text: "What is a salary range?",
    options: [
        "A fixed amount that all employees in the same job grade must be paid",
        "The difference between the minimum and maximum pay within a job grade",
        "A standardized pay rate set by the government",
        "The total salary an employee earns over a lifetime"
    ],
    correctAnswer: "The difference between the minimum and maximum pay within a job grade",
    explanation: "A salary range defines the minimum and maximum pay for a job grade, allowing flexibility. It is not a fixed rate, a government-mandated standard, or a lifetime salary figure."
},
{
    id: "REW_076",
    text: "Which of the following describes comparable worth in compensation?",
    options: [
        "Paying employees based only on seniority",
        "Ensuring pay equity between jobs traditionally held by men and women",
        "Determining wages solely based on labor market supply and demand",
        "Eliminating all differences in pay between job roles"
    ],
    correctAnswer: "Ensuring pay equity between jobs traditionally held by men and women",
    explanation: "Comparable worth ensures that jobs requiring similar skills, effort, and responsibility are compensated equitably, regardless of gender. It is not solely based on seniority, supply and demand, or complete pay standardization."
},
{
    id: "REW_077",
    text: "What is the purpose of variable compensation?",
    options: [
        "To provide employees with a fixed salary based on seniority",
        "To reward employees for individual and/or organizational performance",
        "To replace base pay with incentive-based earnings",
        "To offer employees an annual cost-of-living adjustment"
    ],
    correctAnswer: "To reward employees for individual and/or organizational performance",
    explanation: "Variable compensation is designed to incentivize employees based on their contributions to individual and company goals. It does not replace base pay, focus solely on seniority, or guarantee cost-of-living adjustments."
},
{
    id: "REW_078",
    text: "What is a key requirement for an effective individual incentive program?",
    options: [
        "The incentive must be at least 20% of the employee’s salary",
        "Employees must work overtime to qualify for the incentive",
        "The incentive must be clearly communicated and aligned with performance goals",
        "Employees must receive a base salary reduction before earning incentives"
    ],
    correctAnswer: "The incentive must be clearly communicated and aligned with performance goals",
    explanation: "A successful incentive program requires clear communication and alignment with performance metrics. It does not require a fixed percentage, overtime work, or salary reductions."
},
{
    id: "REW_079",
    text: "Which type of group incentive program allows employees and management to share financial benefits from productivity improvements?",
    options: [
        "Scanlon Plan",
        "Gainsharing",
        "Profit Sharing",
        "Employee Stock Ownership Plan (ESOP)"
    ],
    correctAnswer: "Gainsharing",
    explanation: "Gainsharing rewards employees and management for measurable productivity gains, unlike profit-sharing, stock ownership, or Scanlon Plans, which have different objectives."
},
{
    id: "REW_080",
    text: "How does a profit-sharing plan typically distribute funds to employees?",
    options: [
        "Based on a percentage of an employee’s base salary",
        "Through stock options and restricted shares",
        "Only in the form of yearly bonuses",
        "Based on seniority rather than performance"
    ],
    correctAnswer: "Based on a percentage of an employee’s base salary",
    explanation: "Profit-sharing typically distributes funds as a percentage of employees' salaries, rather than stock, seniority-based payments, or strictly year-end bonuses."
},
{
    id: "REW_081",
    text: "What is a key feature of an Employee Stock Ownership Plan (ESOP)?",
    options: [
        "Employees are required to purchase company stock with after-tax earnings",
        "The employer contributes company stock to employees’ retirement plans",
        "Employees receive cash bonuses instead of stock options",
        "Stock ownership is only available to executives"
    ],
    correctAnswer: "The employer contributes company stock to employees’ retirement plans",
    explanation: "ESOPs provide employer-funded stock contributions to employees' retirement plans. Employees are not required to purchase stock, receive cash bonuses instead, or be limited to executives."
},
{
    id: "REW_082",
    text: "What is the difference between commissions and sales bonuses?",
    options: [
        "Commissions are based on total revenue, while bonuses are fixed salaries",
        "Commissions are earned per sale, while bonuses are based on sales targets",
        "Sales bonuses are mandatory, while commissions are optional",
        "Bonuses are paid monthly, while commissions are only paid annually"
    ],
    correctAnswer: "Commissions are earned per sale, while bonuses are based on sales targets",
    explanation: "Commissions are calculated per individual sale, whereas sales bonuses reward meeting specific sales goals. Bonuses are not mandatory, nor are commissions strictly annual."
},
{
    id: "REW_083",
    text: "What is the primary purpose of a retention bonus?",
    options: [
        "To reward employees for working overtime",
        "To incentivize key employees to remain with an organization for a specific period",
        "To replace standard annual salary increases",
        "To compensate employees for taking on additional responsibilities"
    ],
    correctAnswer: "To incentivize key employees to remain with an organization for a specific period",
    explanation: "Retention bonuses encourage valuable employees to stay with a company, rather than rewarding overtime, replacing salary increases, or compensating for extra duties."
},
{
    id: "REW_084",
    text: "A company with multiple locations across different states has identified discrepancies in wages for similar roles. An HR manager is tasked with aligning pay across regions while considering cost-of-living differences. Which approach would be the most effective in ensuring pay equity while maintaining competitive salaries?",
    options: [
        "Implement a single national pay scale for all employees",
        "Develop a regional pay structure based on local labor market conditions",
        "Standardize all salaries to the lowest-paying region to control costs",
        "Adjust pay only for new hires while keeping current employees at their existing salaries"
    ],
    correctAnswer: "Develop a regional pay structure based on local labor market conditions",
    explanation: "Regional pay structures ensure competitive compensation that reflects local market conditions, rather than enforcing uniform national scales, lowering all salaries, or adjusting pay only for new hires."
},
{
    id: "REW_085",
    text: "Which of the following is NOT an example of a pay differential?",
    options: [
        "Overtime pay",
        "Shift premium pay",
        "401(k) contributions",
        "Hazard pay"
    ],
    correctAnswer: "401(k) contributions",
    explanation: "Pay differentials compensate employees for specific working conditions, such as overtime, shift differentials, and hazard pay. Retirement contributions like 401(k) are benefits rather than pay differentials."
},
{
    id: "REW_086",
    text: "Under the Fair Labor Standards Act (FLSA), overtime pay is required when a nonexempt employee works more than:",
    options: [
        "35 hours in a week",
        "40 hours in a week",
        "45 hours in a week",
        "50 hours in a week"
    ],
    correctAnswer: "40 hours in a week",
    explanation: "FLSA mandates overtime pay for nonexempt employees who work more than 40 hours in a workweek. Lower or higher thresholds are not recognized under federal law."
},
{
    id: "REW_087",
    text: "Which employees are most likely to receive shift differentials?",
    options: [
        "Nonexempt employees who work evening or night shifts",
        "Senior executives who work standard office hours",
        "Employees who are on paid leave",
        "Independent contractors"
    ],
    correctAnswer: "Nonexempt employees who work evening or night shifts",
    explanation: "Shift differentials are typically offered to nonexempt employees working outside regular business hours, not executives, employees on leave, or independent contractors."
},
{
    id: "REW_088",
    text: "How are shift premiums typically paid?",
    options: [
        "As a fixed-dollar amount added to every paycheck",
        "As a percentage of base pay or an additional hourly rate",
        "As a one-time annual bonus",
        "As a mandatory government benefit"
    ],
    correctAnswer: "As a percentage of base pay or an additional hourly rate",
    explanation: "Shift premiums are usually calculated as a percentage of base pay or a set hourly rate rather than a fixed amount, annual bonus, or government-mandated benefit."
},
{
    id: "REW_089",
    text: "What is one reason employers may voluntarily pay more than the legally required minimum wage?",
    options: [
        "To increase overtime costs",
        "To attract, motivate, and retain employees",
        "To reduce employee performance expectations",
        "To avoid paying payroll taxes"
    ],
    correctAnswer: "To attract, motivate, and retain employees",
    explanation: "Paying above minimum wage helps employers remain competitive in the labor market and improve retention. It does not increase overtime costs, lower expectations, or impact payroll tax obligations."
},
{
    id: "REW_090",
    text: "What is the purpose of on-call pay?",
    options: [
        "To compensate employees for working overtime shifts",
        "To provide a premium to employees required to be available for emergencies",
        "To pay employees who report to work but are sent home",
        "To reward employees for achieving performance goals"
    ],
    correctAnswer: "To provide a premium to employees required to be available for emergencies",
    explanation: "On-call pay compensates employees for being available outside normal hours for emergency work. It is not overtime pay, reporting pay, or performance-based compensation."
},
{
    id: "REW_091",
    text: "Which type of pay compensates employees who are called into work before or after their scheduled hours?",
    options: [
        "On-call pay",
        "Call-back pay",
        "Reporting pay",
        "Geographic pay"
    ],
    correctAnswer: "Call-back pay",
    explanation: "Call-back pay is provided when employees are called in unexpectedly to work extra hours, differing from on-call pay, reporting pay, or location-based pay adjustments."
},
{
    id: "REW_092",
    text: "What does reporting pay compensate employees for?",
    options: [
        "Arriving to work but being sent home due to lack of available work",
        "Working more than 40 hours in a week",
        "Staying on-call for emergencies",
        "Traveling for work-related assignments"
    ],
    correctAnswer: "Arriving to work but being sent home due to lack of available work",
    explanation: "Reporting pay compensates employees who report to work but are sent home due to unforeseen circumstances. It does not apply to overtime, on-call duty, or travel."
},
{
    id: "REW_093",
    text: "Which of the following is an example of hazard pay?",
    options: [
        "Additional compensation for employees working in dangerous conditions",
        "A salary increase for an employee’s promotion",
        "An annual bonus for high-performing employees",
        "A cost-of-living adjustment"
    ],
    correctAnswer: "Additional compensation for employees working in dangerous conditions",
    explanation: "Hazard pay is extra compensation for employees working in dangerous or high-risk environments. It is not tied to promotions, performance bonuses, or cost-of-living adjustments."
},
{
    id: "REW_094",
    text: "What is the main reason organizations use geographic pay?",
    options: [
        "To standardize pay across all locations",
        "To ensure pay aligns with regional labor market conditions",
        "To reduce the cost of employee salaries",
        "To eliminate the need for annual pay increases"
    ],
    correctAnswer: "To ensure pay aligns with regional labor market conditions",
    explanation: "Geographic pay adjusts salaries based on local cost-of-labor differences. It does not standardize pay nationally, reduce salaries arbitrarily, or replace annual increases."
},
{
    id: "REW_095",
    text: "Which regulatory agency enforces tax-related regulations on compensation and benefits?",
    options: [
        "Occupational Safety and Health Administration (OSHA)",
        "Securities and Exchange Commission (SEC)",
        "Internal Revenue Service (IRS)",
        "Federal Trade Commission (FTC)"
    ],
    correctAnswer: "Internal Revenue Service (IRS)",
    explanation: "The IRS enforces tax-related regulations, including payroll taxes, retirement contributions, and fringe benefits. OSHA regulates workplace safety, the SEC oversees financial markets, and the FTC enforces consumer protection laws."
},
{
    id: "REW_096",
    text: "What is the primary function of base pay in a compensation program?",
    options: [
        "To provide employees with benefits and incentives",
        "To serve as the foundation of an employee’s compensation for job duties",
        "To reward employees for completing additional work assignments",
        "To replace performance-based bonuses"
    ],
    correctAnswer: "To serve as the foundation of an employee’s compensation for job duties",
    explanation: "Base pay represents the fixed compensation employees receive for performing job duties. It does not include incentives, additional work rewards, or replace performance-based bonuses."
},
{
    id: "REW_097",
    text: "When determining base pay for new hires, which factor is NOT typically considered?",
    options: [
        "Employee’s previous earnings",
        "Length and type of previous experience",
        "Employee’s personal expenses",
        "Knowledge, skills, and abilities (KSAs)"
    ],
    correctAnswer: "Employee’s personal expenses",
    explanation: "Base pay decisions are based on market data, experience, and KSAs, not an employee’s personal financial obligations."
},
{
    id: "REW_098",
    text: "What is the federal minimum wage as of 2024?",
    options: [
        "$5.75",
        "$7.25",
        "$10.50",
        "$15.00"
    ],
    correctAnswer: "$7.25",
    explanation: "As of 2024, the federal minimum wage remains at $7.25 per hour, although some states have implemented higher minimum wages."
},
{
    id: "REW_099",
    text: "What is the minimum direct wage that an employer must pay a tipped employee?",
    options: [
        "$2.13 per hour, provided tips bring total pay to at least $7.25 per hour",
        "$5.15 per hour, regardless of tips received",
        "$7.25 per hour, plus any tips earned",
        "$10.00 per hour if working more than 40 hours per week"
    ],
    correctAnswer: "$2.13 per hour, provided tips bring total pay to at least $7.25 per hour",
    explanation: "Employers can pay tipped employees a base wage of $2.13 per hour if combined earnings (base pay + tips) meet or exceed the federal minimum wage."
},
{
    id: "REW_100",
    text: "Which of the following best describes performance-based compensation?",
    options: [
        "Pay increases are based solely on seniority",
        "Employees receive raises based on individual performance evaluations",
        "Employees receive equal pay increases every year",
        "Pay is determined based only on job market conditions"
    ],
    correctAnswer: "Employees receive raises based on individual performance evaluations",
    explanation: "Performance-based compensation ties salary increases to job performance, rather than tenure, standardized raises, or market conditions alone."
},
{
    id: "REW_101",
    text: "Which type of compensation system is most common in union environments?",
    options: [
        "Performance-based compensation",
        "Seniority-based compensation",
        "Commission-based compensation",
        "Skill-based compensation"
    ],
    correctAnswer: "Seniority-based compensation",
    explanation: "Union contracts typically use seniority-based compensation, where pay increases are determined by an employee’s tenure rather than individual performance."
},
{
    id: "REW_102",
    text: "What is a primary reason for offering pay differentials?",
    options: [
        "To reduce payroll costs",
        "To encourage employees to take on work that is inconvenient or hazardous",
        "To eliminate the need for base pay adjustments",
        "To provide employees with unlimited overtime opportunities"
    ],
    correctAnswer: "To encourage employees to take on work that is inconvenient or hazardous",
    explanation: "Pay differentials incentivize employees to work in challenging conditions, such as night shifts, hazardous environments, or undesirable locations."
},
{
    id: "REW_103",
    text: "What is a key challenge for gig economy workers?",
    options: [
        "They have access to more benefits than full-time employees",
        "Their work is typically stable and well-compensated",
        "They often lack job security, benefits, and stable wages",
        "They are guaranteed a minimum wage and overtime pay"
    ],
    correctAnswer: "They often lack job security, benefits, and stable wages",
    explanation: "Gig workers typically face employment instability, lack access to employer-sponsored benefits, and experience fluctuating income, unlike traditional employees who receive stable compensation and protections."
},
{
    id: "REW_104",
    text: "How do organizations budget for gig workers differently than traditional employees?",
    options: [
        "By setting annual salaries and benefits packages",
        "By using project-based or seasonal pricing models",
        "By offering pension plans and long-term contracts",
        "By classifying them as full-time employees"
    ],
    correctAnswer: "By using project-based or seasonal pricing models",
    explanation: "Organizations budget for gig workers based on short-term or project-specific needs, whereas traditional employees receive consistent salaries and benefits."
},
{
    id: "REW_105",
    text: "What is one of the main concerns of misclassifying independent contractors as employees?",
    options: [
        "Employees may receive higher wages",
        "It can lead to significant legal and financial penalties for employers",
        "It simplifies payroll processes",
        "There are no consequences for misclassification"
    ],
    correctAnswer: "It can lead to significant legal and financial penalties for employers",
    explanation: "Misclassifying independent contractors can result in fines, back wages, and tax liabilities, making accurate classification critical for compliance."
},
{
    id: "REW_106",
    text: "According to the IRS, which factor is considered when determining independent contractor status?",
    options: [
        "The worker’s job title",
        "Whether the employer provides tools and supplies",
        "The number of years the worker has been with the company",
        "The worker’s ability to work overtime"
    ],
    correctAnswer: "Whether the employer provides tools and supplies",
    explanation: "Control over work tools and resources is a key factor in distinguishing employees from independent contractors under IRS guidelines."
},
{
    id: "REW_107",
    text: "Why is HR responsible for staying up to date on independent contractor classifications?",
    options: [
        "To ensure employees receive higher compensation",
        "To prevent misclassification that could lead to legal penalties",
        "To eliminate the need for contracts",
        "To reduce the use of external labor"
    ],
    correctAnswer: "To prevent misclassification that could lead to legal penalties",
    explanation: "HR must ensure proper classification to avoid legal and financial consequences associated with employee misclassification."
},
{
    id: "REW_108",
    text: "What labor market factor should HR professionals consider when forecasting hiring trends?",
    options: [
        "The organization’s internal policies only",
        "The quit rate and demand for certain skill sets",
        "The number of vacation days employees take",
        "The availability of parking spaces at the office"
    ],
    correctAnswer: "The quit rate and demand for certain skill sets",
    explanation: "Analyzing quit rates and skill demand helps HR predict hiring challenges and adjust recruitment strategies accordingly."
},
{
    id: "REW_109",
    text: "How does increased product market competition impact organizations?",
    options: [
        "It reduces financial pressure on organizations",
        "It challenges organizations to attract and retain qualified employees",
        "It eliminates the need for wage reviews and incentives",
        "It guarantees higher wages for all employees"
    ],
    correctAnswer: "It challenges organizations to attract and retain qualified employees",
    explanation: "Greater competition forces organizations to enhance compensation and benefits to attract and retain top talent."
},
{
    id: "REW_110",
    text: "What is a potential consequence for employees when an organization faces financial strain due to competition?",
    options: [
        "Increased hiring opportunities",
        "Wage freezes and skipped merit reviews",
        "Additional stock options for all employees",
        "Reduced working hours for senior management"
    ],
    correctAnswer: "Wage freezes and skipped merit reviews",
    explanation: "Companies under financial strain often delay raises and bonuses, impacting employee earnings and job satisfaction."
},
{
    id: "REW_111",
    text: "In a strong economy, how does increased competition typically affect an organization?",
    options: [
        "It leads to business growth and increased financial rewards for employees",
        "It forces organizations to reduce wages and cut benefits",
        "It eliminates the need for HR to adjust compensation strategies",
        "It decreases the demand for skilled employees"
    ],
    correctAnswer: "It leads to business growth and increased financial rewards for employees",
    explanation: "A strong economy and competition drive organizational growth, leading to better pay and benefits for employees."
},
{
    id: "REW_112",
    text: "Why might an organization consult the IRS before making changes to compensation or benefit programs?",
    options: [
        "To ensure compliance with workplace safety regulations",
        "To determine the tax implications of the proposed changes",
        "To obtain employee feedback on pay structures",
        "To seek approval from labor unions"
    ],
    correctAnswer: "To determine the tax implications of the proposed changes",
    explanation: "The IRS provides guidance on tax treatments of compensation and benefits to ensure compliance with federal tax laws."
},
{
    id: "REW_113",
    text: "Which of the following benefits is typically included in indirect compensation?",
    options: [
        "Employee recognition programs",
        "Pension plans",
        "Commission-based pay",
        "Performance-based salary increases"
    ],
    correctAnswer: "Pension plans",
    explanation: "Indirect compensation includes benefits such as pension plans, health insurance, and paid leave, whereas direct compensation consists of salary, commissions, and bonuses."
},
{
    id: "REW_114",
    text: "What factors influence how organizations compensate employees?",
    options: [
        "Only internal value of jobs",
        "Only external market conditions",
        "Internal value, external value, and employee KSAs",
        "Government regulations alone"
    ],
    correctAnswer: "Internal value, external value, and employee KSAs",
    explanation: "Compensation decisions are based on internal job value, external market competitiveness, and employees’ knowledge, skills, and abilities (KSAs), ensuring fairness and market alignment."
},
{
    id: "REW_115",
    text: "How do economic factors impact an organization’s ability to attract employees?",
    options: [
        "They determine how many employees an organization can legally hire",
        "They influence labor costs based on factors like inflation and unemployment rates",
        "They have no impact on recruitment strategies",
        "They require organizations to only hire locally"
    ],
    correctAnswer: "They influence labor costs based on factors like inflation and unemployment rates",
    explanation: "Economic factors such as inflation and unemployment affect wages and hiring strategies, influencing an organization’s ability to attract and retain talent."
},
{
    id: "REW_116",
    text: "How does an increase in demand for a specific skill set affect compensation?",
    options: [
        "It decreases the cost of labor for that skill set",
        "It has no impact on compensation levels",
        "It raises competitive compensation rates due to supply shortages",
        "It forces organizations to lay off employees"
    ],
    correctAnswer: "It raises competitive compensation rates due to supply shortages",
    explanation: "When demand for a skill set rises and supply is low, organizations must offer higher wages to attract and retain employees with those skills."
},
{
    id: "REW_117",
    text: "Why do companies in different geographic locations use regional pay structures?",
    options: [
        "To ensure uniform pay across all locations",
        "To account for differences in the cost of labor in various areas",
        "To limit wage increases for employees",
        "To encourage employees to relocate frequently"
    ],
    correctAnswer: "To account for differences in the cost of labor in various areas",
    explanation: "Regional pay structures help organizations remain competitive by adjusting salaries based on cost-of-labor variations in different geographic areas."
},
{
    id: "REW_118",
    text: "How has remote work affected compensation strategies?",
    options: [
        "Companies can now access a global talent pool, influencing location-based pay models",
        "Compensation strategies remain unchanged despite the rise in remote work",
        "Remote work has made salaries irrelevant",
        "Employees now receive only performance-based pay"
    ],
    correctAnswer: "Companies can now access a global talent pool, influencing location-based pay models",
    explanation: "Remote work has enabled companies to hire employees from different locations, leading to adjustments in pay structures based on geographic cost differences."
},
{
    id: "REW_119",
    text: "What major shift did the COVID-19 pandemic bring to the labor market?",
    options: [
        "A decline in independent contractor jobs",
        "A rise in independent contracting and gig work",
        "A return to solely traditional employment models",
        "A decrease in remote work opportunities"
    ],
    correctAnswer: "A rise in independent contracting and gig work",
    explanation: "The pandemic accelerated the gig economy, increasing reliance on independent contractors, freelancers, and remote work arrangements."
},
{
    id: "REW_120",
    text: "What is the primary purpose of a Total Rewards program?",
    options: [
        "To minimize employee compensation costs",
        "To attract, retain, and motivate employees",
        "To eliminate non-monetary benefits",
        "To focus only on legally required benefits"
    ],
    correctAnswer: "To attract, retain, and motivate employees",
    explanation: "Total Rewards programs are designed to enhance employee engagement by offering competitive compensation, benefits, and other incentives."
},
{
    id: "REW_121",
    text: "What are the two main components of a Total Rewards package?",
    options: [
        "Base pay and bonuses",
        "Direct compensation and variable pay",
        "Monetary and non-monetary compensation",
        "Social Security benefits and pension plans"
    ],
    correctAnswer: "Monetary and non-monetary compensation",
    explanation: "Total Rewards include both financial rewards, such as salary and bonuses, and non-monetary incentives, such as career development and recognition."
},
{
    id: "REW_122",
    text: "Which of the following is an example of monetary compensation?",
    options: [
        "Career development opportunities",
        "A supportive work environment",
        "Employee stock ownership programs (ESOPs)",
        "Recognition from peers"
    ],
    correctAnswer: "Employee stock ownership programs (ESOPs)",
    explanation: "Monetary compensation includes direct financial incentives such as stock ownership, whereas non-monetary compensation includes career growth and workplace culture."
},
{
    id: "REW_123",
    text: "Non-monetary rewards include all of the following EXCEPT:",
    options: [
        "Recognition of accomplishments",
        "Flexible work arrangements",
        "Paid time off",
        "Career development opportunities"
    ],
    correctAnswer: "Paid time off",
    explanation: "Non-monetary rewards include workplace flexibility, recognition, and career growth, whereas paid time off is a financial benefit categorized under indirect compensation."
},
{
    id: "REW_124",
    text: "Which of the following best describes direct compensation?",
    options: [
        "Non-cash benefits provided to employees",
        "Payments associated with wages and salaries",
        "Employer-paid insurance premiums",
        "Government-mandated benefits"
    ],
    correctAnswer: "Payments associated with wages and salaries",
    explanation: "Direct compensation includes wages, salaries, and performance-based pay, whereas benefits and perks fall under indirect compensation."
},
{
    id: "REW_125",
    text: "What is an example of indirect compensation?",
    options: [
        "Base salary",
        "Bonus pay",
        "401(k) employer contributions",
        "Commission payments"
    ],
    correctAnswer: "401(k) employer contributions",
    explanation: "Indirect compensation includes employer-paid benefits such as retirement contributions, health insurance, and paid leave."
},
{
    id: "REW_126",
    text: "Which of the following is an example of an intrinsic non-monetary reward?",
    options: [
        "Working with a talented team",
        "Satisfaction from challenging work assignments",
        "Telecommuting benefits",
        "Holiday bonuses"
    ],
    correctAnswer: "Satisfaction from challenging work assignments",
    explanation: "Intrinsic rewards are internally driven, such as job satisfaction and personal growth, rather than external financial incentives."
},
{
    id: "REW_127",
    text: "Why do organizations invest in Total Rewards programs?",
    options: [
        "To comply with minimum wage laws",
        "To maximize return on investment (ROI) in employee rewards",
        "To reduce employee wages",
        "To eliminate indirect compensation"
    ],
    correctAnswer: "To maximize return on investment (ROI) in employee rewards",
    explanation: "Total Rewards programs enhance employee engagement, retention, and productivity, ensuring a positive return on investment for organizations."
},
{
    id: "REW_128",
    text: "What is the difference between direct and indirect compensation?",
    options: [
        "Direct compensation is legally required, while indirect compensation is optional",
        "Direct compensation includes wages and salaries, while indirect compensation includes benefits and perks",
        "Indirect compensation consists of bonuses and performance pay, while direct compensation consists of pension contributions",
        "Direct compensation is non-monetary, while indirect compensation is financial"
    ],
    correctAnswer: "Direct compensation includes wages and salaries, while indirect compensation includes benefits and perks",
    explanation: "Direct compensation covers salary and wages, while indirect compensation includes employer-provided benefits such as health insurance and paid leave."
}
];

export default questions;
