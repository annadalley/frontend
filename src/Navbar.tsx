import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// These are the links and actual text for the navbar

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/Podcast" className="navbar-link">
          Podcasts
        </Link>
        <Link to="/MovieCollection" className="navbar-link">
          Movies
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
