import React from 'react';
import './Hero.css';

const Badge = ({ text = "Karthik Raghavarapu Presents" }) => {
    return (
        <div className="badge">
            <div className="badge-avatar">
                {/* Placeholder for avatar, could be user image */}
                <img src="/images/about_thumb-1.jpg" alt="Avatar" />
            </div>
            <span>{text}</span>
        </div>
    );
};

export default Badge;
