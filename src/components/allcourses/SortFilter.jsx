import React from 'react';

const SortFilter = ({ onSortChange }) => {
    return (
        <select
            className="sort-dropdown"
            defaultValue="newest"
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
        >
            <option value="newest">Release Date (newest first)</option>
            <option value="oldest">Release Date (oldest first)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
        </select>
    );
};

export default SortFilter;
