import React from 'react';
import Github from '../../assets/svg/github-brands.svg';
import Facebook from '../../assets/svg/facebook-brands.svg';
import Twitter from '../../assets/svg/twitter-brands.svg';
import Youtube from '../../assets/svg/youtube-brands.svg';
import { Icons } from './SocialIconsElements';

const SocialIcons = () => {
    return (
        <Icons>
            <div>
                <img src={Github} alt="Github" />
            </div>
            <div>
                <img src={Facebook} alt="Github" />
            </div>
            <div>
                <img src={Twitter} alt="Github" />
            </div>
            <div>
                <img src={Youtube} alt="Github" />
            </div>
        </Icons>
    );
};

export default SocialIcons;
