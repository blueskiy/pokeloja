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
    addPokemon: (pokemonId: number) => Promise<void>;
    removePokemon: (pokemonId: number) => void;
    updatePokemonAmount: ({ pokemonId, amount }: UpdatePokemonAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<Pokemon[]>(() => {
        const storagedCart = localStorage.getItem('@Pokeloja:cart')

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addPokemon = async (pokemonId: number) => {
        const updatedCart = [...cart]
        const pokemonExists = updatedCart.find(pokemon => pokemon.id === pokemonId)

        const currentAmount = pokemonExists ? pokemonExists.amount : 0
        const amount = currentAmount + 1

        if (pokemonExists) {
            pokemonExists.amount = amount
        } else {
            const pokemon = await api.get(`/pokemons/${pokemonId}`)

            const newPokemon = {
                ...pokemon.data,
                amount: 1
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

    const updatePokemonAmount = async ({
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