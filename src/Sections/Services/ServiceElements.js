import styled from 'styled-components';

export const ServiceSection = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20rem;

    position: relative;
`;
export const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 90vh;
    background-color: var(--black);
    background-size: auto 100vh;
`;
export const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;
    color: var(--white);

    &::before {
        content: '';
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid var(--pink);
        transform: translate(-50%);
    }
`;

export const Line = styled.span`
    border-left: 4px solid var(--background);
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;
export const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 2rem solid var(--background);
`;

export const Content = styled.div`
    display: flex;
    z-index: 1;
    margin: 10rem 10rem;
    /* margin: 3rem 10rem; */
    align-items: center;
    position: relative;

    @media only Screen and (max-width: 48em) {
        display: block;
        &:last-child {
            margin-bottom: 2rem;
        }
    }

    @media only Screen and (max-width: 48em) {
        margin: 10rem calc(2rem + 3vw);
        &:last-child {
            margin-bottom: 1rem;
        }
    }
`;

export const OBJ = styled.div`
    position: absolute;
    top: 60%;
    right: 35%;
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only Screen and (max-width: 48em) {
        opacity: 0.5;
    }
`;
