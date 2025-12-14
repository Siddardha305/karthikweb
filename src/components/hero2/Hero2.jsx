import React from 'react';
import './Hero2.css';
import Headline from './Headline';
import CTAButton from './CTAButton';
import CentralImage from './CentralImage';
import SocialProofCard from './SocialProofCard';

const Hero2 = () => {
    const cards = [
        {
            title: "QUANTUM PROJECT",
            metric: "501K Subscribers",
            iconType: "youtube",
            positionClass: "card-pos-1"
        },
        {
            title: "INDIAN VIDEO SCHOOL",
            metric: "65.9K Followers",
            iconType: "instagram",
            positionClass: "card-pos-2"
        },
        {
            title: "THARUN NAIK",
            metric: "234K Followers",
            iconType: "instagram",
            positionClass: "card-pos-3"
        },
        {
            title: "THARUN SPEAKS",
            metric: "846K Subscribers",
            iconType: "youtube",
            positionClass: "card-pos-4"
        }
    ];

    return (
        <section className="hero2-section">
            <div className="hero2-content">
                <Headline />
                <CTAButton />

                <div className="hero2-visual-container">
                    <CentralImage />
                    {cards.map((card, index) => (
                        <SocialProofCard
                            key={index}
                            title={card.title}
                            metric={card.metric}
                            iconType={card.iconType}
                            positionClass={card.positionClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero2;
