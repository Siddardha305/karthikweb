import React from 'react';
import CourseCard from './CourseCard';
import SortFilter from './SortFilter';
import { coursesData } from '../../data/coursesData';
import './AllCourses.css';

const AllCourses = () => {
    return (
        <section className="all-courses-section">
            <div className="all-courses-header">
                <SortFilter onSortChange={(value) => console.log("Sorted by:", value)} />
            </div>

            <div className="courses-grid-container">
                {coursesData.map(course => (
                    <CourseCard
                        key={course.id}
                        {...course}
                        onAddToCart={() => console.log(`Added ${course.title} to cart`)}
                    />
                ))}
            </div>
        </section>
    );
};

export default AllCourses;
