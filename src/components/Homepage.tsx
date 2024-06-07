import React from 'react';
import HeroSection from './HeroSection';
import Header from './Header';
import Goals from './Goals';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Goals />
      <Footer />
    </div>
  );
};

export default HomePage;