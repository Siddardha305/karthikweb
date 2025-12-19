import React from 'react';
import './Policies.css';

const RefundPolicy = () => {
    return (
        <div className="policy-container">
            <h1 className="policy-title">Refund Policy</h1>
            <div className="policy-content">
                <p className="policy-text">
                    We want to ensure transparency and clarify our refund policy for all services offered on PlanatB.com. Please carefully read and understand the following refund policy details before making any purchase.
                </p>
                <p className="policy-text">
                    <strong>We don’t provide any cancellation policy.</strong>
                </p>

                <h2 className="policy-section-title">Course Enrollment</h2>
                <p className="policy-text">
                    Once a student enrolls in a course, all sales are final, and no refunds will be provided. This policy is in place because we offer lifetime free software access, important resource files, and videos as part of the course package. Additionally, the official software typically comes with high costs and monthly charges, whereas we provide it for free with regular software version updates.
                </p>

                <h2 className="policy-section-title">Need help?</h2>
                <p className="policy-text">
                    Contact us at <a href="mailto:support@planatb.com" className="policy-link">support@planatb.com</a> for questions related to refunds and returns.
                </p>
            </div>
        </div>
    );
};

export default RefundPolicy;
