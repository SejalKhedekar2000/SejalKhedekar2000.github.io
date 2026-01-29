export default function Resume() {
  // Works locally + GitHub Pages + HashRouter
  const resumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`;

  return (
    <section className="section">
      <div className="container">
        <h2 className="sectionTitle">Resume</h2>

        <div
          className="card"
          style={{ marginBottom: 14, display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a className="btn btnPrimary" href={resumeUrl} download>
            Download Resume
          </a>

          <a className="btn btnGhost" href={resumeUrl} target="_blank" rel="noreferrer">
            Open in new tab
          </a>
        </div>

        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <iframe
            title="Resume"
            src={resumeUrl}
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        </div>
      </div>
    </section>
  );
}
