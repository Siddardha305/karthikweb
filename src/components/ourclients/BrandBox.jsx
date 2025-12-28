import React from 'react';

const BrandBox = () => {
    // Local Brand Images
    const brands = [
        { name: "Brand 1", logo: "/images/Brands/1.png" },
        { name: "Brand 2", logo: "/images/Brands/2.png" },
        { name: "Brand 3", logo: "/images/Brands/3.png" },
        { name: "Brand 4", logo: "/images/Brands/4.png" },
        { name: "Brand 5", logo: "/images/Brands/5.png" },
        { name: "Brand 6", logo: "/images/Brands/6.png" },
        { name: "Brand 7", logo: "/images/Brands/7.png" },
        { name: "Brand 8", logo: "/images/Brands/8.png" },
        { name: "Brand 9", logo: "/images/Brands/9.png" },
        { name: "Brand 10", logo: "/images/Brands/10.png" },
        { name: "Brand 11", logo: "/images/Brands/11.png" },
        { name: "Brand 12", logo: "/images/Brands/12.png" },
        { name: "Brand 13", logo: "/images/Brands/13.png" },
        { name: "Brand 14", logo: "/images/Brands/14.png" },
        { name: "Brand 15", logo: "/images/Brands/15.png" }
    ];

    // Create randomized rows from the brands array
    const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

    // Create 3 rows with duplicated content for marquee
    // Create 3 rows with duplicated content for seamless loop
    const shuffled1 = shuffle(brands);
    const row1 = [...shuffled1, ...shuffled1];

    const shuffled2 = shuffle(brands);
    const row2 = [...shuffled2, ...shuffled2];

    const shuffled3 = shuffle(brands);
    const row3 = [...shuffled3, ...shuffled3];

    return (
        <div className="brand-box">
            {/* Row 1: Forward (Left) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-normal">
                    {row1.map((brand, idx) => (
                        <div key={`r1-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '55px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Backward (Right) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-reverse">
                    {row2.map((brand, idx) => (
                        <div key={`r2-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '55px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3: Forward (Left) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-normal" style={{ animationDuration: '25s' }}>
                    {row3.map((brand, idx) => (
                        <div key={`r3-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '55px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandBox;
