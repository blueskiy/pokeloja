import styled from 'styled-components'
import { flexCenter } from '../../styles/_mixins';

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 330px;
    max-width: 227px;
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

    @media(max-width:1024px) {
        height: 320px;
        flex-basis: 23%;

        &:nth-child(5n) {
            margin-right: 20px;
        }

        &:nth-child(4n) {
            margin-right: 0;
        }
    }

    @media(max-width:768px) {
        height: 330px;
        flex-basis: 32%;
        margin: 0 10px 20px 0;

        &:nth-child(5n) {
            margin-right: 10px;
        }

        &:nth-child(4n) {
            margin-right: 10px;
        }

        &:nth-child(3n) {
            margin-right: 0;
        }

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }

    @media(max-width:428px) {
        height: 290px;
        flex-basis: 48%;

        &:nth-child(3n) {
            margin-right: 10px;
        }

        &:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media(max-width:375px) {
        height: 270px;
    }

    @media(max-width:320px) {
        height: 245px;
    }
`;

export const PokemonImage = styled.div`
    ${flexCenter}

    margin-bottom: 14px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);

    img {
        max-width: 90%;
        margin-top: 20px;
    }
`

export const PokemonInfo = styled.div`
    color: #FFF;
    text-align: center;
`

export const AddToCartButton = styled.button`
    ${flexCenter}

    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    color: #FFF;
    border: none;
    padding: 10px 0;
    text-align: center;
    background: ${props => props.theme.colors.primary};
    border-radius: 0 0 10px 10px;
    transition: opacity 100ms ease-in-out;

    &:hover {
        opacity: 0.9;
    }

    svg {
        margin-right: 3px;
    }
`

export const customStyles = {
    overlay: {
        zIndex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}
