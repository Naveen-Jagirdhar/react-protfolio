import { useState } from "react";
import "./header.css";
import MobileComponent from "./mobile";
import WebComponent from "./web";
import logo from "./assets/app.png";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const close= () =>{
    setIsOpen(!isOpen);
  }
  return (
    <div className="header">
      <div className="logo">Protfolio</div>
      <div className="menu">
        <div className="web-menu">
          <WebComponent />
        </div>
        <div className="mobile-menu">
          <div onClick = {close}>
            <img className="menu-icon" src={logo} alt="menu-icon" />
          </div>
          {isOpen && <MobileComponent isOpen={isOpen} setIsOpen={close} />}
        </div>
      </div>
    </div>
  );
}
