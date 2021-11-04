import styled, { keyframes } from 'styled-components';

export const Resume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    color: var(--white);
    background-color: var(--black);
    padding: 3rem 5rem;
    position: relative;

    @media only Screen and (max-width: 60em) {
        padding: 3rem 2rem;
    }
`;

export const Move = keyframes`
    0% {transform: translateY(-10px)}
    50% {transform: translateY(10px) translateX(10px)}
    100% {transform: translateY(-10px)}
`;

export const ReactIcon = styled.div`
    position: absolute;
    bottom: 22%;
    right: 25%;
    font-size: 3rem;

    animation: ${Move} 2.5s ease infinite;

    @media only Screen and (max-width: 60em) {
        display: none;
    }
`;
export const NodeIcon = styled.div`
    position: absolute;
    top: 9%;
    left: 18%;
    font-size: 3rem;

    animation: ${Move} 2.5s ease infinite;
`;
export const MongoDBIcon = styled.div`
    position: absolute;
    top: 12%;
    right: 8%;
    font-size: 3rem;

    animation: ${Move} 2.5s ease infinite;
`;
export const JsIcon = styled.div`
    position: absolute;
    bottom: 38%;
    left: 6%;
    font-size: 3rem;

    animation: ${Move} 2.5s ease infinite;
`;
export const EXIcon = styled.div`
    position: absolute;
    bottom: 12%;
    left: 45%;
    font-size: 3rem;

    animation: ${Move} 2.5s ease infinite;
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: calc(1rem + 2vw);
    margin-top: 1rem;
    margin-bottom: 2rem;
    position: relative;

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

export const LanguageTitle = styled.h3``;
export const ToolsTitle = styled.h3``;

export const Skills = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media only Screen and (max-width: 60em) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Langauge = styled.div`
    width: 45%;
    height: 100%;

    @media only Screen and (max-width: 60em) {
        width: 100%;
    }
`;
export const Tools = styled.div`
    width: 45%;
    height: 100%;

    @media only Screen and (max-width: 60em) {
        width: 100%;
    }
`;
