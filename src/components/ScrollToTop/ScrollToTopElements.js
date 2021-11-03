import styled from 'styled-components';

export const Up = styled.div`
    position: fixed;
    bottom: 5rem;
    right: 3rem;
    cursor: pointer;

    @media only Screen and (max-width: 60em) {
        display: none;
    }
    img {
        height: 3rem;
        width: 3rem;
        background-color: var(--white);
        border-radius: 50%;
        border: 0.1rem solid var(--white);
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.2);
        }
        &:active {
            transform: scale(0.9);
        }
    }
`;
