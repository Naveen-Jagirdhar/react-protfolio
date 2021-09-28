import "./social.css";
import { Socialdata } from "../data/social";

export default function SocialContact() {
  const social = Socialdata;

  return (
    <div className="social-contact">
      {social.map((item) => {
        return (
          <a href={item.link} rel="noopener noreferrer">
            <div className="social-icon-div">
              <img src={item.icon} alt="platform-img" width="20" className="social-img"/>
            </div>
          </a>
        );
      })}
    </div>
  );
}
