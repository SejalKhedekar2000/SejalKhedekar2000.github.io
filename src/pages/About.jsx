import { profile } from "../data";

export default function About() {
  const a = profile.about;

  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">{a.title}</h2>

        <div className="card">

          {/* Intro paragraphs */}
          {a.intro.map((p, i) => (
            <p
              key={i}
              className="muted"
              style={{ lineHeight: 1.9, marginTop: i ? 12 : 0 }}
            >
              {p}
            </p>
          ))}

          {/* Lessons */}
          <h3 className="cardTitle" style={{ marginTop: 18 }}>
            {a.lessonsTitle}
          </h3>
          <ul className="list">
            {a.lessons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Proud */}
          <h3 className="cardTitle" style={{ marginTop: 18 }}>
            {a.proudTitle}
          </h3>
          <ul className="list">
            {a.proud.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {/* Outside + Closing */}
          <p className="muted" style={{ lineHeight: 1.9, marginTop: 14 }}>
            {a.outside}
          </p>

          <p className="muted" style={{ lineHeight: 1.9, marginTop: 10 }}>
            {a.closing}
          </p>
        </div>
      </div>
    </section>
  );
}