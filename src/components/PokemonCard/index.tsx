import Image from 'next/image'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton
} from "./styles";

import { useCart } from '../../contexts/CartContext'
import { getStoragedItem } from '../../helpers/storage';

interface PokemonCardProps {
    id: number
    name: string
    price: number
    url: string
}

export function PokemonCard({ id, name, price, url }: PokemonCardProps) {
    const { addPokemon } = useCart()

    const pokemonId = url.split('/')[6]
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
    }

    function handleAddPokemon(id: number) {
        const storeType = getStoragedItem('@Pokeloja:type')
        const storeId = `${storeType}_${id}`

        addPokemon(id, storeId, price)
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
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://i.ibb.co/chbmTjs/pixlr-bg-result-1.png" }}
                />
            </PokemonImage>
            <PokemonInfo>
                <p>{nameCapitalized}</p>
                <span>{`R$${price},00`}</span>
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