import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `navItem ${isActive ? "navItemActive" : ""}`;

  return (
    <header className="nav">
      <div className="container navInner">
        <div className="brand">
          <span className="brandDot" />
          Sejal Khedekar
        </div>

        <nav className="navLinks">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
        </nav>
      </div>
    </header>
  );
}
