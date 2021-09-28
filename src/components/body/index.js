import AboutComponent from "./about";
import "./body.css";
import ProjectComponent from "./projects";
import WorkComponent from "./work";
import SkillComponent from "./skill";
import ContactComponent from "./contact";
import Separator from "../common/separator";

export default function BodyComponent(){
    return (
        <div className ="body">
            <section id ="about">
                <AboutComponent />
            </section>
            <Separator />
            <section id ="skill">
                <SkillComponent />
            </section>
            <Separator />
            <section id ="project">
                <ProjectComponent />
            </section>
            <Separator />
            <section id ="work">
                <WorkComponent />
            </section>
            <Separator />
            <section id ="contact">
                <ContactComponent />
            </section>
            
        </div>
    );
}