import { useState } from "react";
import "./App.css";
import logo from "./assets/crobotics_logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <img src={logo} alt="Crobotics Logo" className="logo" />
      <button
        className="hamburger"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-links-container${menuOpen ? " open" : ""}`}>
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
    </nav>
  );
}

export default Nav;
