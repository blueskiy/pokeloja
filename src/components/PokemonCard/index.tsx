import { api } from '../../services/api'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton
} from "./styles";

export function PokemonCard(props) {
    const pokemonId = props.url.split('/')[6]
    const nameCapitalized = props.name.charAt(0).toUpperCase() + props.name.slice(1)

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
    }

    function nome() {
        api.get(pokemonId)
            .then(response => {
                console.log(response.data.types)
            })
    }

    // nome()

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