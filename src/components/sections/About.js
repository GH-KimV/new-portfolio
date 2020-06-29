import React from 'react';
import Footer from '../layout/Footer';

const About = () => {
    const nextSection = '#work';
    const footerArrowClass = 'down-arrow';

    return (
        <div id='about' className='container'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                blanditiis cum, reiciendis explicabo soluta similique quibusdam,
                assumenda ipsam non, tenetur facere asperiores. Maxime ipsum
                quisquam commodi eligendi repellat eius aperiam!
            </p>
            <Footer
                nextSection={nextSection}
                footerArrowClass={footerArrowClass}
            />
        </div>
    );
};

export default About;
