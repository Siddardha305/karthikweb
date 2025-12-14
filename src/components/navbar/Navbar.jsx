import React, { useState } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButton from './AuthButton';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
            <div className="navbar-top">
                <Logo />
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>

            <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
                <NavLinks />
                <AuthButton />
            </div>
        </nav>
    );
};

export default Navbar;
