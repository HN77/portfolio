import styled from 'styled-components';

export const Power = styled.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    background-color: #fcf6f4;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 255, 0, 0.4);
        box-shadow: 0 0 0.8rem 0.6rem rgba(0, 255, 0, 0.2);
    }
`;
