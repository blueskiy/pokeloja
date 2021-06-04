import styled from 'styled-components';

export const FlexContainerRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 90vw;
    flex-wrap: wrap;

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

    @media(max-width:767px) {


        .pokeball-container {
            flex-basis: 32%;
            margin-bottom: 1.5rem;
        p {
            
        }
    }
    }
`;

export const FlexContainerColumn = styled(FlexContainerRow)`
    flex-direction: column;
    justify-content: center;

    width: 100vw;
    height: 80vh;

    h1 {
        display: inline-block;
        margin-bottom: 3rem;
    }

    .profile-home {
        position: absolute;
        top: 15px;
        right: 15px;
    }

    @media(max-width:767px) {
        height: 73vh;
    }
`;