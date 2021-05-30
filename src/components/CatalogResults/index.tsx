import { PokemonCard } from "../PokemonCard";
import { CatalogContainer } from "./styles";

interface CatalogResultsProps {
    cards: Array<Object>;
}

export function CatalogResults({ cards }: CatalogResultsProps) {
    return (
        <CatalogContainer>

            {cards.map((pokemon, i) => {
                return (<PokemonCard key={i} {...pokemon} />)
            })}

        </CatalogContainer>
    )
}