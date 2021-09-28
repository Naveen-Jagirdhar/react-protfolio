import BodyComponent from "../body";
import FooterComponent from "../footer";
import HeaderComponent from "../headers";

import "./home.css";

export default function HomeComponent() {
  return (
    <div className="home">
      <div>
        <HeaderComponent />
      </div>
      <div>
        <BodyComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
  );
}
