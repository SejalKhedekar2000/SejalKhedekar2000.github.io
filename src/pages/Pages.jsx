import { projects } from "../data";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ p }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3 className="cardTitle">{p.name}</h3>
        <div className="muted">{p.dates}</div>
      </div>
      <div className="muted">{p.tech}</div>
      <ul className="list">
        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      {p.link ? (
        <a className="linkBtn" href={p.link} target="_blank" rel="noreferrer">
          View Project <FaExternalLinkAlt />
        </a>
      ) : null}
    </article>
  );
}

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <div className="grid2">
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  );
}
