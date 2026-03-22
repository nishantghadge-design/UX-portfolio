// ─────────────────────────────────────────────
// SITE CONTENT
// ─────────────────────────────────────────────

window.SITE_CONTENT = {

  hero: {
    tagline: "Senior UX Designer",
    headline: "I design systems that simplify <em>complex, real-world problems</em> at global scale.",
    subheadline: "Senior UX Designer at Amazon with 20+ years of experience across enterprise platforms and customer-facing products used by millions worldwide.",
    intro: "My work focuses on transforming complex workflows into intuitive, human-centered experiences. I've spent over a decade at Amazon designing systems across delivery, logistics, and financial platforms—from Amazon Lockers to large-scale internal financial systems.",
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
      title: "Financial Onboarding for Business Launch",
      description: "Transformed financial onboarding from a 12-week bottleneck into a scalable, automated system — streamlining 1,200+ annual projects and eliminating 800K+ configurations per year.",
      tags: ["Enterprise UX", "Systems Design", "Finance"],
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
      description: "Redesigned reconciliation workflows for systems processing 1.53T+ journal lines annually — replacing fragmented manual processes with a unified, scalable system that reduced 200K+ hours of manual effort per year.",
      tags: ["Enterprise UX", "Workflow Design", "Finance"],
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
      tags: ["AI/ML UX", "Conversational Design", "Finance"],
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
      tags: ["Platform Design", "Enterprise UX", "Finance"],
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
    }
  ],

  about: {
    paragraphs: [
      "I'm a UX designer with nearly two decades of experience designing enterprise platforms and large-scale customer experiences. My work focuses on simplifying complex systems, aligning business and technology goals, and creating intuitive, scalable solutions.",
      "At Amazon, I've spent over 13 years designing both customer-facing and internal products. I led UX design for Amazon Lockers and Pickup, improving delivery recovery, returns, accessibility, and location discovery for millions of customers worldwide.",
      "More recently, I lead UX for Amazon's AFFS (Amazon Financial Foundation System), designing tools used by business, accounting, and technology teams to manage complex financial workflows at global scale.",
      "Before Amazon, I worked at SAP designing enterprise products including SAP Solution Manager, Sybase Control Center, and NetWeaver Administrator. I hold a Master's in Design from IIT Bombay and a Bachelor's in Computer Engineering."
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
