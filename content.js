// ─────────────────────────────────────────────
// SITE CONTENT
// ─────────────────────────────────────────────

window.SITE_CONTENT = {

  hero: {
    tagline: "Senior UX Designer",
    headline: "I design systems that simplify <em>complex, real-world problems</em> at global scale.",
    subheadline: "Senior UX Designer at Amazon with 20+ years of experience across enterprise platforms and customer-facing products used by millions worldwide.",
    intro: "My work focuses on transforming complex workflows into intuitive, human-centered experiences. I've spent over a decade at Amazon designing systems across delivery, logistics, and financial platforms—ranging from customer experiences like Amazon Lockers to internal financial systems at massive scale.",
    stats: [
      { num: "20+",    label: "Years experience" },
      { num: "13+",    label: "Years at Amazon" },
      { num: "M+",     label: "Users impacted" },
      { num: "1.53T+", label: "Journal lines / yr" }
    ]
  },

  caseStudies: [
    {
      num: "01",
      featured: true,
      title: "Financial Onboarding for Business Launch",
      description: "Transformed financial onboarding from a 12-week bottleneck into a scalable, automated system — streamlining 1,200+ annual projects and eliminating 800K+ configurations per year.",
      tags: ["Finance", "Enterprise"],
      image: "",
      url: "case-study.html?id=0",

      overview: "Launching new business programs at Amazon requires complex financial setup across multiple systems, teams, and workflows. I led UX design for a multi-year initiative to transform financial onboarding into a scalable, structured, and intelligent system — reducing operational overhead, improving speed, and enabling sustainable growth.",

      problem: {
        intro: "Financial onboarding had become a major bottleneck for business growth. Each new launch required complex financial configuration across systems, coordination between finance, business, and engineering teams, and extensive manual setup.",
        bullets: [
          "12-week requirement generation timelines per launch",
          "1,200 onboarding projects managed annually",
          "165+ engineers dedicated to configuration work",
          "~800K new configurations added every year"
        ]
      },

      scale: [
        "2,750 accounting paths from source systems to financial ledgers",
        "250 attributes required for GL segment derivation",
        "6.5M total configurations in the rules engine",
        "1.53T+ journal lines processed annually",
        "11,000 accounting treatments — 85% contributing less than 0.001% of volume"
      ],

      role: [
        "Lead UX designer for financial onboarding",
        "Defined end-to-end onboarding experience and strategy",
        "Partnered with finance, business, and engineering leadership",
        "Drove system-level simplification and workflow redesign"
      ],

      challenges: [
        { title: "Exploding configuration complexity", desc: "Uncontrolled growth in configurations and accounting treatments created unsustainable maintenance overhead and increasing system risk." },
        { title: "Fragmented workflows", desc: "Onboarding required navigating multiple disconnected systems with no unified experience or clear sequencing." },
        { title: "High operational cost", desc: "Significant engineering effort was required for configuration creation and ongoing maintenance — at massive scale." },
        { title: "Risk & compliance", desc: "Manual processes increased the likelihood of errors and made auditing difficult and time-consuming." },
        { title: "No visibility", desc: "There was no unified way to track onboarding progress, ownership, or downstream system impact." }
      ],

      approach: [
        { title: "End-to-End System Mapping", body: "Mapped onboarding across systems, teams, and dependencies. Reframed the problem as a coordinated system challenge — not isolated tasks — which fundamentally changed how we designed the solution." },
        { title: "Workflow Standardization", body: "Introduced structured onboarding phases with clear sequencing, defined ownership at each stage, and built-in validation checkpoints to reduce errors and ambiguity." },
        { title: "Configuration Rationalization", body: "Identified and eliminated redundant accounting treatments, promoted reuse and standardization across teams, and limited the proliferation of long-tail configurations with minimal business value." },
        { title: "Agentic Workflow Automation", body: "Designed AI-driven workflows to automate configuration generation, reduce manual intervention, and improve consistency at scale — shifting engineers from manual creation to oversight." },
        { title: "Visibility & Control", body: "Enabled transparency through progress tracking dashboards, status visibility across the full lifecycle, and clear ownership attribution across all workflow stages." }
      ],

      solution: "A scalable onboarding platform that guides users through structured workflows, standardizes financial configurations, automates configuration creation using intelligent agentic workflows, and provides end-to-end visibility and control.",
      flow: "Business Request → Financial Setup → Validation → Configuration Automation → Launch Readiness",

      impact: [
        {
          title: "Operational Improvements",
          items: [
            "1,200 annual onboarding requests streamlined",
            "Onboarding reduced from 12 weeks → 2 weeks (83% faster)",
            "Eliminated proliferation of 800K+ annual configurations"
          ]
        },
        {
          title: "Risk Mitigation",
          items: [
            "Standardized policies and controls across onboarding",
            "Improved compliance posture and auditability",
            "Reduced manual journal entries required for error correction"
          ]
        },
        {
          title: "Scale & Efficiency",
          items: [
            "Supported 6.5M configurations across financial operations",
            "Reduced dependency on 165+ engineers for configuration work",
            "Simplified a system handling 1.53T+ journal lines annually"
          ]
        }
      ],

      takeaways: [
        { title: "Simplification is critical at scale", desc: "Reducing unnecessary variation significantly improved system sustainability and reduced operational risk." },
        { title: "Standardization unlocks efficiency", desc: "Structured workflows reduced overhead, errors, and the cognitive burden on every team involved." },
        { title: "Automation enables growth", desc: "Agentic workflows allowed the system to scale without proportionally increasing manual effort." },
        { title: "UX drives business velocity", desc: "Improving onboarding directly accelerated how quickly new businesses could launch at Amazon." }
      ]
    },

    {
      num: "02",
      title: "End-to-End Balance Sheet Reconciliation",
      description: "Redesigned reconciliation workflows for systems processing 1.53T+ journal lines annually — replacing fragmented manual processes with a unified, scalable system that addressed 200K+ hours of manual effort per year.",
      tags: ["Finance", "Enterprise"],
      image: "",
      url: "case-study.html?id=1",

      overview: "Reconciliation is a critical process in financial operations — ensuring the accuracy and integrity of financial data before month-end close. At Amazon, I led UX design for a multi-year initiative to transform reconciliation from a manual, fragmented process into a scalable, structured system capable of handling massive data volumes and global complexity.",

      problem: {
        intro: "Reconciliation workflows were highly manual, fragmented, and difficult to scale. Finance teams had to extract and join data from multiple systems, follow rigid SOPs for analysis, and manually prepare adjustments — all with limited visibility into root causes or progress.",
        bullets: [
          "High effort and long turnaround times for each reconciliation cycle",
          "Limited visibility into root causes of financial discrepancies",
          "Heavy reliance on manual, SOP-driven processes with high error risk",
          "200,000+ hours per year spent on variance resolution and self-correction"
        ]
      },

      scale: [
        "1.53T+ journal lines processed annually",
        "Unified Subledger (USL) serving as the source of truth for the General Ledger",
        "Traditional tools like Excel fundamentally unable to handle data volumes",
        "200,000+ hours per year spent on variance resolution, manual reconciliation, and error correction"
      ],

      role: [
        "Lead UX designer for reconciliation systems",
        "Defined end-to-end reconciliation workflows and experience strategy",
        "Partnered with finance, accounting, and engineering teams",
        "Drove system-level redesign from fragmented tools to unified platform"
      ],

      challenges: [
        { title: "Data scale & complexity", desc: "Handling trillions of journal lines across multiple systems pushed traditional tools and mental models to their limits." },
        { title: "Fragmented tooling", desc: "Data was spread across reports, systems, and manual workflows with no unified experience or consistent path to resolution." },
        { title: "Manual processes", desc: "Heavy reliance on SOP-driven workflows introduced risk, slowed resolution, and created knowledge silos." },
        { title: "Cognitive overload", desc: "Users had to interpret massive volumes of data with limited guidance, context, or decision support." }
      ],

      approach: [
        { title: "Workflow Unification", body: "Connected fragmented reconciliation steps into a single, coherent flow — from data extraction through variance analysis, resolution, and month-end close." },
        { title: "Structured Reconciliation Model", body: "Defined clear stages of reconciliation with explicit task ownership and standardized workflows — reducing ambiguity and making the process repeatable across teams." },
        { title: "Data Simplification", body: "Reduced cognitive load by structuring financial data hierarchically, surfacing relevant insights first, and filtering out noise that obscured root causes." },
        { title: "System Visibility", body: "Enabled clear tracking of reconciliation status, progress visibility across teams, and easier collaboration — replacing email chains and spreadsheets with structured workflows." }
      ],

      solution: "A unified reconciliation system that streamlines end-to-end workflows, reduces reliance on manual data preparation, provides structured and contextual views of financial data, and improves traceability and auditability across global operations.",
      flow: "Data Extraction → Variance Analysis → Issue Resolution → Adjustment → Month-End Close",

      impact: [
        {
          title: "Efficiency Gains",
          items: [
            "Significantly reduced manual effort across reconciliation workflows",
            "Improved speed of variance detection and root-cause resolution",
            "Reduced dependency on fragmented, disconnected tools"
          ]
        },
        {
          title: "Reliability & Accuracy",
          items: [
            "Improved traceability and auditability of financial data",
            "Reduced risk of manual errors in high-stakes financial processes",
            "Enabled more consistent reconciliation across global teams"
          ]
        },
        {
          title: "Scale Enablement",
          items: [
            "Designed for systems handling 1.53T+ journal lines annually",
            "Enabled scalable reconciliation across global Amazon operations",
            "Addressed 200K+ hours per year of manual effort"
          ]
        }
      ],

      takeaways: [
        { title: "Complex workflows need structure", desc: "Bringing order to fragmented processes significantly improves efficiency, reduces error, and makes work repeatable." },
        { title: "Scale changes everything", desc: "At trillions of records, traditional tools and approaches break down. The design must be built for the actual scale of the problem." },
        { title: "UX can reduce operational cost", desc: "Improving reconciliation workflows directly translated into reduced time, effort, and cost at massive scale." }
      ]
    },

    {
      num: "03",
      title: "Reconciliation Insights & AI Agent Neo",
      description: "Designed an AI-powered Text-to-SQL system enabling 300+ monthly users to detect billion-dollar remittance failures and prevent millions in manual adjustments — without writing a single line of SQL.",
      tags: ["Featured", "Finance", "Enterprise", "AI First"],
      image: "",
      url: "case-study.html?id=2",

      overview: "Building on foundational reconciliation systems, I led UX design for an AI-powered initiative to shift reconciliation from a manual, reactive process to an intelligent, proactive system. This included designing a guardrailed Text-to-SQL interface and an AI agent ('Neo') that helps users analyze, detect, and resolve financial issues through natural language.",

      problem: {
        intro: "Even with improved reconciliation workflows, users still faced deep challenges. Identifying root causes of variances required writing complex SQL queries most finance users couldn't write. Issues were typically discovered late in the cycle, increasing correction effort and financial risk.",
        bullets: [
          "Complex SQL required for data analysis — inaccessible to most finance users",
          "Data spread across multiple systems requiring complex manual joins",
          "Issues discovered late in reconciliation cycles — increasing risk and rework",
          "Heavy dependence on engineers for ad-hoc data queries"
        ]
      },

      scale: [
        "300+ monthly active users",
        "10,000+ monthly page visits",
        "1,400+ AI-generated queries executed per month",
        "Identified $B+ in global remittance failures",
        "Prevented $M+ in downstream manual adjustments"
      ],

      role: [
        "Led UX design for AI-assisted reconciliation workflows",
        "Defined the interaction model and guardrails for AI agent 'Neo'",
        "Partnered with data science and engineering teams",
        "Designed for safety, explainability, and trust in high-stakes financial contexts"
      ],

      challenges: [
        { title: "Technical accessibility", desc: "Most finance users couldn't write SQL — blocking direct data access and creating bottlenecks on engineering teams." },
        { title: "Data complexity", desc: "Complex joins and transformations were required across multiple financial systems to answer even basic questions." },
        { title: "Trust & safety in AI", desc: "Financial AI must be auditable, explainable, and safe — guardrails were a core design requirement, not an afterthought." },
        { title: "Reactive workflows", desc: "Issues were caught late in the cycle, significantly increasing correction effort, financial risk, and end-of-month pressure." }
      ],

      approach: [
        { title: "Guardrailed Text-to-SQL", body: "Designed a natural language interface that translates user questions directly into SQL queries, with built-in guardrails ensuring accuracy, scope, and financial safety — making data accessible to non-technical users." },
        { title: "Automatic Insight Generation", body: "Focused on proactively surfacing anomalies, highlighting variances, and providing contextual explanations — reducing the manual discovery burden and shifting users from reactive to proactive." },
        { title: "Pre-Reconciliation Workflows", body: "Enabled users to detect issues earlier in the cycle, resolve discrepancies before month-end pressure, and reduce the costly late-cycle correction work that previously dominated reconciliation." },
        { title: "Trust & Explainability by Design", body: "Every AI output was designed to be auditable, repeatable, and explainable — with clear sourcing and confidence signals. In financial workflows, trust isn't optional." }
      ],

      solution: "An AI-powered system that enables natural language interaction with financial data, proactively surfaces insights without requiring SQL expertise, supports early-cycle issue detection, and integrates seamlessly into existing reconciliation workflows.",
      flow: "Natural Language Query → SQL Generation → Insight Surface → Variance Detection → Resolution",

      impact: [
        {
          title: "Adoption & Usage",
          items: [
            "300+ monthly active users",
            "10,000+ monthly page visits",
            "1,400+ monthly AI-generated queries executed"
          ]
        },
        {
          title: "Operational Improvements",
          items: [
            "Significantly faster variance detection and root-cause resolution",
            "Reduced dependency on engineers for ad-hoc data queries",
            "Shifted workflows from reactive late-cycle firefighting to proactive monitoring"
          ]
        },
        {
          title: "Real-World Financial Impact",
          items: [
            "Identified $B+ in global remittance failures",
            "Detected incorrect FX postings from newly onboarded GL sources",
            "Prevented $M+ in downstream manual adjustments"
          ]
        }
      ],

      takeaways: [
        { title: "AI unlocks accessibility", desc: "Natural language interfaces make complex systems usable by far more people — removing the SQL barrier changed who could do the work." },
        { title: "Proactive beats reactive", desc: "Detecting issues early has outsized impact — both on manual effort reduction and financial risk mitigation." },
        { title: "Trust is the foundation", desc: "Explainability and guardrails are not optional features — they are prerequisites for AI adoption in high-stakes financial workflows." }
      ]
    },

    {
      num: "04",
      title: "Finance Hub",
      description: "Unified Amazon's fragmented financial tools into a single platform — connecting onboarding, reconciliation, and AI insights across systems handling 1.53T+ journal lines and 6.5M configurations annually.",
      tags: ["Finance", "Enterprise"],
      image: "",
      url: "case-study.html?id=3",

      overview: "Over time, Amazon's financial tooling ecosystem evolved into a collection of specialized systems — each powerful on its own, but disconnected from the others. I led UX design for Finance Hub, a multi-year initiative to unify these fragmented tools into a cohesive platform experience, improving efficiency, discoverability, and scalability across the organization.",

      problem: {
        intro: "Financial workflows were distributed across multiple tools, each designed independently by different teams. Users had to navigate between systems, learn inconsistent patterns, and manually connect workflows — creating high cognitive load and operational friction at scale.",
        bullets: [
          "Constant context switching between disconnected financial tools",
          "Inconsistent interaction patterns and navigation models across systems",
          "No end-to-end visibility across the full financial lifecycle",
          "High onboarding and training effort for new users joining the ecosystem"
        ]
      },

      scale: [
        "1.53T+ journal lines processed annually",
        "6.5M configurations across financial systems",
        "2,750 accounting paths from source to ledger",
        "1,200+ onboarding projects managed annually",
        "300+ monthly active users across AI and reconciliation tools",
        "10,000+ monthly interactions across the full tool ecosystem"
      ],

      role: [
        "Lead UX designer for Finance Hub",
        "Defined the unified platform vision and experience strategy",
        "Collaborated across multiple product, engineering, and business teams",
        "Established shared design patterns and system-level consistency"
      ],

      challenges: [
        { title: "Fragmented ecosystem", desc: "Multiple tools with different workflows, data models, and UX patterns made the system feel disjointed — even when individual tools worked well in isolation." },
        { title: "Cross-team alignment", desc: "Each tool was owned by different teams with different priorities, roadmaps, and definitions of success." },
        { title: "Inconsistent user experience", desc: "The absence of shared patterns led to user confusion, unnecessary relearning, and reduced confidence in the system." },
        { title: "Scale & extensibility", desc: "The platform needed to support not just existing tools, but future workflows as Amazon's financial systems continued to grow." }
      ],

      approach: [
        { title: "Ecosystem Mapping", body: "Mapped the relationships between onboarding systems, reconciliation workflows, and AI insights tools — identifying overlaps, gaps, and high-value integration opportunities." },
        { title: "Unified Information Architecture", body: "Designed a structure organized around user workflows, not system boundaries — creating a single entry point for financial operations with seamless cross-tool navigation." },
        { title: "Shared Design System & Patterns", body: "Defined common interaction patterns, navigation models, and data visualization approaches — ensuring consistency across all tools regardless of which team built them." },
        { title: "Workflow Integration", body: "Connected previously siloed workflows into a continuous experience: Onboarding → Configuration → Reconciliation → Insights — so users could move across the financial lifecycle without losing context." },
        { title: "Intelligence Integration", body: "Embedded AI-powered insights (Neo) directly into platform workflows, surfacing relevant signals in context and enabling proactive decision-making without requiring users to switch tools." }
      ],

      solution: "Finance Hub — a unified platform that brings together onboarding, reconciliation, and AI insights into a single cohesive experience, with standardized workflows, shared interaction patterns, and an extensible architecture designed for scale.",
      flow: "Onboarding → Configuration → Reconciliation → Insights → Decision Making",

      impact: [
        {
          title: "Efficiency & Usability",
          items: [
            "Significantly reduced context switching across financial tools",
            "Improved user productivity and end-to-end workflow continuity",
            "Simplified onboarding and training for new users"
          ]
        },
        {
          title: "Platform Scale",
          items: [
            "Unified systems supporting 1.53T+ journal lines annually",
            "Supported 6.5M configurations and 2,750 accounting paths",
            "Consistent experience across 1,200+ annual onboarding projects"
          ]
        },
        {
          title: "Intelligence & Automation",
          items: [
            "Embedded AI insights directly into reconciliation and onboarding workflows",
            "Enabled proactive decision-making across the full financial lifecycle",
            "Integrated systems with 10,000+ monthly user interactions"
          ]
        }
      ],

      takeaways: [
        { title: "Platforms unlock scale", desc: "Unifying systems creates exponentially more value than optimizing individual tools. The whole is greater than the sum of its parts." },
        { title: "Consistency reduces cognitive load", desc: "Shared patterns and workflows improve usability across complex ecosystems — reducing friction and building user confidence." },
        { title: "Integration drives efficiency", desc: "Connecting workflows eliminates context switching, redundant effort, and the hidden cost of tool fragmentation." },
        { title: "UX can shape ecosystems", desc: "Design plays a critical role in aligning systems, teams, and experiences — not just screens — at the organizational level." }
      ]
    },

    {
      num: "05",
      featured: true,
      title: "Amazon Locker Accessibility",
      description: "Redesigned the Amazon Locker kiosk and digital experience to be fully accessible — improving pickup and return flows for customers with visual, motor, and cognitive disabilities across thousands of locations worldwide.",
      tags: ["Retail", "Physical"],
      image: "",
      url: "case-study.html?id=4",

      overview: "Amazon Lockers serve millions of customers as a secure, convenient alternative to home delivery. As Lead UX Designer for Lockers and Pickup, I led an initiative to identify and eliminate accessibility barriers across the end-to-end Locker experience — spanning digital surfaces, physical kiosk interactions, and location discovery — so that every customer, regardless of ability, could use Lockers with confidence and independence.",

      problem: {
        intro: "Amazon Lockers were widely adopted but not equally accessible. Customers with visual impairments, limited mobility, or cognitive disabilities faced significant barriers at both the digital and physical touchpoints — from finding a nearby Locker to completing a pickup or return at the kiosk.",
        bullets: [
          "Kiosk interfaces lacked screen reader support and sufficient contrast for low-vision users",
          "Physical kiosk placement and height created barriers for wheelchair users",
          "Locker discovery flows in the app and website were difficult to navigate non-visually",
          "Return and pickup workflows required fine motor precision that excluded many users",
          "No consistent accessibility standard applied across thousands of global Locker locations"
        ]
      },

      scale: [
        "Tens of thousands of Amazon Locker locations across multiple countries",
        "Millions of customers using Lockers monthly for delivery and returns",
        "Accessibility improvements applied across app, website, and physical kiosk surfaces",
        "Aligned with ADA, WCAG 2.1 AA, and Amazon's internal accessibility standards"
      ],

      role: [
        "Lead UX designer for Amazon Lockers and Pickup accessibility initiative",
        "Conducted accessibility audits across digital and physical touchpoints",
        "Partnered with accessibility specialists, engineering, and operations teams",
        "Defined inclusive design standards applied across the Locker ecosystem"
      ],

      challenges: [
        { title: "Multi-surface complexity", desc: "Accessibility issues spanned digital (app, web), physical (kiosk hardware), and environmental (location placement) surfaces — requiring coordinated solutions across very different teams." },
        { title: "Kiosk constraints", desc: "Physical kiosk hardware had significant design constraints — changes required hardware updates, software deployments, and operations coordination at massive scale." },
        { title: "Inconsistent standards", desc: "No unified accessibility standard existed across Locker locations — creating a fragmented and unpredictable experience for customers with disabilities." },
        { title: "Discoverability gaps", desc: "Customers using assistive technology struggled to find and evaluate accessible Locker locations through Amazon's discovery surfaces." },
        { title: "Testing at scale", desc: "Validating accessibility improvements across thousands of physical locations required creative approaches to research and quality assurance." }
      ],

      approach: [
        { title: "End-to-End Accessibility Audit", body: "Conducted a comprehensive audit across all Locker touchpoints — app discovery, website flows, kiosk UI, and physical placement — to identify and prioritize the highest-impact barriers for customers with disabilities." },
        { title: "Inclusive Research & Co-Design", body: "Engaged customers with visual, motor, and cognitive disabilities throughout the design process — running moderated sessions with assistive technology users to ground decisions in real-world experience, not assumptions." },
        { title: "Kiosk Interface Redesign", body: "Redesigned kiosk UI for screen reader compatibility, improved touch target sizing, higher contrast ratios, and simplified interaction flows — reducing cognitive load and enabling independent use for a broader range of customers." },
        { title: "Discovery Surface Improvements", body: "Improved Locker location discovery across app and web — adding accessibility attributes (step-free access, kiosk height), improving filter and map interactions for assistive technology, and ensuring screen reader compatibility throughout." },
        { title: "Accessibility Standards & Governance", body: "Defined and documented accessibility requirements for Locker experiences, establishing a repeatable evaluation framework applied to new locations and future kiosk generations." }
      ],

      solution: "A systematically more accessible Amazon Locker experience — with improved kiosk interfaces, enhanced digital discovery for assistive technology users, clearer accessibility attributes on location listings, and a defined standard ensuring future Locker deployments meet inclusive design requirements.",
      flow: "Location Discovery → Accessible Filtering → Kiosk Arrival → Accessible Pickup / Return → Confirmation",

      impact: [
        {
          title: "Customer Experience",
          items: [
            "Significantly reduced barriers for customers using screen readers and assistive technology",
            "Improved kiosk usability for customers with low vision, motor impairments, and cognitive disabilities",
            "Made Locker location discovery reliably accessible across app and website surfaces"
          ]
        },
        {
          title: "Scale & Standards",
          items: [
            "Accessibility improvements deployed across thousands of Locker locations globally",
            "Established inclusive design standards applied to future Locker hardware and software",
            "Aligned Locker experience with WCAG 2.1 AA and ADA requirements"
          ]
        },
        {
          title: "Organizational Impact",
          items: [
            "Created a repeatable accessibility evaluation framework adopted across the Locker program",
            "Increased internal awareness of accessibility as a product quality requirement, not a compliance checkbox",
            "Strengthened Amazon's commitment to building inclusive delivery experiences for all customers"
          ]
        }
      ],

      takeaways: [
        { title: "Accessibility requires system-level thinking", desc: "Solving for one surface isn't enough. Real inclusion requires coordinated improvements across digital, physical, and environmental touchpoints." },
        { title: "Real users reveal real barriers", desc: "Research with customers using assistive technology surfaced critical issues that internal audits alone could never catch — it is irreplaceable." },
        { title: "Standards prevent regression", desc: "Without a defined and enforced accessibility standard, improvements erode over time. Governance is as important as the design itself." },
        { title: "Inclusion benefits everyone", desc: "Many accessibility improvements — clearer contrast, simpler flows, larger touch targets — measurably improved the experience for all customers, not just those with disabilities." }
      ]
    },

    {
      num: "06",
      title: "Amazon Locker Redirects & Delivery Recovery",
      description: "Designed the delivery recovery experience for Amazon Lockers — enabling customers to redirect failed or at-risk deliveries to nearby Locker locations, improving delivery success rates and customer satisfaction at scale.",
      tags: ["Featured", "Retail", "Physical"],
      image: "",
      url: "case-study.html?id=5",

      overview: "Failed deliveries are one of the most frustrating customer experiences in e-commerce — and one of the most costly for Amazon's logistics operations. As Lead UX Designer for Amazon Lockers and Pickup, I led the design of a proactive delivery recovery system that detects at-risk deliveries and empowers customers to redirect packages to a nearby Amazon Locker — turning a failed delivery into a successful one.",

      problem: {
        intro: "A significant volume of Amazon deliveries failed on the first attempt — due to customers being away from home, access issues, or address problems. These failures created frustration for customers, increased redelivery costs for Amazon, and added complexity to an already high-scale logistics operation.",
        bullets: [
          "Failed first-attempt deliveries drove significant customer dissatisfaction and contacts to customer service",
          "Redelivery and returns processing added substantial cost to logistics operations at scale",
          "Customers had no proactive way to redirect at-risk packages before a failed delivery occurred",
          "Locker locations were underutilized despite being a well-suited solution for delivery recovery",
          "Discovery of nearby Lockers during the delivery window was fragmented and difficult"
        ]
      },

      scale: [
        "Millions of deliveries managed daily across Amazon's global logistics network",
        "Tens of thousands of Amazon Locker locations available for delivery recovery",
        "Redirect experience integrated across app, website, and delivery notification surfaces",
        "Impact measured across delivery success rates, customer contacts, and logistics cost"
      ],

      role: [
        "Lead UX designer for Locker delivery recovery and redirect experience",
        "Defined the end-to-end redirect flow from notification to Locker confirmation",
        "Partnered with logistics, engineering, and customer experience teams",
        "Drove design of proactive notification and location discovery systems"
      ],

      challenges: [
        { title: "Time sensitivity", desc: "The redirect window was narrow — customers needed to act quickly once a delivery was flagged as at-risk, requiring a fast, low-friction experience that worked under time pressure." },
        { title: "Discovery complexity", desc: "Surfacing the right nearby Locker — accounting for capacity, proximity, customer preference, and delivery timing — required sophisticated logic presented simply." },
        { title: "Trust & clarity", desc: "Customers needed to understand exactly what would happen to their package, when it would arrive at the Locker, and how to retrieve it — with full confidence and no ambiguity." },
        { title: "Multi-surface coordination", desc: "The redirect experience needed to work seamlessly across push notifications, email, the Amazon app, and the website — each with different constraints and user contexts." },
        { title: "Logistics integration", desc: "Redirects required real-time coordination with delivery routing systems — the UX had to reflect actual availability and constraints without exposing unnecessary complexity to customers." }
      ],

      approach: [
        { title: "Proactive Notification Design", body: "Designed a clear, timely notification system that surfaced delivery risk early — giving customers enough time to redirect without panic, while setting accurate expectations about the redirect process and timeline." },
        { title: "Simplified Locker Discovery", body: "Built a streamlined, contextual Locker selection experience surfaced directly within the redirect flow — showing nearby available locations with relevant information (distance, hours, capacity) without overwhelming customers with unnecessary detail." },
        { title: "Transparent Confirmation & Tracking", body: "Ensured customers had complete clarity post-redirect — including updated delivery estimates, Locker access instructions, and real-time tracking — so the redirect felt like a solution, not a downgrade." },
        { title: "Cross-Surface Consistency", body: "Designed the redirect experience to work consistently and reliably across all customer surfaces — push notification, email, app, and web — ensuring no customer fell through the cracks regardless of how they engaged." },
        { title: "Edge Case & Error Design", body: "Mapped and designed for critical edge cases — Locker at capacity, redirect window expired, ineligible items — ensuring every failure state gave customers a clear path forward and maintained trust." }
      ],

      solution: "A proactive delivery recovery system that detects at-risk deliveries, notifies customers with enough lead time to act, and provides a fast, clear, and trustworthy experience for redirecting packages to a nearby Amazon Locker — improving delivery success rates while reducing logistics cost and customer effort.",
      flow: "Delivery Risk Detected → Customer Notification → Locker Selection → Redirect Confirmed → Pickup at Locker",

      impact: [
        {
          title: "Customer Experience",
          items: [
            "Improved delivery success rates by enabling proactive redirection before failure",
            "Reduced customer frustration and contacts associated with failed deliveries",
            "Gave customers control and confidence over an experience previously outside their influence"
          ]
        },
        {
          title: "Logistics & Operations",
          items: [
            "Reduced redelivery and returns processing costs at scale",
            "Improved Locker utilization across the delivery network",
            "Enabled more efficient last-mile delivery routing for recovered packages"
          ]
        },
        {
          title: "Platform & Scale",
          items: [
            "Redirect experience deployed across app, web, and notification surfaces",
            "Supported millions of customers across Amazon's global delivery network",
            "Established a reusable delivery recovery design pattern applicable to future programs"
          ]
        }
      ],

      takeaways: [
        { title: "Proactive design reduces failure cost", desc: "Giving customers the tools to prevent a bad experience is far more effective — and less costly — than recovering from one after the fact." },
        { title: "Time pressure demands simplicity", desc: "When customers need to act quickly, every unnecessary step, word, or decision is a barrier. The redirect flow had to be ruthlessly simple." },
        { title: "Trust is built through transparency", desc: "Customers accept inconvenience when they have full clarity about what's happening, why, and what to expect next. Ambiguity at moments of disruption destroys trust." },
        { title: "UX directly impacts logistics economics", desc: "Improving the redirect experience wasn't just a customer satisfaction win — it measurably reduced operational cost at a scale where small improvements have significant financial impact." }
      ]
    },

    {
      num: "07",
      title: "ManchQ — AI-Native SaaS for Dance Class Management",
      description: "A curiosity-driven experiment in AI-first product development — designing and building ManchQ, a fully functional SaaS platform for dance schools, end-to-end using AI-assisted workflows. Live at ManchQ.com.",
      tags: ["Passion Project", "AI First"],
      image: "",
      url: "case-study.html?id=6",
      liveUrl: "https://manchq.com",

      overview: "As part of my commitment to continuously evolve as a designer, I explored how AI is transforming the way products are designed and built. What began as a curiosity-driven experiment in AI-assisted development quickly evolved into ManchQ — a fully functional SaaS platform for managing dance classes, live at ManchQ.com. This project challenged me to rethink traditional design workflows and experience firsthand how AI can accelerate and reshape the product development process.",

      problem: {
        intro: "Dance schools and independent instructors typically rely on a fragmented mix of tools and manual processes to run their operations — creating unnecessary overhead and friction for both instructors and students.",
        bullets: [
          "Class scheduling managed through general-purpose calendars not built for this workflow",
          "Student enrollment tracked in spreadsheets with no real-time visibility",
          "Payments handled through disconnected tools with poor reconciliation",
          "Communication between instructors and students fragmented across multiple channels",
          "No unified platform purpose-built for the operational needs of a dance school"
        ]
      },

      scale: [
        "Built end-to-end as a solo project using AI-assisted development",
        "Fully functional SaaS with class scheduling, enrollment, payments, and admin dashboard",
        "Completed in a fraction of the time traditional development would require",
        "Learnings directly applied to AI workflow exploration in professional practice"
      ],

      role: [
        "Solo designer and product owner for the full end-to-end experience",
        "Defined product strategy, information architecture, and interaction design",
        "Used AI tools throughout design, prototyping, and implementation",
        "Iterated in real time — collapsing the traditional design-to-development gap"
      ],

      challenges: [
        { title: "Learning while building", desc: "This was a deliberate stretch — simultaneously learning AI-first development workflows while making real product decisions, without a team or established process to rely on." },
        { title: "Design decisions at development speed", desc: "AI-assisted development moves fast. Design thinking had to keep pace — requiring more upfront clarity on structure, flows, and intent before prompting." },
        { title: "Maintaining quality without a traditional process", desc: "Without handoffs, reviews, or a team, maintaining design coherence and product quality required discipline and continuous self-critique." },
        { title: "Knowing when to direct vs. accept AI output", desc: "AI generates quickly, but good outcomes require clear intent, constraint, and judgment. Learning when to guide and when to refine was a skill in itself." }
      ],

      approach: [
        { title: "AI-First Workflow Exploration", body: "Rather than using AI to assist a traditional process, I inverted the model — starting with prompts, generating working implementations, and refining from a real product, not a static mockup. This fundamentally changed how design decisions were made and sequenced." },
        { title: "Systems Thinking as the Foundation", body: "Before prompting anything, I mapped the core workflows: class scheduling, enrollment, payment, and communication. Good system structure proved to be the most important input — AI amplified clarity but exposed any gaps in thinking immediately." },
        { title: "Rapid Iteration in Real Time", body: "The collapsed design-development cycle enabled a much tighter feedback loop. Ideas could be tested against a working product within minutes — making iteration more concrete, grounded, and honest than prototyping alone." },
        { title: "Intentional Reflection", body: "Throughout the project, I documented what was working, what AI couldn't replace, and where design judgment remained irreplaceable. The goal was not just to ship — but to return from the experiment with transferable insight." }
      ],

      solution: "A fully functional, AI-native SaaS platform for dance class management — with class scheduling and calendar management, student enrollment and tracking, instructor and class administration, and an operational dashboard. Built end-to-end using AI-assisted workflows, with every design decision made and validated in a live product environment.",
      flow: "Prompt → Generate → Evaluate → Refine → Test → Ship → Reflect",

      impact: [
        {
          title: "Product Outcomes",
          items: [
            "Built a fully functional SaaS platform end-to-end as a solo project",
            "Demonstrated that strong design thinking dramatically improves AI-generated output quality",
            "Shipped a working product in a fraction of the time traditional development requires"
          ]
        },
        {
          title: "Personal & Professional Growth",
          items: [
            "Developed hands-on fluency with AI-first product development workflows",
            "Gained direct experience with the speed, constraints, and opportunities of AI-assisted design",
            "Reinforced that systems thinking and design judgment remain the irreplaceable core of the craft"
          ]
        },
        {
          title: "Learnings Applied to Practice",
          items: [
            "Brought faster iteration and AI workflow thinking into professional design work",
            "Identified new opportunities for AI-assisted workflows in enterprise UX",
            "Strengthened conviction that curiosity and active learning are critical to staying relevant"
          ]
        }
      ],

      takeaways: [
        { title: "Curiosity drives growth", desc: "Actively building with new technologies is far more valuable than passively observing them. The experiment surfaced insights that no amount of reading could have provided." },
        { title: "Systems thinking matters even more with AI", desc: "AI amplifies what you bring to it. Clear structure, good judgment, and strong intent are prerequisites — not optional — for high-quality AI-assisted outcomes." },
        { title: "Speed changes the design process", desc: "When the gap between idea and implementation collapses, design becomes more fluid, more honest, and more iterative. Traditional design stage gates are challenged in meaningful ways." },
        { title: "AI requires direction, not just prompts", desc: "The quality of AI output depends entirely on the clarity of intent behind the input. Strong design thinking is what separates good AI-assisted products from mediocre ones." }
      ]
    },

    {
      num: "08",
      featured: true,
      title: "Sign-In with mShop",
      description: "Led UX design for a passwordless authentication initiative at Amazon — reducing friction, cutting $36M+ in annual SMS costs, and reimagining how millions of customers sign in using their existing Amazon Shopping app.",
      tags: ["Featured", "Retail", "Enterprise", "AI First"],
      image: "",
      url: "case-study.html?id=7",

      overview: "Amazon's authentication ecosystem relied heavily on SMS-based OTP — creating customer friction and significant operational cost. I led UX design for Sign-In with mShop, a passwordless authentication system that leverages existing Amazon Shopping app sessions to let customers sign in via push notification and in-app confirmation. As part of the broader strategy, I also contributed to launching WhatsApp OTP — a near-zero-cost alternative to SMS that delivered $2M in annualized savings.",

      problem: {
        intro: "SMS-based authentication was deeply embedded across Amazon's sign-in experience — but it was expensive, fragile, and increasingly at odds with how customers actually used their devices.",
        bullets: [
          "$140.7M annual SMS cost in 2024 — a major and growing operational burden",
          "Password fatigue and insecure reuse patterns across customer accounts",
          "Context switching between devices to retrieve SMS OTPs created significant friction",
          "High failure rates leading to account recovery flows and customer support contacts",
          "Limited adoption of modern alternatives like Passkeys despite their availability"
        ]
      },

      scale: [
        "43.95% of Amazon customers actively use the Amazon Shopping app (mShop)",
        "Push notification cost ~99.93% less per authentication than SMS",
        "50% of traffic enrolled in active weblab experimentation",
        "$103.9M SMS cost post-initiative — down from $140.7M (26% YoY reduction)",
        "WhatsApp OTP launched globally, delivering $2M in annualized savings"
      ],

      role: [
        "Led UX design for Sign-In with mShop end-to-end",
        "Drove product strategy, interaction design, and experimentation design",
        "Partnered with Business Risk Prevention, Customer Trust, and Engineering",
        "Designed and validated multiple authentication flows through weblab testing",
        "Contributed to broader authentication strategy including WhatsApp OTP launch"
      ],

      challenges: [
        { title: "Security without friction", desc: "Replacing SMS required maintaining — and improving — security posture while simultaneously reducing the effort customers needed to authenticate. These goals often pull in opposite directions." },
        { title: "Transitioning away from SMS", desc: "SMS was deeply embedded in customer expectations and internal systems. Replacing it required a careful progressive model — not a forced migration." },
        { title: "Risk-based authentication design", desc: "High-risk sign-in scenarios required automatic fallback to stronger methods. The system had to be intelligent without exposing its logic or creating confusion." },
        { title: "Adoption without enrollment", desc: "The new method had to work immediately for eligible customers — no opt-in, no setup, no new habit required. Leveraging existing mShop usage was key." },
        { title: "Reliability across delivery paths", desc: "Push notifications can fail. The experience needed a robust fallback — in-app screen takeover — so authentication always completed reliably." }
      ],

      approach: [
        { title: "Leverage Existing Behavior", body: "Rather than introducing a new authentication method that required learning, we built on a behavior customers already had — using the Amazon Shopping app daily. The mShop session became the authentication credential, invisible to the user." },
        { title: "Progressive Authentication Model", body: "Designed a tiered system that prioritized the most secure and lowest-friction method available: Passkey → Password → Sign-In with mShop → OTP fallback. Users were guided naturally toward the best option without being overwhelmed by choice." },
        { title: "Dual Delivery System", body: "Designed push notification + in-app screen takeover as complementary delivery paths — ensuring authentication completed reliably even when notifications were delayed or missed." },
        { title: "Number Matching Challenge", body: "Added a lightweight verification step requiring customers to match a code between the sign-in screen and their app — preventing accidental approvals and account takeover attempts while keeping the experience fast." },
        { title: "Experimentation-Driven Design", body: "Designed two variants tested against 50% of live traffic through weblab experimentation — measuring success rates, risk signals, and behavioral patterns to continuously refine the experience with real data." }
      ],

      solution: "A passwordless authentication system that lets customers sign in to Amazon using their existing Shopping app — delivered via push notification or in-app screen takeover, with number matching verification, risk-based fallback to OTP, and session-based eligibility filtering. Designed to be invisible, fast, and safe at scale.",
      flow: "Email / Phone Entry → Method Selection → Push Notification or App Open → Number Match → Risk Evaluation → Access Granted",

      impact: [
        {
          title: "Cost Reduction",
          items: [
            "SMS costs reduced from $140.7M to $103.9M — a 26% YoY reduction exceeding target",
            "Push notification cost 99.93% less per authentication than SMS",
            "WhatsApp OTP delivering $2M in annualized savings as complementary initiative"
          ]
        },
        {
          title: "Customer Experience",
          items: [
            "Eliminated device context switching — authentication stays in the app customers already use",
            "Authentication completed in under 3 seconds via push notification",
            "Familiar, app-native interaction model required no new customer behavior"
          ]
        },
        {
          title: "Security & Scale",
          items: [
            "Reduced reliance on SMS and passwords — both high-risk authentication vectors",
            "Risk-based filtering ensures compromised or high-risk sessions fall back to OTP",
            "Number matching prevents accidental approvals and reduces account takeover risk",
            "50% of customer traffic enrolled in active weblab — with potential reach to 43.95% of active customers"
          ]
        }
      ],

      takeaways: [
        { title: "The best authentication feels like nothing", desc: "When sign-in is built on behavior customers already have, it disappears into the background. Reducing visible effort is the highest-leverage UX improvement in authentication." },
        { title: "Security and simplicity are not opposites", desc: "Number matching, risk-based fallback, and session validation all improved security — without adding friction for the vast majority of legitimate users." },
        { title: "Experimentation is design at scale", desc: "At Amazon's volume, A/B testing isn't optional — it's the only honest way to validate UX decisions. Designing for testability is as important as designing the experience itself." },
        { title: "Cost impact is a design outcome", desc: "A 26% reduction in SMS cost wasn't a byproduct of this initiative — it was a design goal. UX decisions directly drove business outcomes measurable in tens of millions of dollars." }
      ]
    }
  ],

  about: {
    paragraphs: [
      "I'm a UX designer with nearly two decades of experience designing enterprise platforms and large-scale customer experiences. My work focuses on simplifying complex systems, aligning business and technology goals, and creating intuitive, scalable solutions.",
      "At Amazon, I've spent over 13 years designing both customer-facing and internal products. I led UX design for Amazon Lockers and Pickup, improving delivery recovery, returns, accessibility, and location discovery for millions of customers worldwide.",
      "More recently, I lead UX for Amazon's AFFS (Amazon Financial Foundation System), where I design tools used by business, accounting, and technology teams to manage complex financial workflows at scale.",
      "Before Amazon, I worked at SAP designing enterprise products such as SAP Solution Manager, Sybase Control Center, and NetWeaver Administrator. I hold a Master's degree in Design from IIT Bombay and a Bachelor's degree in Computer Engineering."
    ],
    roles: [
      { company: "Amazon", title: "Lead UX Designer — AFFS Financial Platform", duration: "Current" },
      { company: "Amazon", title: "Lead UX Designer — Lockers & Pickup",         duration: "13+ yrs" },
      { company: "SAP",    title: "UX Designer — Enterprise Products",            duration: "Pre-2012" }
    ],
    education: [
      { degree: "M.Des — Industrial Design",   school: "IIT Bombay, Industrial Design Centre" },
      { degree: "B.E. — Computer Engineering", school: "Bharati Vidyapeeth College of Engineering" }
    ]
  },

  principles: [
    {
      title: "Design for complexity",
      description: "Real-world systems are inherently complex. Good design makes them understandable without hiding the truth or oversimplifying what matters."
    },
    {
      title: "Systems over screens",
      description: "Great experiences span multiple touchpoints, teams, and workflows — not just interfaces. Think in services and systems, not just pages."
    },
    {
      title: "User insight drives decisions",
      description: "Research and usability testing are central to every meaningful design decision. Assumptions are expensive at scale."
    },
    {
      title: "Clarity over cleverness",
      description: "Simple, clear experiences scale better and serve more people than clever ones. If it needs explaining, it needs rethinking."
    }
  ],

  contact: {
    email: "nishantghadge@gmail.com",
    location: "Seattle, WA",
    status: "Senior UX Designer at Amazon"
  }

};
