import React from 'react';
import Facebook from '../../assets/facebook-square-brands.svg';
import LinkedIn from '../../assets/linkedin-brands.svg';
import Twitter from '../../assets/twitter-square-brands.svg';
import Instagram from '../../assets/instagram-square-brands.svg';
import { Footer, LeftText, RightText } from './FooterElements';

const index = () => {
    return (
        <Footer>
            <LeftText>&copy; 2021 Construction et conception par Hamid</LeftText>
            <RightText>
                Contactez-moi via 😉
                <a href="http://twitter.com">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="http://instagram.com">
                    <img src={Instagram} alt="Instagram" />
                </a>
                <a href="http://linkedin.com">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
                <a href="http://facebook.com">
                    <img src={Facebook} alt="Facebook" />
                </a>
            </RightText>
        </Footer>
    );
};

export default index;
