import GlobalImg from "../body/assets/global.png";
import GitHubImg from "../body/assets/github.png";

import "./projectcard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{props.title}</label>
        <div className="project-links">
          {props.demolink && (
            <a className="project-link" href={props.demolink}>
              <div className="link-button">
                <img src={GlobalImg} alt="global img" width="15" /> Demo
              </div>
            </a>
          )}
          {props.githubLink && (
            <a className="project-link" href={props.githubLink}>
              <div className="link-button">
                <img src={GitHubImg} alt="githublink" width="15" /> GitHub
              </div>
            </a>
          )}
        </div>
        <p> {props.description}</p>
        <div className="project-tags">
          {props.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
    </div>
  );
}
