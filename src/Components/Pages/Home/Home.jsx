import React from 'react';
import Banner from './Banner';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import PortfolioSection from './PortfolioSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <PortfolioSection></PortfolioSection>
        </div>
    );
};

export default Home;