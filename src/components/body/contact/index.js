import SocialContact from "../../common";
import "./contact.css";
export default function ContactComponent () {
    return (
        <div className="contact">
            <label className="section-title">Contact Information</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the platform.</p>
                   <SocialContact />
                </div>
                <div className="download">
                    <a download href={require("../assets/resume.pdf").default}>
                        <img width="20" src = {require("../assets/download.png").default} alt="download" />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
}