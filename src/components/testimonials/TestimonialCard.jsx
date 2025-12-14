import React from 'react';

const TestimonialCard = ({ text, name, role, image }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-author">
                <div className="author-avatar">
                    {/* Placeholder if no image */}
                    {image ? <img src={image} alt={name} /> : <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #333, #555)' }}></div>}
                </div>
                <div className="author-info">
                    <span className="author-name">{name}</span>
                    {/* <span className="author-role">{role}</span> Role hidden to match design */}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
