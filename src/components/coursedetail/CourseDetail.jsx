import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { coursesData } from '../../data/coursesData';
import './CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const course = coursesData.find(c => c.id === id);

    if (!course) {
        // Fallback to first course if ID works incorrectly or redirect
        return <Navigate to="/all-courses" />;
    }

    const [activeChapter, setActiveChapter] = useState(null);

    const toggleChapter = (index) => {
        setActiveChapter(activeChapter === index ? null : index);
    };

    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const descriptionLimit = 300;
    const isLongDescription = course.description?.length > descriptionLimit;
    const displayDescription = isLongDescription && !isDescriptionExpanded
        ? course.description.slice(0, descriptionLimit) + "..."
        : course.description;

    return (
        <div className="course-detail-page">
            <div className="course-detail-container">

                {/* Left Column: Main Content */}
                <div className="course-main-content">
                    <div className="course-header">
                        <h1>{course.title}</h1>
                        <p className="course-category">Categories: {course.category}</p>
                    </div>

                    <div className="course-preview-area">
                        <img src={course.thumbnail} alt={course.title} className="preview-thumbnail" />
                        <div className="play-button-overlay">▶</div>
                    </div>

                    <div className="content-block">
                        <h2>About Course</h2>
                        <p className="course-description">{displayDescription}</p>
                        {isLongDescription && (
                            <button
                                className="show-more-btn"
                                onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#8543c7',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    marginTop: '0.5rem',
                                    padding: '0'
                                }}
                            >
                                {isDescriptionExpanded ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>

                    <div className="content-block">
                        <h2>What Will You Learn?</h2>
                        <ul className="learning-points-list">
                            {course.whatYouWillLearn?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="content-block">
                        <h2>Course Content</h2>
                        <div className="course-accordion">
                            {course.content?.map((chapter, idx) => (
                                <div key={idx} className="accordion-item">
                                    <div className="accordion-header" onClick={() => toggleChapter(idx)}>
                                        <span>{chapter.title}</span>
                                        <span>{activeChapter === idx ? '−' : '+'}</span>
                                    </div>
                                    {activeChapter === idx && (
                                        <div className="accordion-content">
                                            {chapter.lessons ? (
                                                <ul>
                                                    {chapter.lessons.map((lesson, lIdx) => (
                                                        <li key={lIdx}>{lesson}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p>Click to view link (Mock)</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Sidebar */}
                <aside className="course-sidebar">
                    <div className="sidebar-card action-card">
                        <button className="sidebar-btn">Add to Cart</button> {/* Changed text to Add to Cart as requested workflow implies buying */}

                        <ul className="meta-list">
                            <li><span>📶</span> {course.level}</li>
                            <li><span>⏳</span> {course.duration} Duration</li>
                            <li><span>📅</span> {course.lastUpdated} Last Updated</li>
                            <li><span>🏆</span> {course.certificate ? "Certificate of completion" : "No certificate"}</li>
                        </ul>
                    </div>

                    <div className="sidebar-card">
                        <h3>A course by</h3>
                        <div className="instructor-mini-profile">
                            <img src={course.instructorAvatar} alt={course.instructorName} className="instructor-mini-avatar" />
                            <span>{course.instructorName}</span>
                        </div>
                    </div>

                    <div className="sidebar-card">
                        <h3>Material Includes</h3>
                        <ul className="materials-list">
                            {course.materials?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-card">
                        <h3>Requirements</h3>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.5' }}>
                            {course.requirements && course.requirements[0]}
                        </p>
                    </div>

                    <div className="sidebar-card">
                        <h3>Tags</h3>
                        <div className="tags-container">
                            {course.tags?.map((tag, idx) => (
                                <span key={idx} className="tag-badge">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-card">
                        <h3>Audience</h3>
                        <ul className="materials-list">
                            {course.audience?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default CourseDetail;
