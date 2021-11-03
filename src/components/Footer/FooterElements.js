import styled from 'styled-components';

export const Footer = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    @media only Screen and (max-width: 60em) {
        flex-direction: column;
        padding: 1rem;
    }
`;
export const LeftText = styled.h4`
    @media only Screen and (max-width: 60em) {
        margin-top: 2rem;
    }
`;
export const RightText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only Screen and (max-width: 60em) {
        margin-top: 2rem;
    }
    a {
        &:not(:last-child) {
            margin-right: 1.5rem;

            @media only Screen and (max-width: 60em) {
                margin-right: 0.5rem;
            }
        }

        &:hover {
            img {
                transform: scale(1.5);
                filter: invert(20%) sepia(100%) saturate(300%) hue-rotate(580deg) brightness() (100%) contrast(97%);
            }
        }
    }

    img {
        height: 3rem;
        width: 3rem;
        padding: 0.5rem;
        transition: all 0.2s ease-in-out;
        filter: invert(100%);

        @media only Screen and (max-width: 60em) {
            height: 2.2rem;
            width: 2.2rem;
        }
    }
`;
