import Image from 'next/image'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton
} from "./styles";

import { useCart } from '../../contexts/CartContext'

interface PokemonCardProps {
    id: number
    name: string
    url: string
}

export function PokemonCard({ id, name, url }: PokemonCardProps) {
    const { addPokemon, cart } = useCart()

    const pokemonId = url.split('/')[6]
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    // console.log(id)

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
    }

    function handleAddPokemon(id: number) {
        addPokemon(id)
    }

    return (
        <PokemonContainer>
            <PokemonImage >
                <Image
                    src={getPokemonImage()}
                    width={200}
                    height={200}
                    alt={name}
                    unoptimized
                // onError={pegar imagem da pokeapis}
                // loading="lazy"
                />
            </PokemonImage>
            <PokemonInfo>
                <p>{nameCapitalized}</p>
                <span>R$100,00</span>
            </PokemonInfo>
            <AddToCartButton
                type="button"
                onClick={() => handleAddPokemon(id)}
            >
                ADD+
            </AddToCartButton>
        </PokemonContainer>
    )
}