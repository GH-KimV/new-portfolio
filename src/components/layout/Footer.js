import React from 'react';
import DownArrow from './downArrow.svg';

const Footer = ({ nextSection, footerArrowClass }) => {
    return (
        <p className={footerArrowClass}>
            <a className='smoothscroll' href={nextSection}>
                <i className='icon-down-circle'></i>
                <img src={DownArrow} alt='down arrow' />
            </a>
        </p>
    );
};

export default Footer;
