import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Newsletter from '../Newsletter';
import MissionHero from './mission/MissionHero';

const MissionPage: React.FC = () => {
    return (
        <div>
            <Header />
            <MissionHero />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default MissionPage;