import Image from 'next/image'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton
} from "./styles";

interface PokemonCardProps {
    key: number;
    name: string;
    url: string;
}

export function PokemonCard({ name, url }: PokemonCardProps) {
    const pokemonId = url.split('/')[6]
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
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
                    // onError={this.src='imagefound.gif'}
                    // loading="lazy"
                />
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