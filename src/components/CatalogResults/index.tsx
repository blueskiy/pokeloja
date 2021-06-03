import { PokemonCard } from "../PokemonCard";
import { CatalogContainer } from "./styles";

interface CatalogResultsProps {
    cards: {
        pokemon: {
            name: string
            url: string
        }
    }[];
}

export function CatalogResults({ cards }: CatalogResultsProps) {
    return (
        <CatalogContainer>
            {cards.map((pokemon, i) => {
                const randomPrice = Math.floor(Math.random() * 1000) + 50

                return (
                    <PokemonCard
                        key={i}
                        id={i}
                        name={pokemon.pokemon.name}
                        price={randomPrice}
                        url={pokemon.pokemon.url}
                    />)
            })}
        </CatalogContainer>
    )
}