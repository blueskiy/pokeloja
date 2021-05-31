import { PokeballButton, PokeballStyle } from './styles'

interface PokeballProps {
    onClick: () => void;
    name: string;
}

export function Pokeball({ onClick }: PokeballProps) {
    return (
        <PokeballStyle onClick={onClick}>
            <PokeballButton />
        </PokeballStyle>
    )
}