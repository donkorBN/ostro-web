import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TeamProfiles from './Team/TeamProfiles';
import TeamHero from './Team/TeamHero';


const TeamPage: React.FC = () => {
  return (
    <div>
      <Header />
      <TeamHero />
      <TeamProfiles />
      <Footer />
    </div>
  );
};

export default TeamPage;