import React from 'react';
import './OurClients.css';
import ClientHeader from './ClientHeader';
import BrandBox from './BrandBox';
import FloatingAvatar from './FloatingAvatar';

const OurClients = () => {
    const clientImages = [
        "/images/clients/1.png",
        "/images/clients/2.png",
        "/images/clients/3.png",
        "/images/clients/4.png",
        "/images/clients/5.png",
        "/images/clients/6.png",
        "/images/clients/7.png",
        "/images/clients/8.png",
        "/images/clients/9.png",
        "/images/clients/10.png",
        "/images/clients/11.png",
        "/images/clients/12.png",
        "/images/clients/13.png",
        "/images/clients/14.png",
        "/images/clients/15.png",
        "/images/clients/16.png",
        "/images/clients/17.png",
        "/images/clients/18.png",
        "/images/clients/19.png",
        "/images/clients/20.png",
        "/images/clients/21.png",
        "/images/clients/22.png",
        "/images/clients/23.png",
        "/images/clients/24.png",
        "/images/clients/25.png",
        "/images/clients/26.png",
        "/images/clients/27.png",
        "/images/clients/28.png",
        "/images/clients/29.png",
        "/images/clients/30.png",
    ];

    // Generate positions for a circle
    // Generate positions for a circle
    const totalAvatars = 21; // Limit items on circle to increase gap
    const avatars = Array.from({ length: totalAvatars }).map((_, i) => {
        const angleDeg = (360 / totalAvatars) * i;
        const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start at top
        // Use 48% radius to place them near the edge of the container
        const radiusPercent = 48;
        const x = 50 + radiusPercent * Math.cos(angleRad);
        const y = 50 + radiusPercent * Math.sin(angleRad);

        // Fixed size for all avatars
        const size = 120; // Increased picture size

        // Assign image cyclically
        const image = clientImages[i % clientImages.length];

        return { top: `${y}%`, left: `${x}%`, width: `${size}px`, height: `${size}px`, image };
    });

    return (
        <section className="our-clients-section">
            {/* Rotating Orbit Container */}
            <div className="avatar-orbit-container">
                {avatars.map((data, idx) => (
                    <div key={idx} className="avatar-pos-wrapper" style={{
                        top: data.top,
                        left: data.left,
                        width: data.width,
                        height: data.height
                    }}>
                        <FloatingAvatar size={data.width} image={data.image} />
                    </div>
                ))}
            </div>

            <div className="clients-content-wrapper">
                <ClientHeader />
                <BrandBox />
            </div>
        </section>
    );
};

export default OurClients;
