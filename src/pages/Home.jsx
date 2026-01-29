import { profile } from "../data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <section className="hero heroCenter">
      <div className="container heroCenterInner">
        <div className="heroPhotoRing heroPhotoRingLg">
          <img className="heroPhoto" src="/Profile.jpeg" alt="Profile" />
        </div>

        <h1 className="heroTitle heroTitleCenter">{profile.name}</h1>
        <p className="heroSubtitle heroSubtitleCenter">{profile.headline}</p>

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

        <p className="heroNote heroNoteCenter">{profile.target}</p>
      </div>
    </section>
  );
}
