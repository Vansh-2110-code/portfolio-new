export const en = {
    dir: 'ltr',
    langName: 'English',
    langFlag: '🇬🇧',

    // Navbar
    nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        testimonials: 'Testimonials',
        contact: 'Contact',
        letsTalk: "Let's Talk",
    },

    // Hero
    hero: {
        greeting: "👋 Hello, I'm",
        name: 'Vansh',
        lastName: 'Goyal',
        subtitle: 'Machine Learning Engineer & Software Developer building predictive AI models and scalable enterprise platforms with',
        subtitleHighlight: 'Python, Next.js & ML',
        subtitleEnd: '& modern cloud technologies.',
        viewWork: 'View My Work',
        getInTouch: 'Get In Touch',
        scroll: 'scroll',
    },

    // About
    about: {
        label: 'About Me',
        title: 'Architecting AI & Software Systems',
        description: 'Undergraduate in AI & Machine Learning with strong expertise in predictive modeling, full-stack software development, and data analytics.',
        bio1: "I'm {name}, a Machine Learning Engineer & Software Developer based in Indore, India. I specialize in building intelligent ML models, deploying live enterprise platforms (CRMs, ATS), and developing actionable dashboards for data-driven decision making.",
        bio2: 'From engineering real-time Applicant Tracking Systems (ats.whitehorsemanpower.in) and enterprise Astra CRM to developing fraud detection ML models with 0.97 AUC, I bridge mathematical rigor with scalable full-stack architecture.',
        yearsExp: 'Years Experience',
        projectsDone: 'Major Projects',
        happyClients: 'Platforms Deployed',
        downloadCv: '📄 Download CV',
        badgeYears: '9.45',
        badgeLabel: 'B.Tech CGPA',
    },

    // Skills
    skills: {
        label: "EXPERTISE",
        title: "Technical Mastery",
        description: "End-to-end engineering combining Machine Learning, Data Analytics, and Full-Stack Platform Architecture.",
        frontend: "Machine Learning & AI",
        frontendDesc: "Building high-accuracy predictive models, neural architectures with TensorFlow & Scikit-learn, and integrating generative AI APIs.",
        backend: "Enterprise Backend & Cloud",
        backendDesc: "Designing scalable REST APIs, relational SQL databases, workflow automations, and enterprise CRM/ATS cloud architectures.",
        devops: "Data Analytics & BI",
        devopsDesc: "Exploratory data analysis, ETL pipelines with Pandas & NumPy, and creating executive decision dashboards with Power BI."
    },

    // Experience
    experience: {
        label: 'Career & Impact',
        title: 'Work Experience',
        description: 'Internships, live cloud deployments, ML engineering, and leadership milestones.',
        filterAll: 'All Experience',
        filterWork: 'Engineering & ML',
        filterLeadership: 'Leadership',
        liveDeploy: 'Live Deployment',
        viewLive: 'View Live System ↗',
        items: [
            {
                role: 'Software Developer Intern',
                company: 'Sanna Innovations',
                period: 'Jun 2026 – Aug 2026',
                location: 'Indore, India',
                highlight: 'Live Enterprise Deployments (ATS & CRM)',
                metric: 'Production SaaS',
                points: [
                    'Architected and deployed full-stack cloud workflows including Astra CRM, AstraFlow, and a live Applicant Tracking System (ATS) for Whitehorse Manpower.',
                    'Developed corporate platforms for The Astra AI and Sanna Innovations with real-time analytics and dynamic dashboard pipelines.',
                    'Engineered automated candidate tracking, interview scheduling, and enterprise database integrations using Next.js, Node.js, and PostgreSQL.'
                ]
            },
            {
                role: 'Software Developer Intern',
                company: 'Lintcloud Technologies',
                period: 'Jan 2026 – Mar 2026',
                location: 'Indore, India',
                highlight: 'Backend Optimization & Workflows',
                metric: '-35% Latency',
                points: [
                    'Contributed to robust backend services, scalable data-driven web applications, and system workflow optimization.',
                    'Designed and tuned PostgreSQL query pipelines, reducing API response times and throughput bottlenecks by 35%.',
                    'Collaborated closely with cross-functional engineers on system integration, testing, and continuous deployment workflows.'
                ]
            },
            {
                role: 'AI & ML Intern',
                company: 'InLighnX Global Pvt. Ltd.',
                period: 'Jul 2025 – Aug 2025',
                location: 'Indore, India',
                highlight: 'Fraud Detection ML Model (0.97 AUC)',
                metric: '0.97 AUC Score',
                points: [
                    'Engineered and evaluated an end-to-end Machine Learning fraud detection model achieving an outstanding 0.97 AUC score.',
                    'Conducted deep Exploratory Data Analysis (EDA), feature engineering, data imputation, and outlier treatment on high-dimensional datasets.',
                    'Utilized Python, Pandas, NumPy, and Scikit-learn to benchmark ensemble classifiers against fraud anomalies.'
                ]
            },
            {
                role: 'Chairperson & Technical Lead',
                company: 'JU ACM Student Chapter',
                period: '2024 – Present',
                location: 'Joy University',
                highlight: 'Technical Leadership & Mentorship',
                metric: '150+ Mentees',
                points: [
                    'Leading the official university ACM student chapter, directing technical workshops, AI/ML masterclasses, and coding bootcamps.',
                    'Mentored over 150+ students in algorithmic programming, machine learning foundations, and modern full-stack development.',
                    'Organized collegiate hackathons and technical symposiums fostering developer collaboration and open-source contributions.'
                ]
            }
        ]
    },

    // Projects
    projects: {
        label: 'Portfolio',
        title: 'Featured Projects',
        description: "Live enterprise deployments, machine learning solutions, and cybersecurity tooling.",
        all: 'All',
        scrollHint: 'Scroll Down ↓',
        viewProject: 'View Project',
        items: [
            {
                title: 'Enterprise ATS & CRM',
                watermark: 'ASTRA CRM',
                subtitle: 'Applicant Tracking & Enterprise Cloud',
                description: 'Designed and deployed scalable cloud platforms including AstraFlow, Astra CRM, and a comprehensive live ATS for Whitehorse Manpower.',
                image: '/projects/ats_crm.jpg',
                link: 'https://ats.whitehorsemanpower.in'
            },
            {
                title: 'Power Grid AI Forecast',
                watermark: 'POWER GRID',
                subtitle: 'Demand Forecasting & BI Dashboard',
                description: 'Built a TensorFlow ML model to accurately forecast regional electricity demand, visualized patterns via custom Power BI dashboards. Horizon 8 Award Winner.',
                image: '/projects/powergrid_ml.jpg',
                link: '#'
            },
            {
                title: 'Traffic Analyzer',
                watermark: 'TRAFFIC',
                subtitle: 'Real-Time Network Packet Diagnostics',
                description: 'Real-time packet inspection tool and automated diagnostic pipelines for deep telemetry capture, protocol inspection, and error diagnostics using Scapy.',
                image: '/projects/traffic_analyzer.jpg',
                link: '#'
            },
            {
                title: 'The Astra AI Platform',
                watermark: 'ASTRA AI',
                subtitle: 'Corporate Intelligence & Workflows',
                description: 'Engineered and deployed official high-performance corporate platforms and generative AI agent workflows for The Astra AI and Sanna Innovations.',
                image: '/projects/astra_ai.jpg',
                link: '#'
            }
        ],
    },

    // Testimonials
    testimonials: {
        label: 'Recommendations',
        title: 'Endorsements & Impact',
        description: "Feedback from industry leaders, engineering mentors, and project collaborators.",
        items: [
            { content: 'Vansh engineered and deployed our enterprise Astra CRM and AstraFlow platforms with exceptional speed and reliability. His ability to build complex full-stack workflows is outstanding.' },
            { content: 'The custom Applicant Tracking System (ATS) Vansh built revolutionized our recruitment operations. Fast, intuitive, and seamlessly integrated.' },
            { content: 'Vansh achieved an impressive 0.97 AUC on our fraud detection model. His feature engineering, mathematical precision, and EDA skills in Python are top tier.' },
            { content: 'Vansh and his team delivered an extraordinary AI Power Grid forecasting system. Combining deep learning load predictions with a responsive Power BI dashboard earned them top honors.' },
            { content: "Working with Vansh on backend optimization was fantastic. He significantly improved our system workflows, data pipelines, and database query throughput." },
            { content: "As Chairperson of our JU ACM Student Chapter, Vansh demonstrated exemplary leadership, organizing impactful hackathons and guiding fellow developers in AI/ML." },
            { content: "The Network Traffic Analyzer Vansh developed with Scapy and Python provided instant packet diagnostics and telemetry that surpassed standard academic projects." },
            { content: "Vansh built our responsive corporate web platform with incredible attention to detail. High performance, clean architecture, and modern aesthetics!" },
        ],
    },

    // Contact
    contact: {
        label: 'Contact',
        title: "Let's Work Together",
        description: "Have a project or opportunity in mind? Let's build something intelligent and impactful.",
        getInTouch: 'Get in touch',
        intro: "I'm always open to discussing machine learning initiatives, software engineering roles, or innovative enterprise platforms. Reach out anytime!",
        email: 'Email',
        location: 'Location',
        locationValue: 'Indore, India 🇮🇳',
        availability: 'Availability',
        availabilityValue: 'Open for opportunities',
        formName: 'Name',
        formEmail: 'Email',
        formSubject: 'Subject',
        formMessage: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message Sent!',
        copied: 'Email copied to clipboard!',
        eyebrow: 'Contact',
        title1: "Let's build",
        titleAccent: "something",
        title2: "intelligent.",
        subtitle: "Have an AI/ML project or software development role? I'd love to connect.",
        availableStatus: "Open for opportunities",
        findMeOn: "Find me on",
        copyHint: "click to copy",
        copiedSucc: "Copied to clipboard ✓",
        formTitle: "Send a message",
        step: "Step",
        of: "of",
        topics: ['AI & ML Project', 'Software Engineering', 'Enterprise Platform', 'Just saying hi 👋'],
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        msgPlaceholder: "Tell me about your project or opportunity...",
        footnote: "Your info is safe with me. No spam, ever.",
        successTitle: "Message sent!",
        successSub: "Thanks for reaching out. I'll get back to you promptly.",
    },

    // Footer
    footer: {
        brand: 'Vansh Goyal',
        brandDesc: 'Machine Learning Engineer & Software Developer specializing in AI/ML, predictive analytics, and full-stack software development.',
        quickLinks: 'Quick Links',
        services: 'Expertise',
        webDev: 'Machine Learning & AI',
        uiux: 'Full-Stack Development',
        apiDev: 'Data Analytics & Power BI',
        consulting: 'Cloud & ATS/CRM Platforms',
        copyright: '© {year} Vansh Goyal. Built with',
        backToTop: 'Back to top',
        ctaLine1: 'Ready to build',
        ctaLine2: 'something intelligent?',
        ctaSub: "Have an AI project, data challenge, or software engineering opportunity? Let's connect and turn concepts into scalable reality.",
        statusTitle: 'Current Status',
        ticker: ['Machine Learning Engineer', '✦', 'Open for opportunities', '✦', 'Full-Stack Developer', '✦', 'AI & Data Specialist', '✦'],
    },

    // Preloader
    preloader: {
        loading: 'Loading experience...',
    },

    // Preferences popup
    preferences: {
        title: 'Welcome! 👋',
        subtitle: 'Choose your preferences',
        language: 'Language',
        theme: 'Theme',
        dark: 'Dark',
        light: 'Light',
        continue: 'Continue',
    },
};
