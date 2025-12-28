import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const AuthButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleJoinClick = () => {
        if (location.pathname === '/') {
            const section = document.getElementById('plans');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const section = document.getElementById('plans');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    };

    return (
        <button className="auth-button" onClick={handleJoinClick}>
            Join Now
        </button>
    );
};

export default AuthButton;
