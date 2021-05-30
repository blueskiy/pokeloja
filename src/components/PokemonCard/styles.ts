import styled from 'styled-components'

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 330px;
    cursor: pointer;
    flex-basis: 18%;
    position: relative;
    background-color: #444;

    margin: 0 20px 20px 0;
    padding: 20px 20px 0 20px;
    border-radius: 10px;
    transition: all 180ms ease-in;
    box-shadow: 0 3px 15px rgb(100 100 100 / 50%);

    &:nth-child(5n) {
        margin-right: 0;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 10px 10px 3px rgba(0, 0, 0, 0.26);
    }

    @media(max-width:767px) {
        flex-basis: 45%;
        margin: 0 20px 20px 0;

        &:nth-child(5n) {
            margin-right: 20px;
        }

        &:nth-child(2n) {
            margin-right: 0;
        }
    }
`;

export const PokemonImage = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 11px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);

    img {
        max-width: 90%;
        margin-top: 20px;
    }
`

export const PokemonInfo = styled.div`
    text-align: center;
`

export const AddToCartButton = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    color: #FFF;
    border: none;
    padding: 10px 0;
    text-align: center;
    background: #4d54dd;
    border-radius: 0 0 10px 10px;
    transition: background 100ms ease-in-out;

    &:hover {
        background: #5e66ff;
    }
`
