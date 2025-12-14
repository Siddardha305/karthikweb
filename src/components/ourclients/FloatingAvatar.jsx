import React from 'react';

const FloatingAvatar = ({ image, size = '60px', style }) => {
    return (
        <div className="floating-avatar" style={{ ...style, width: size, height: size }}>
            <img
                src={image || "/images/avatar-gradient.png"}
                alt="Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default FloatingAvatar;
