import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import Pricing from '../pricing/Pricing';
import OurClients from '../ourclients/OurClients';

const Courses = () => {
    // Data for courses as per reference image
    const courses = [
        {
            id: "premiere-pro-basic-advance",
            title: "Premiere Pro Basic – Advance 2025",
            image: "/images/course-images/premierpro.png",
        },
        {
            id: "mastering-after-effects-2025",
            title: "Mastering After Effects 2025",
            image: "/images/course-images/aftereffects.png",
        },
        {
            id: "mastering-filmora-with-ai",
            title: "Mastering Filmora With Ai",
            image: "/images/course-images/filmora.png",
        },
        {
            id: "video-editors-web-identity",
            title: "Video Editor's Web Identity",
            image: "/images/course-images/portfolio.png",
        }
    ];

    return (
        <section className="courses-section">
            <img src="/images/background-icon1.png" alt="" className="floating-bg-icon" />
            <img src="/images/background-icon1.png" alt="" className="floating-bg-icon-bottom" />
            <div className="courses-content-wrapper">
                <h1 className="courses-title">What you can learn</h1>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <Link to={`/course/${course.id}`} key={index} className="course-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="course-thumbnail">
                                <img src={course.image} alt={course.title} />
                            </div>

                            <div className="course-details">
                                <h3 className="course-title" style={course.id === 'mastering-filmora-with-ai' ? { fontFamily: "'Satoshi', sans-serif" } : {}}>{course.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Embedded Pricing Section */}
            <div style={{ width: '100%', zIndex: 10 }}>
                <Pricing />
            </div>

            {/* Embedded Clients Section */}
            <div style={{ width: '100%', zIndex: 10, marginTop: '-2rem' }}>
                <OurClients />
            </div>
        </section>
    );
};

export default Courses;
