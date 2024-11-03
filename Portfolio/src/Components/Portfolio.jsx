import "./Portfolio.css";
import background from "../images/background.avif";
import { useNavigate } from "react-router-dom";
function Portfolio() {
  const navigate = useNavigate();
  return (
    <div className="portfolioContainer">
      <h1 className="heading">A collection of my best projects</h1>
      <p className="intro">
        With many years in web development, I acquired extensive experience
        working on projects across multiple industries and technologies. Let me
        show you my best creations.
      </p>
      <button onClick={() => navigate("/contact")}>Hire Me</button>
      <div className="projects">
        <div className="projectCard">
          <img src={background} alt="" />
          <div className="detail">
            <h1 className="name">mathew</h1>
            <small className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nobis culpa aliquam tempore quisquam, quia nulla consectetur iusto
              cumque, dolore quasi ratione! Numquam dolore porro autem harum,
              ullam similique officiis enim, natus exercitationem sit blanditiis
              dicta earum aliquam consequatur doloribus eveniet, fuga quas
              itaque facere modi? Cupiditate sint amet cum.
            </small>
          </div>
          <div className="bt">
            <button>GitHub</button>
            <button>Preview</button>
          </div>
        </div>
        <div className="projectCard">
          <img src={background} alt="" />
          <div className="detail">
            <h1 className="name">mathew</h1>
            <small className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nobis culpa aliquam tempore quisquam, quia nulla consectetur iusto
              cumque, dolore quasi ratione! Numquam dolore porro autem harum,
              ullam similique officiis enim, natus exercitationem sit blanditiis
              dicta earum aliquam consequatur doloribus eveniet, fuga quas
              itaque facere modi? Cupiditate sint amet cum.
            </small>
          </div>
          <div className="bt">
            <button>GitHub</button>
            <button>Preview</button>
          </div>
        </div>
        <div className="projectCard">
          <img src={background} alt="" />
          <div className="detail">
            <h1 className="name">mathew</h1>
            <small className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              nobis culpa aliquam tempore quisquam, quia nulla consectetur iusto
              cumque, dolore quasi ratione! Numquam dolore porro autem harum,
              ullam similique officiis enim, natus exercitationem sit blanditiis
              dicta earum aliquam consequatur doloribus eveniet, fuga quas
              itaque facere modi? Cupiditate sint amet cum.
            </small>
          </div>
          <div className="bt">
            <button>GitHub</button>
            <button>Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
