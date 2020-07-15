import React from 'react';
import Footer from '../layout/Footer';
import TypingComponent from '../layout/TypingComponent';

const Home = () => {
    // link for down arrow to go to the next section
    const nextSection = '#about';

    //  dynamic class for down arrow footer
    const footerArrowClass = 'down-arrow';

    //  msg for dynamic typing component
    const msg = 'software engineer';

    return (
        <div className='container homepage'>
            <h1 className='homepage-background'>KV</h1>
            <div className='fullname-container'>
                <h1>KIM VO</h1>
            </div>
            <div className='container homepage-typing-component'>
                <TypingComponent msg={msg} />
            </div>
            <Footer
                nextSection={nextSection}
                footerArrowClass={footerArrowClass}
            />
        </div>
    );
};

export default Home;
