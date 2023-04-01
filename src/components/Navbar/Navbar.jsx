import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list_link">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list_link">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-list_link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
