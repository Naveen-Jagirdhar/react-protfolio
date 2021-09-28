import closeIcon from "../assets/cancel.png";
import projects from "../assets/project.png";
import skill from "../assets/laptop.png";
import user from "../assets/user.png";
import work from "../assets/work.png";

import "./mobile.css";

export default function MobileComponent(props) {
 
  const close =() => {
    props.setIsOpen();
  }
  return (
    <div className="mobile">
      <div className="close-icon" onClick={close}>
        <img src={closeIcon} alt="close icon" width="20" />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <img src={projects} alt="projects" width="20" className="option" />
            Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skill">
            <img src={skill} alt="projects" className="option" />
            Skill Set
          </a>
        </div>
        <div className="mobile-option">
          <a href="#work">
            <img src={work} alt="projects" className="option" />
            Work Experience
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <img src={user} alt="projects" className="option" />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
