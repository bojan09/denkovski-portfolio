import React from "react";
import "./Footer.css";

import locationIcon from "../../assets/icons/pin-destination.svg";
import phoneIcon from "../../assets/icons/mobile.svg";
import MailIcon from "../../assets/icons/envelope.svg";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h2 className="footer-heading">Contact me</h2>
      <div className="footer-icons_container">
        <div className="footer-location_icon">
          <img src={locationIcon} alt="location_icon" />
          <p className="footer-paragraph">St. Leskovacka</p>
        </div>
        <div className="footer-phone_icon">
          <img src={phoneIcon} alt="phone_icon" />
          <p className="footer-paragraph">+ 389 78 457 695</p>
        </div>
        <div className="footer-email_icon">
          <img src={MailIcon} alt="mail_icon" />
          <a href="mailto:milan.denkovski@gmail.com">
            <p className="footer-paragraph">milan.denkovski@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
