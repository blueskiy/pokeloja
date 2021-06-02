import { createContext, ReactNode, useContext, useState } from 'react';
import { api } from '../services/api'

interface CartProviderProps {
    children: ReactNode;
}

interface UpdatePokemonAmount {
    pokemonId: number;
    amount: number;
}

interface Pokemon {
    id: number
    name: string
    price: number
    image: string
    amount: number
}

interface CartContextData {
    cart: Pokemon[];
    addPokemon: (pokemonId: number) => void;
    removePokemon: (pokemonId: number) => void;
    updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Pokemon[]>(() => {
        const storagedCart = localStorage.getItem('@Pokeloja:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addPokemon = (pokemonId: number) => {
        const pokemonList = JSON.parse(localStorage.getItem('@Pokemon:list'))
        const pokemonListRs = pokemonList.find((pokemon, index) => {
            return index === pokemonId
        })

        const pokemonName = pokemonListRs.pokemon.name
        const pokemonURL = pokemonListRs.pokemon.url

        // const pokemonImage = async () => {
        //     const getPokemon = await api.get(`${pokemonURL.substring(25)}`)
        //     const pokemonImageURL = getPokemon.data.sprites.front_default

        //     return pokemonImageURL
        // }

        const updatedCart = [...cart]
        const pokemonExists = updatedCart.find((pokemon) => {
            return pokemon.id === pokemonId
        })

        const currentAmount = pokemonExists ? pokemonExists.amount : 0
        const amount = currentAmount + 1

        if (pokemonExists) {
            pokemonExists.amount = amount
        } else {
            const storeType = localStorage.getItem('@Pokeloja:type')

            const newPokemon = {
                id: pokemonId,
                storeId: `${storeType}_${pokemonId}`,
                name: pokemonName,
                price: 100,
                image: '',
                amount: amount
            }

            updatedCart.push(newPokemon)
        }

        setCart(updatedCart)
        localStorage.setItem('@Pokeloja:cart', JSON.stringify(updatedCart))
    };

    const removePokemon = (pokemonId: number) => {
        try {
            // TODO
        } catch {
            // TODO
        }
    };

    const updatePokemonAmount = ({
        pokemonId,
        amount,
    }: UpdatePokemonAmount) => {
        try {
            // TODO
        } catch {
            // TODO
        }
    };

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
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}