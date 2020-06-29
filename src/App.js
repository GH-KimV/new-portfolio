import React from 'react';
import './scss/App.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

const App = () => {
    return (
        <div className='App'>
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <Home />
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn'
                animatePreScroll={false}
                delay={500}
                animateOut='fadeOut'
            >
                <About />
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn'
                animatePreScroll={false}
                delay={500}
                animateOut='fadeOut'
            >
                <Work />
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn'
                animatePreScroll={false}
                delay={500}
                animateOut='fadeOut'
            >
                <Skills />
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn'
                animatePreScroll={false}
                delay={500}
                animateOut='fadeOut'
            >
                <Testimonials />
            </ScrollAnimation>

            <ScrollAnimation
                animateIn='fadeIn'
                animatePreScroll={false}
                delay={500}
                animateOut='fadeOut'
            >
                <Contact />
            </ScrollAnimation>
        </div>
    );
};

export default App;
