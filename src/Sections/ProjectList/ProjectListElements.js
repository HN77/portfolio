import styled from 'styled-components';

export const ProjectList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 7rem;
    margin: 0 auto;
    margin-top: 5rem;
    margin-bottom: 3rem;

    @media only Screen and (max-width: 90em) {
        padding: 1rem;
    }

    @media only Screen and (max-width: 50em) {
        padding: 1rem;
    }
`;

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    font-size: calc(1rem + 2vw);
    margin-top: 5rem;
    margin-bottom: 3rem;
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
export const ProjectCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`;
