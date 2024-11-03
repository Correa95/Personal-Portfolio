import background from "../images/background1.avif";
import { Link, useNavigate } from "react-router-dom";

import "./SideBar.css";
function SideBar() {
  const navigate = useNavigate();
  return (
    <aside className="sideBar">
      <header className="profile">
        <img src={background} alt="Mathew" className="image" />
        <h1>Mathew M Correa</h1>
        <h3>Software Developer</h3>
        <div className="social">
          <button>LinkIn</button>
          <button>GitHub</button>
        </div>
      </header>
      <nav className="navBar">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="btns">
          <button onClick={() => navigate("/contact")}>Hire Me</button>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;
