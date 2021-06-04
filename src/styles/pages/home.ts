import styled from 'styled-components';
import { flexBetween } from '../_mixins';

export const FlexContainerRow = styled.div`
    ${flexBetween}

    width: 90vw;
    flex-wrap: wrap;
    max-width: 1200px;

    .pokeball-container {
        ${flexBetween}
        flex-direction: column;

        p {
            font-size: 25px;
            margin-top: 10px;
            font-weight: bold;
            display: inline-block;
        }
    }

    @media(max-width:768px) {


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
    max-width: unset;

    h1 {
        display: inline-block;
        margin-bottom: 3rem;
    }

    @media(max-width:768px) {
        height: 73vh;
    }
`;