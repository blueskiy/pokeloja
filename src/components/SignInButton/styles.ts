import styled from 'styled-components';

export const SignInButtonStyled = styled.button`
    color: #FFF;
    border: none;
    padding: 10px;
    border-radius: 3px;
    background: #4d54dd;
    transition: all 100ms ease-in-out;

    &:hover {
        background: #464ff8;
    }

    @media(max-width:767px) {
        display: none;
    }
`;