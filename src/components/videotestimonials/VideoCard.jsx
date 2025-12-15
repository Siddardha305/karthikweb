import React, { useRef, useState, useEffect } from 'react';
import './VideoTestimonials.css';

const VideoCard = ({ videoSrc, posterSrc, studentName, role }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.muted = false; // Unmute on hover
            videoRef.current.play().catch(error => {
                console.error("Autoplay prevented:", error);
            });
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Optional: reset video
            videoRef.current.muted = true;
            setIsPlaying(false);
        }
    };

    return (
        <div
            className="video-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="video-wrapper">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={posterSrc}
                    loop
                    muted // Start muted
                    playsInline
                    className="student-video"
                />
                {!isPlaying && (
                    <div className="play-overlay">
                        <div className="play-icon">▶</div>
                    </div>
                )}
            </div>
            {/* Optional info overlay if needed, based on image */}
            {/* <div className="student-info">
                <h4>{studentName}</h4>
                <p>{role}</p>
            </div> */}
        </div>
    );
};

export default VideoCard;
