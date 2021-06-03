export interface Pokemon {
    id: number
    uniquePokemonId: string
    name: string
    price: number
    image: string
    amount: number
}

export interface AddPokemon {
    pokemonId: number
    uniquePokemonId: string
    price: number
}