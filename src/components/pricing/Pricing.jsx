import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            price: "₹999",
            title: "Premiere Pro Beginners - Advance",
            subtitle: "Learn video editing with zero experience",
            features: [
                "Access to all video lessons",
                "Access to softwares",
                "Access to 200GB+ resource files",
                "Monthly Q&A session",
                "Lifetime access to course"
            ],
            variant: 'essential'
        },
        {
            price: "₹6,999",
            title: "Premiere Pro Personal Training",
            subtitle: "21 Days Online Training",
            features: [
                "Group sessions",
                "Access to additional softwares & resources",
                "Advanced content & special projects",
                "Access to premium subscriptions",
                "Career guidance & Progress tracking",
                "Learn how to find clients",
                "Know how to charge from clients",
                "Technical Support",
                "Job Assistance",
                "Access to personal contact number"
            ],
            recommended: true,
            variant: 'elite'
        },
        {
            price: "₹9,999",
            title: "Premiere Pro Personal Training",
            subtitle: "21 Days Online Training",
            features: [
                "One-on-One sessions",
                "Access to additional softwares & resources",
                "Advanced content & special projects",
                "Access to premium subscriptions",
                "Career guidance & Progress tracking",
                "Learn how to find clients",
                "Know how to charge from clients",
                "Technical Support",
                "Job Assistance",
                "Access to personal contact number"
            ],
            variant: 'ultimate'
        }
    ];

    return (
        <section className="pricing-section">
            <h2 className="pricing-section-title">Plans For This Course</h2>
            <div className="pricing-grid">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;
