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
    {
        id: "WFP_015",
        text: "A tech startup struggles to fill software engineer roles in a competitive market despite using job boards, with only 10% of applicants meeting skill requirements after three months. HR must enhance sourcing to build a robust talent pool. What’s the best approach?",
        options: [
            "Increase job board advertising budget",
            "Implement a Talent Pipeline Model with targeted social media campaigns",
            "Host a virtual job fair for tech talent",
            "Offer employee referral bonuses for engineers"
        ],
        correctAnswer: "Implement a Talent Pipeline Model with targeted social media campaigns",
        explanation: "A Talent Pipeline Model with social media targets skilled candidates proactively, building a systemic talent pool. Increased budget amplifies tactically, job fairs engage partially, and referrals incentivize without broad reach."
    },
    {
        id: "WFP_016",
        text: "A retail chain aims to diversify its store manager hires but finds internal postings yield a homogenous candidate pool after six months. HR must adjust sourcing to meet inclusivity metrics. What’s the most effective strategy?",
        options: [
            "Train managers to refer diverse internal candidates",
            "Apply Social Capital Theory to leverage diverse employee networks externally",
            "Post openings on inclusivity-focused job boards",
            "Conduct a college recruitment drive for diverse talent"
        ],
        correctAnswer: "Apply Social Capital Theory to leverage diverse employee networks externally",
        explanation: "Social Capital Theory taps diverse networks systemically, enhancing inclusivity strategically beyond internal limits. Training improves tactically, job boards target partially, and college drives focus narrowly on entry-level talent."
    },
    {
        id: "WFP_017",
        text: "A logistics firm faces a shortage of warehouse workers in a rural area, with job fairs attracting few qualified candidates after two events. HR must source talent to meet staffing goals. What’s the best solution?",
        options: [
            "Increase job fair frequency in nearby towns",
            "Integrate a Remote Work Sourcing Strategy with hybrid role offerings",
            "Partner with a local staffing agency",
            "Boost social media ads for warehouse roles"
        ],
        correctAnswer: "Integrate a Remote Work Sourcing Strategy with hybrid role offerings",
        explanation: "A Remote Work Sourcing Strategy expands the talent pool systemically by rethinking role design strategically. More fairs extend tactically, agencies assist partially, and social media amplifies without addressing location barriers."
    },
    {
        id: "WFP_018",
        text: "A financial firm’s sourcing for data analysts via agencies yields high costs and low retention, with 50% leaving within a year. HR must optimize sourcing for long-term talent fit. What’s the most strategic approach?",
        options: [
            "Negotiate lower agency fees",
            "Use a Talent Community Model to nurture internal and external analyst pools",
            "Offer referral incentives to current analysts",
            "Post openings on specialized job boards"
        ],
        correctAnswer: "Use a Talent Community Model to nurture internal and external analyst pools",
        explanation: "A Talent Community Model builds a systemic, retention-focused talent pool strategically. Fee negotiation saves tactically, referrals incentivize partially, and job boards attract without ensuring fit."
    },
    {
        id: "WFP_019",
        text: "A healthcare provider struggles to source nurses for a new facility, with college recruitment yielding graduates lacking experience after four months. HR must adjust sourcing to meet immediate needs. What’s the best method?",
        options: [
            "Increase college recruitment outreach",
            "Apply a Multi-Channel Sourcing Strategy with job boards and referrals",
            "Host a job fair targeting experienced nurses",
            "Partner with a nursing agency for quick hires"
        ],
        correctAnswer: "Apply a Multi-Channel Sourcing Strategy with job boards and referrals",
        explanation: "A Multi-Channel Strategy diversifies sourcing systemically, balancing speed and experience strategically. More outreach focuses tactically, job fairs engage partially, and agencies provide quick but narrow solutions."
    },
    {
        id: "WFP_020",
        text: "A consulting firm’s sourcing for remote consultants via social media attracts high applicant volume but low quality, with only 15% meeting skill thresholds after two months. HR must refine sourcing for hybrid roles. What’s the most effective tactic?",
        options: [
            "Increase social media ad spend",
            "Integrate a Targeted Sourcing Model with skills-based LinkedIn outreach",
            "Offer internal postings for remote transitions",
            "Conduct a virtual job fair for hybrid candidates"
        ],
        correctAnswer: "Integrate a Targeted Sourcing Model with skills-based LinkedIn outreach",
        explanation: "A Targeted Sourcing Model zeroes in on skilled candidates systemically, enhancing quality strategically via platforms like LinkedIn. Ad spend amplifies tactically, internal postings limit scope partially, and job fairs attract broadly without precision."
    },
    {
        id: "WFP_021",
        text: "A manufacturing firm’s sourcing for machinists via employee referrals slows as current staff exhaust networks after a year, impacting production timelines. HR must diversify sourcing to sustain workforce growth. What’s the best approach?",
        options: [
            "Boost referral bonuses for machinists",
            "Apply a Workforce Segmentation Model to blend job boards and college recruitment",
            "Host regional job fairs for technical talent",
            "Partner with an agency specializing in trades"
        ],
        correctAnswer: "Apply a Workforce Segmentation Model to blend job boards and college recruitment",
        explanation: "A Workforce Segmentation Model diversifies sourcing systemically, balancing immediate and future needs strategically. Bonuses incentivize tactically, job fairs target partially, and agencies provide quick but narrow fixes."
    },
    {
        id: "WFP_022",
        text: "You’ve sourced leadership talent for a growing startup, but traditional job boards only attract mid-level managers lacking strategic vision. Reflecting on your sourcing behavior, how would you attract C-suite caliber candidates?",
        options: [
            "Increase postings on premium job boards",
            "Leverage a Talent Pipeline Model with executive networking events",
            "Offer referral bonuses to senior staff",
            "Host a virtual leadership job fair"
        ],
        correctAnswer: "Leverage a Talent Pipeline Model with executive networking events",
        explanation: "A Talent Pipeline Model with networking events targets high-caliber talent systemically, building strategic relationships. Premium postings amplify tactically, bonuses rely partially on networks, and job fairs attract broadly without precision."
    },
    {
        id: "WFP_023",
        text: "In a past role, you’ve struggled to source seasonal retail workers during peak holiday demand, with agencies delivering inconsistent quality. How would you adapt your sourcing to ensure a reliable seasonal workforce?",
        options: [
            "Negotiate stricter agency quality standards",
            "Apply a Multi-Channel Sourcing Strategy with social media and job boards",
            "Increase seasonal job fair frequency",
            "Offer temporary referral incentives to staff"
        ],
        correctAnswer: "Apply a Multi-Channel Sourcing Strategy with social media and job boards",
        explanation: "A Multi-Channel Strategy diversifies sourcing systemically, ensuring reliability and reach strategically. Agency tweaks improve tactically, job fairs engage partially, and referrals incentivize without broad consistency."
    },
    {
        id: "WFP_024",
        text: "You’ve been tasked with sourcing rare cybersecurity experts for a financial firm, but college recruitment yields graduates without specialized certifications. Based on your experience, how would you attract these niche skills?",
        options: [
            "Expand outreach to more technical universities",
            "Integrate a Targeted Sourcing Model with industry-specific online forums",
            "Collaborate with a specialized staffing agency",
            "Boost social media ads for cybersecurity roles"
        ],
        correctAnswer: "Integrate a Targeted Sourcing Model with industry-specific online forums",
        explanation: "A Targeted Sourcing Model taps niche communities systemically, attracting certified talent strategically. Expanded outreach focuses tactically, agencies assist partially, and social media amplifies without precision."
    },
    {
        id: "WFP_025",
        text: "In your career, you’ve sourced for a global sales team, but internal postings limit diversity and cultural fit for international markets. How would you adjust your sourcing to build a culturally adept workforce?",
        options: [
            "Train internal staff to refer global candidates",
            "Use Social Capital Theory to leverage diverse global employee networks",
            "Post roles on international job boards",
            "Host a virtual job fair for global talent"
        ],
        correctAnswer: "Use Social Capital Theory to leverage diverse global employee networks",
        explanation: "Social Capital Theory utilizes employees’ global connections systemically, enhancing cultural fit strategically. Training improves tactically, job boards target partially, and job fairs attract broadly without leveraging existing networks."
    },
    {
        id: "WFP_026",
        text: "You’ve sourced creative designers for a marketing agency, but social media campaigns draw trendy applicants lacking technical depth. Reflecting on this, how would you refine your sourcing for skilled creatives?",
        options: [
            "Increase social media ad specificity",
            "Adopt a Talent Community Model with portfolio-based outreach",
            "Offer internal postings for design transitions",
            "Partner with a creative staffing agency"
        ],
        correctAnswer: "Adopt a Talent Community Model with portfolio-based outreach",
        explanation: "A Talent Community Model builds a systemic pool of skilled creatives via portfolios, ensuring depth strategically. Ad specificity refines tactically, internal postings limit partially, and agencies provide quick but narrow fixes."
    },
    {
        id: "WFP_027",
        text: "In a previous role, you’ve struggled to source remote customer service reps, with job boards attracting local candidates unwilling to work virtually. How would you adapt your approach based on past behavior?",
        options: [
            "Increase job board postings with remote emphasis",
            "Integrate a Remote Work Sourcing Strategy with hybrid community platforms",
            "Host a virtual job fair for remote workers",
            "Offer referral bonuses for remote-ready staff"
        ],
        correctAnswer: "Integrate a Remote Work Sourcing Strategy with hybrid community platforms",
        explanation: "A Remote Work Strategy targets remote-ready talent systemically, aligning with virtual needs strategically. More postings refine tactically, job fairs engage partially, and bonuses incentivize without broad reach."
    },
    {
        id: "WFP_028",
        text: "You’ve sourced engineers for a renewable energy firm, but college recruitment yields talent lacking industry-specific knowledge. Reflecting on your sourcing behavior, how would you attract specialized engineers?",
        options: [
            "Expand college outreach to engineering programs",
            "Apply a Workforce Segmentation Model with industry job boards and referrals",
            "Host a job fair targeting renewable energy talent",
            "Engage an agency focused on green tech hires"
        ],
        correctAnswer: "Apply a Workforce Segmentation Model with industry job boards and referrals",
        explanation: "A Workforce Segmentation Model blends sources systemically, targeting specialized talent strategically. Expanded outreach focuses tactically, job fairs attract partially, and agencies offer quick but limited solutions."
    },
    {
        id: "WFP_029",
        text: "You are conducting interviews for a sales team expansion, but candidates excel in technical questions while faltering in client pitch simulations, risking poor hires. What’s the best immediate adjustment to ensure client-facing success?",
        options: [
            "Add an extra interview round focused on technical skills",
            "Implement Competency-Based Interviewing with weighted pitch simulations",
            "Train interviewers to probe deeper into past sales",
            "Involve a sales manager for a second opinion"
        ],
        correctAnswer: "Implement Competency-Based Interviewing with weighted pitch simulations",
        explanation: "Competency-Based Interviewing with weighted simulations targets client-facing skills systemically, ensuring strategic hires. Extra rounds extend tactically, training refines partially, and manager input assesses without structured focus."
    },
    {
        id: "WFP_030",
        text: "You are extending job offers to engineers for a critical project, but 50% decline due to salaries lagging behind competitor offers this month. What’s the most effective fix to secure acceptances now?",
        options: [
            "Raise salary offers uniformly for all candidates",
            "Apply Equity Theory to adjust offers with competitive total rewards",
            "Speed up offer delivery to beat competitor timelines",
            "Add a one-time signing bonus to current offers"
        ],
        correctAnswer: "Apply Equity Theory to adjust offers with competitive total rewards",
        explanation: "Equity Theory tailors offers systemically, ensuring competitiveness and acceptance strategically. Uniform raises cost tactically, faster delivery competes partially, and bonuses incentivize without addressing long-term equity."
    },
    {
        id: "WFP_031",
        text: "You are managing background checks for a customer service hiring surge, but a vendor delay of three weeks has lost two top candidates this cycle. What’s the best solution to expedite the process immediately?",
        options: [
            "Pressure the vendor for faster reporting",
            "Integrate a Background Check Optimization Model with initial HR screening",
            "Notify candidates of expected delays",
            "Switch to a new vendor mid-process"
        ],
        correctAnswer: "Integrate a Background Check Optimization Model with initial HR screening",
        explanation: "An Optimization Model with HR screening reduces delays systemically, retaining candidates strategically. Pressuring vendors pushes tactically, notifying mitigates partially, and switching risks inconsistency mid-cycle."
    },
    {
        id: "WFP_032",
        text: "You are crafting job descriptions for a marketing campaign launch, but vague creative-technical balance has led to hires excelling in one area but not both this quarter. What’s the most effective revision now?",
        options: [
            "Add detailed creative and technical skill lists",
            "Use a Job Analysis Framework to define balanced role expectations",
            "Ask recruiters to clarify balance in interviews",
            "Simplify descriptions to attract broader talent"
        ],
        correctAnswer: "Use a Job Analysis Framework to define balanced role expectations",
        explanation: "A Job Analysis Framework aligns expectations systemically, ensuring balanced hires strategically. Adding lists refines tactically, recruiter clarification shifts partially, and simplifying dilutes without solving specificity."
    },
    {
        id: "WFP_033",
        text: "You are overseeing interviews for a leadership vacancy, but inconsistent evaluator scoring across panels has flagged weak candidates as top picks this week. What’s the best fix to standardize assessments now?",
        options: [
            "Provide immediate training on scoring consistency",
            "Adopt a Structured Interview Model with uniform rubrics",
            "Add more panelists to average out scores",
            "Reduce interview length to limit discrepancies"
        ],
        correctAnswer: "Adopt a Structured Interview Model with uniform rubrics",
        explanation: "A Structured Interview Model standardizes scoring systemically, ensuring accurate picks strategically. Training improves tactically, more panelists complicate partially, and shorter interviews simplify without addressing structure."
    },
    {
        id: "WFP_034",
        text: "You are finalizing job offers for remote IT specialists this month, but three candidates rejected offers citing unclear remote work policies last week. What’s the most strategic adjustment to close deals now?",
        options: [
            "Attach a remote work FAQ to offers",
            "Integrate a Total Rewards Model with explicit remote benefits",
            "Rush offers to secure commitments faster",
            "Increase salaries to offset policy gaps"
        ],
        correctAnswer: "Integrate a Total Rewards Model with explicit remote benefits",
        explanation: "A Total Rewards Model clarifies benefits systemically, boosting acceptance strategically. FAQs inform tactically, rushing competes partially, and salary hikes compensate without resolving clarity issues."
    },
    {
        id: "WFP_035",
        text: "You are processing background checks for a finance team hire, but inconsistent criminal history reviews disqualified a strong candidate this week, stalling onboarding. What’s the best immediate correction?",
        options: [
            "Train staff on uniform review standards",
            "Apply a Risk Assessment Model to standardize check criteria",
            "Outsource all checks to a consistent vendor",
            "Reassess the disqualified candidate manually"
        ],
        correctAnswer: "Apply a Risk Assessment Model to standardize check criteria",
        explanation: "A Risk Assessment Model standardizes criteria systemically, ensuring fair and swift hiring strategically. Training refines tactically, outsourcing shifts partially, and reassessment fixes reactively without process improvement."
    },
    {
        id: "WFP_036",
        text: "You are updating job descriptions for a project management hire, but current vague performance goals resulted in a recent hire underperforming on deadlines this month. What’s the most effective fix now?",
        options: [
            "Add deadline examples to the description",
            "Use a Competency Mapping Model to specify measurable goals",
            "Have managers explain goals in interviews",
            "Shorten descriptions to focus on core duties"
        ],
        correctAnswer: "Use a Competency Mapping Model to specify measurable goals",
        explanation: "A Competency Mapping Model defines goals systemically, aligning hires with expectations strategically. Examples illustrate tactically, manager explanations shift partially, and shortening simplifies without ensuring clarity."
    },
    {
        id: "WFP_037",
        text: "You are onboarding a new sales team this month, but delays in providing role-specific tools have left half unprepared for client calls after two weeks. What’s the best immediate fix to accelerate readiness?",
        options: [
            "Rush delivery of tools to all new hires",
            "Implement a Structured Onboarding Model with phased tool integration",
            "Extend orientation to cover tool basics",
            "Assign temporary mentors to assist"
        ],
        correctAnswer: "Implement a Structured Onboarding Model with phased tool integration",
        explanation: "A Structured Onboarding Model ensures systemic readiness by integrating tools strategically. Rushing delivery addresses tactically, extending orientation educates partially, and mentors support without process alignment."
    },
    {
        id: "WFP_038",
        text: "You are conducting orientation for remote IT hires this week, but unclear virtual team protocols have caused confusion and low engagement after the first session. What’s the most effective adjustment now?",
        options: [
            "Add a Q&A session to clarify protocols",
            "Apply Socialization Theory to embed virtual team norms in orientation",
            "Shorten orientation to focus on essentials",
            "Provide a remote work guide post-session"
        ],
        correctAnswer: "Apply Socialization Theory to embed virtual team norms in orientation",
        explanation: "Socialization Theory embeds norms systemically, enhancing engagement strategically. Q&As clarify tactically, shortening simplifies partially, and guides inform without fostering integration."
    },
    {
        id: "WFP_039",
        text: "You are managing skills exercises for a new customer service team, but this month’s generic assessments failed to identify product knowledge gaps, risking poor performance. What’s the best fix to pinpoint gaps now?",
        options: [
            "Increase assessment frequency",
            "Use a Competency-Based Assessment Model tailored to product skills",
            "Train managers to observe gaps on-the-job",
            "Add a post-assessment survey for feedback"
        ],
        correctAnswer: "Use a Competency-Based Assessment Model tailored to product skills",
        explanation: "A Competency-Based Model targets specific gaps systemically, ensuring readiness strategically. More assessments burden tactically, manager observation shifts partially, and surveys gather input without precision."
    },
    {
        id: "WFP_040",
        text: "You are integrating new engineers into a project team this quarter, but siloed departments have slowed collaboration, with only 30% contributing after a month. What’s the most strategic solution now?",
        options: [
            "Host a team-building event this week",
            "Integrate an Organizational Socialization Framework with cross-departmental mentors",
            "Extend onboarding to include team intros",
            "Assign temporary project buddies"
        ],
        correctAnswer: "Integrate an Organizational Socialization Framework with cross-departmental mentors",
        explanation: "An Organizational Socialization Framework with mentors bridges silos systemically, fostering collaboration strategically. Events engage tactically, extending onboarding informs partially, and buddies support without systemic integration."
    },
    {
        id: "WFP_041",
        text: "You are overseeing orientation for a finance team this week, but a rushed schedule left new hires unclear on compliance policies, risking errors. What’s the best immediate correction?",
        options: [
            "Add a compliance overview session",
            "Apply Gagné’s Nine Events to sequence policy training effectively",
            "Provide a compliance handbook post-orientation",
            "Shorten other topics to fit policy discussion"
        ],
        correctAnswer: "Apply Gagné’s Nine Events to sequence policy training effectively",
        explanation: "Gagné’s Nine Events structures learning systemically, ensuring policy clarity strategically. Extra sessions patch tactically, handbooks inform partially, and shortening sacrifices without optimizing delivery."
    },
    {
        id: "WFP_042",
        text: "You are conducting skills exercises for a marketing cohort this month, but current generic tasks missed creativity gaps, leading to uneven campaign contributions. What’s the most effective adjustment now?",
        options: [
            "Increase task frequency to identify gaps",
            "Use Bloom’s Taxonomy to design creativity-focused exercises",
            "Have managers assess creativity post-exercise",
            "Add a self-assessment for new hires"
        ],
        correctAnswer: "Use Bloom’s Taxonomy to design creativity-focused exercises",
        explanation: "Bloom’s Taxonomy targets creativity systemically, aligning skills with needs strategically. More tasks burden tactically, manager assessment shifts partially, and self-assessment lacks objective depth."
    },
    {
        id: "WFP_043",
        text: "You are integrating new hires into a remote customer support team this quarter, but a lack of peer interaction has left 40% disengaged after three weeks. What’s the best fix to boost integration now?",
        options: [
            "Schedule virtual team coffee chats",
            "Apply a Virtual Socialization Model with structured peer pairings",
            "Extend orientation with team intros",
            "Provide a remote buddy for each hire"
        ],
        correctAnswer: "Apply a Virtual Socialization Model with structured peer pairings",
        explanation: "A Virtual Socialization Model fosters systemic engagement through structured connections strategically. Coffee chats engage tactically, extending orientation informs partially, and buddies support without broad integration."
    },
    {
        id: "WFP_044",
        text: "You are onboarding a project management team this month, but unclear success metrics in the process have led to 25% missing deadlines in their first projects. What’s the most strategic solution now?",
        options: [
            "Add a deadline-focused training session",
            "Integrate a Competency Mapping Model with measurable onboarding goals",
            "Have managers clarify metrics post-onboarding",
            "Shorten onboarding to focus on essentials"
        ],
        correctAnswer: "Integrate a Competency Mapping Model with measurable onboarding goals",
        explanation: "A Competency Mapping Model aligns onboarding with measurable success systemically, ensuring readiness strategically. Extra sessions patch tactically, manager clarification shifts partially, and shortening dilutes without addressing metrics."
    },
    {
    "id": "WFP_200",
    "text": "A company is expanding and needs to align its workforce strategy with future business goals. What is the first step in workforce planning?",
    "options": [
        "Analyzing current workforce capabilities",
        "Advertising open positions",
        "Conducting employee exit interviews",
        "Implementing a hiring freeze"
    ],
    "correctAnswer": "Analyzing current workforce capabilities",
    "explanation": "Workforce planning begins with assessing existing skills to identify gaps and make informed hiring decisions. Advertising jobs (B) is part of recruitment, not planning. Exit interviews (C) provide insights but do not forecast future needs. A hiring freeze (D) is a reactive response, not a strategy."
},
{
    "id": "WFP_201",
    "text": "A human resources team is developing a long-term talent acquisition strategy. Which factor is most important in ensuring workforce alignment with organizational goals?",
    "options": [
        "Selecting candidates based on immediate needs",
        "Forecasting future skill requirements",
        "Filling vacancies as quickly as possible",
        "Hiring based solely on referrals from existing employees"
    ],
    "correctAnswer": "Forecasting future skill requirements",
    "explanation": "Anticipating future skill needs ensures that hiring aligns with business growth and evolving workforce demands. Immediate hiring (A) focuses only on short-term needs. Quick hiring (C) can lead to poor fit. Relying on referrals (D) limits diversity and talent access."
},
{
    "id": "WFP_202",
    "text": "Which of the following best differentiates workforce planning from talent acquisition?",
    "options": [
        "Workforce planning focuses on job postings, while talent acquisition deals with performance management",
        "Workforce planning is a proactive approach to staffing, while talent acquisition focuses on filling immediate vacancies",
        "Workforce planning only applies to large corporations, while talent acquisition applies to all businesses",
        "Workforce planning eliminates the need for recruiting by using automation"
    ],
    "correctAnswer": "Workforce planning is a proactive approach to staffing, while talent acquisition focuses on filling immediate vacancies",
    "explanation": "Workforce planning takes a long-term, strategic approach, while talent acquisition addresses current hiring needs. Job postings (A) are a tactical element, not the core focus of planning. Workforce planning applies to all businesses (C), not just large ones. Automation (D) does not replace workforce planning."
},
{
    "id": "WFP_203",
    "text": "When selecting recruitment methods for different job levels, which consideration is most important?",
    "options": [
        "Using a single recruitment method for all positions",
        "Matching the sourcing method to the experience level required",
        "Prioritizing internal candidates regardless of job function",
        "Focusing on passive candidates rather than active job seekers"
    ],
    "correctAnswer": "Matching the sourcing method to the experience level required",
    "explanation": "Effective recruitment strategies consider job level, skills, and industry norms. A one-size-fits-all approach (A) is ineffective. Prioritizing internal candidates (C) without assessing qualifications limits hiring effectiveness. Focusing only on passive candidates (D) ignores strong active job seekers."
},
{
    "id": "WFP_204",
    "text": "A company wants to build a diverse talent pipeline. Which strategy would be most effective in achieving this goal?",
    "options": [
        "Recruiting only from a single well-known university",
        "Expanding outreach to underrepresented groups and nontraditional talent sources",
        "Hiring only through employee referrals",
        "Prioritizing candidates with previous experience in similar roles"
    ],
    "correctAnswer": "Expanding outreach to underrepresented groups and nontraditional talent sources",
    "explanation": "Building a diverse workforce requires reaching broader talent pools. Recruiting from only one university (A) limits diversity. Employee referrals (C) reinforce existing demographics. Prioritizing experience (D) may exclude candidates with transferable skills."
},
{
    "id": "WFP_210",
    "text": "Which of the following is a key benefit of using structured selection procedures, such as assessment centers or structured interviews?",
    "options": [
        "Reducing hiring time by eliminating multiple screening steps",
        "Ensuring a standardized and legally defensible hiring process",
        "Allowing hiring managers to make decisions based on intuition",
        "Prioritizing internal candidates over external applicants"
    ],
    "correctAnswer": "Ensuring a standardized and legally defensible hiring process",
    "explanation": "Structured selection procedures minimize bias and improve consistency in hiring decisions. Reducing screening steps (A) for speed can compromise quality and legal defensibility. Allowing managers to hire based on intuition (C) increases bias and inconsistency. Automatically prioritizing internal candidates (D) can limit external innovation and overlook better-qualified applicants."
},
{
    "id": "WFP_211",
    "text": "What is a critical component of conducting a fair and effective candidate screening process?",
    "options": [
        "Using informal, unstructured interviews to get to know candidates",
        "Ensuring all assessments are job-related and legally compliant",
        "Prioritizing candidates who match the hiring manager’s personality",
        "Selecting candidates based on industry reputation alone"
    ],
    "correctAnswer": "Ensuring all assessments are job-related and legally compliant",
    "explanation": "Effective screening ensures fairness, compliance, and job relevance in hiring. Unstructured interviews (A) lack reliability and lead to subjective decisions. Selecting candidates based on personality fit with the hiring manager (C) encourages bias. Industry reputation (D) does not guarantee a candidate’s actual skills or cultural fit with the company."
},
{
    "id": "WFP_212",
    "text": "An organization wants to improve its onboarding process to increase employee retention. Which of the following is the best approach?",
    "options": [
        "Providing new hires with a structured orientation and mentoring program",
        "Requiring employees to learn company policies independently",
        "Limiting onboarding to administrative paperwork",
        "Delaying orientation until employees have been on the job for 90 days"
    ],
    "correctAnswer": "Providing new hires with a structured orientation and mentoring program",
    "explanation": "A comprehensive onboarding process improves employee engagement, retention, and productivity. Requiring employees to learn policies independently (B) can result in confusion and poor adaptation. Limiting onboarding to paperwork (C) misses cultural and role-specific integration. Delaying orientation (D) prevents employees from receiving critical early support."
},
{
    "id": "WFP_213",
    "text": "A company is struggling with high turnover among new hires. What post-hire activity is most likely to address this issue?",
    "options": [
        "Offering higher salaries to new employees",
        "Implementing a comprehensive onboarding and training program",
        "Increasing annual performance reviews",
        "Reducing the selection process to speed up hiring"
    ],
    "correctAnswer": "Implementing a comprehensive onboarding and training program",
    "explanation": "Proper onboarding ensures new hires integrate successfully and reduces early turnover. Offering higher salaries (A) alone does not address retention issues tied to culture and engagement. Increasing annual performance reviews (C) focuses on long-term evaluation rather than initial success. Shortening the hiring process (D) may compromise selection quality, leading to higher turnover."
},
{
    "id": "WFP_214",
    "text": "In workforce planning, what is the primary purpose of a skills inventory?",
    "options": [
        "Identifying gaps between current employee skills and future organizational needs",
        "Ranking employees based on performance metrics",
        "Determining which employees should receive promotions",
        "Evaluating individual employee job satisfaction"
    ],
    "correctAnswer": "Identifying gaps between current employee skills and future organizational needs",
    "explanation": "A skills inventory is used to assess existing capabilities and determine areas for development or hiring. Ranking employees based on performance (B) focuses on evaluation rather than workforce planning. Using it to determine promotions (C) overlooks other factors such as leadership potential. Evaluating job satisfaction (D) is important but is not the primary purpose of a skills inventory."
},
{
    "id": "WFP_215",
    "text": "A company’s HR team is analyzing workforce data to determine future hiring needs. What factor is most relevant to this analysis?",
    "options": [
        "Employee turnover rates and projected retirements",
        "Competitor branding strategies",
        "Customer satisfaction survey results",
        "Office space availability"
    ],
    "correctAnswer": "Employee turnover rates and projected retirements",
    "explanation": "Analyzing turnover rates and expected retirements helps HR predict staffing needs and plan for talent gaps. Competitor branding strategies (B) impact employer reputation but do not directly determine workforce needs. Customer satisfaction surveys (C) focus on external service quality rather than internal staffing. Office space availability (D) affects logistics but is not a primary factor in workforce planning."
},
{
    "id": "WFP_216",
    "text": "A data-driven approach to talent acquisition helps organizations by:",
    "options": [
        "Eliminating the need for interviews",
        "Ensuring that hiring decisions align with business needs and workforce trends",
        "Replacing traditional recruitment methods with AI-based hiring",
        "Avoiding the need for workforce planning"
    ],
    "correctAnswer": "Ensuring that hiring decisions align with business needs and workforce trends",
    "explanation": "A data-driven approach improves hiring accuracy by using analytics to align workforce planning with organizational objectives. Eliminating interviews (A) removes critical evaluation steps. Replacing all traditional hiring methods with AI (C) may overlook human judgment. Workforce planning (D) is still essential even in data-driven recruitment."
},
{
    "id": "WFP_217",
    "text": "Which of the following best describes an effective candidate experience in the hiring process?",
    "options": [
        "A lengthy and complex application process to ensure only serious applicants apply",
        "Clear communication, timely updates, and a structured interview process",
        "Minimal interaction with candidates until a hiring decision is made",
        "An informal, unstructured process that relies on quick decision-making"
    ],
    "correctAnswer": "Clear communication, timely updates, and a structured interview process",
    "explanation": "A positive candidate experience involves transparency, responsiveness, and organization. A lengthy and complex process (A) discourages applicants. Minimal interaction (C) makes candidates feel undervalued. An unstructured process (D) lacks consistency and fairness."
},
{
    "id": "WFP_218",
    "text": "Why is cultural fit an important consideration in the hiring process?",
    "options": [
        "It ensures that all employees share identical personalities and backgrounds",
        "It increases the likelihood that new hires will integrate successfully into the organization",
        "It replaces the need for technical skills in candidate evaluation",
        "It limits diversity by prioritizing team cohesion over different perspectives"
    ],
    "correctAnswer": "It increases the likelihood that new hires will integrate successfully into the organization",
    "explanation": "Cultural fit ensures employees adapt well to the company's values and work environment. Making all employees identical (A) is unrealistic and limits diversity. Cultural fit does not replace technical skills (C), nor should it restrict diverse perspectives (D)."
},
{
    "id": "WFP_219",
    "text": "A company is reviewing its talent acquisition metrics. Which key performance indicator (KPI) is most useful for assessing the efficiency of the hiring process?",
    "options": [
        "Number of job applications received per opening",
        "Time-to-fill and quality-of-hire metrics",
        "Total company revenue growth",
        "Percentage of employees attending company events"
    ],
    "correctAnswer": "Time-to-fill and quality-of-hire metrics",
    "explanation": "These KPIs measure hiring efficiency by tracking speed and effectiveness. The number of applications per opening (A) does not indicate quality. Company revenue growth (C) is influenced by many factors beyond hiring. Employee event participation (D) is unrelated to hiring efficiency."
},
{
    "id": "WFP_220",
    "text": "A recruiter is determining whether an applicant has the necessary knowledge, skills, and abilities (KSAs) for a position. What is the most effective way to assess this?",
    "options": [
        "Reviewing the candidate’s resume and assuming qualifications match experience",
        "Conducting skills tests, structured interviews, and reference checks",
        "Asking for a personal reference from a previous manager",
        "Prioritizing candidates with the most years of experience"
    ],
    "correctAnswer": "Conducting skills tests, structured interviews, and reference checks",
    "explanation": "Using multiple assessment methods ensures a thorough evaluation of a candidate’s qualifications. Relying on resumes alone (A) assumes accuracy without validation. Personal references (C) can be biased. Experience alone (D) does not guarantee competency."
},
{
    "id": "WFP_221",
    "text": "A company is developing a long-term succession plan. What is the primary objective of this process?",
    "options": [
        "Reducing headcount to lower labor costs",
        "Ensuring a pipeline of qualified employees for future leadership roles",
        "Hiring external candidates to fill all leadership positions",
        "Avoiding employee promotions to maintain consistency"
    ],
    "correctAnswer": "Ensuring a pipeline of qualified employees for future leadership roles",
    "explanation": "Succession planning prepares internal talent for leadership to maintain business continuity. Reducing headcount (A) cuts costs but does not address future needs. Hiring externally for all leadership roles (C) ignores internal development. Avoiding promotions (D) leads to stagnation."
},
{
    "id": "WFP_222",
    "text": "Which of the following best supports internal mobility within an organization?",
    "options": [
        "Providing employees with opportunities for cross-training and career development",
        "Limiting job postings to external candidates",
        "Focusing only on lateral moves within the same department",
        "Encouraging employees to stay in the same role for at least five years"
    ],
    "correctAnswer": "Providing employees with opportunities for cross-training and career development",
    "explanation": "Internal mobility is supported by skills development and career growth opportunities. Limiting job postings to external candidates (B) restricts internal advancement. Only allowing lateral moves (C) does not encourage upward mobility. Requiring long tenure in the same role (D) can reduce motivation and retention."
},
{
    "id": "WFP_223",
    "text": "A company is revising its hiring process to reduce bias and improve decision-making. Which approach is most effective?",
    "options": [
        "Standardizing interview questions and using objective assessment criteria",
        "Allowing managers to rely on instinct and personal preferences",
        "Only hiring employees who fit a predetermined cultural mold",
        "Avoiding structured selection procedures to keep the process flexible"
    ],
    "correctAnswer": "Standardizing interview questions and using objective assessment criteria",
    "explanation": "Structured hiring reduces bias and ensures fair evaluation. Relying on manager instincts (B) introduces subjectivity. Hiring based on cultural conformity (C) can limit diversity. Avoiding structured procedures (D) increases inconsistency and bias."
},
{
    "id": "WFP_224",
    "text": "A growing company wants to ensure long-term workforce sustainability. What strategy best aligns with this goal?",
    "options": [
        "Continuously hiring to fill immediate vacancies without considering long-term needs",
        "Implementing a comprehensive workforce planning model that accounts for future business goals",
        "Reducing investment in employee development to minimize costs",
        "Relying solely on automation to replace human labor"
    ],
    "correctAnswer": "Implementing a comprehensive workforce planning model that accounts for future business goals",
    "explanation": "Strategic workforce planning ensures sustainable hiring aligned with long-term objectives. Filling vacancies without foresight (A) leads to workforce instability. Reducing investment in employee development (C) limits future talent. Automation (D) can be helpful but should complement, not replace, human labor."
}
    // Add more workforce planning questions
];

export default questions;
