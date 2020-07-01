import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Scrollspy from 'react-scrollspy';

export default (props) => {
    return (
        <Menu {...props} right noOverlay width={'150px'}>
            <Scrollspy
                items={[
                    'home',
                    'about',
                    'work',
                    'skills',
                    'testimonials',
                    'contact',
                ]}
                currentClassName='is-current'
            >
                <li>
                    <a className='menu-item' href='#home'>
                        Home
                    </a>
                </li>

                <li>
                    <a className='menu-item' href='#about'>
                        About
                    </a>
                </li>

                <li>
                    <a className='menu-item' href='#work'>
                        Work
                    </a>
                </li>

                <li>
                    <a className='menu-item' href='#skills'>
                        Skills
                    </a>
                </li>

                <li>
                    <a className='menu-item' href='#testimonials'>
                        Testimonials
                    </a>
                </li>

                <li>
                    <a className='menu-item' href='#contact'>
                        Contact
                    </a>
                </li>
            </Scrollspy>
        </Menu>
    );
};
