import "./skill.css";
import { SkillData } from "../../data/skill";
import SkillCard from "../../common/skill";
export default function SkillComponent() {
  const data = SkillData;
  return (
    <div className="skills">
      <label className="section-title">Skills</label>
      <div className="skill-container">
        {data.map((skill) => {
          return (
            <div className="skill-section">
              <label className="skill-section-lable"> {skill.type}</label>
              <div className ="skills-list">
                  {skill.techStack.map((tech)=>{
                      return <SkillCard name = {tech.name} icon = {tech.icons}/>
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
