import React from 'react';
import PricingCard from './PricingCard';
import './Pricing.css';

const Pricing = ({ filterTitle }) => {
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
            variant: 'essential',
            link: "/course/premiere-pro-basic-advance"
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
            variant: 'elite',
            link: "https://payments.cashfree.com/forms/prpt"
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
            variant: 'ultimate',
            link: "https://payments.cashfree.com/forms/1-1-PT"
        }
    ];

    const filteredPlans = filterTitle
        ? plans.filter(plan => plan.title.toLowerCase().includes(filterTitle.toLowerCase()))
        : plans;

    return (
        <section className="pricing-section" id="plans">
            <h2 className="pricing-section-title">Plans for our program</h2>
            <div className="pricing-grid">
                {filteredPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;
