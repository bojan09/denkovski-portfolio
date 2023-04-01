import React from "react";
import "./About.css";

import { Link } from "react-router-dom";

import facebook from "../../assets/socials/facebook.svg";
import instagram from "../../assets/socials/instagram.svg";
import linkedin from "../../assets/socials/linkedin.svg";

const About = () => {
  return (
    <div className="about">
      <h2 className="about-heading">About me</h2>

      {/* Social Icons */}
      <div className="about-social_icons">
        <Link to="https://www.facebook.com/milan.denkovski" target="_blank">
          <img src={facebook} alt="facebook" />
        </Link>
        <Link to="https://www.instagram.com/milan_denkovski95/" target="_blank">
          <img src={instagram} alt="instagram" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/milan-denkovski-711104267/"
          target="_blank"
        >
          <img src={linkedin} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default About;
