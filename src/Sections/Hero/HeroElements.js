import styled, { keyframes } from 'styled-components';

export const HeroSection = styled.div`
    width: 100vw;
    height: 45vw;
    color: var(--white);
    background-color: var(--black);
    display: flex;
    justify-content: center;
    position: relative;

    @media only Screen and (max-width: 48em) {
        height: 70vw;
        display: block;
    }
    @media only Screen and (max-width: 420px) {
        height: auto;
        padding-bottom: 2rem;
    }
`;
export const Blobs = styled.div`
    width: 100%;
    position: absolute;
    right: 0;

    @media only Screen and (max-width: 48em) {
        opacity: 0.5;
    }
`;
export const PinkBlob = styled.div`
    width: calc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 6;
`;
export const WhiteBlob = styled.div`
    width: calc(20% + 20vw);
    position: absolute;
    right: calc(3.5rem + 3.5vw);
    top: calc(2rem + 2vw);
    z-index: 5;
`;
export const PurpleBlob = styled.div`
    width: calc(10% + 10vw);
    position: absolute;
    right: 0;
`;
export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;

    @media only Screen and (max-width: 48em) {
        flex-direction: column;
        width: 100vw;
        justify-content: center;
        align-items: center;
    }
`;
export const LeftBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    line-height: 1.5;

    @media only Screen and (max-width: 48em) {
        width: 80%;
        text-align: center;
        align-items: center;
        justify-content: space-around;
        margin-top: calc(2.5rem + 2.5vw);
        filter: drop-shadow(2px 4px 6px var(--black));
    }
`;
export const Topic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--nav);
    font-weight: 700;
    font-size: calc(0.3rem + 0.4vw);
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
`;
export const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--purple);
    margin-right: 0.5rem;
`;
export const Title = styled.h1`
    font-size: calc(1.5rem + 1vw);
    line-height: 1.2;
    padding: 0.5rem 0;
`;
export const SubText = styled.h5`
    font-size: calc(0.5rem + 0.5vw);
    color: var(--nav2);
`;
export const CTA = styled.button`
    padding: 0 1rem;
    margin-top: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-size: calc(0.3rem + 0.5vw);
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    z-index: 9;

    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }

    img {
        width: 1.5rem;
    }
`;
export const Move = keyframes`
        0% { transform:translateY(-5px); }
        50% { transform:translateY(10px); }
        100% { transform:translateY(-5px); }
`;
export const DevSvg = styled.img`
    max-width: 180%;
    width: calc(25% + 20vw);
    z-index: 7;
    animation: ${Move} 2.5s ease infinite;

    @media only Screen and (max-width: 48em) {
        align-self: flex-start;
        position: absolute;
        bottom: 0;
        opacity: 0.5;
    }

    @media only Screen and (max-width: 40em) {
        display: none;
    }
`;
