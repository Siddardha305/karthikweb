import React from 'react';
import './Hero.css';

const Badge = () => {
    return (
        <div className="badge">
            <div className="badge-avatar">
                {/* Placeholder for avatar, could be user image */}
                <img src="https://ui-avatars.com/api/?name=Karthik+R&background=random" alt="Avatar" />
            </div>
            <span>Karthik Raghavarapu Presents</span>
        </div>
    );
};

export default Badge;
