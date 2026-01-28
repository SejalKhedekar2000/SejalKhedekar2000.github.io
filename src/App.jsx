import { profile, skills, experience, projects, education, certifications } from "./data";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="sectionTitle">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function useButtonGlow() {
  const onMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };
  return onMove;
}

function ProjectCard({ p }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3 className="cardTitle">{p.name}</h3>
        <div className="muted">{p.dates}</div>
      </div>
      <div className="muted">{p.tech}</div>
      <ul className="list">
        {p.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {p.link ? (
        <a className="linkBtn" href={p.link} target="_blank" rel="noreferrer">
          View Project <FaExternalLinkAlt />
        </a>
      ) : null}
    </article>
  );
}

function ExperienceCard({ e }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3 className="cardTitle">
          {e.role} · {e.company}
        </h3>
        <div className="muted">{e.dates}</div>
      </div>
      <div className="muted">{e.location}</div>
      <ul className="list">
        {e.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  const glowMove = useButtonGlow();

  return (
    <div>

      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <span className="brandDot" />
            {profile.name}
          </div>

          <nav className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
   <section className="hero heroCenter">
  <div className="container heroCenterInner">
    <div className="heroPhotoRing heroPhotoRingLg">
      <img className="heroPhoto" src="/Profile.jpeg" alt="Profile" />
    </div>

    <h1 className="heroTitle heroTitleCenter">
      {profile.name}
    </h1>

    <p className="heroSubtitle heroSubtitleCenter">
      {profile.headline}
    </p>

    <div className="ctaRow heroCtaCenter">
      <a className="btn btnPrimary" href={profile.github} target="_blank" rel="noreferrer">
        <FaGithub /> GitHub
      </a>
      <a className="btn btnGhost" href={profile.linkedin} target="_blank" rel="noreferrer">
        <FaLinkedin /> LinkedIn
      </a>
      <a className="btn btnGhost" href={`mailto:${profile.email}`}>
        <FaEnvelope /> Email
      </a>
    </div>

    <p className="heroNote heroNoteCenter">
      {profile.target}
    </p>

    <a className="scrollHint" href="#about">
      Scroll ↓
    </a>
  </div>
</section>



      {/* ABOUT */}
     <Section id="about" title="About">
  <div className="grid2">
    <div className="card">
      <h3 className="cardTitle">Quick Summary</h3>
      <p className="muted" style={{ marginTop: 10, lineHeight: 1.8, fontSize: 14 }}>
        {profile.summary}
      </p>
      <div className="pillWrap">
        {profile.tags.slice(0, 8).map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
    </div>

    <div className="card">
      <h3 className="cardTitle">Details</h3>
      <ul className="list">
        <li><strong>Location:</strong> {profile.location}</li>
        <li><strong>Email:</strong> {profile.email}</li>
        <li><strong>Phone:</strong> {profile.phone}</li>
      </ul>
    </div>
  </div>
</Section>


      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <div className="grid2">
          <div className="card">
            <h3 className="cardTitle">Languages</h3>
            <div className="pillWrap">{skills.languages.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="card">
            <h3 className="cardTitle">Backend</h3>
            <div className="pillWrap">{skills.backend.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="card">
            <h3 className="cardTitle">Frontend</h3>
            <div className="pillWrap">{skills.frontend.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="card">
            <h3 className="cardTitle">Cloud / DevOps</h3>
            <div className="pillWrap">{skills.cloudDevOps.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="card">
            <h3 className="cardTitle">Databases</h3>
            <div className="pillWrap">{skills.databases.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
          <div className="card">
            <h3 className="cardTitle">Tools / Practices</h3>
            <div className="pillWrap">{skills.tools.map((s) => <Pill key={s}>{s}</Pill>)}</div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience">
        <div className="stack">
          {experience.map((e) => (
            <ExperienceCard key={e.company + e.role} e={e} />
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="grid2">
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education & Certifications">
        <div className="grid2">
          <div className="card">
            <h3 className="cardTitle">Education</h3>
            <ul className="list">
              {education.map((ed) => (
                <li key={ed.school}>
                  <strong>{ed.school}</strong> — {ed.degree} <span className="muted">({ed.dates})</span>
                  <div className="muted">{ed.details}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="cardTitle">Certifications</h3>
            <ul className="list">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Get in Touch">
        <div className="card">
          <div className="contactGrid">
            <a className="contactItem" href={`mailto:${profile.email}`}>
              <FaEnvelope /> {profile.email}
            </a>
            <a className="contactItem" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="contactItem" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="footer">
        <div className="container muted">© {new Date().getFullYear()} {profile.name}</div>
      </footer>
    </div>
  );
}
