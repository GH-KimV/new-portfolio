import React from 'react';
import './scss/App.scss';

import ScrollAnimation from 'react-animate-on-scroll';
import Sidebar from './components/layout/Sidebar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Work from './components/sections/Work';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

const App = () => {
    return (
        <div className='App container' id='App'>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'App'} />
            <div id='page-wrap'>
                <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                    <section id='home'>
                        <Home />
                    </section>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <section id='about'>
                        <About />
                    </section>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <section id='work'>
                        <Work />
                    </section>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <section id='skills'>
                        <Skills />
                    </section>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <section id='testimonials'>
                        <Testimonials />
                    </section>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='fadeIn'
                    animatePreScroll={false}
                    delay={500}
                    animateOut='fadeOut'
                >
                    <section id='contact'>
                        <Contact />
                    </section>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default App;
