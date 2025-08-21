import { useState } from "react";
import logo from "./assets/crobotics_logo.png";
import "./nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-left">
        <img src={logo} alt="Crobotics Logo" className="logo" />
      </div>
      <div
        className={`nav-center nav-links-container${menuOpen ? " open" : ""}`}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">Posts</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <button
          className="hamburger"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default Nav;
