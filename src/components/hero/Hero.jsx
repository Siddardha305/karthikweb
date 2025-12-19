import React, { useState } from 'react';
import Badge from './Badge';
import Headline from './Headline';
import VideoMarquee from './VideoMarquee';
import './Hero.css';

const Hero = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <Headline />

                {/* Bottom CTA similar to screenshot */}
                <div style={{ textAlign: 'center', marginTop: '0' }}>
                    <p style={{ color: '#9ca3af', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                        The ultimate beginner-friendly video editing program, <br />
                        now powered with the most insane AI tools ever.
                    </p>
                    <button className="auth-button" style={{
                        fontSize: '1rem',
                        padding: '0.8rem 2.5rem',
                        backgroundColor: '#8543c7'
                    }}>
                        Join now
                    </button>

                    {/* Check out Video Button */}
                    <div style={{ marginTop: '2rem' }}>
                        <button
                            onClick={() => setShowVideo(true)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '1rem',
                                fontSize: '1.1rem',
                                margin: '0 auto',
                                padding: '0.5rem 1rem',
                                transition: 'opacity 0.2s'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(4px)'
                            }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span style={{ fontWeight: 500 }}>Watch Video</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)'
                }} onClick={() => setShowVideo(false)}>
                    <div style={{
                        position: 'relative',
                        width: '90%',
                        maxWidth: '1000px',
                        aspectRatio: '16/9',
                        boxShadow: '0 0 50px rgba(0,0,0,0.5)'
                    }} onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setShowVideo(false)}
                            style={{
                                position: 'absolute',
                                top: '-50px',
                                right: '0',
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                fontSize: '3rem',
                                cursor: 'pointer',
                                padding: '0 10px',
                                lineHeight: 1
                            }}
                        >
                            &times;
                        </button>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/ECZaNtKLqkw?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '16px', background: '#000' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
