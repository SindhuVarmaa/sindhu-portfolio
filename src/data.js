export const portfolio = {
  // Basic
  name: "Sri Sai Sindhu Penmetsa",
  shortSidebarName: "Sri Sai Sindhu",
  roleBadge: "OPEN TO ANALYTICS ROLES",
  taglineTyped: ["Data Analyst", "Sales Operations Analyst", "BI Analyst"],

  location: "United States",
  email: "sindhuvarmaa2001@gmail.com",
  phone: "+1 (607) 296-8932",

  linkedin: "https://linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab",
  github: "https://github.com/SindhuVarmaa",

  // Files in /public
  resumePath: "/Resume.pdf",
  photoPath: "/profile.jpg",

  // Theme
  accent: "#2f6df6",

  // Hero (Amulya-like)
  hero: {
    hello: "Hi!",
    shortName: "Sindhu",
    typedPrefix: "I’m a",
  },

  // About (2 paragraphs split by \n\n)
  about:
    "I genuinely enjoy analytics roles because they let me turn raw data into clear, usable insights. I like digging into numbers to understand what changed, why it happened, and how it impacts real business decisions and then explaining it in a way both technical and non-technical teams can trust.\n\nWhat motivates me most is building reliable reporting: defining KPIs precisely, cleaning messy data, and ensuring numbers stay consistent before anyone acts on them. I’m especially interested in Data Analyst and BI roles where insights influence performance tracking, operational efficiency, and forecasting and I love creating dashboards that feel simple, intuitive, and genuinely helpful.",

  // Interests
  interestsCards: [
    { title: "Problem Solving", icon: "💡", color: "#2f6df6" },
    { title: "Dashboards", icon: "📈", color: "#7c3aed" },
    { title: "Data Cleaning", icon: "🧼", color: "#10b981" },
    { title: "Automation", icon: "⚙️", color: "#ef4444" },
    { title: "Sales Ops", icon: "🧩", color: "#f59e0b" },
    { title: "Baking", icon: "🧁", color: "#2563eb" },
  ],

  // Skills (added Sales & Operations block)
  skills: {
    "ANALYTICS & BUSINESS": [
      "KPI Reporting",
      "Business Insights",
      "Stakeholder Reporting",
      "Root Cause Analysis",
      "Process Improvement",
    ],
    "SALES & OPERATIONS ANALYTICS": [
      "Pipeline & Funnel Reporting",
      "Sales Performance Tracking",
      "Territory / Rep Dashboards",
      "Forecast Support",
      "Operational Metrics & Weekly Business Reviews",
    ],
    "SQL & DATA": [
      "SQL (Joins, CTEs, Window Functions)",
      "Data Cleaning",
      "Data Validation",
      "Snowflake",
      "PostgreSQL",
    ],
    "BI TOOLS": ["Tableau", "Power BI", "Excel (Advanced)", "Dashboard Design"],
    PYTHON: ["pandas", "NumPy", "Automation Scripts", "Forecasting"],
    "WORKFLOW & TOOLS": ["Git", "JIRA", "Documentation", "Agile / Scrum"],
  },

  // Education
  education: [
    {
      degree: "Master’s in Information Systems (Data Science Track)",
      school: "Binghamton University, SUNY",
      date: "Aug 2023 - May 2025",
      location: "Binghamton, NY",
    },
    {
      degree: "Bachelors in Electrical & Electronics Engineering",
      school: "JNTU Hyderabad",
      date: "Jul 2018 - Jun 2022",
      location: "Hyderabad, India",
    },
  ],

  // Experience
  experience: [
    {
      title: "Data Analyst (Academic Research)",
      company: "Binghamton University, SUNY",
      date: "Aug 2024 - May 2025",
      project: "Curriculum Analytics & Benchmarking (Data Science)",
      projectSummary:
        "Benchmarked data science curricula across universities to identify skills coverage gaps and support curriculum updates.",
      asLabel: "Highlights:",
      bullets: [
        "Built a comparison dataset from catalogs/syllabi (topics, tools, prerequisites, outcomes).",
        "Standardized content into categories (SQL, Stats, ML, Visualization, Cloud/Big Data) for clean comparisons.",
        "Performed gap analysis and proposed updates aligned to industry demand for analytics/BI roles.",
        "Created faculty-friendly documentation translating research into actionable recommendations.",
      ],
      color: "#2f6df6",
      icon: "✏️",
    },
    {
      title: "Data Analyst",
      company: "Ulytics Inc",
      date: "May 2024 - May 2025",
      project: "Business Reporting & KPI Dashboards",
      projectSummary:
        "Improved KPI visibility and dashboard usability so teams could make faster, more confident decisions.",
      asLabel: "Highlights:",
      bullets: [
        "Built reusable SQL datasets for recurring KPI reporting with consistent metric definitions.",
        "Automated reporting tasks using Python + SQL (pulls, cleaning, refresh-ready outputs).",
        "Designed Tableau/Power BI dashboards to surface trends and performance changes clearly.",
        "Partnered with stakeholders to refine KPIs and translate needs into clean visuals.",
      ],
      color: "#7c3aed",
      icon: "✏️",
    },
    {
      title: "Data Analyst",
      company: "Cognizant Technology Solutions",
      date: "Oct 2022 - Jul 2023",
      project: "Operational Reporting & KPI Tracking",
      projectSummary:
        "Supported operations teams with accurate reporting, improved data quality, and centralized KPI dashboards.",
      asLabel: "Highlights:",
      bullets: [
        "Created and maintained operational reports using SQL-based datasets for reviews.",
        "Validated data quality (missing values, duplicates, mismatched keys) and corrected issues.",
        "Built dashboards for operational KPIs and SLA metrics to monitor performance in one place.",
      ],
      color: "#10b981",
      icon: "✏️",
    },
    {
      title: "Data Analyst Intern",
      company: "Cognizant Technology Solutions",
      date: "Mar 2022 - Jul 2022",
      project: "Audit & Compliance Reporting",
      projectSummary:
        "Supported audit/compliance reporting where accuracy and traceability were critical.",
      asLabel: "Highlights:",
      bullets: [
        "Assisted with daily/weekly audit reports by extracting data using SQL.",
        "Validated report inputs to reduce rework and improve consistency.",
        "Maintained documentation for report updates to support audit readiness.",
      ],
      color: "#f59e0b",
      icon: "✏️",
    },
  ],

  // ✅ Projects: ONLY 4
  projects: [
    {
      name: "DDoS Attack Detection using Machine Learning",
      stack: "Python • ML • Classification",
      desc:
        "Built a detection approach using ML classifiers with feature engineering on network traffic logs and evaluated intrusion detection performance.",
      image: "ddos-attack-detection.jpg",
      links: {
        github: "https://github.com/SindhuVarmaa/DDoS-Attack-Detection-using-Machine-Learning",
      },
    },
    {
      name: "Marketing Insights Dashboard ",
      stack: "Python • Jupyter Notebook • Analytics",
      desc:
        "Analyzed customer behavior, sales performance, and marketing trends with cleaning, segmentation, visualization, and insight summaries.",
      image: "marketing-insights.jpg",
      links: {
        github: "https://github.com/SindhuVarmaa/marketing-insights",
      },
    },
    {
      name: "Sales-Transactions-Analysis",
      stack: "Python • Jupyter Notebook • EDA",
      desc:
        "Sales transaction analysis focused on trends and business performance with preprocessing, KPI calculations, and clear visuals.",
      image: "sales-transactions.jpg",
      links: {
        github: "https://github.com/SindhuVarmaa/sales-transactions-analysis",
      },
    },
    {
      name: "Financial-Forecasting-Model",
      stack: "Time Series • Python • Forecasting",
      desc:
        "Time-series forecasting with repeatable prep and evaluation steps, plus summarized business insights from predictions.",
      image: "financial-forecast.jpg",
      links: {
        github: "https://github.com/SindhuVarmaa/Financial-Forecasting-Model",
      },
    },
  ],

  // Achievements
  achievements: [
    "Received a Merit Scholarship at Binghamton University for academic excellence in the Information Systems program.",
    "Won an IBM Hackathon by building and presenting a real-world solution using data/technology.",
    "Served as President of Women in Software Engineering at Jawaharlal Nehru College, leading mentoring initiatives and tech participation.",
    "IEEE Vice President for 3 years during undergrad, organizing workshops and coordinating student-led programs.",
  ],
};
