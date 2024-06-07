import React from 'react';
import HeroSection from './HeroSection';
import Header from './Header';
import Goals from './Goals';
import Footer from './Footer';
import MainSection from './MainSection';
import AddOn from './AddOn';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Goals />
      <MainSection />
      <AddOn />
      <Footer />
    </div>
  );
};

export default HomePage;