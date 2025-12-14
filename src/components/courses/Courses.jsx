import React from 'react';
import './Courses.css';
import Pricing from '../pricing/Pricing';

const Courses = () => {
    // Data for courses as per reference image
    const courses = [
        {
            title: "Premiere Pro Basic – Advance 2025",
            image: "/images/course-images/premier pro.png",
        },
        {
            title: "Mastering After Effects 2025",
            image: "/images/course-images/after effects.png",
        },
        {
            title: "Mastering Filmora With Ai",
            image: "/images/course-images/filmora.png",
        },
        {
            title: "Video Editor's Web Identity",
            image: "/images/course-images/portfolio.png",
        }
    ];

    return (
        <section className="courses-section">
            <img src="/images/background-icon1.png" alt="" className="floating-bg-icon" />
            <img src="/images/background-icon1.png" alt="" className="floating-bg-icon-bottom" />
            <div className="courses-content-wrapper">
                <h1 className="courses-title">What you'll learn</h1>

                <div className="courses-grid">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card">
                            <div className="course-thumbnail">
                                <img src={course.image} alt={course.title} />
                            </div>

                            <div className="course-details">
                                <h3 className="course-title">{course.title}</h3>


                            </div>


                        </div>
                    ))}
                </div>
            </div>

            {/* Embedded Pricing Section */}
            <div style={{ width: '100%', zIndex: 10 }}>
                <Pricing />
            </div>
        </section>
    );
};

export default Courses;
