import React, { useRef, useState, useEffect } from 'react';
import './VideoTestimonials.css';

const VideoCard = ({ videoSrc, posterSrc, studentName, role }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.muted = false;
            videoRef.current.play().catch(error => console.error("Play error:", error));
            setIsPlaying(true);
        }
    };

    return (
        <div
            className="video-card"
            onClick={togglePlay}
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
                        <div className="play-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5V19L19 12L8 5Z" />
                            </svg>
                        </div>
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
