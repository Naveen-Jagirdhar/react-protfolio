import "./workcard.css";

export default function WorkCard(props) {
    return (
        <div className="workcard">
            <img class="work-logo" src={props.item.companyLogo} alt="company-logo"/>
            <div className="workcard-info">
                <label className="company-name"> {props.item.companyName}</label>
                <div className="work-dates">
                    <label>{props.item.dateJoining}</label>
                     &nbsp; - &nbsp;
                    <label>{props.item.dateEnd}</label>
                </div>
                <div className="work-description">
                    <p>{props.item.description}</p>
                </div>
            </div>
            
        </div>
    );
}