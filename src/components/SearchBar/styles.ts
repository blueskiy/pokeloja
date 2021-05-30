import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 15px;
    width: 100vw;
    height: 200px;
    background-color: ${props => props.theme.colors.background};
`;