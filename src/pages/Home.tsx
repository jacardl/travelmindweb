import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Solutions from '../components/sections/Solutions';
import Demo from '../components/sections/Demo';
import Testimonials from '../components/sections/Testimonials';
// 移除 Pricing 导入
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Demo />
      <Testimonials />
      {/* 移除 Pricing 组件 */}
      <Contact />
    </>
  );
};

export default Home;