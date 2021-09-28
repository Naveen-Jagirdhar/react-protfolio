import "./work.css";
import { WorkData } from "../../data/work";
import WorkCard from "../../common/work";
export default function WorkComponent () {
    const data = WorkData;
    return (
        <div className ="work">
            <label className="section-title">Work Experience</label>
            <div className ="work-list">
                {data.map((workExp) => {
                    return <WorkCard item = {workExp}/>
                })}
            </div>
        </div>
    );
}