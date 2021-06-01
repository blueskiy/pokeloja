import { PokemonCard } from "../PokemonCard";
import { CatalogContainer } from "./styles";

interface CatalogResultsProps {
    cards: {
        pokemon: {
            name: string;
            url: string
        }
    }[];
}

export function CatalogResults({ cards }: CatalogResultsProps) {
    return (
        <CatalogContainer>

            {cards.map((pokemon, i) => {
                return (
                    <PokemonCard
                        key={i}
                        name={pokemon.pokemon.name}
                        url={pokemon.pokemon.url}
                    />)
            })}

        </CatalogContainer>
    )
}