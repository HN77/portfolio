import styled from 'styled-components';

export const LogoHN = styled.h1`
    color: ${(props) => props.theme.text};
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    font-weight: 900;
    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index: 3;
`;
