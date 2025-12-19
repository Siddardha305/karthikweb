import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Hero2 from './components/hero2/Hero2';
import Hero3 from './components/hero3/Hero3';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import VideoTestimonials from './components/videotestimonials/VideoTestimonials';
import OurClients from './components/ourclients/OurClients';
import Footer from './components/footer/Footer';
import AllCourses from './components/allcourses/AllCourses';
import CourseDetail from './components/coursedetail/CourseDetail';
import PersonalTraining from './components/personaltraining/PersonalTraining';
import './App.css';
import RefundPolicy from './components/policies/RefundPolicy';
import TermsAndConditions from './components/policies/TermsAndConditions';
import PrivacyPolicy from './components/policies/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Courses />
            {/* <Hero2 /> */}
            {/* <Hero3 /> */}
            <Testimonials />
            <VideoTestimonials />
            {/* Note: OurClients is inside Courses now, but Footer is global */}
          </>
        } />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
