import { createContext, ReactNode, useContext, useState } from 'react'
import { getStoragedItem, removeItemOnLocalStorage, setItemOnLocalStorage } from '../helpers/storage'
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
    finalizePurchase: () => void
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

    const addPokemon = async ({ pokemonId, uniquePokemonId, price }: AddPokemon) => {
        const pokemonList = JSON.parse(getStoragedItem('@Pokemon:list'))
        const findPokemon = pokemonList.find((pokemon: any, index: number) => {
            return index === pokemonId
        })

        const pokemonName = findPokemon.pokemon.name
        const pokemonURL = findPokemon.pokemon.url

        const getPokemonInfo = api.get(pokemonURL)
        const imageURL = await getPokemonInfo
        const pokemonOnCartImage = imageURL.data.sprites.front_default

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
                uniquePokemonId,
                name: pokemonName,
                price,
                pokemonImageURL: pokemonOnCartImage,
                amount: amount
            }

            updatedCart.push(newPokemon)
        }

        setCart(updatedCart)
        setItemOnLocalStorage('@Pokeloja:cart', JSON.stringify(updatedCart))
    }

    const removePokemon = (uniquePokemonId: string) => {
        const updatedCart = [...cart]
        const pokemonIndex = updatedCart.findIndex((pokemon: any) => {
            return pokemon.uniquePokemonId === uniquePokemonId
        })

        if (pokemonIndex >= 0) {
            updatedCart.splice(pokemonIndex, 1)
            setCart(updatedCart)
            setItemOnLocalStorage('@Pokeloja:cart', JSON.stringify(updatedCart))
        }
    }

    const updatePokemonAmount = ({ pokemonId, amount }: UpdatePokemonAmount) => {

    }

    const finalizePurchase = () => {
        setCart([])
        removeItemOnLocalStorage('@Pokeloja:cart')
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addPokemon,
                removePokemon,
                updatePokemonAmount,
                finalizePurchase
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