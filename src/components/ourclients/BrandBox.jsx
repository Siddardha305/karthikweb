import React from 'react';

const BrandBox = () => {
    // Online Images (Logos) - Global & Indian Tech Companies
    const brands = [
        // Global Giants
        { name: "Google", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://google.com&size=128" },
        { name: "Microsoft", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://microsoft.com&size=128" },
        { name: "Amazon", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazon.com&size=128" },
        { name: "Netflix", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://netflix.com&size=128" },
        { name: "Meta", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meta.com&size=128" },
        { name: "Apple", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://apple.com&size=128" },
        { name: "Spotify", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://spotify.com&size=128" },
        { name: "Airbnb", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://airbnb.com&size=128" },

        // Indian Tech & Startups
        { name: "Flipkart", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://flipkart.com&size=128" },
        { name: "Zomato", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zomato.com&size=128" },
        { name: "Swiggy", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://swiggy.com&size=128" },
        { name: "Paytm", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://paytm.com&size=128" },
        { name: "Ola", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://olacabs.com&size=128" },
        { name: "Cred", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://cred.club&size=128" },
        { name: "Zerodha", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zerodha.com&size=128" },
        { name: "Razorpay", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://razorpay.com&size=128" },
        { name: "TCS", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://tcs.com&size=128" },
        { name: "Infosys", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://infosys.com&size=128" },
        { name: "Wipro", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wipro.com&size=128" },
        { name: "Zoho", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zoho.com&size=128" },
        { name: "Freshworks", logo: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://freshworks.com&size=128" }
    ];

    // Create randomized rows from the brands array
    const shuffle = (array) => [...array].sort(() => 0.5 - Math.random());

    // Create 3 rows with duplicated content for marquee
    const row1 = [...shuffle(brands), ...shuffle(brands)];
    const row2 = [...shuffle(brands), ...shuffle(brands)];
    const row3 = [...shuffle(brands), ...shuffle(brands)];

    return (
        <div className="brand-box">
            {/* Row 1: Forward (Left) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-normal">
                    {row1.map((brand, idx) => (
                        <div key={`r1-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '35px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 2: Backward (Right) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-reverse">
                    {row2.map((brand, idx) => (
                        <div key={`r2-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '35px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Row 3: Forward (Left) */}
            <div className="brand-marquee-row">
                <div className="brand-track scroll-normal" style={{ animationDuration: '25s' }}>
                    {row3.map((brand, idx) => (
                        <div key={`r3-${idx}`} className="brand-logo" title={brand.name}>
                            <img src={brand.logo} alt={brand.name} style={{ height: '35px', width: 'auto', borderRadius: '5px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandBox;
