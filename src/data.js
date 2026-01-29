export const profile = {
  name: "Sejal Khedekar",
  location: "Tempe, AZ",
  phone: "623-759-2095",
  email: "skhedek2@asu.edu",
  linkedin: "https://www.linkedin.com/in/sejalkhedekar/",
  github: "https://github.com/SejalKhedekar2000",
  headline: "Software Engineer (Backend / Full Stack) | .NET, Java, SQL, REST APIs",
  target: "Seeking Backend / Full-Stack Software Engineering Intern or New Grad roles.",

  // ✅ Structured About content (easy to render nicely)
  about: {
    title: "About Me",
    intro: [
      "Hi, I’m Sejal Khedekar, a Software Engineer with an M.S. in Software Engineering from Arizona State University and 2+ years of industry experience building scalable backend and full-stack systems across enterprise environments.",
      "I bring hands-on experience transforming complex requirements into production-ready applications—working across APIs, cloud platforms, databases, and frontend interfaces using Java, C#, Python, React, and SQL. My journey spans academic projects and professional roles in India and the U.S., where I’ve contributed to reliable releases, modernized legacy systems, and built developer-focused solutions."
    ],
    lessonsTitle: "Key lessons shaped by my academic and industry journey",
    lessons: [
      "Clean architecture and thoughtful system design matter more than just writing code.",
      "Reliable APIs and backend services are the backbone of real-world scalability.",
      "CI/CD, testing, and code quality gates directly impact release stability.",
      "Strong collaboration across product, QA, and engineering drives successful delivery.",
      "Cloud platforms aren’t just infrastructure—they’re tools for performance, automation, and impact."
    ],
    proudTitle: "What I’m proud of",
    proud: [
      "Delivering 10+ enterprise features and resolving 30+ production issues by improving backend logic, CI/CD pipelines, and database workflows.",
      "Leading a legacy UI modernization effort to improve maintainability and cross-browser compatibility.",
      "Building ontology-driven healthcare and Agile simulation platforms during my graduate studies to support decision-making and learning at scale."
    ],
    outside:
      "Outside of work, you’ll usually find me exploring new technologies, refining side projects, practicing yoga, or unwinding with music and a good cup of chai. I also follow the Art of Living practices, which help me stay grounded, focused, and balanced.",
    closing:
      "I’m always open to connecting with engineers, product builders, and innovators — let’s build impactful software together."
  },

  tags: ["ASP.NET/.NET", "Spring Boot", "REST APIs", "CI/CD", "Oracle PL/SQL", "React"]
};

export const skills = {
  languages: ["Java", "C#", "SQL", "JavaScript", "Python"],
  backend: ["ASP.NET MVC / .NET Core", "Spring Boot", "REST APIs", "GraphQL", "Entity Framework"],
  frontend: ["React", "Angular", "AngularJS", "HTML5", "CSS3", "Bootstrap"],
  databases: ["Oracle (PL/SQL)", "PostgreSQL", "MySQL", "Microsoft SQL Server"],
  cloudDevOps: ["AWS", "Azure", "Docker", "Jenkins", "GitHub Actions", "SonarQube"],
  tools: ["Git", "Postman", "Jira", "Agile/Scrum", "Code Reviews"]
};

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "Software Engineer (Backend / Full Stack)",
    dates: "Jul 2022 – Jun 2024",
    location: "Mumbai, India",
    bullets: [
      "Built and maintained enterprise health insurance modules using C#, ASP.NET MVC, and VB.NET across production releases.",
      "Modernized legacy UI by migrating ASPX/Silverlight to HTML5/CSS3 and AngularJS/React, improving responsiveness and compatibility.",
      "Developed and optimized PL/SQL procedures/functions/triggers to improve database reliability and performance.",
      "Automated build/deployment using Jenkins CI/CD pipelines; supported releases across SIT/UAT environments.",
      "Integrated SonarQube quality gates; collaborated with QA/DevOps in Agile sprints to resolve production issues.",
      "Integrated backend services via REST APIs and supported delivery of 10+ feature enhancements by coordinating UI/middleware/DB changes.",
      "Performed debugging and root-cause analysis on 30+ defects and production issues; improved release stability through fixes and code reviews."
    ]
  },
  {
    company: "APSIT Skills",
    role: "Software Engineering Intern",
    dates: "May 2020 – Jun 2021",
    location: "Mumbai, India",
    bullets: [
      "Built CRM modules using ASP.NET Core MVC and Entity Framework; delivered 8+ REST APIs integrated with React screens.",
      "Implemented secure authentication using JWT and RBAC with ASP.NET Identity for Admin/Sales/Support roles.",
      "Wrote 20+ unit/integration tests using xUnit and Moq; validated APIs using Postman to reduce regression issues.",
      "Refactored legacy .NET components and optimized DB queries, improving performance by 20%."
    ]
  }
];

