import "./web.css";
import projects from "../assets/project.png";
import skill from "../assets/laptop.png";
import user from "../assets/user.png";
import work from "../assets/work.png";

export default function WebComponent() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <img src={projects} alt="projects" width="20" className="option" />
          Projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
          <img src={skill} alt="projects" className="option" />
          Skill Set
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <img src={work} alt="projects" className="option" />
          Work Experience
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <img src={user} alt="projects" className="option" />
          Contact Us
        </a>
      </div>
    </div>
  );
}
