import React from 'react';

const LargeFeatureCard = () => {
    return (
        <div className="hero3-card hero3-card-large">
            <div className="hero3-card-number">1</div>

            <div className="hero3-large-content">
                <h3 className="hero3-card-title">Advanced<br />Video Editing</h3>
                <p className="hero3-card-desc">
                    Unleash your creativity with cutting-edge AI tools for design, content, and video.
                </p>
                <button className="hero3-cta-btn">Join now</button>
            </div>

            <div className="hero3-software-icons-container">
                {/* Represents the right side of the card with icons and maybe list */}
                <div className="hero3-software-icons">
                    <div className="icon-placeholder icon-ae">Ae</div>
                    <div className="icon-placeholder icon-pr">Pr</div>
                    <div className="icon-placeholder icon-dv">Da</div>
                </div>

                <ul className="hero3-feature-list" style={{ marginTop: '2rem' }}>
                    <li>A &rarr; Z of Video Editing</li>
                    <li>Advanced Motion Graphics in Adobe After Effects</li>
                    <li>Advanced Color Grading in DaVinci Resolve</li>
                </ul>
            </div>
        </div>
    );
};

export default LargeFeatureCard;