export const projects = [
  {
  name: "Disease Ontology Platform — Healthcare Knowledge Graph",
  tech: "Flutter/Dart, Flask (Python), SPARQL, GraphDB, Microsoft Azure",
  dates: "Jan 2025 – May 2025",
  bullets: [
    "Designed and developed a scalable ontology-driven healthcare platform integrating multiple datasets into a unified disease knowledge graph.",
    "Built a Flutter frontend enabling interactive querying through dynamic filters and visual exploration of disease information.",
    "Implemented a Flask backend to generate SPARQL queries based on user input and parse JSON responses from GraphDB.",
    "Deployed GraphDB on Microsoft Azure to support efficient, scalable querying across attributes such as age, diagnosis, and geographic region.",
    "Delivered a full-stack system supporting healthcare professionals and researchers in analyzing disease relationships and trends."
  ],
  link: "https://rushadw.github.io/asuteam13-healthcare-revamp/"
},

  {
    name: "Protocol Racer — HTTP/2 vs HTTP/3 (QUIC)",
    tech: "Java, Spring Boot, REST APIs, React, Vue",
    dates: "Aug 2025 – Dec 2025",
    bullets: [
      "Built a Spring Boot + React (Vite) tutorial platform to benchmark HTTP/2 vs HTTP/3 under different network conditions using REST-based simulations.",
      "Visualized performance with latency/throughput metrics, multiplexing behavior, and waterfall charts to demonstrate QUIC benefits under packet loss and mobile networks."
    ],
    link: "https://github.com/rachana-angara/SER421Group11HTTP3"
  },
  {
    name: "Scrum Simulator and Training Tool",
    tech: "Java, Agile Simulation",
    dates: "Aug 2024 – Dec 2024",
    bullets: [
      "Developed a Java-based Scrum simulation tool with configurable Agile parameters and real-time feedback to improve sprint planning decisions.",
      "Implemented workflows for prioritization and velocity tracking; collaborated using GitHub and Agile boards."
    ],
    link: "https://github.com/SER515asu/ser515-nameless"
  },
  {
  name: "SYNLang — Custom Language Interpreter",
  tech: "Python, ANTLR4, Git/GitHub",
  dates: "Jan 2025 – May 2025",
  bullets: [
    "Designed and implemented a custom programming language interpreter using Python and ANTLR4, supporting lexical analysis, parsing, and execution of user-defined programs.",
    "Built grammar rules and parse trees to evaluate expressions and statements, enabling execution of custom language constructs.",
    "Version-controlled the project using Git/GitHub and collaborated on feature development and testing workflows."
  ],
  link: "https://github.com/hpant5/SER502-SYNlang-Team4"
},
{
  name: "Campus Quest AR — Mixed Reality Campus Exploration Game",
  tech: "Unity, C#, AR Foundation, Geolocation, 3D Physics, Mobile AR",
  dates: "Aug 2024 – Dec 2024",
  bullets: [
    "Built a mixed-reality mobile game using Unity and AR Foundation that transforms a university campus into an interactive quest environment with location-based challenges.",
    "Implemented geolocation-based quest markers tied to real-world landmarks, enabling players to physically navigate campus and unlock AR puzzles and mini-games.",
    "Developed physics-based challenges, 3D object interactions, trivia, and riddle mechanics to drive progression toward unlocking the final Campus Gate.",
    "Designed core gameplay loops involving exploration, puzzle-solving, and reward-based progression using digital keys, badges, and tokens.",
    "Collaborated in a team of five to architect gameplay flow, AR interactions, and UI logic, with extensibility for future features such as adaptive difficulty and procedural quest generation."
  ],
  link: "https://github.com/mahaponraj/CampusQuestAR"
},


  {
    name: "Job Tracker API ",
    tech: "Spring Boot, PostgreSQL, JWT, Docker",
    dates: "Jan 2026 – Present",
    bullets: [
      "Developing a secure REST API to manage job applications (CRUD) with JWT and Spring Security.",
      "Designing PostgreSQL schema and containerizing with Docker Compose; setting up CI with GitHub Actions for automated builds/tests."
    ],
    link: "https://github.com/SejalKhedekar2000/job-tracker-api"
  }
];

export const education = [
  {
    school: "Arizona State University",
    degree: "M.S. Software Engineering",
    dates: "Aug 2024 – May 2026",
    details: "GPA: 3.90/4.0"
  },
  {
    school: "University of Mumbai",
    degree: "B.E. Computer Science",
    dates: "Aug 2018 – May 2022",
    details: "CGPA: 9.43/10.0"
  }
];

export const certifications = [
  "Google Cloud Certified Associate Cloud Engineer",
  "Google Cloud Professional Cloud Architect"
];
