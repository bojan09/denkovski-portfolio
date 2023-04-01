import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { Home, Services } from "../../pages";
import { Footer } from "../";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list_link">
            <Link to="/">
              <Home />
            </Link>
          </li>
          <li className="nav-list_link">
            <Link to="/services">
              <Services />
            </Link>
          </li>
          <li className="nav-list_link">
            <Link to="/contact">
              <Footer />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
