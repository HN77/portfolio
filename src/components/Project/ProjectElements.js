import styled from 'styled-components';

export const Project = styled.div`
    width: 30%;
    min-width: 20rem;
    height: 36vh;
    border: 1px solid #b2b1b9;
    border-radius: 0.4rem 0.4rem 0 0;
    margin: 1rem;
    overflow: hidden;

    img {
        transition: all 5s ease;
    }

    &:hover {
        img {
            transform: translateY(-60%);
        }
    }

    @media only Screen and (max-width: 90em) {
        width: 45%;
        margin: 1rem;
    }
    @media only Screen and (max-width: 50em) {
        width: 100%;
        margin: 1rem;
        padding: 0;
    }
`;

export const ProjectBrow = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    width: 100%;
    background-color: #d8e3e7;
    position: sticky;
    z-index: 2;
`;

export const Circle = styled.span`
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 50%;
    margin-left: 0.8rem;
`;
