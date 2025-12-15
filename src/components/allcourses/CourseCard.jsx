import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({
    id,
    thumbnail,
    title,
    duration,
    instructorName,
    instructorAvatar,
    category,
    originalPrice,
    currentPrice,
    onAddToCart
}) => {
    const navigate = useNavigate();

    const handleCardClick = (e) => {
        // Navigate to course detail on any click within the card
        if (id === 'premiere-pro-personal-training') {
            navigate('/personal-training');
        } else {
            navigate(`/course/${id}`);
        }
    };

    return (
        <div className="course-card-wrapper" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={thumbnail} alt={title} className="course-thumbnail" />

            <div className="course-info">
                <h3 className="course-main-title">{title}</h3>

                <div className="course-meta">
                    <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{duration}</span>
                </div>

                <div className="instructor-info">
                    <img src={instructorAvatar} alt={instructorName} className="instructor-avatar" />
                    <span className="instructor-text">
                        By <span className="instructor-name">{instructorName}</span> In {category}
                    </span>
                </div>
            </div>

            <div className="course-footer">
                <div className="price-container">
                    <span className="original-price">{originalPrice}</span>
                    <span className="current-price">{currentPrice}</span>
                </div>

                <button className="add-cart-btn" onClick={onAddToCart}>
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
