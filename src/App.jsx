import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Courses from './components/courses/Courses';
import Testimonials from './components/testimonials/Testimonials';
import VideoTestimonials from './components/videotestimonials/VideoTestimonials';
import Footer from './components/footer/Footer';
import AllCourses from './components/allcourses/AllCourses';
import CourseDetail from './components/coursedetail/CourseDetail';
import PersonalTraining from './components/personaltraining/PersonalTraining';
import './App.css';
import RefundPolicy from './components/policies/RefundPolicy';
import TermsAndConditions from './components/policies/TermsAndConditions';
import PrivacyPolicy from './components/policies/PrivacyPolicy';
import HireFromUs from './components/hirefromus/HireFromUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Courses />
            <Testimonials />
            <VideoTestimonials />
          </>
        } />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/hire-from-us" element={<HireFromUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
