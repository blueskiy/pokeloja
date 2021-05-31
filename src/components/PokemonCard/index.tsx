import { useState } from 'react';
import { api } from '../../services/api'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton
} from "./styles";

// interface PokemonCardProps {
//     name: string;
//     url: string;
// }

export function PokemonCard(props) {
    // const [loading, setLoading] = useState(true)
    const pokemonId = props.url.split('/')[6]
    const nameCapitalized = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
    }

    const getPokemonType = async () => {
        const getPokemonDescription = await api.get(pokemonId)
        const typesArray = getPokemonDescription.data.types

        const filteredType = typesArray.map(type => type.type.name === 'water')

        console.log(filteredType)
        // return filteredType
    }

    getPokemonType()

    return (
        <PokemonContainer>

            <PokemonImage >
                <img src={getPokemonImage()} alt={props.name} />
            </PokemonImage>

            <PokemonInfo>
                <p>{nameCapitalized}</p>
                <span>R$100,00</span>
            </PokemonInfo>

            <AddToCartButton >
                ADD+
            </AddToCartButton>

        </PokemonContainer>
    )
}