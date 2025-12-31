import React from 'react';
import '../hero/Hero.css'; // Reusing Hero styles
import Badge from '../hero/Badge';
import Pricing from '../pricing/Pricing';
// Assuming VideoTestimonials is in src/components/videotestimonials/VideoTestimonials.jsx
import VideoTestimonials from '../videotestimonials/VideoTestimonials';

const PersonalTraining = () => {
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

                    <h1 className="headline-main" style={{ color: 'white', fontSize: '3.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        Premiere Pro Personal Training
                    </h1>

                    <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '2rem' }}>
                        Learn Professional Video Editing From Professionals
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '0' }}>
                        <button
                            className="auth-button"
                            style={{
                                fontSize: '1rem',
                                padding: '0.8rem 2.5rem',
                                backgroundColor: '#8543c7'
                            }}
                            onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Join now
                        </button>
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
