import React, { useState } from 'react';
import Badge from './Badge';
import Headline from './Headline';
import VideoMarquee from './VideoMarquee';
import './Hero.css';

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="hero-section">
            <div className="hero-background-image"></div>
            <div className="hero-content">
                <Headline />

                {/* Video Box under Headline */}
                <div style={{
                    width: '100%',
                    maxWidth: '800px',
                    aspectRatio: '16/9',
                    margin: '3rem auto',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: '#111'
                }}>
                    {!isPlaying ? (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                cursor: 'pointer',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onClick={() => setIsPlaying(true)}
                        >
                            <img
                                src="/images/course-images/premierpro.png"
                                alt="Premiere Pro Course"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(0.8)',
                                    transition: 'filter 0.3s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0.6)'}
                                onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0.8)'}
                            />

                            {/* Play Button Overlay */}
                            <div style={{
                                position: 'absolute',
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(133, 67, 199, 0.9)', /* Brand Purple */
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 30px rgba(133, 67, 199, 0.6)',
                                backdropFilter: 'blur(5px)',
                                pointerEvents: 'none', /* Let click pass to parent div */
                                transition: 'transform 0.3s ease'
                            }}
                            >
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ECZaNtKLqkw?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>

                {/* Bottom CTA */}

            </div>
        </section>
    );
};

export default Hero;
