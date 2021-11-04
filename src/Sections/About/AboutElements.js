import styled, { keyframes } from 'styled-components';

export const AboutSection = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Waves = styled.img`
    width: 101%;
    position: absolute;
    top: -1rem;
    right: 0;
    left: 0;
`;
export const Hand = styled.div`
    position: absolute;
    bottom: -2rem;
    right: -1rem;

    @media only Screen and (max-width: 40em) {
        display: none;
    }
`;

export const Main = styled.div`
    margin: 15rem 15rem 0 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only Screen and (max-width: 74em) {
        margin: 3rem calc(5rem + 5vw);
    }

    @media only Screen and (max-width: 60em) {
        align-items: center;
        margin: 3rem calc(3rem + 3vw);
    }
`;
export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 10rem;
`;
export const CurvedLine = styled.div`
    width: 7rem;
    height: 2rem;
    border: 5px solid var(--purple);
    border-color: var(--purple) transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
    margin-left: 1rem;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    @media only Screen and (max-width: 60em) {
        flex-direction: column;
    }
`;

export const Move = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(10px) translateX(10px)}
    100% {transform: translateY(-10px)}
`;
export const Rocket = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    padding-bottom: 5rem;

    animation: ${Move} 2.5s ease infinite;
`;
export const AboutText = styled.div`
    position: relative;
    width: 50%;

    @media only Screen and (max-width: 60em) {
        width: 100%;
    }
`;
export const About = styled.div`
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 100%;

    @media only Screen and (max-width: 60em) {
        display: none;
    }
`;
export const Text = styled.h4`
    font-size: calc(0.3rem + 1vw);
    line-height: 1.5;
    color: var(--nav2);
`;
export const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--black);
    margin-right: 0.5rem;
    margin-top: 1rem;
`;
