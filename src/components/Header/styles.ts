import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100px;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 12px 4.4rem;
    margin-bottom: 20px;
    box-shadow: 0 0 10px -1px rgb(0 0 0);
    background-color: ${props => props.theme.colors.primary};

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

        > a {
            display: flex;
            align-items: center;
            font-size: smaller;
            position: absolute;
            left: 0;
            bottom: -1rem;
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

        .input-container {
            position: relative;

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

            svg {
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
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

    @media(max-width: 767px) {
        height: 115px;
        padding: 12px 1.1rem;

        .header-main-content {
            padding: 12px 0;
            align-items: flex-start;

            height: 115px;

            h1 {
                font-size: 21px;
                padding-top: 5px;
            }

            > a {
                top: 0;
                left: 0;
            }

            .input-container {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 93vw;

                input {
                    width: 100%;
                }
            }

            > span {
                font-size: 0;
                padding-top: 0.3rem;

                .bag-icon {
                    margin-right: 0;
                }

                img {
                    width: 43px;
                }
            }
        }
    }
`;