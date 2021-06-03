import { createContext, ReactNode, useContext, useState } from 'react'
import { getStoragedItem, setItemOnLocalStorage } from '../helpers/storage'
import { Pokemon, AddPokemon } from '../interfaces/interfaces'
import { api } from '../services/api'

interface CartProviderProps {
    children: ReactNode
}

interface UpdatePokemonAmount {
    pokemonId: number
    amount: number
}

interface CartContextData {
    cart: Pokemon[]
    addPokemon: ({ }: AddPokemon) => void
    removePokemon: (uniquePokemonId: string) => void
    updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export default function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Pokemon[]>(() => {
        const storagedCart = getStoragedItem('@Pokeloja:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []
    })

    const addPokemon = ({ pokemonId, uniquePokemonId, price }: AddPokemon) => {
        const pokemonList = JSON.parse(getStoragedItem('@Pokemon:list'))
        const findPokemon = pokemonList.find((pokemon: any, index: number) => {
            return index === pokemonId
        })

        const pokemonName = findPokemon.pokemon.name
        // const pokemonURL = pokemonListRs.pokemon.url

        // const pokemonImage = async () => {
        //     const getPokemon = await api.get(`${pokemonURL.substring(25)}`)
        //     const pokemonImageURL = getPokemon.data.sprites.front_default

        //     return pokemonImageURL
        // }

        const updatedCart = [...cart]
        const pokemonExistsOnCart = updatedCart.find((pokemon) => {
            return pokemon.uniquePokemonId === uniquePokemonId
        })

        const currentAmount = pokemonExistsOnCart ? pokemonExistsOnCart.amount : 0
        const amount = currentAmount + 1

        if (pokemonExistsOnCart) {
            pokemonExistsOnCart.amount = amount

        } else {
            const newPokemon = {
                id: pokemonId,
                uniquePokemonId: uniquePokemonId,
                name: pokemonName,
                price: price,
                image: '',
                amount: amount
            }

            updatedCart.push(newPokemon)
        }

        setCart(updatedCart)
        setItemOnLocalStorage('@Pokeloja:cart', JSON.stringify(updatedCart))
    }

    const removePokemon = (uniquePokemonId: string) => {
        console.log(uniquePokemonId)
    }

    const updatePokemonAmount = ({ pokemonId, amount }: UpdatePokemonAmount) => {

    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addPokemon,
                removePokemon,
                updatePokemonAmount
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart(): CartContextData {
    const context = useContext(CartContext)

    return context
}