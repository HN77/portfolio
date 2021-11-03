import styled, { keyframes } from 'styled-components';

export const SkillBar = styled.div`
    display: flex;
    align-items: center;
    height: 1rem;
    width: 100%;
    border-radius: 2rem;
    background-color: #364547;
    padding: 1rem 0;
    margin: 1rem 0;
`;

export const Move = keyframes`
    30% {width: 20%}
    100% {width: level}
`;

export const Skills = styled.div`
    display: flex;
    align-items: center;
    height: 1rem;
    border-radius: 2rem;
    background: linear-gradient(101deg, rgba(34, 51, 195, 1) 0%, rgba(142, 5, 194, 1) 100%);
    padding: 1rem;
    margin: 1rem 0;

    animation: ${Move} 2.5s ease;
`;

export const SkillDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
`;

export const SkillName = styled.h6``;
export const SkillLevel = styled.h6``;

export const Circle = styled.span`
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    background-color: var(--white);
    margin-right: 1rem;
`;
