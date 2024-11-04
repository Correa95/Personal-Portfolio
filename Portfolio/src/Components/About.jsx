import "./About.css";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <section id="about">
      <h1 className="title">
        Hi I'am a Software <br />
        <span className="typing">Developer</span>
      </h1>
      <p className="description">
        I am a software developer passionate about creating efficient, scalable,
        and user-friendly solutions. With a strong foundation in JavaScript and
        Python. I thrive on solving complex problems and delivering high-quality
        code tailored to client needs. My approach to development combines both
        technical precision and creativity, allowing me to build applications
        that are not only functional but also intuitive to use.
      </p>
      <div className="btn">
        <button onClick={() => navigate("/portfolio")}>View Portfolio</button>
        <button onClick={() => navigate("/resume")}>View Resume</button>
      </div>
    </section>
  );
}

export default About;
