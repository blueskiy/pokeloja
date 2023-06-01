import styled from 'styled-components';
import { flexBetween, flexCenter } from '../../styles/_mixins';

export const Container = styled.div`
    ${flexCenter}

    height: 100px;
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 12px 4.4rem;
    margin-bottom: 20px;
    box-shadow: 0 0 10px -1px rgb(0 0 0);
    background-color: ${props => props.theme.colors.primary};

    .header-main-content {
        ${flexBetween}

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
                width: 30vw;
                max-width: 100%;

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
            border: solid 2px ${props => props.theme.colors.secundary};
            cursor: pointer;
        }

        > div {
            ${flexBetween}

            color: #FFF;

            .bag-icon {
                ${flexBetween}
                
                cursor: pointer;
                margin-right: 15px;
                position: relative;
                transition: opacity 100ms ease-in-out;

                &:hover {
                    opacity: 0.85;
                }

                .pokemon-count {
                    ${flexCenter}
                    
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

            .profile-info {
                ${flexBetween}

                img {
                    margin-right: 10px;
                }
            }
        }

        > svg {
            width: 30px;
            height: auto;
        }
    }

    @media(max-width: 1024px) {
        h1 {
            font-size: 1.6rem;
        }
    }

    @media(max-width: 768px) {
        height: 115px;
        padding: 12px 1.1rem;

        .header-main-content {
            padding: 12px 0;
            align-items: flex-start;

            height: 115px;

            h1 {
                font-size: 21px;
                padding-top: 9px;
            }

            > a {
                top: 0;
                left: 0;
                position: absolute;
                height: fit-content;
                padding-top: 4px;
            }

            .input-container {
                position: absolute;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                width: 96vw;

                input {
                    width: 100%;
                }
            }

            > div {
                font-size: 0;
                padding-top: 0.3rem;

                .bag-icon {
                    margin-right: 0;
                }

                img {
                    display: none;
                }
            }
        }
    }
`;