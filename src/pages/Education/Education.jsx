import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education">
      <h1 className="education-heading">
        Education & <span>Experience</span>
      </h1>
      <div className="education-box_container">
        {/* Box 1*/}
        <div className="education-box_education">
          <h1 className="education-box_heading">Education</h1>
          <div className="education-box">
            <h1>Semos Education</h1>
            <p>UI/UX Designer</p>
            <p className="education-box_year">2022-2023</p>
          </div>
        </div>

        {/* Box 2*/}
        <div className="education-box_experience">
          <h1 className="experience-box_heading">Experience</h1>
          <div className="education-box">
            <h1>Semos Education</h1>
            <p>User Interface Design</p>
            <p className="education-box_year">Since 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
