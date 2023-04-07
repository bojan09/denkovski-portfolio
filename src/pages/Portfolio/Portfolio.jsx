import React from "react";
import "./Portfolio.css";

// portfolio images
import wineLandingPage from "../../assets/projects/Home Page.png";
import herbalMobilePage from "../../assets/projects/Naslovna.png";
import threeRedWinesPage from "../../assets/projects/Red.png";
import breadAndButterWinePage from "../../assets/projects/Brad  Butter.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-heading">My Portfolio</h1>

      <div className="portfolio-grid">
        <h1 className="portfolio-grid_heading">Web & Mobile</h1>

        <div className="portfolio-grid_image">
          <img src={wineLandingPage} alt="wineLandingPage" />
        </div>

        <div className="portfolio-grid_image">
          <img src={herbalMobilePage} alt="herbalMobilePage" />
        </div>

        <div className="portfolio-grid_image">
          <img src={threeRedWinesPage} alt="threeRedWinesPage" />
        </div>

        <div className="portfolio-grid_image">
          <img src={breadAndButterWinePage} alt="breadAndButterWinePage" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
