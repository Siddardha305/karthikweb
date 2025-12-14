import React from 'react';

const SocialProofCard = ({ image, title, metric, iconType, positionClass }) => {
    return (
        <div className={`hero2-proof-card ${positionClass}`}>
            <div className="proof-avatar">
                {/* Use image prop or placeholder */}
                {image ? <img src={image} alt={title} /> : <div style={{ width: '100%', height: '100%', background: '#ccc' }}></div>}
            </div>
            <div className="proof-info">
                <span className="proof-title">{title}</span>
                <span className="proof-metric">
                    {iconType === 'youtube' && <span className="proof-icon-yt">▶</span>}
                    {iconType === 'instagram' && <span className="proof-icon-ig">📷</span>}
                    {metric}
                </span>
            </div>
        </div>
    );
};

export default SocialProofCard;
