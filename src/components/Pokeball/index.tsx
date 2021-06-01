import React from 'react'
import { PokeballButton, PokeballStyle } from './styles'

interface PokeballProps {
    onClick: ({ }) => void;
}

export const Pokeball = React.forwardRef(({ onClick }: PokeballProps, ref) => {
    return (
        <PokeballStyle onClick={onClick}>
            <PokeballButton />
        </PokeballStyle>
    )
})