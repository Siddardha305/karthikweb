import React from 'react';

const CTAButton = ({ text = "Join now", className = "", ...props }) => {
    return (
        <button className={`hero2-cta-button ${className}`} {...props}>
            {text}
        </button>
    );
};

export default CTAButton;
