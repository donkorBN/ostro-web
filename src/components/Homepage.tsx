import React from 'react';
import HeroSection from './HeroSection';
import Header from './Header';
import Goals from './Goals';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Goals />
    </div>
  );
};

export default HomePage;