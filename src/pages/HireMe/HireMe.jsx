import React from "react";
import "./HireMe.css";

const HireMe = () => {
  return (
    <div className="hire-me">
      <h1 className="hire-me_heading">
        Why Hire Me For Your <br />
        <span>Next Project</span>
      </h1>

      <p className="hire-me_paragraph">
        "Looking for a skilled and experienced UI/UX designer? <br /> Look no
        further! <br /> With a passion for creating intuitive and engaging
        interfaces, I specialize in designing digital experiences that delight
        users and drive business goals. <br />
        With expertise in user research, wireframing, prototyping, and user
        testing, I am dedicated to creating designs that are both aesthetically
        pleasing and functionally effective. <br />
        Contact me today to discuss how I can help you achieve your design goals
        and take your user experience to the next level."
      </p>

      <div className="hire-me_boxes">
        <div className="happy-clients_box">
          <h1>50+</h1>
          <span>Happy Clients</span>
        </div>
        <div className="projects-done_box">
          <h1>40+</h1>
          <span>Projects Done</span>
        </div>
        <div className="reviews_box">
          <h1>200+</h1>
          <span>Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
