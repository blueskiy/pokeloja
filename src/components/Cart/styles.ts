import styled from 'styled-components'

export const Container = styled.div`
    width: 35vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    background-color: ${props => props.theme.colors.secundary};
`;