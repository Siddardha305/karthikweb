import React from 'react';
import './Hero.css';

const Headline = () => {
    return (
        <div className="headline-container">
            <span className="headline-sub" style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '0.2em',
                color: '#9ca3af',
                textTransform: 'uppercase',
                marginBottom: '0'
            }}>
                KARTHIK RAGHAVARAPU PRESENTS
            </span>
            <h1 className="headline-main" style={{ color: 'white' }}>
                A COMPLETE GUIDE TO <br />
                <span style={{ color: '#4facfe' }}>VIDEO EDITING</span>
            </h1>
        </div>
    );
};

export default Headline;
