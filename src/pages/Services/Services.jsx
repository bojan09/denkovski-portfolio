import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="services-heading">
        My Awesome <span>Services</span>
      </h1>

      <div className="services-box_container">
        {/* Box 1 */}
        <div className="service-box">
          <h1 className="service-box_heading">UX Designer</h1>
          <p className="service-box_paragraph">
            UI design, or user interface design, is the process of creating
            visually appealing and user-friendly interfaces for digital products
            such as websites, mobile apps, and software. It involves designing
            the layout, visual elements, and interactive features to ensure a
            seamless and intuitive user experience. Good UI design is essential
            for engaging users and promoting usability, accessibility, and
            overall satisfaction with a product.
          </p>
        </div>

        {/* Box 2 */}
        <div className="service-box">
          <h1 className="service-box_heading">UI Designer</h1>
          <p className="service-box_paragraph">
            UX design, or user experience design, is the process of designing
            digital products with a focus on the user's overall experience. It
            involves understanding the user's needs,behaviors, and goals to
            create intuitive and effective interfaces that provide a positive
            and meaningful
          </p>
        </div>

        {/* Box 2 */}
        <div className="service-box">
          <h1 className="service-box_heading">Illustrator Designer</h1>
          <p className="service-box_paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            dolor, officia accusantium obcaecati maiores reiciendis eveniet
            totam unde nulla nesciunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Accusantium voluptas dignissimos vitae iusto rerum
            quos a. Excepturi ipsa impedit dolor magnam, mollitia soluta quam,
            ab atque laborum amet sapiente necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
