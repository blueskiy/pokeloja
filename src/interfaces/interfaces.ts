export interface Pokemon {
    uniquePokemonId: string
    name: string
    price: number
    pokemonImageURL: string
    amount: number
}

export interface AddPokemon {
    uniquePokemonId: string
    pokemonName: string
    price: number
}