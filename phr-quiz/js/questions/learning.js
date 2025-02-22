// learning.js
const questions = [
    {
        id: "LND_001",
        text: "A multinational firm sees inconsistent skill uptake after a global training rollout. What should HR prioritize to fix this?",
        options: [
            "Standardizing content across regions",
            "Applying Knowles' andragogy to tailor for adult learners",
            "Increasing session frequency",
            "Translating materials into local languages"
        ],
        correctAnswer: "Applying Knowles' andragogy to tailor for adult learners",
        explanation: "Knowles' andragogy principles focus on adult learners' self-direction and relevance, addressing varied needs across regions more effectively than standardization or translation alone."
    },
    {
        id: "LND_116",
        text: "A mid-sized tech firm launches a career pathing program, but after six months, engineers report it feels disconnected from their day-to-day roles, with only 20% participation. Engagement surveys highlight a desire for practical growth. What should HR do?",
        options: [
            "Offer workshops to explain career pathing benefits",
            "Redesign the program to integrate role-specific development milestones",
            "Provide self-paced online career planning tools",
            "Assign mentors to guide engineers through the program"
        ],
        correctAnswer: "Redesign the program to integrate role-specific development milestones",
        explanation: "Redesigning with role-specific milestones aligns growth with daily work, leveraging andragogy’s relevance principle for systemic engagement. Workshops educate tactically, online tools lack context, and mentors support individually without addressing program structure."
    },
    {
        id: "LND_117",
        text: "A retail chain’s management training program for store supervisors yields high satisfaction but no improvement in customer service scores after a year. HR must evaluate its effectiveness. What’s the best approach?",
        options: [
            "Survey supervisors on training applicability",
            "Assess training impact by correlating it with customer service metrics",
            "Review training content for gaps in service skills",
            "Conduct follow-up interviews with participants"
        ],
        correctAnswer: "Assess training impact by correlating it with customer service metrics",
        explanation: "Correlating with metrics (Kirkpatrick Level 4) evaluates systemic business impact, directly tying training to outcomes. Surveys capture perception tactically, content review assumes gaps without evidence, and interviews offer partial qualitative insights."
    },
    {
        id: "LND_118",
        text: "A healthcare provider implements a mentorship program for nurses, but after nine months, mentees report inconsistent progress due to mentors’ varying commitment levels. Management demands measurable growth. What should HR do?",
        options: [
            "Increase mentor training on engagement techniques",
            "Restructure the program with defined growth objectives and progress tracking",
            "Switch to group mentoring for broader support",
            "Offer incentives to mentors for participation"
        ],
        correctAnswer: "Restructure the program with defined growth objectives and progress tracking",
        explanation: "Restructuring with objectives and tracking ensures consistent, measurable growth, aligning with goal-setting theory for systemic impact. Training improves mentor skills tactically, group mentoring dilutes focus, and incentives boost effort without guaranteeing outcomes."
    },
    {
        id: "LND_119",
        text: "A financial firm’s learning development plan for analysts boosts technical skills but not strategic thinking after a year, despite a goal to prepare them for leadership. What’s the most effective HR response?",
        options: [
            "Add leadership-focused webinars to the plan",
            "Revise the plan to include strategic project assignments with coaching",
            "Provide self-assessment tools for strategic skills",
            "Conduct a skills gap analysis for leadership readiness"
        ],
        correctAnswer: "Revise the plan to include strategic project assignments with coaching",
        explanation: "Strategic assignments with coaching embed higher-order skills in practice, leveraging experiential learning for systemic leadership growth. Webinars educate tactically, self-assessments lack application, and gap analysis identifies without addressing development."
    },
    {
        id: "LND_120",
        text: "A manufacturing company’s career pathing program for operators sees low uptake among veterans who feel overlooked compared to new hires. Turnover among experienced staff rises. What should HR do?",
        options: [
            "Highlight veteran success stories in communications",
            "Redesign the program to incorporate veteran-specific career tracks",
            "Offer individualized career counseling sessions",
            "Provide training on emerging industry skills"
        ],
        correctAnswer: "Redesign the program to incorporate veteran-specific career tracks",
        explanation: "Redesigning with veteran tracks ensures relevance and retention, aligning with adult learning’s self-direction for systemic impact. Success stories inspire tactically, counseling helps individually, and training broadens skills without career focus."
    },
    {
        id: "LND_121",
        text: "A consulting firm’s coaching program for junior consultants improves confidence but not client deliverables after six months, despite a goal to enhance project quality. What’s the best HR action?",
        options: [
            "Increase coaching session frequency",
            "Refocus coaching on client-centric project outcomes with feedback loops",
            "Provide consultants with project management templates",
            "Survey coaches on session effectiveness"
        ],
        correctAnswer: "Refocus coaching on client-centric project outcomes with feedback loops",
        explanation: "Refocusing on project outcomes with feedback drives quality systemically, rooted in performance coaching models. Frequency adds time tactically, templates aid partially, and surveys assess without redirecting impact."
    },
    {
        id: "LND_122",
        text: "A logistics firm’s management training for new supervisors results in high completion rates but inconsistent team performance after a year. HR needs to evaluate its long-term value. What’s the most effective approach?",
        options: [
            "Gather supervisor feedback on training relevance",
            "Measure training’s impact by analyzing team performance trends over time",
            "Review training modules for team management content",
            "Conduct a one-time post-training skills assessment"
        ],
        correctAnswer: "Measure training’s impact by analyzing team performance trends over time",
        explanation: "Analyzing team performance trends (Kirkpatrick Level 4) assesses systemic value on organizational outcomes. Feedback captures perception tactically, module review assumes gaps, and one-time assessments miss longitudinal impact."
    },
    {
        id: "LND_130",
        text: "A biotech firm’s career pathing program aims to transition lab technicians to research roles, but after a year, only 25% pursue advanced training due to perceived irrelevance. HR must enhance uptake. What’s the best approach?",
        options: [
            "Use Bandura’s Social Learning Theory with role model testimonials",
            "Apply ADDIE to redesign pathing with needs-based training integration",
            "Offer Lewin’s Change Model workshops to shift mindsets",
            "Provide a Phillips’ Level 1 survey on program perception"
        ],
        correctAnswer: "Apply ADDIE to redesign pathing with needs-based training integration",
        explanation: "ADDIE’s systematic redesign aligns training with technician needs, ensuring relevance and uptake—a proactive, systemic fix. Bandura inspires tactically, Lewin shifts attitudes partially, and Phillips’ survey assesses without addressing design flaws."
    },
    {
        id: "LND_131",
        text: "A law firm’s management training program seeks to develop negotiation skills for associates, but post-training, only 30% demonstrate improved client outcomes despite high engagement. HR must adjust. What’s the most effective strategy?",
        options: [
            "Incorporate Gagné’s Nine Events for structured negotiation lessons",
            "Integrate Argyris’ Double-Loop Learning to refine negotiation strategies",
            "Use Knowles’ Andragogy with self-paced negotiation case studies",
            "Conduct a Kirkpatrick Level 2 assessment of negotiation knowledge"
        ],
        correctAnswer: "Integrate Argyris’ Double-Loop Learning to refine negotiation strategies",
        explanation: "Double-Loop Learning challenges underlying assumptions, fostering systemic strategy improvement tied to outcomes. Gagné structures tactically, Andragogy risks inconsistency, and Level 2 assesses knowledge partially without application focus."
    },
    {
        id: "LND_132",
        text: "A nonprofit’s mentorship program for program coordinators aims to boost grant-writing skills, but after six months, progress stalls due to mentors’ focus on operational tasks. HR needs to optimize. What’s the best solution?",
        options: [
            "Apply Bandura’s Social Learning with grant-writing exemplars",
            "Adopt Phillips’ ROI Model to refocus on grant-writing outcomes",
            "Use Lewin’s Change Model for mentor behavior workshops",
            "Offer a Kirkpatrick Level 3 observation of mentoring sessions"
        ],
        correctAnswer: "Adopt Phillips’ ROI Model to refocus on grant-writing outcomes",
        explanation: "Phillips’ ROI refocuses mentorship on measurable grant-writing impact, aligning systemically with organizational goals. Bandura inspires tactically, Lewin shifts behavior partially, and Level 3 observes without redirecting focus."
    },
    {
        id: "LND_133",
        text: "A logistics firm’s learning development plan targets supply chain optimization for analysts, but after nine months, adoption lags as analysts prioritize daily tasks over new methods. HR must refine it. What’s the best approach?",
        options: [
            "Use Gagné’s Nine Events for structured optimization lessons",
            "Integrate Lewin’s Change Model with optimization adoption stages",
            "Offer Bandura’s Self-Efficacy training with success modeling",
            "Conduct a Phillips’ Level 4 analysis of optimization impact"
        ],
        correctAnswer: "Integrate Lewin’s Change Model with optimization adoption stages",
        explanation: "Lewin’s Change Model (unfreeze-change-refreeze) embeds optimization into workflows, driving systemic adoption. Gagné sequences tactically, Bandura boosts confidence partially, and Level 4 analyzes outcomes without fostering change."
    },
    {
        id: "LND_134",
        text: "A media company’s career pathing program for editors aims to develop multimedia skills, but participants resist due to entrenched print workflows after a year. HR must enhance engagement. What’s the most effective strategy?",
        options: [
            "Incorporate Knowles’ Andragogy with self-directed multimedia tools",
            "Apply Bridges’ Transition Model to guide workflow evolution",
            "Use Kirkpatrick Level 1 feedback to adjust content",
            "Offer Gagné’s Nine Events for multimedia skill lessons"
        ],
        correctAnswer: "Apply Bridges’ Transition Model to guide workflow evolution",
        explanation: "Bridges’ Transition Model manages resistance through phased adaptation, ensuring systemic engagement with new skills. Andragogy risks resistance, Level 1 adjusts tactically, and Gagné educates partially without addressing workflow shifts."
    },
    {
        id: "LND_135",
        text: "A consulting firm’s coaching program for analysts targets analytical storytelling, but after six months, clients report no improvement in report clarity despite high coach ratings. HR must adjust. What’s the best solution?",
        options: [
            "Add Kirkpatrick Level 3 observations of storytelling application",
            "Integrate Schön’s Reflective Practice with client feedback loops",
            "Use Bandura’s Social Learning with storytelling exemplars",
            "Offer a Phillips’ Level 2 test of storytelling knowledge"
        ],
        correctAnswer: "Integrate Schön’s Reflective Practice with client feedback loops",
        explanation: "Schön’s Reflective Practice refines skills through reflection-on-action, systemically improving clarity with client input. Level 3 observes tactically, Bandura models partially, and Level 2 tests knowledge without ensuring application."
    },
    {
        id: "LND_136",
        text: "A retail firm’s management training program aims to foster innovation among store managers, but after a year, creativity metrics remain flat despite strong attendance. HR must evaluate and refine. What’s the most effective approach?",
        options: [
            "Use Knowles’ Andragogy with self-paced innovation projects",
            "Apply Rogers’ Diffusion of Innovations to embed creative adoption",
            "Conduct a Kirkpatrick Level 4 analysis of innovation outcomes",
            "Offer Lewin’s Change Model workshops on creative mindsets"
        ],
        correctAnswer: "Apply Rogers’ Diffusion of Innovations to embed creative adoption",
        explanation: "Rogers’ Diffusion model drives systemic innovation adoption through stages and influencers, aligning with organizational goals. Andragogy risks inconsistency, Level 4 analyzes partially, and Lewin shifts mindsets tactically without embedding practice."
    },
    {
        id: "LND_137",
        text: "A manufacturing firm’s succession planning for plant managers reveals a 40% turnover rate among high-potential candidates. Management seeks HR’s input to stabilize the pipeline. What’s the best data-driven contribution?",
        options: [
            "Present turnover trends with historical performance scores",
            "Analyze exit survey data to identify retention drivers for high-potentials",
            "Provide compensation benchmarks against industry standards",
            "Offer a skills assessment summary for current candidates"
        ],
        correctAnswer: "Analyze exit survey data to identify retention drivers for high-potentials",
        explanation: "Analyzing exit surveys pinpoints why high-potentials leave, enabling systemic retention strategies aligned with Human Capital Theory. Trends describe tactically, benchmarks address pay partially, and skills summaries focus on readiness without retention impact."
    },
    {
        id: "LND_138",
        text: "A tech company’s succession planning for senior developers stalls as top performers reject promotions due to stagnant pay. HR must inform a compensation strategy. What’s the most effective contribution?",
        options: [
            "Share performance ratings with current salary levels",
            "Correlate compensation equity with promotion acceptance rates",
            "Present industry salary trends for developer roles",
            "Conduct a skills development review tied to pay grades"
        ],
        correctAnswer: "Correlate compensation equity with promotion acceptance rates",
        explanation: "Correlating equity with acceptance identifies pay’s systemic role in succession, leveraging Equity Theory for strategic insight. Ratings inform tactically, industry trends generalize, and skills reviews shift focus partially to development."
    },
    {
        id: "LND_139",
        text: "A retail chain’s succession planning for district managers uncovers uneven readiness despite strong evaluations. HR integrates skills and attrition data to guide discussions. What’s the best approach?",
        options: [
            "Provide a turnover report with evaluation highlights",
            "Map skills assessment gaps to attrition patterns for successors",
            "Offer a performance review summary for all candidates",
            "Present skills development resource usage statistics"
        ],
        correctAnswer: "Map skills assessment gaps to attrition patterns for successors",
        explanation: "Mapping gaps to attrition reveals systemic readiness and retention risks, aligning with Talent Pipeline Models for proactive planning. Turnover reports describe tactically, reviews summarize partially, and resource stats miss attrition linkage."
    },
    {
        id: "LND_140",
        text: "A healthcare provider’s succession planning for clinical directors flags high turnover post-promotion. Management seeks HR’s insight on performance data. What’s the most strategic contribution?",
        options: [
            "Share evaluation scores pre- and post-promotion",
            "Analyze performance trends against turnover causes from exit surveys",
            "Provide a compensation adjustment history for directors",
            "Offer a skills assessment comparison of promoted vs. retained staff"
        ],
        correctAnswer: "Analyze performance trends against turnover causes from exit surveys",
        explanation: "Analyzing performance with turnover causes uncovers systemic post-promotion challenges, rooted in Organizational Fit Theory for strategic fixes. Scores track tactically, compensation shifts focus partially, and skills comparisons miss turnover drivers."
    },
    {
        id: "LND_141",
        text: "A financial firm’s succession planning for portfolio managers faces resistance as candidates feel undercompensated despite skills growth. HR must integrate data for discussions. What’s the best contribution?",
        options: [
            "Present skills development progress with current pay scales",
            "Correlate skills mastery with compensation competitiveness",
            "Provide turnover data linked to pay dissatisfaction",
            "Offer an evaluation summary tied to promotion eligibility"
        ],
        correctAnswer: "Correlate skills mastery with compensation competitiveness",
        explanation: "Correlating mastery with competitiveness ties skills to market value, offering systemic insight via Human Capital Theory for succession stability. Progress reports inform tactically, turnover data reacts partially, and evaluations miss compensation focus."
    },
    {
        id: "LND_142",
        text: "A logistics company’s succession planning for operations supervisors reveals a 25% attrition rate among trained candidates. HR integrates skills development and turnover data. What’s the most effective input?",
        options: [
            "Share training completion rates with turnover stats",
            "Analyze skills development ROI against attrition trends",
            "Provide a performance evaluation overview for trainees",
            "Offer an exit survey summary on training perceptions"
        ],
        correctAnswer: "Analyze skills development ROI against attrition trends",
        explanation: "Analyzing ROI vs. attrition evaluates training’s systemic impact on retention, leveraging Phillips’ ROI Model for strategic planning. Completion rates describe tactically, evaluations shift focus partially, and surveys explain perceptions without ROI depth."
    },
    {
        id: "LND_143",
        text: "A consulting firm’s succession planning for partners shows top analysts plateauing despite high evaluations, threatening the pipeline. HR must provide data-driven insight. What’s the best approach?",
        options: [
            "Present evaluation trends with skills training hours",
            "Map skills assessment progress to plateau predictors",
            "Provide turnover data linked to career stagnation",
            "Offer a compensation benchmark for analyst roles"
        ],
        correctAnswer: "Map skills assessment progress to plateau predictors",
        explanation: "Mapping progress to predictors identifies systemic barriers to advancement, aligning with Talent Development Models for proactive succession. Trends inform tactically, turnover reacts partially, and benchmarks miss plateau-specific insight."
    },
    {
        id: "LND_144",
        text: "A logistics firm’s succession planning for operations managers reveals a 35% attrition rate among high-potential trainees after skills development investments. Management seeks HR’s data-driven insight. What’s the best contribution?",
        options: [
            "Present training completion rates with turnover trends",
            "Apply Human Capital Theory to analyze ROI of skills development vs. attrition",
            "Use Kirkpatrick Level 1 feedback to assess trainee perceptions",
            "Offer a performance evaluation summary for departing trainees"
        ],
        correctAnswer: "Apply Human Capital Theory to analyze ROI of skills development vs. attrition",
        explanation: "Human Capital Theory’s ROI analysis links skills investment to retention outcomes, providing systemic insight for succession strategy. Completion rates describe tactically, Level 1 feedback shifts focus partially to perception, and evaluations miss retention drivers."
    },
    {
        id: "LND_145",
        text: "A tech company’s succession planning for product managers flags resistance to promotion due to perceived pay inequity despite strong performance. HR must inform compensation discussions. What’s the most effective approach?",
        options: [
            "Share performance ratings with current pay scales",
            "Integrate Adams’ Equity Theory to correlate pay fairness with promotion uptake",
            "Provide a turnover report linked to compensation gaps",
            "Conduct a skills assessment tied to pay grades"
        ],
        correctAnswer: "Integrate Adams’ Equity Theory to correlate pay fairness with promotion uptake",
        explanation: "Adams’ Equity Theory correlates fairness with behavior, offering systemic insight into promotion acceptance for succession planning. Ratings inform tactically, turnover reports react partially, and skills assessments shift focus to development."
    },
    {
        id: "LND_146",
        text: "A retail chain’s succession planning for store managers uncovers inconsistent readiness despite robust skills training. HR integrates performance and attrition data. What’s the best technical contribution?",
        options: [
            "Present performance scores with turnover statistics",
            "Use Markov Analysis to predict succession readiness transitions",
            "Offer a Kirkpatrick Level 3 evaluation of training application",
            "Provide an exit survey summary on skills perceptions"
        ],
        correctAnswer: "Use Markov Analysis to predict succession readiness transitions",
        explanation: "Markov Analysis models readiness transitions with probabilities, providing systemic, predictive insight for planning. Scores describe tactically, Level 3 evaluates partially, and exit surveys explain perceptions without forecasting."
    },
    {
        id: "LND_147",
        text: "A healthcare provider’s succession planning for nursing supervisors shows high turnover among promoted staff due to inadequate support. HR must leverage evaluations and turnover data. What’s the most strategic input?",
        options: [
            "Share evaluation trends with attrition rates",
            "Apply Vroom’s Expectancy Theory to link support gaps to turnover",
            "Provide a skills development resource usage report",
            "Conduct a Phillips’ Level 4 analysis of promotion outcomes"
        ],
        correctAnswer: "Apply Vroom’s Expectancy Theory to link support gaps to turnover",
        explanation: "Vroom’s Expectancy Theory ties support to motivation and retention, offering systemic insight for succession stability. Trends inform tactically, resource reports shift focus partially, and Level 4 analyzes outcomes without addressing causes."
    },
    {
        id: "LND_148",
        text: "A financial firm’s succession planning for wealth advisors reveals a bottleneck as top performers plateau despite skills investments. HR integrates skills assessments and performance data. What’s the best contribution?",
        options: [
            "Present skills training hours with evaluation scores",
            "Integrate Talent Pipeline Models to map skills progression barriers",
            "Use Kirkpatrick Level 2 tests to reassess skill retention",
            "Offer a turnover analysis tied to career stagnation"
        ],
        correctAnswer: "Integrate Talent Pipeline Models to map skills progression barriers",
        explanation: "Talent Pipeline Models map barriers to advancement, providing systemic insight for unblocking succession. Hours and scores describe tactically, Level 2 tests assess partially, and turnover analysis reacts without addressing progression."
    },
    {
        id: "LND_149",
        text: "A manufacturing company’s succession planning for engineers faces challenges as high-potential candidates leave post-training due to limited growth opportunities. HR must use compensation and attrition data. What’s the most effective approach?",
        options: [
            "Share compensation levels with turnover trends",
            "Apply Human Capital Theory to correlate growth opportunities with retention",
            "Provide a skills assessment summary for departing engineers",
            "Conduct a Phillips’ Level 1 survey on training value"
        ],
        correctAnswer: "Apply Human Capital Theory to correlate growth opportunities with retention",
        explanation: "Human Capital Theory correlates growth with retention outcomes, offering systemic insight for succession planning. Levels and trends inform tactically, skills summaries shift focus partially, and Level 1 surveys assess perception without retention depth."
    },
    {
        id: "LND_150",
        text: "A consulting firm’s succession planning for senior consultants shows uneven readiness despite strong evaluations, with turnover spiking among mid-tier talent. HR integrates skills and exit survey data. What’s the best technical contribution?",
        options: [
            "Present evaluation scores with turnover rates",
            "Use Markov Analysis to forecast readiness and attrition probabilities",
            "Offer a Kirkpatrick Level 4 analysis of skills impact",
            "Provide a skills development resource allocation report"
        ],
        correctAnswer: "Use Markov Analysis to forecast readiness and attrition probabilities",
        explanation: "Markov Analysis forecasts readiness and attrition, providing systemic, predictive data for strategic planning. Scores describe tactically, Level 4 analyzes outcomes partially, and resource reports miss turnover prediction."
    },
    {
        id: "LND_151",
        text: "A financial firm’s compliance training program aims to eliminate regulatory fines within a year, but recent audits reveal persistent documentation errors despite high participation. HR must refine administration. What’s the best approach?",
        options: [
            "Increase training frequency with updated content",
            "Implement ADDIE to redesign training with error-focused simulations",
            "Provide a compliance manual for reference",
            "Conduct Kirkpatrick Level 1 surveys on training satisfaction"
        ],
        correctAnswer: "Implement ADDIE to redesign training with error-focused simulations",
        explanation: "ADDIE’s systematic redesign targets errors with simulations, ensuring systemic compliance aligned with organizational goals. Frequency reinforces tactically, manuals aid partially, and Level 1 surveys assess perception without addressing behavior."
    },
    {
        id: "LND_152",
        text: "A manufacturing plant’s safety training program seeks to reduce incidents by 20% in six months, but workers bypass protocols under time pressure. HR must enhance administration. What’s the most effective strategy?",
        options: [
            "Offer monthly safety refresher sessions",
            "Integrate Knowles’ Andragogy with real-time protocol practice",
            "Distribute safety posters across the plant",
            "Track incident rates post-training"
        ],
        correctAnswer: "Integrate Knowles’ Andragogy with real-time protocol practice",
        explanation: "Knowles’ Andragogy embeds relevant practice into work, driving systemic safety behavior change. Refreshers educate tactically, posters remind partially, and tracking monitors without addressing time-pressure barriers."
    },
    {
        id: "LND_153",
        text: "A tech startup’s benefits education program aims to boost wellness plan enrollment by 30%, but employees skip it due to complexity. HR must adjust administration. What’s the best solution?",
        options: [
            "Host live Q&A sessions on benefits",
            "Apply Gagné’s Nine Events to simplify and sequence enrollment training",
            "Send detailed benefits emails",
            "Monitor enrollment trends post-program"
        ],
        correctAnswer: "Apply Gagné’s Nine Events to simplify and sequence enrollment training",
        explanation: "Gagné’s Nine Events structure learning for clarity and action, systemically boosting enrollment through comprehension. Q&As clarify tactically, emails inform partially, and monitoring tracks without simplifying complexity."
    },
    {
        id: "LND_154",
        text: "A bank’s HR systems training for a new security protocol targets zero breaches in a quarter, but tellers revert to old habits under workload stress. HR must refine administration. What’s the most strategic approach?",
        options: [
            "Provide one-on-one security refreshers",
            "Integrate Kolb’s Experiential Learning with stress-tested simulations",
            "Offer a security protocol cheat sheet",
            "Conduct Phillips’ Level 3 assessments of protocol use"
        ],
        correctAnswer: "Integrate Kolb’s Experiential Learning with stress-tested simulations",
        explanation: "Kolb’s Experiential Learning builds habits through practice under stress, ensuring systemic security adherence. Refreshers reinforce tactically, cheat sheets aid partially, and Level 3 assesses without embedding behavior."
    },
    {
        id: "LND_155",
        text: "A retail chain’s inclusivity initiative seeks to reduce bias complaints by 25% in a year, but post-training, microaggressions persist in customer interactions. HR must enhance administration. What’s the best tactic?",
        options: [
            "Increase inclusivity workshop frequency",
            "Apply Lewin’s Change Model with role-play for customer scenarios",
            "Share inclusivity videos with staff",
            "Track complaint rates post-training"
        ],
        correctAnswer: "Apply Lewin’s Change Model with role-play for customer scenarios",
        explanation: "Lewin’s Change Model (unfreeze-change-refreeze) shifts behavior through role-play, systemically reducing microaggressions. Workshops reinforce tactically, videos educate partially, and tracking monitors without driving change."
    },
    {
        id: "LND_156",
        text: "A logistics firm’s safety training program aims to increase hazard reporting by 40% in six months, but drivers fear reprisal despite training. HR must adjust administration. What’s the most effective method?",
        options: [
            "Offer safety reporting webinars",
            "Integrate Bandura’s Social Learning with anonymous reporting models",
            "Post hazard reporting guidelines",
            "Conduct Kirkpatrick Level 2 tests on reporting knowledge"
        ],
        correctAnswer: "Integrate Bandura’s Social Learning with anonymous reporting models",
        explanation: "Bandura’s Social Learning uses modeling to normalize anonymous reporting, systemically overcoming fear. Webinars educate tactically, guidelines inform partially, and Level 2 tests assess without addressing reprisal concerns."
    },
    {
        id: "LND_157",
        text: "A healthcare provider’s HR systems training for a new patient records platform targets 95% error-free usage in three months, but staff struggle with data entry under time constraints. HR must refine administration. What’s the best approach?",
        options: [
            "Provide weekly data entry refreshers",
            "Apply ADDIE to redesign with time-pressured practice modules",
            "Distribute a platform user guide",
            "Monitor error rates post-training"
        ],
        correctAnswer: "Apply ADDIE to redesign with time-pressured practice modules",
        explanation: "ADDIE redesigns training with contextual practice, ensuring systemic error reduction aligned with usage goals. Refreshers reinforce tactically, guides assist partially, and monitoring tracks without addressing time constraints."
    },
    {
        id: "LND_158",
        text: "A pharmaceutical firm’s compliance training program aims to achieve 100% adherence to FDA regulations within six months, but staff struggle with complex procedural updates despite high completion rates. HR must refine administration. What’s the best approach?",
        options: [
            "Use Gagné’s Nine Events to sequence procedural lessons",
            "Apply Bloom’s Taxonomy to build from comprehension to procedural mastery",
            "Offer Kirkpatrick Level 2 quizzes on regulation knowledge",
            "Provide a compliance checklist for daily reference"
        ],
        correctAnswer: "Apply Bloom’s Taxonomy to build from comprehension to procedural mastery",
        explanation: "Bloom’s Taxonomy scaffolds learning to mastery, ensuring systemic adherence through skill progression. Gagné sequences tactically, Level 2 quizzes assess partially, and checklists aid without embedding deep understanding."
    },
    {
        id: "LND_159",
        text: "A logistics company’s safety training program targets a 30% reduction in vehicle accidents in a year, but drivers resist new protocols due to entrenched habits. HR must enhance administration. What’s the most effective strategy?",
        options: [
            "Conduct Kirkpatrick Level 3 observations of protocol use",
            "Integrate Rogers’ Diffusion of Innovations to promote protocol adoption",
            "Offer Bandura’s Self-Efficacy training with success modeling",
            "Provide a safety protocol manual for reference"
        ],
        correctAnswer: "Integrate Rogers’ Diffusion of Innovations to promote protocol adoption",
        explanation: "Rogers’ Diffusion model drives systemic adoption through stages and influencers, overcoming resistance strategically. Level 3 observes tactically, Bandura boosts confidence partially, and manuals inform without shifting habits."
    },
    {
        id: "LND_160",
        text: "A tech firm’s benefits training program seeks to increase 401(k) participation by 25%, but employees bypass it due to perceived complexity after initial sessions. HR must adjust administration. What’s the best technical solution?",
        options: [
            "Use Phillips’ Level 1 feedback to refine content",
            "Apply Mezirow’s Transformative Learning to reframe financial literacy",
            "Offer Gagné’s Nine Events for structured benefits lessons",
            "Provide a 401(k) enrollment guide"
        ],
        correctAnswer: "Apply Mezirow’s Transformative Learning to reframe financial literacy",
        explanation: "Mezirow’s Transformative Learning shifts mindsets systemically, simplifying complexity through reflection and relevance. Level 1 adjusts tactically, Gagné structures partially, and guides assist without addressing perception."
    },
    {
        id: "LND_161",
        text: "A bank’s HR systems training for a new security platform aims for zero phishing breaches in six months, but staff revert to risky behaviors under pressure despite knowledge gains. HR must refine administration. What’s the most strategic approach?",
        options: [
            "Offer Kirkpatrick Level 2 security quizzes",
            "Integrate Argyris’ Double-Loop Learning to address behavioral assumptions",
            "Use Bandura’s Social Learning with security exemplars",
            "Provide a phishing prevention checklist"
        ],
        correctAnswer: "Integrate Argyris’ Double-Loop Learning to address behavioral assumptions",
        explanation: "Double-Loop Learning challenges risky assumptions, ensuring systemic behavior change aligned with security goals. Level 2 quizzes test tactically, Bandura models partially, and checklists aid without tackling root causes."
    },
    {
        id: "LND_162",
        text: "A retail chain’s inclusivity initiative targets a 20% increase in employee engagement scores in a year, but cultural resistance persists despite training. HR must enhance administration. What’s the best technical method?",
        options: [
            "Conduct Phillips’ Level 4 analysis of engagement impact",
            "Apply Lewin’s Change Model to embed inclusivity through phased adoption",
            "Offer Knowles’ Andragogy with self-directed inclusivity modules",
            "Provide an inclusivity policy handbook"
        ],
        correctAnswer: "Apply Lewin’s Change Model to embed inclusivity through phased adoption",
        explanation: "Lewin’s Change Model (unfreeze-change-refreeze) drives systemic cultural shift, aligning with engagement goals. Level 4 analyzes tactically, Andragogy risks inconsistency, and handbooks inform partially without embedding change."
    },
    {
        id: "LND_163",
        text: "A construction firm’s safety training program aims to eliminate fall-related incidents within nine months, but workers bypass harness protocols due to perceived inefficiency. HR must adjust administration. What’s the most effective approach?",
        options: [
            "Use Kirkpatrick Level 3 assessments of harness use",
            "Integrate Rogers’ Diffusion of Innovations with harness adoption champions",
            "Offer Gagné’s Nine Events for harness training sessions",
            "Provide a fall prevention video series"
        ],
        correctAnswer: "Integrate Rogers’ Diffusion of Innovations with harness adoption champions",
        explanation: "Rogers’ Diffusion model leverages champions to drive systemic protocol adoption, overcoming inefficiency barriers. Level 3 assesses tactically, Gagné educates partially, and videos inform without ensuring practice."
    },
    {
        id: "LND_164",
        text: "A healthcare provider’s HR systems training for a new scheduling platform targets 90% error-free shifts in three months, but staff struggle with interface complexity under time constraints. HR must refine administration. What’s the best technical solution?",
        options: [
            "Offer Bandura’s Self-Efficacy training with interface success stories",
            "Apply Bloom’s Taxonomy to progress from interface knowledge to fluency",
            "Use Phillips’ Level 2 tests to assess interface skills",
            "Provide a scheduling platform user manual"
        ],
        correctAnswer: "Apply Bloom’s Taxonomy to progress from interface knowledge to fluency",
        explanation: "Bloom’s Taxonomy builds systemic fluency through structured skill progression, aligning with error-free goals. Bandura boosts confidence tactically, Level 2 tests assess partially, and manuals aid without ensuring mastery."
    }
    // ... other questions ...
];

// Make sure to explicitly export the questions
export default questions;
