import { education, certifications } from "../data";

export default function Education() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Education</h2>

        <div className="stack">
          {education.map((e) => (
            <div key={e.school} className="card">
              <h3 className="cardTitle">{e.school}</h3>
              <p className="muted">{e.degree}</p>
              <p className="muted">{e.dates}</p>
              <p className="muted">{e.details}</p>
            </div>
          ))}
        </div>

        <h2 className="sectionTitle" style={{ marginTop: 28 }}>
          Certifications
        </h2>

        <div className="card">
          <ul className="list">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
