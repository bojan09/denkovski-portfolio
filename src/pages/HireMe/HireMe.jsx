import React from "react";

const HireMe = () => {
  return (
    <div>
      <div className="hire_me">
        <h1 className="hire-me_heading">
          Why Hire Me For Your <span>Next Project</span>
        </h1>

        <p className="hire-me_paragraph">
          "Looking for a skilled and experienced UI/UX designer? Look no
          further! With a passion for creating intuitive and engaging
          interfaces, I specialize in designing digital experiences that delight
          users and drive business goals. With expertise in user research,
          wireframing, prototyping, and user testing, I am dedicated to creating
          designs that are both aesthetically pleasing and functionally
          effective. Contact me today to discuss how I can help you achieve your
          design goals and take your user experience to the next level."
        </p>

        <div className="hire-me_boxes">
          <div className="happy-clients_box">
            50 + <span>Happy Clients</span>
          </div>
          <div className="projects-done_box">
            40 + <span>Projects Done</span>
          </div>
          <div className="reviews_box">
            <span>200+ Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
