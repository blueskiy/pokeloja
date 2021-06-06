import { createContext, ReactNode, useContext, useState } from 'react'
import { getStoragedItem, removeItemOnLocalStorage, setItemOnLocalStorage } from '../helpers/storage'
import { Pokemon, AddPokemon } from '../interfaces/interfaces'
import { api } from '../services/api'

interface CartProviderProps {
    children: ReactNode
}

interface CartContextData {
    cart: Pokemon[]
    addPokemon: ({ }: AddPokemon) => void
    removePokemon: (uniquePokemonId: string) => void
    handlePokemonIncrement: (uniquePokemonId: string) => void
    handlePokemonDecrement: (uniquePokemonId: string) => void
    finalizePurchase: () => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export default function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Pokemon[]>(() => {
        const storagedCart = getStoragedItem('@Pokeloja:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart)
        }

        return []
    })

    const addPokemon = async ({ uniquePokemonId, pokemonName, price }: AddPokemon) => {
        const pokemonList = JSON.parse(getStoragedItem('@Pokemon:list'))
        const findPokemon = pokemonList.find((pokemon: any) => {
            return pokemon.pokemon.name === pokemonName
        })

        const pokemonURL = findPokemon.pokemon.url

        const getPokemonInfo = api.get(pokemonURL)
        const imageURL = await getPokemonInfo
        const pokemonOnCartImage = imageURL.data.sprites.front_default

        const updatedCart = [...cart]
        const pokemonExistsOnCart = updatedCart.find((pokemon) => {
            return pokemon.name === pokemonName
        })

        const currentAmount = pokemonExistsOnCart ? pokemonExistsOnCart.amount : 0
        const amount = currentAmount + 1

        if (pokemonExistsOnCart) {
            pokemonExistsOnCart.price =
                pokemonExistsOnCart.price +
                (pokemonExistsOnCart.price / amount)

            pokemonExistsOnCart.amount = amount
            // setCart(updatedCart)
            // setItemOnLocalStorage('@Pokeloja:cart', JSON.stringify(updatedCart))
        } else {
            const newPokemon = {
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

    const handlePokemonIncrement = (uniquePokemonId: string) => {
        const updatedCart = [...cart]
        const pokemonFind = updatedCart.find((pokemon: any) => {
            return pokemon.uniquePokemonId === uniquePokemonId
        })

        pokemonFind.price = pokemonFind.price + (pokemonFind.price / pokemonFind.amount)
        pokemonFind.amount = pokemonFind.amount + 1

        setCart(updatedCart)
        setItemOnLocalStorage('@Pokeloja:cart', JSON.stringify(updatedCart))
    }

    const handlePokemonDecrement = (uniquePokemonId: string) => {
        const updatedCart = [...cart]
        const pokemonFind = updatedCart.find((pokemon: any) => {
            return pokemon.uniquePokemonId === uniquePokemonId
        })

        if (pokemonFind.amount === 1) {
            return
        }

        pokemonFind.price = pokemonFind.price - (pokemonFind.price / pokemonFind.amount)
        pokemonFind.amount = pokemonFind.amount - 1

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
                finalizePurchase,
                handlePokemonIncrement,
                handlePokemonDecrement
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