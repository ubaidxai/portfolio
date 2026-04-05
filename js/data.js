// home
const typewriterWords = [
  'Agentic AI Systems Design Engineer',
  'AI/ML Engineer',
  'Data Science Solutions',
];


// navbar
const navData = {
  logo: "UAK",
  links: [
    { label: "About",      href: "#hero"       },
    { label: "Skills",     href: "#skills"     },
    { label: "Experience", href: "#experience" },
    { label: "Projects",   href: "#projects"   },
    { label: "Education",  href: "#education"  },
    { label: "Contact",    href: "#contact"    },
  ],
  cta: {
    label: "Ubaid's AI",
    href: "#",
    icon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8v1a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-1a8 8 0 0 1 8-8z"/><path d="M8 16s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  },
};


// tools
const toolsData = [
  { name: "Python",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>` },
  { name: "FastAPI",        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>` },
  { name: "RAG",            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
  { name: "LangChain",      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>` },
  { name: "LangGraph",      icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3"/></svg>` },
  { name: "Docker",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>` },
  { name: "PostgreSQL",     icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>` },
  { name: "Redis",          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
  { name: "TensorFlow",     icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>` },
  { name: "Scikit-learn",   icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>` },
  { name: "BigQuery",       icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>` },
  { name: "n8n",            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>` },
  { name: "Git",            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>` },
  { name: "AWS",            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>` },
  { name: "Django",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>` },
  { name: "Qdrant",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>` },
  { name: "ELK APM",        icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>` },
  { name: "RabbitMQ",       icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
  { name: "Flask",          icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>` },
  { name: "MCP",            icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3m0 12v3M3 12h3m12 0h3m-2.636-6.364-2.122 2.122M6.757 17.243l-2.121 2.121M17.243 17.243l2.121 2.121M6.757 6.757 4.636 4.636"/></svg>` },
  { name: "YOLOv8",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13.5V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4"/><path d="m2 17 4-4 4 4 4-6 4 4"/></svg>` },
  { name: "OpenCV",         icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/></svg>` },
];


// skills
const skillsData = [
  {
    category: "Languages & Frameworks",
    accentColor: "#00a2ff",
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    skills: [
      { name: "Python",     level: "Expert",     percent: 90 },
      { name: "FastAPI",    level: "Expert",     percent: 88 },
      { name: "Django",     level: "Advanced",   percent: 80 },
      { name: "Flask",      level: "Proficient", percent: 71 },
      { name: "SQL",        level: "Expert",     percent: 84 },
      { name: "HTML",       level: "Advanced",   percent: 75 },
      { name: "CSS",        level: "Advanced",   percent: 75 },
      { name: "JavaScript", level: "Advanced",   percent: 68 },
      { name: "C",          level: "Familiar",   percent: 35 },
    ],
  },
  {
    category: "Agentic AI & LLMs",
    accentColor: "#00ffaa",
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 1 8 8v1a8 8 0 0 1-8 8 8 8 0 0 1-8-8v-1a8 8 0 0 1 8-8z"/><path d="M8 16s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    skills: [
      { name: "LangChain",              level: "Expert",   percent: 90 },
      { name: "LangGraph",              level: "Expert",   percent: 90 },
      { name: "Production RAG",         level: "Expert",   percent: 88 },
      { name: "OpenAI Agents SDK",      level: "Expert",   percent: 84 },
      { name: "MCP",                    level: "Advanced", percent: 72 },
      { name: "n8n",                    level: "Advanced", percent: 75 },
      { name: "Claude Code",            level: "Advanced", percent: 90 },
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    accentColor: "#a855f7",
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>`,
    skills: [
      { name: "Scikit-learn",    level: "Expert",       percent: 90 },
      { name: "Neural Networks", level: "Advanced",     percent: 82 },
      { name: "TensorFlow",      level: "Advanced",     percent: 78 },
      { name: "OpenCV",          level: "Advanced",     percent: 73 },
      { name: "OCR & NLP",       level: "Advanced",     percent: 70 },
      { name: "YOLOv8",          level: "Proficient",   percent: 65 },
    ],
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    accentColor: "#ff6a00",
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    skills: [
      { name: "Docker",     level: "Expert",     percent: 90 },
      { name: "PostgreSQL", level: "Expert",     percent: 88 },
      { name: "Redis",      level: "Advanced",   percent: 81 },
      { name: "Git",        level: "Expert",     percent: 85 },
      { name: "ELK APM",    level: "Advanced",   percent: 78 },
      { name: "AWS",        level: "Proficient", percent: 68 },
      { name: "RabbitMQ",   level: "Proficient", percent: 60 },
    ],
  },
];


// experience
const experienceData = [
  {
    role: "Data Scientist",
    company: "Bykea",
    type: "Full-time",
    period: "Feb 2025 — Current",
    location: "Karachi, Pakistan",
    accentColor: "#00a2ff",
    current: true,
    achievements: [
      "Developed and deployed a scalable ML-based Surge Pricing framework comprising In-depth data preprocessing, multiple tree-based models, and hyperparameter tuning, boosting prediction accuracy to about 90%. This data-driven solution increased daily Net Booking Value (NBV) by 1–2%.",
      "Designed and optimized REST APIs using FastAPI framework to deliver models in production, reducing average latency to within 10 ms. Also, Integrated ELK logging for real-time monitoring and immediate error resolution, maintaining a ~0% API error rate under peak loads.",
      "Trained object detection models and applied OCR for customer oboarding documents to decreased the onboarding time 60-70%.",
      "Developed customer support ReAct conversational chatbot to resolve customer queries 4x-faster.",
    ],
    tags: ["LangGraph", "Scikit-Learn", "OpenCV", "FastAPI", "RabbiqMQ", "BigQuery", "PostgreSQL", "Redis", "Docker", "ELK APM"],
  },
  {
    role: "Associate AI Engineer",
    company: "HashMove",
    type: "Full-time",
    period: "Jan 2024 — Feb 2025",
    location: "Karachi, Pakistan",
    accentColor: "#ff6a00",
    current: false,
    achievements: [
      "Developed a robust document extraction system utilizing advanced tools such as PaddleOCR, OpenAI models, fuzzy algorithms, pattern matching, and OpenCV for comprehensive document preprocessing, achieving over 95% accuracy in extracting text from diverse shipping documents.",
      "Engineered a Retrieval-Augmented Generation (RAG) pipeline chatbot using Langchain and OpenAI API, delivering contextual customer support by integrating with Vector and SQL databases, reducing customer query calls by 60% and improving response time by 30%.",
      "Designed and deployed Django applications, implementing over 10+ Django Rest Framework (DRF) APIs and deploying them to Microsoft IIS Server to ensure seamless integration with the product and scalable solutions.",
      "Led proof-of-concept initiatives for optimizing route planning, distribution center operations, and demand forecasting by leveraging statistical and mathematical modeling, and AI-driven approaches to enhance operational efficiency and forecasting accuracy.",
    ],
    tags: ["LangChain", "Database RAG", "OpenAI", "Local SLMs", "Django", "PaddleOCR", "OpenCV", "SQL", "Microsoft IIS"],
  },
];


// projects
const projectsData = [
  {
    index: "01",
    type: "Production RAG",
    title: "HireMeAI",
    accentColor: "#00a2ff",
    github: "https://github.com/ubaidxai/HireMeAI",
    desc: "Personalized AI portfolio agent that ingests LinkedIn, GitHub, resumes, and portfolio data to answer questions about professional background using production RAG.",
    tags: ["LangGraph", "FastAPI", "Docling", "Qdrant", "OpenSearch", "OpenAI"],
  },
  {
    index: "02",
    type: "Agentic AI",
    title: "Deep Research Engine",
    accentColor: "#ff6a00",
    github: "https://github.com/ubaidxai/deep-research-engine",
    desc: "A no-cost, multi-agent, agentic AI system designed to perform autonomous deep research and generate comprehensive reports.",
    tags: ["OpenAI Agents SDK", "Tavily API", "Gemini", "Tool Calling"],
  },
  {
    index: "03",
    type: "Agentic AI",
    title: "Agentic Trading Simulator",
    accentColor: "#a855f7",
    github: "https://github.com/ubaidxai/agentic-trading-simulator",
    desc: "Agentic Trading Simulator is a multi-agent AI system that simulates equity trading with autonomous traders and researcher agents that uses multiple MCP servers and tools.",
    tags: ["OpenAI Agents SDK", "MCP Servers", "PlayWright", "LIBSQL", "Multi Model", "WSL"],
  },
];


// education
const educationData = [
  {
    degree: "MSc. Applied Mathematics",
    institution: "University of Karachi",
    period: "Jan 2023 — Dec 2023",
    location: "Karachi, Pakistan",
    accentColor: "#00a2ff",
    badge: { text: "🥇 Gold Medalist", color: "#efbf04" },
  },
  {
    degree: "BSc. (Honors) Mathematics",
    institution: "University of Karachi",
    period: "Jan 2020 — Dec 2022",
    location: "Karachi, Pakistan",
    accentColor: "#00ffaa",
    badge: null,
  },
];


// certifications
const certificationsData = [
  {
    name: "CS50",
    issuer: "Harvard",
    year: "2026",
    link: "",
    accentColor: "#00a2ff",
  },
  {
    name: "Agentic AI Engineer",
    issuer: "Udemy",
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-612999aa-1512-41d1-afa5-3533f9818896/",
    accentColor: "#00ffaa",
  },
  {
    name: "TensorFlow Developer Specialization",
    issuer: "Coursera - DeepLearning.AI",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/FCHMFKZZFX3J",
    accentColor: "#a855f7",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    year: "2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/7YKURMWHBWXJ",
    accentColor: "#ff6a00",
  },
];


// contact
const contactData = [
  {
    label: "Email",
    value: "ubaidalikhan247@gmail.com",
    link: "mailto:ubaidalikhan247@gmail.com",
    accentColor: "#00a2ff",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    label: "Phone",
    value: "+92-315-6447006",
    link: "tel:+923156447006",
    accentColor: "#00ffaa",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    label: "Location",
    value: "Karachi, Pakistan",
    link: "https://maps.google.com/?q=Karachi,Pakistan",
    accentColor: "#a855f7",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  },
  {
    label: "LinkedIn",
    value: "ubaid-ali-khan-967930169",
    link: "http://www.linkedin.com/in/ubaid-ali-khan-967930169",
    accentColor: "#00d4ff",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
];