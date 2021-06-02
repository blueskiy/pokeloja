import styled from 'styled-components';

export const FlexContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 615px;

    .pokeball-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;

        p {
            font-size: 25px;
            margin-top: 10px;
            font-weight: bold;
            display: inline-block;
        }
    }
`;

export const FlexContainerColumn = styled(FlexContainerRow)`
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    h1 {
        display: inline-block;
        margin-bottom: 45px;
    }

    .profile-home {
        position: absolute;
        top: 15px;
        right: 15px;
    }
`;