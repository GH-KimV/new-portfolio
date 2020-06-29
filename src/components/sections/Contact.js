import React from 'react';
import Footer from '../layout/Footer';

const Contact = () => {
    const nextSection = '#home';
    const footerArrowClass = 'up-arrow';

    return (
        <div id='contact' className='container'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                dolore ullam, quo pariatur repellendus illo enim unde aperiam,
                amet velit iure distinctio quia odio possimus! Molestiae
                sapiente ullam atque. Autem.
            </p>
            <Footer nextSection={nextSection} footerArrowClass={footerArrowClass}/>
        </div>
    );
};

export default Contact;
