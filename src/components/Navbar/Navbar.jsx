import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-list_link">
            <a href="#home">Home</a>
          </li>
          <li className="nav-list_link">
            <a href="#services">Services</a>
          </li>
          <li className="nav-list_link">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
