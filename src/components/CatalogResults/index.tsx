import { CatalogPokemon } from "../../interfaces/interfaces"
import { PokemonCard } from "../PokemonCard"
import { CatalogContainer } from "./styles"

interface CatalogResultsProps {
    cards: CatalogPokemon[]
}

export function CatalogResults({ cards }: CatalogResultsProps) {
    return (
        <CatalogContainer>
            {cards.map((pokemon, i) => {
                const randomPrice = Math.floor(Math.random() * 1000) + 50
                const url = pokemon.pokemon.url
                const pokemonId = url.split('/')[6]

                //api de imagens vai só até o pokemon 905
                if (Number(pokemonId) > 905) return null

                return (
                    <PokemonCard
                        key={i}
                        id={i}
                        name={pokemon.pokemon.name}
                        price={randomPrice}
                        url={url}
                        pokemonId={pokemonId}
                    />)
            })}
        </CatalogContainer>
    )
}