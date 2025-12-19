import React from 'react';
import VideoCard from './VideoCard';
import ColorBends from '../colorbends/ColorBends';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
    const videos = [
        { id: 1, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Venkat.mp4" },
        { id: 2, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Stikanth.mp4" },
        { id: 3, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Srinivas.mp4" },
        { id: 4, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Sathish.mp4" },
        { id: 5, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Lokesh.mp4" },
        { id: 6, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Kamalika-Final.mp4" },
        { id: 7, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Jayanth.mp4" },
        { id: 8, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Harish.mp4" },
        { id: 9, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/F-Surya.mp4" },
        { id: 10, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Dhananjay.mp4" },
        { id: 11, videoSrc: "https://planatb.com/wp-content/uploads/2025/08/Babu.mp4" },
        { id: 12, videoSrc: "https://planatb.com/wp-content/uploads/2025/12/Vydehie-Testmonial-1.mp4" },
        { id: 13, videoSrc: "https://planatb.com/wp-content/uploads/2025/12/Teju-Testimonial.mp4" },
        { id: 14, videoSrc: "https://planatb.com/wp-content/uploads/2025/12/Arcahna-Testimonial.mp4" },
        { id: 15, videoSrc: "https://planatb.com/wp-content/uploads/2025/12/Devi-Prasad.mp4" }
    ];

    return (
        <section className="video-testimonials-section">
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <ColorBends
                    colors={["#000000", "#4c2185", "#8543c7"]}
                    rotation={50}
                    speed={0.7}
                    scale={1.2}
                    frequency={1.5}
                    warpStrength={1.2}
                    mouseInfluence={0.8}
                    parallax={0.6}
                    noise={0.08}
                    transparent={false}
                />
            </div>
            <div className="video-testimonials-header">
                <h4 className="sub-title">HEAR FROM OUR STUDENTS</h4>
                <h2 className="main-title">CHECK OUT WHAT OUR STUDENTS HAD TO SAY</h2>
            </div>

            <div className="video-marquee-container">
                <div className="video-marquee-track">
                    {/* Render videos twice to create seamless loop if needed, 
                        or just enough items for the loop. 
                        We map the list. */}
                    {videos.map((video, index) => (
                        <VideoCard
                            key={index}
                            videoSrc={video.videoSrc}
                            posterSrc={video.posterSrc}
                        />
                    ))}
                    {/* Duplicate set for seamless scrolling */}
                    {videos.map((video, index) => (
                        <VideoCard
                            key={`dup-${index}`}
                            videoSrc={video.videoSrc}
                            posterSrc={video.posterSrc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
