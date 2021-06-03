export interface Pokemon {
    id: number
    uniquePokemonId: string
    name: string
    price: number
    pokemonImageURL: string
    amount: number
}

export interface AddPokemon {
    pokemonId: number
    uniquePokemonId: string
    price: number
}