import React from 'react';
import arrow from '../../assets/arrow-up.svg';
import { Up } from './ScrollToTopElements';

const index = () => {
    const ScrollUp = () => {
        const element = document.getElementById('home');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };
    return (
        <Up onClick={() => ScrollUp()}>
            <img src={arrow} alt="To Top" />
        </Up>
    );
};

export default index;
