import React from 'react'
import Header from './Header';
import Footer from './Footer';
import ErrorPage from '../ErrorPage';

const MissionPage: React.FC = () => {
    return (
        <div>
            <Header />
            <ErrorPage />
            <Footer />
        </div>
    );
};

export default MissionPage;