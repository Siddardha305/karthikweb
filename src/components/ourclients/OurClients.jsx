import React from 'react';
import './OurClients.css';
import ClientHeader from './ClientHeader';
import BrandBox from './BrandBox';
import FloatingAvatar from './FloatingAvatar';

const OurClients = () => {
    // Client Images from public/images/clients
    const clientImages = [
        "/images/clients/Tiger-YT-Vaheed.jpg",
        "/images/clients/VR-raja.jpg",
        "/images/clients/Vasu-Tech.jpg",
        "/images/clients/Village-vihari.jpg",
        "/images/clients/Web_Photo_Editor.jpg",
        "/images/clients/amihg2d6tjo05wldvryd.jpg",
        "/images/clients/lk60nfdi59o8er4n6pb6.webp",
        "/images/clients/llggnkinxlqpzzl7jikp.jpg",
        "/images/clients/telugu-assets.jpg",
        "/images/clients/v5cbwvd6vtsvvq3o06i6.jpg",
        "/images/clients/vsist.jpg"
    ];

    // Generate positions for a circle
    const totalAvatars = 16; // 8 visible in arc -> ~16 total in circle
    const avatars = Array.from({ length: totalAvatars }).map((_, i) => {
        const angleDeg = (360 / totalAvatars) * i;
        const angleRad = (angleDeg - 90) * (Math.PI / 180); // -90 to start at top
        // Use 48% radius to place them near the edge of the container
        const radiusPercent = 48;
        const x = 50 + radiusPercent * Math.cos(angleRad);
        const y = 50 + radiusPercent * Math.sin(angleRad);

        // Fixed size for all avatars
        const size = 110; // Increased size to match reference

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
