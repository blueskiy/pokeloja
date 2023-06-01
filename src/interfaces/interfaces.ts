export interface CatalogPokemon {
    pokemon: {
        name: string
        url: string
        price: number
    }
}

export interface CartContextData {
    cart: Pokemon[]
    addPokemon: ({ }: AddPokemon) => void
    removePokemon: (uniquePokemonId: string) => void
    handlePokemonIncrement: (uniquePokemonId: string) => void
    handlePokemonDecrement: (uniquePokemonId: string) => void
    finalizePurchase: () => void
}

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