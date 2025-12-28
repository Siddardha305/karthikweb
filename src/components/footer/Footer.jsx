import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                {/* Brand Column */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/images/palnatBlogo-white.png" alt="Plan At B Logo" />
                    </div>
                    <p className="footer-description">
                        The ultimate destination for aspiring creators and developers. Join our cohorts to master skills and launch your career.
                    </p>
                    <div className="footer-socials">
                        {/* Simple SVG Placeholders for Social Icons */}
                        <div className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </div>
                        <div className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </div>
                        <div className="social-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="footer-links-container">
                    <div className="footer-column">
                        <h4 className="footer-heading">Quick Links</h4>
                        <a href="https://planatb.com/about/" className="footer-link">About</a>
                        <a href="https://planatb.com/privacy-policy/" className="footer-link">Privacy Policy</a>
                        <a href="https://planatb.com/terms-conditions/" className="footer-link">Terms & Conditions</a>
                        <a href="https://planatb.com/refund_returns/" className="footer-link">Refund Policy</a>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Resources</h4>
                        <Link to="/all-courses" className="footer-link">Courses</Link>
                        <Link to="/personal-training" className="footer-link">Personal Training</Link>
                        <Link to="/course/premiere-pro-basic-advance" className="footer-link">Direct Purchase</Link>
                        <a href="#" className="footer-link">Free Stuff</a>
                        <a href="#" className="footer-link">Blog</a>
                    </div>

                    <div className="footer-column">
                        <h4 className="footer-heading">Support</h4>
                        <a href="https://planatb.com/contact-us/" className="footer-link">Contact Us</a>
                        <a href="https://planatb.com/contact-us/" className="footer-link">Help & Support</a>
                        <a href="https://planatb.com/copyright/" className="footer-link">Copyright</a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* <div className="footer-bottom">
                <div className="copyright">
                    © 2024 Plan At B. All rights reserved.
                </div>
                <div className="footer-legal">
                </div>
            </div> */}
        </footer>
    );
};

export default Footer;
