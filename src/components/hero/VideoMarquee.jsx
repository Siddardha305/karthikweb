import React from 'react';
import VideoCard from './VideoCard';
import './Hero.css';

const VideoMarquee = () => {
    // Placceholder data for the 3 videos
    const videos = [
        {
            id: 1,
            title: "Course Preview 1",
            image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder dark futuristic
            link: "#course1"
        },
        {
            id: 2,
            title: "AI Tools Demo",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder AI
            link: "#course2"
        },
        {
            id: 3,
            title: "Editing Masterclass",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", // Placeholder tech
            link: "#course3"
        }
    ];

    // Duplicate the array to create seamless loop
    const seamlessVideos = [...videos, ...videos, ...videos, ...videos];

    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {seamlessVideos.map((video, index) => (
                    <VideoCard
                        key={`${video.id}-${index}`}
                        image={video.image}
                        title={video.title}
                        link={video.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoMarquee;
