import "./App.css";
import logo from "../src/assets/crobotics_logo.png";
function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Crobotics Logo" className="logo" />
      <div className="nav-links-container">
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
