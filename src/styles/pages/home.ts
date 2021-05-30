import styled from 'styled-components';

export const FlexContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 615px;

    h1 {
        display: inline-block;
        margin-bottom: 20px;
    }
`;

export const FlexContainerColumn = styled(FlexContainerRow)`
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;