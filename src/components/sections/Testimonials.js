import React from 'react';
import Footer from '../layout/Footer';

const Testimonials = () => {
    const nextSection = '#contact';
    const footerArrowClass = 'down-arrow';

    return (
        <div id='testimonials' className='container'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                placeat recusandae necessitatibus ipsam quos sit quaerat cum
                asperiores illo, molestias debitis quae rem labore. Officiis
                molestiae illum excepturi nemo quod.
            </p>
            <Footer
                nextSection={nextSection}
                footerArrowClass={footerArrowClass}
            />
        </div>
    );
};

export default Testimonials;
