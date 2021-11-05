import styled from 'styled-components';

export const Headers = styled.header`
    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    background-color: var(--nav);
    color: var(--white);
    position: relative;
    z-index: 500;

    @media only screen and (max-width: 65em) {
        padding: 0.5rem 3rem;
    }

    @media only screen and (max-width: 40em) {
        padding: 0.5rem 1.5rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.5rem;

    div {
        display: flex;
        align-items: center;
        color: var(--white);
    }

    img {
        height: 3rem;
        width: 2.5rem;
        margin-right: 0.2rem;

        @media only screen and (max-width: 65em) {
            height: 2rem;
            width: 2rem;
        }
    }
`;

export const Nav = styled.nav`
    width: 40rem;
    max-width: 60rem;
    height: 6vh;
    font-size: 0.9rem;
    font-weight: 300;
    display: flex;
    margin-top: 0.4rem;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 70em) {
        display: none;
    }

    a {
        font-weight: 600;
        color: var(--white);
        line-height: 1.5;

        &::after {
            content: '';
            display: block;
            height: 3px;
            width: 3px;
            background-color: transparent;
            transition: whith 0.5s;
        }

        &:not(:last-child):hover::after {
            width: 100%;
            background-color: var(--purple);
        }
    }
`;

export const Button = styled.button`
    background-color: var(--purple);
    padding: 0.5rem 1rem;
    border-radius: 1.2rem;
    color: var(--white);
    font-weight: 600;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(0.9);
    }
`;

export const HumburgerBtn = styled.button`
    position: relative;
    background-color: transparent;
    cursor: pointer;
    display: none;

    span {
        width: 3rem;
        padding: 20px;
    }

    @media only screen and (max-width: 70em) {
        display: inline;
    }

    &::before,
    &::after {
        content: '';
        background-color: var(--white);
        width: 2rem;
        height: 2px;
        display: inline-block;
        position: absolute;
        left: 0;
        cursor: pointer;
        transition: all 0.3s;
    }
    &::before {
        margin: 5px;
        top: ${(props) => (props.clicked ? '0' : '-0.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
    }
    &::after {
        margin: 5px;
        top: ${(props) => (props.clicked ? '0' : '0.5rem')};
        transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
    }
`;

export const MobileMenu = styled.div`
    display: none;

    @media only screen and (max-width: 70em) {
        display: flex;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    opacity: ${(props) => (props.clicked ? '1' : '0')};
    visibility: ${(props) => (props.clicked ? 'visible' : 'hidden')};

    background-color: rgba(53, 53, 63, 0.95);
    border-radius: 1.5rem;
    margin: 0.5rem;
    overflow: hidden;
    transition: all 0.3s;

    @media only screen and (min-width: 48em) {
        display: none;
    }

    a {
        color: var(--white);
        font-weight: 400;
        font-size: 1.2rem;
        margin: 1.5rem;
    }
`;
