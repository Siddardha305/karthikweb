import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img src="/images/palnatBlogo-white.png" alt="Plan At Logo" className="logo-image" />
    </Link>
  );
};

export default Logo;
