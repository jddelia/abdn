import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navStyle, navLogo, navLinks }) => {

  return (
    <nav style={navStyle}>
      <div className="nav-left">
        <span id="nav-logo" style={navLogo}>ABDN</span>
      </div>

      <div className="nav-right">
        <Link className="nav-link" to="/" style={navLinks}>Home</Link>
        <Link className="nav-link" to="/about" style={navLinks}>About</Link>
        <Link className="nav-link" to="/search" style={navLinks}>Search</Link>
        <Link className="nav-link support" to="/support" style={navLinks}>Support</Link>
      </div>
    </nav>
  );
}

export default Navbar;