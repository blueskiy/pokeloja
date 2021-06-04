import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --background: #FFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body::-webkit-scrollbar,
    .cart-content::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track,
    .cart-content::-webkit-scrollbar-track {
        background: #eee;
    }

    body::-webkit-scrollbar-thumb,
    .cart-content::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 20px;
        border: none;
    }

    body,
    input,
    textarea,
    button {
        font: 400 1rem 'Poppins', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .ReactModal__Overlay {
        opacity: 0;
        transition: opacity 200ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
    }
`;