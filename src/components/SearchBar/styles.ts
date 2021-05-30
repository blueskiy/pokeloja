import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    position: relative;
    padding: 12px 15px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.background};

    input {
        border: none;
        border-radius: 4px;
        padding: 10px;
        width: 40vw;

        &:focus {
            outline: none;
        }
    }

    @media(max-width: 767px) {
        align-items: flex-start;

        height: 115px;

        h1 {
            font-size: 21px;
        }

        input {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 93vw;
        }

        span {
            display: none;
        }
    }
`;