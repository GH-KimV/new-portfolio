import React from 'react';
import Footer from '../layout/Footer';

const Skills = () => {
    const nextSection = '#testimonials';
    const footerArrowClass = 'down-arrow';

    return (
        <div id='skills' className='container'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi esse sequi officia placeat nostrum ab impedit deleniti
                mollitia fuga. Dolorum sed reiciendis laudantium id excepturi
                non maiores! Consequatur, quaerat nostrum!
            </p>
            <Footer
                nextSection={nextSection}
                footerArrowClass={footerArrowClass}
            />
        </div>
    );
};

export default Skills;
