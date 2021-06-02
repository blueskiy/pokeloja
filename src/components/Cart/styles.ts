import styled from 'styled-components'

export const Container = styled.div`
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

        .cart-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }

        .checkout-button {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
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
        }
    }
`;