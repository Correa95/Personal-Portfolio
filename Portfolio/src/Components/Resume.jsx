import background from "../images/background.avif";
import "./Resume.css";
function Resume() {
  return (
    <section className="resumeContainer" id="resume">
      <h1 className="header">Online Resume</h1>
      <button>Download PDF Version</button>
      <div className="resume">
        <div className="contactDetail">
          <div className="titles">
            <h1>Mathew M Correa</h1>
            <h3>Software Developer</h3>
          </div>
          <div className="contacts">
            <ol>
              <li>678 651 7298</li>
              <li>mathewcorrea19Gmail.com</li>
              <li>www.codewithmathew.com</li>
              <li>AnyWhere</li>
            </ol>
          </div>
        </div>
        <div className="summery">
          <img src={background} alt="Profile" className="image" />
          <p>
            Results-driven software developer with a strong foundation in
            developing, testing, and deploying scalable applications. Skilled in
            multiple programming languages and frameworks, with expertise in
            creating robust code solutions that enhance performance and user
            experience. Adept at collaborating in cross-functional teams to
            solve complex technical challenges and deliver projects on time.
            Passionate about continuous learning and leveraging the latest
            technologies to drive innovation and improve development processes.
          </p>
        </div>
        <div className="workExperience">
          <div className="work">
            <div className="project">
              <h3>mathew</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis ratione earum vel distinctio deleniti! Est,
                voluptatem quos. Natus ratione incidunt maiores rerum ea vel
                officia doloremque! Eaque et dolore deserunt architecto autem
                repellendus, earum fugiat vitae velit natus consequuntur aut
                laborum quo explicabo tempore facere! Magnam distinctio
                reiciendis et ullam!
              </p>
            </div>
            <div className="project">
              <h3>mathew</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis ratione earum vel distinctio deleniti! Est,
                voluptatem quos. Natus ratione incidunt maiores rerum ea vel
                officia doloremque! Eaque et dolore deserunt architecto autem
                repellendus, earum fugiat vitae velit natus consequuntur aut
                laborum quo explicabo tempore facere! Magnam distinctio
                reiciendis et ullam!
              </p>
            </div>
            <div className="project">
              <h3>mathew</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis ratione earum vel distinctio deleniti! Est,
                voluptatem quos. Natus ratione incidunt maiores rerum ea vel
                officia doloremque! Eaque et dolore deserunt architecto autem
                repellendus, earum fugiat vitae velit natus consequuntur aut
                laborum quo explicabo tempore facere! Magnam distinctio
                reiciendis et ullam!
              </p>
            </div>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <h2>Technical</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node JS</li>
              <li>Python</li>
              <li>Express</li>
              <li>PostgreSQL/MySQL</li>
            </ul>
            <h3>Professional</h3>
            <ul>
              <li>Effective communication</li>
              <li>Team player</li>
              <li>Strong problem solver</li>
              <li>Time management</li>
            </ul>
            <h1>Education</h1>
            <ul>
              <li>FullStack Academy</li>
              <li>Atlanta Technical College</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
