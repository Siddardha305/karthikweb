import React from 'react';
import './Hero3.css';
import SectionTitle from './SectionTitle';
import LargeFeatureCard from './LargeFeatureCard';
import StandardFeatureCard from './StandardFeatureCard';

const Hero3 = () => {
    const card2Features = [
        "Content Planning & Packaging",
        "Scripting",
        "Storytelling",
        "SEO",
        "Basics of Cinematography"
    ];

    const card3Features = [
        "How, where & when to reach out to clients?",
        "Basics of Marketing",
        "How to Negotiate Prices?",
        "How to Scale an Agency?"
    ];

    return (
        <section className="hero3-section">
            <SectionTitle />

            <div className="hero3-grid">
                <LargeFeatureCard />

                <StandardFeatureCard
                    number="2"
                    title={<>Social Media<br />Growth</>}
                    features={card2Features}
                />

                <StandardFeatureCard
                    number="3"
                    title={<>Freelancing<br />& Agency Building</>}
                    features={card3Features}
                />

                <StandardFeatureCard
                    number="4"
                    title={<>Introducing the<br />AI Creative Studio</>}
                    description="Unleash your creativity with cutting-edge AI tools for design, content, and video."
                    isAiStudio={true}
                />
            </div>
        </section>
    );
};

export default Hero3;
