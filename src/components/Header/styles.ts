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

    .header-main-content {
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
                
                cursor: pointer;
                margin-right: 15px;
                position: relative;
                transition: opacity 100ms ease-in-out;

                &:hover {
                    opacity: 0.85;
                }

                .pokemon-count {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    left: 0;
                    bottom: -5px;
                    position: absolute;

                    width: 16px;
                    height: 16px;
                    font-size: 10px;
                    font-weight: bold;
                    border-radius: 50%;
                    background-color: #FFF;
                    color: ${props => props.theme.colors.primary};
                    border: 1px solid ${props => props.theme.colors.primary};
                }
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

    .cart {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 35vw;
        height: 100vh;
        position: fixed;
        padding: 10px;
        top: 0;
        right: -35vw;
        z-index: 2;
        transition: right 500ms ease-in-out;
        background-color: #FFF;

        &.active {
            right: 0;
        }

        svg {
            cursor: pointer;
            position: absolute;
            top: 8px;
            right: 8px;
        }

        .cart-title {
            font-size: 20px;
            font-weight: bold;
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