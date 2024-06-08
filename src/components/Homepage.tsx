import React from 'react';
import HeroSection from './home/HeroSection';
import Header from './Header';
import Goals from './home/Goals';
import Footer from './Footer';
import MainSection from './home/MainSection';
import AddOn from './home/AddOn';
import Careers from '../Careers';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Goals />
      <MainSection />
      <AddOn />
      <Careers />
      <Footer />
    </div>
  );
};

export default HomePage;