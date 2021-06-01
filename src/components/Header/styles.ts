import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;
    position: relative;
    padding: 12px 4.4rem;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.primary};

    > a {
        display: flex;
        align-items: center;
        font-size: smaller;
        position: absolute;
        left: 4.4rem;
        bottom: 4px;
        color: #FFF;
        transition: color 50ms ease-in-out;
        text-decoration: none;

        svg {
            margin-right: 2px;
        }

        &:hover {
            color: ${props => props.theme.colors.secundary};
        }
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        position: relative;
        width: 100%;
        max-width: 1260px;

        h1 {
            color: #FFF;

            span {
                color: ${props => props.theme.colors.secundary};
            }
        }

        input {
            border: none;
            border-radius: 4px;
            padding: 10px;
            width: 40vw;
            max-width: 500px;

            &:focus {
                outline: none;
            }
        }

        img {
            width: 40px;
            height: auto;
            border-radius: 50%;
            border: solid 3px #5ebe9e;
        }

        > span {
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: #FFF;

            .bag-icon {
                display: flex;
                align-items: center;
                justify-content: space-between;

                margin-right: 10px;
            }

            img {
                margin-right: 10px;
            }
        }

        > svg {
            width: 30px;
            height: auto;
        }
    }

    @media(max-width: 767px) {
        height: 115px;
        padding: 12px 1.1rem;

        > div {
            padding: 12px 0;
            align-items: flex-start;

            height: 115px;

            h1 {
                font-size: 21px;
                padding-top: 5px;
            }

            input {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 93vw;
            }

            > span {
                font-size: 0;
                position: absolute;
                right: 6rem;

                img {
                    width: 43px;
                }
            }
        }
    }
`;