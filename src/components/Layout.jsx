import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: 70 }}>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="container muted">© {new Date().getFullYear()} Sejal Khedekar</div>
      </footer>
    </div>
  );
}
