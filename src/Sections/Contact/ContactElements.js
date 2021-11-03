import styled from 'styled-components';

export const ContactSection = styled.div`
    width: 100vw;
    background-color: var(--black);
    padding: calc(2.5rem + 2.5vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only Screen and (max-width: 60em) {
        padding: 2rem 0;
        width: 100%;
    }
`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: calc(1rem + 2vw);
    margin-top: 1rem;
    margin-bottom: 2rem;
    position: relative;
    color: var(--white);

    &::before {
        content: '';
        height: 1px;
        width: 50%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid var(--purple);
        transform: translate(-50%);
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    a {
        &:not(:last-child) {
            margin-right: 2rem;
        }

        &:hover {
            img {
                filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg);
            }
        }
    }

    img {
        height: 3rem;
        width: 3rem;
        padding: 0.5rem;
    }
`;

export const Form = styled.form`
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--white);

    input {
        color: #fff;
    }

    @media only Screen and (max-width: 60em) {
        width: 90vw;
    }

    input {
        width: 48%;
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav2);
        border: none;
        border-radius: 0.5rem;

        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: var(--nav);
        }
        &::placeholder {
            color: #fff;
            opacity: 0.8;
        }
    }
    textarea {
        width: 65%;
        padding: 1rem calc(0.5rem + 1vw);
        margin-bottom: 1rem;
        background-color: var(--nav2);
        border: none;
        border-radius: 0.5rem;

        &:active,
        &:focus {
            border: none;
            outline: none;
            background-color: var(--nav);
        }
        &::placeholder {
            color: #f9f9f9;
            opacity: 0.8;
        }
    }

    @media only Screen and (max-width: 60em) {
        input,
        textarea {
            width: 100%;
        }
    }

    button {
        display: flex;
        justify-self: start;
        padding: 0.5rem 1.2rem;
        background-color: var(--white);
        border-radius: 20rem;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;

export const Row = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-between;

    @media only Screen and (max-width: 60em) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
