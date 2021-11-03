import React from 'react';
import Logo from '../../subComponent/Logo/Logo';
import PowerButton from '../../subComponent/PowerButton/PowerButton';
import SocialIcons from '../../subComponent/SocialIcons/SocialIcons';
import { WelcomeContainer, Container } from './WelcomeElements';

const Welcome = () => {
    return (
        <WelcomeContainer>
            <Container>
                <Logo />
                <PowerButton />
                <SocialIcons />
            </Container>
        </WelcomeContainer>
    );
};

export default Welcome;
