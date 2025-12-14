import React from 'react';
import './Hero.css';

const VideoCard = ({ image, link, title }) => {
    const handleClick = () => {
        if (link) {
            window.location.href = link;
        }
    };

    return (
        <div className="video-card" onClick={handleClick}>
            <img src={image} alt={title} className="video-thumbnail" />
            <div className="video-overlay">
                <span className="video-title">{title}</span>
            </div>
        </div>
    );
};

export default VideoCard;
