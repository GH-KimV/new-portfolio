import React from 'react';
import Footer from '../layout/Footer';

const Home = () => {
    const nextSection = '#about';
    const footerArrowClass = 'down-arrow';

    return (
        <div id='home' className='container'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, deleniti neque? Ad iure id tempora debitis ipsa!
                Dolor, natus cumque, iure minima porro praesentium harum odit
                provident obcaecati quo distinctio.
            </p>
            <Footer nextSection={nextSection} footerArrowClass={footerArrowClass}/>
        </div>
    );
};

export default Home;
