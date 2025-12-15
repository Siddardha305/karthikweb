import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Hero2 from './components/hero2/Hero2';
import Hero3 from './components/hero3/Hero3';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import VideoTestimonials from './components/videotestimonials/VideoTestimonials';
import OurClients from './components/ourclients/OurClients';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Courses />
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <Testimonials />
      <VideoTestimonials />
      <Footer />
    </div>
  );
}

export default App;
