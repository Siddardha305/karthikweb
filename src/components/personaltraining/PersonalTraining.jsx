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
            <section className="hero-section">
                <div className="hero-background-image" style={{ backgroundImage: "url('/images/Editing-Nerchukundam-min.webp')" }}></div>
                <div className="hero-content">
                    <Badge text="Karthik Raghavarapu Presents" /> {/* Updated text match screenshot roughly */}

                    <h1 className="headline-main" style={{ color: 'white', fontSize: '3.5rem', marginTop: '1rem', marginBottom: '1rem' }}>
                        Premiere Pro Personal Training
                    </h1>

                    <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '2rem' }}>
                        Learn Professional Video Editing From Professionals
                    </p>

                    <div style={{ textAlign: 'center', marginTop: '0' }}>
                        <button className="auth-button" style={{
                            fontSize: '1rem',
                            padding: '0.8rem 2.5rem',
                            backgroundColor: '#8543c7'
                        }}>
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
