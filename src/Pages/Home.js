import React from 'react';
import HeroSection from '../Sections/Hero';
import About from '../Sections/About';
import Resume from '../Sections/Resume';
import Services from '../Sections/Services';
import ProjectList from '../Sections/ProjectList';
import Contact from '../Sections/Contact';

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Resume />
            <Services />
            <ProjectList />
            <Contact />
        </>
    );
};

export default Home;
