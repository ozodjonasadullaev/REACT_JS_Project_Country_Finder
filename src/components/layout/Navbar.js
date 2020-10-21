import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <h5 className="navbar-brand">
          <Link to="/" className="nav-link">
            <i className="fas fa-search"></i> Country Finder
          </Link>
        </h5>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
