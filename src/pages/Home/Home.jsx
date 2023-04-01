import React from "react";

import "./Home.css";

// image
import profilePic from "../../assets/images/profile_pic.svg";

const Home = () => {
  return (
    <div className="home">
      {/* Left container */}
      <div className="left-container">
        <h1 className="home-heading">
          Hi! I'm <br /> <span className="home-heading_name">Milan</span>
        </h1>

        <p className="home-bio">
          Looking for a skilled and <br /> experienced UI/UX designer?
        </p>

        <button className="home-btn">Hire me</button>
      </div>

      {/* Image */}
      <div className="profile-img_container">
        <img src={profilePic} alt="profile_pic" className="profile-img" />
      </div>
    </div>
  );
};

export default Home;
