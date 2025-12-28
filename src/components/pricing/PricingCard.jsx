import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../hero2/CTAButton';
import './Pricing.css';

const PricingCard = ({ price, title, subtitle, features, buttonText = "Enroll Now", recommended = false, variant = 'base', link }) => {
    const navigate = useNavigate();

    const handleEnrollClick = () => {
        if (!link) return;

        if (link.startsWith('http')) {
            window.location.href = link;
        } else {
            navigate(link);
        }
    };

    return (
        <div className={`pricing-card ${variant} ${recommended ? 'recommended' : ''}`}>
            {recommended && <div className="most-popular-badge">Most Popular</div>}
            <div className="pricing-header">
                <h3 className="plan-price">{price}</h3>
                <h4 className="plan-title">{title}</h4>
                {subtitle && <p className="plan-subtitle">{subtitle}</p>}
            </div>

            <div className="pricing-features">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <span className="feature-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
                                <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="feature-text">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="pricing-footer">
                <CTAButton text={buttonText} className="pricing-btn" onClick={handleEnrollClick} />
            </div>
        </div>
    );
};

export default PricingCard;
