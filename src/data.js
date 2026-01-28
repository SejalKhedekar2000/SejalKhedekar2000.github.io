export const profile = {
  name: "Sejal Khedekar",
  location: "Tempe, AZ",
  phone: "623-759-2095",
  email: "skhedek2@asu.edu",
  linkedin: "https://linkedin.com/in/sejalkhedekar",
  github: "https://github.com/SejalKhedekar2000",
  headline: "Software Engineer (Backend / Full Stack) | .NET, Java, SQL, REST APIs",
  target: "Seeking Backend / Full-Stack Software Engineering Intern or New Grad roles.",
  summary:
    "Software Engineer with 2+ years of experience at Tata Consultancy Services building enterprise web applications using ASP.NET MVC/.NET, Java, SQL, and REST APIs. Strong in CI/CD automation (Jenkins, SonarQube), database development (PL/SQL), and Agile delivery. Currently pursuing an M.S. in Software Engineering at Arizona State University.",
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
    name: "Health Revamp – Disease Ontology Platform",
    tech: "Azure, GraphDB, SPARQL, Flutter/React",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Built an ontology-driven healthcare platform on Azure enabling symptom-based diagnosis using SPARQL queries over a graph database.",
      "Designed and integrated structured medical knowledge using GraphDB and OntoRefine to support decision-support workflows.",
      "Developed frontend interfaces using Flutter/React to visualize diagnosis results and ontology-driven insights."
    ],
    link: "https://github.com/1110tanmay/Healthcare-Revamp"
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
    name: "Job Tracker API (In Progress)",
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
    details: "GPA: 3.90/4.0 (one version shows 3.78/4.0)."
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
