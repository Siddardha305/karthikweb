import React, { useState } from 'react';
import '../hero/Hero.css'; // Reusing Hero styles
import Badge from '../hero/Badge';
import Pricing from '../pricing/Pricing';
// Assuming VideoTestimonials is in src/components/videotestimonials/VideoTestimonials.jsx
import VideoTestimonials from '../videotestimonials/VideoTestimonials';

const PersonalTraining = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div> {/* Removed padding to let Hero cover top */}
            {/* Custom Hero Section */}
            <section className="hero-section" style={{
                backgroundColor: '#000000',
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                minHeight: '80vh',
                justifyContent: 'center'
            }}>
                <div className="hero-content">
                    <Badge text="Karthik Raghavarapu Presents" /> {/* Updated text match screenshot roughly */}

                    <h1 className="headline-main" style={{ color: 'white', fontSize: '3.5rem', marginTop: '0.2rem', marginBottom: '0' }}>
                        Premiere Pro Personal Training
                    </h1>

                    <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '1rem' }}>
                        Learn Professional Video Editing From Professionals
                    </p>

                    {/* Video Box */}
                    <div style={{
                        width: '100%',
                        maxWidth: '800px',
                        aspectRatio: '16/9',
                        margin: '0 auto 2rem auto',
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
                                    src="/images/course-images/PersonalTraining.jpg"
                                    alt="Personal Training"
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
                                    backgroundColor: 'rgba(133, 67, 199, 0.9)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 0 30px rgba(133, 67, 199, 0.6)',
                                    backdropFilter: 'blur(5px)',
                                    pointerEvents: 'none',
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
                                src="https://www.youtube.com/embed/OpgGuEp5UgM?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>



                </div>

                <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'center', zIndex: 10 }}>
                    <svg
                        className="arrow-bounce"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </section>

            {/* Video Testimonials Section */}
            <VideoTestimonials />

            {/* Pricing Section - Filtered for Personal Training */}
            <Pricing filterTitle="Personal Training" />
        </div>
    );
};

export default PersonalTraining;
