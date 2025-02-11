import React from 'react';
import NavBar from "../components/navBar/navBar.jsx"
import AboutSection from '../components/about-section/about-section';
import JoinToday from '../components/join-today/join-today.js';
import Footer from '../components/footer/footer.js';
import Testimonials from '../components/testimonials/testimonials.js';

export const HomePage = () => {
    return (
    <div>
        <NavBar />
        <AboutSection />
        <Testimonials />
        <JoinToday />
        <Footer />
    </div>

)};

