import React from 'react';
import './Navbar.css';

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li><a href="#" className="nav-link active">Home</a></li>
            <li><a href="#" className="nav-link">All Courses</a></li>
            <li><a href="#" className="nav-link">Personal Training</a></li>
            <li><a href="#" className="nav-link">Direct Purchase</a></li>
            <li><a href="#" className="nav-link">Hire from us</a></li>
        </ul>
    );
};

export default NavLinks;
