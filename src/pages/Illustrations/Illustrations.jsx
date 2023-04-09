import React from "react";
import "./Illustrations.css";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Illustrations
import Illustration1 from "../../assets/images/goku-avatar.png";
import Illustration2 from "../../assets/images/goku-circle.png";
import Illustration3 from "../../assets/images/goku-moon.png";
import Illustration4 from "../../assets/images/weapon-svg.png";

const Illustrations = () => {
  const illustrations = [
    Illustration1,
    Illustration2,
    Illustration3,
    Illustration4,
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="illustrations">
      <h1 className="illustrations-heading">Some of my illustrations</h1>
      <Carousel
        swipeable={true}
        draggable={false}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .8"
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel"
        responsive={responsive}
      >
        {illustrations.map((item) => (
          <div className="illustrations-container">
            <img src={item} alt="illustrations" className="illustration-img" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Illustrations;
