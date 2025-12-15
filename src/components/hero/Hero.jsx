import React from 'react';
import Badge from './Badge';
import Headline from './Headline';
import VideoMarquee from './VideoMarquee';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <Headline />


                {/* Bottom CTA similar to screenshot */}
                <div style={{ textAlign: 'center', marginTop: '0' }}>
                    <p style={{ color: '#9ca3af', marginBottom: '1.5rem', maxWidth: '400px', margin: '0 auto 1.5rem' }}>
                        the ultimate beginner-friendly video editing program, <br />
                        now powered with the most insane AI tools ever.
                    </p>
                    <button className="auth-button" style={{
                        fontSize: '1rem',
                        padding: '0.8rem 2.5rem',
                        backgroundColor: '#8543c7' // Match the purple
                    }}>
                        Join now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
