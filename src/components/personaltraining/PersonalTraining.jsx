import React from 'react';
import '../hero/Hero.css'; // Reusing Hero styles
import ColorBends from '../colorbends/ColorBends';
import Badge from '../hero/Badge';
import Pricing from '../pricing/Pricing';
// Assuming VideoTestimonials is in src/components/videotestimonials/VideoTestimonials.jsx
import VideoTestimonials from '../videotestimonials/VideoTestimonials';

const PersonalTraining = () => {
    return (
        <div> {/* Removed padding to let Hero cover top */}
            {/* Custom Hero Section */}
            <section className="hero-section">
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

            </section>

            {/* Video Testimonials Section */}
            <VideoTestimonials />

            {/* Pricing Section - Filtered for Personal Training */}
            <Pricing filterTitle="Personal Training" />
        </div>
    );
};

export default PersonalTraining;
