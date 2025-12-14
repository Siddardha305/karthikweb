import React from 'react';

const StandardFeatureCard = ({ number, title, features, description, isAiStudio }) => {
    return (
        <div className="hero3-card">
            <div className="hero3-card-number">{number}</div>

            {isAiStudio && (
                <div className="hero3-new-badge">
                    <span>✦</span> New
                </div>
            )}

            <div style={{ position: 'relative', zIndex: 1, marginTop: '4rem' }}>
                <h3 className="hero3-card-title">{title}</h3>

                {description && (
                    <p className="hero3-card-desc">{description}</p>
                )}

                {features && (
                    <ul className="hero3-feature-list">
                        {features.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}

                {isAiStudio && (
                    <div className="hero3-ai-visual">
                        <div className="ai-icon-glow"></div>
                        <div className="ai-icon-glow" style={{ borderColor: '#a855f7', boxShadow: '0 0 10px #a855f7' }}></div>
                        <div className="ai-icon-glow" style={{ borderColor: '#ec4899', boxShadow: '0 0 10px #ec4899' }}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StandardFeatureCard;
