import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NavLinks = () => {
    const location = useLocation();

    return (
        <ul className="nav-links">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/all-courses" className={`nav-link ${location.pathname === '/all-courses' ? 'active' : ''}`}>All Courses</Link></li>
            <li className="nav-item">
                <Link to="/personal-training" className={`nav-link ${location.pathname === '/personal-training' ? 'active' : ''}`}>Personal Training</Link>
            </li>

            <li><a href="#" className="nav-link">Hire from us</a></li>
        </ul>
    );
};

export default NavLinks;
