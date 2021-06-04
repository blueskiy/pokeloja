import styled from 'styled-components';

export const SignInButtonStyled = styled.button`
    color: #FFF;
    border: none;
    padding: 10px;
    border-radius: 3px;
    background: ${props => props.theme.colors.buttonBackground};
    transition: opacity 100ms ease-in-out;

    &:hover {
        opacity: 0.9;
    }

    @media(max-width:768px) {
        display: none;
    }
`;