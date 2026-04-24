import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageBackgroundSection from './components/ImageBackgroundSection';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Comparison from './components/Comparison';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <Navbar onBookClick={openModal} />
      <main>
        <Hero onBookClick={openModal} />
        {/* <ImageBackgroundSection /> */}
        <TrustBar />
        <ProblemSolution />
        <Services />
        <Comparison />
        <Portfolio />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FAQ />
        <FinalCTA onBookClick={openModal} />
      </main>
      <Footer />
      
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
