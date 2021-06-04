import styled from 'styled-components'
import { flexBetween, flexCenter } from '../../styles/_mixins';

export const Container = styled.div`
    .cart {
        ${flexBetween}
        flex-direction: column;

        width: 30vw;
        max-width: 430px;
        height: 100vh;
        position: fixed;
        padding-top: 10px;
        top: 0;
        right: -30vw;
        z-index: 2;
        transition: right 500ms ease-in-out;
        background-color: #FFF;

        &.active {
            right: 0;
        }

        > svg {
            cursor: pointer;
            position: absolute;
            top: 8px;
            right: 8px;
        }

        .cart-title {
            width: 100%;
            padding: 8px 0 12px 0;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            border-bottom: 1px solid #eee;
        }

        .cart-content {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: auto;
            flex-direction: column;
            align-items: flex-start;

            .cart-item {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                width: 100%;
                position: relative;

                .item-right-container {
                    ${flexBetween}

                    position: absolute;
                    right: 15px;
                    top: 50%;
                    transform: translateY(-50%);

                    .item-price {
                        margin-right: 15px;
                    }

                    .trash-icon {
                        ${flexCenter}
                        cursor: pointer;
                    }
                }
            }
        }

        .cart-resume {
            display: flex;
            flex-direction: column;
            
            width: 100%;

            .cart-amount {
                ${flexBetween}
                padding: 10px 15px;
                background: #FFF;
                border-top: 1px solid #eee;

                .amount-title {
                    font-weight: bold;
                    font-size: 1.3rem;
                }
            }

            .checkout-button {
                padding: 20px 0;
                border-radius: none;
                border: none;
                background: rgb(255, 67, 67);
                color: #FFF;
                font-weight: bold;
                font-size: 20px;
                transition: background 150ms ease-in-out;

                &:hover {
                    background: rgb(235, 85, 85);
                }

                &:focus {
                    outline: none;
                }

                &:disabled {
                    background: #aaa;
                }
            }
        }
        
        @media(max-width: 768px) {
            width: 100vw;
            right: -100vw;
        }
    }
`;

export const customStyles = {
    overlay: {
        zIndex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    // content: {
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)'
    // }
}