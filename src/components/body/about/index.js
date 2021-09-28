import "./about.css";
import naveen from "../assets/naveen.jpg";
import SocialContact from "../../common";

export default function AboutComponent() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There, I am <br />
          <span className="info-name">Naveen</span>
          <br />I am excited to learn web technologies
        </div>
        <div className="about-photo">
            <img src={naveen} alt ="myphoto" className="picture"/>
        </div>
      </div>
      <div className="about-bottom"></div>
      <SocialContact/>
    </div>
  );
}
