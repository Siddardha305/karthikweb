import React from 'react';
import VideoCard from './VideoCard';
import ColorBends from '../colorbends/ColorBends';
import './VideoTestimonials.css';

const VideoTestimonials = () => {
    const videos = [
        { id: 1, videoSrc: "https://drive.google.com/uc?export=download&id=1Bu5i7GsuFRs3WINLywhcnDG9jhKMVMNY" },
        { id: 2, videoSrc: "https://drive.google.com/uc?export=download&id=1JgiaXUVGQcPtUATdzPa6E_AZG9BKtdcE" },
        { id: 3, videoSrc: "https://drive.google.com/uc?export=download&id=1izmiODey6cTL4arQBQVlc-5x-YbHO6IL" },
        { id: 4, videoSrc: "https://drive.google.com/uc?export=download&id=1dyMTkv5Ya66wN6Jw0qYMVV2IdQNjIT4o" },
        { id: 5, videoSrc: "https://drive.google.com/uc?export=download&id=1s3TKWrPmj2R2IyXUqZG_dXsgXfNjGvDP" },
        { id: 6, videoSrc: "https://drive.google.com/uc?export=download&id=1Syifhtb2-rW6-fQ162nIAFT3KM11XUwf" },
        { id: 7, videoSrc: "https://drive.google.com/uc?export=download&id=1d-3KLdoHKsgI4txvETTIGLMF4w4hjdOc" },
        { id: 8, videoSrc: "https://drive.google.com/uc?export=download&id=1dwLoB7FXs1lEsGV8eV1p8aP-iPu7DQJN" },
        { id: 9, videoSrc: "https://drive.google.com/uc?export=download&id=1I0-me44pBnu2oguqjIRgXQ2OKWw9aH6a" },
        { id: 10, videoSrc: "https://drive.google.com/uc?export=download&id=1N7GGnQndnmaA17LXSy5Ps44IVujREVPi" },
        { id: 11, videoSrc: "https://drive.google.com/uc?export=download&id=1D1bVua1LEXgLTvM6TmlyyCMl2HUcCi7c" },
        { id: 12, videoSrc: "https://drive.google.com/uc?export=download&id=1MZ0NZZG2NDT6b4BhNOZM-8hHcKg22iPD" },
        { id: 13, videoSrc: "https://drive.google.com/uc?export=download&id=1WfIuW6ntuenPh1T_VjPyncOejNoRqFT4" },
        { id: 14, videoSrc: "https://drive.google.com/uc?export=download&id=1oExRnPWnoolTYYV1OSnmmCCjrxL8myzy" },
        { id: 15, videoSrc: "https://drive.google.com/uc?export=download&id=16Z_C2kH5u6mVTXp9eLwqddMCbErE7HE1" },
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
