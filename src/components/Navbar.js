import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Travel Website</h1>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
