import React from 'react';
import Footer from '../layout/Footer';

const Work = () => {
    const nextSection = '#skills';
    const footerArrowClass = 'down-arrow';

    return (
        <div id='work' className='container'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae magnam, quisquam dignissimos consequatur facere quas
                iste atque eveniet cum ipsam distinctio fuga dolores quia. Quos
                doloribus rem reiciendis corrupti. Quo.
            </p>
            <Footer
                nextSection={nextSection}
                footerArrowClass={footerArrowClass}
            />
        </div>
    );
};

export default Work;
