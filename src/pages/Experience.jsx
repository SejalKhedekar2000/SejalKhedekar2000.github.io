import { experience } from "../data";

function ExperienceCard({ e }) {
  return (
    <article className="card">
      <div className="cardTop">
        <h3 className="cardTitle">{e.role} · {e.company}</h3>
        <div className="muted">{e.dates}</div>
      </div>
      <div className="muted">{e.location}</div>
      <ul className="list">
        {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Experience</h2>
        <div className="stack">
          {experience.map((e) => (
            <ExperienceCard key={e.company + e.role} e={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
