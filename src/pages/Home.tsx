import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Solutions from '../components/sections/Solutions';
import Demo from '../components/sections/Demo';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

interface HomeProps {
  onShowAuthModal?: () => void;
}

const Home: React.FC<HomeProps> = ({ onShowAuthModal }) => {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Demo onShowAuthModal={onShowAuthModal} />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;