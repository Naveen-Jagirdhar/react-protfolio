import "./skillcard.css";

export default function SkillCard (props) {
    return (
        <div className="skill-card">
            <div className="skill-card-icon">
                {props.icon}
            </div>
            <div className="skill-card-name">
                {props.name}
            </div>
        </div>
    );
}