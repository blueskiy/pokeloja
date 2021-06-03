import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { getSession } from 'next-auth/client'

import { MyThemeContext } from '../contexts/ThemeContext'

import { api } from '../services/api'
import { Header } from '../components/Header'
import { CatalogResults } from '../components/CatalogResults'
import { getStoragedItem, setItemOnLocalStorage } from '../helpers/storage'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

export default function Catalog() {
    const [pokemonCards, setPokemonCards] = useState([])
    const [search, setSearch] = useState('')
    const { persistedTheme } = useContext(MyThemeContext)

    const requestByType = () => {
        if (persistedTheme().storageKey === 'AGUA') {
            return '11'
        }

        if (persistedTheme().storageKey === 'FOGO') {
            return '10'
        }

        if (persistedTheme().storageKey === 'PLANTA') {
            return '12'
        }

        if (persistedTheme().storageKey === 'VOADOR') {
            return '3'
        }

        if (persistedTheme().storageKey === 'LUTADOR') {
            return '2'
        }

        if (persistedTheme().storageKey === 'DRAGAO') {
            return '16'
        }
    }

    useEffect(() => {
        api.get(`type/${requestByType()}/`)
            .then(response => {
                const { pokemon } = response.data
                setPokemonCards(pokemon)

                setItemOnLocalStorage('@Pokemon:list', JSON.stringify(pokemon))
            })
    }, [])

    const pokemonToRender = () => {
        if (getStoragedItem('@Pokemon:list')) {
            const pokemonList = JSON.parse(getStoragedItem('@Pokemon:list'))
            const filteredPokemon = pokemonList.filter(pokemon => {
                return pokemon.pokemon.name.toLowerCase().includes(search.toLowerCase())
            })

            return filteredPokemon
        } else {
            const filteredPokemon = pokemonCards
            return filteredPokemon
        }
    }

    return (
        <>
            <Head>
                <title>Pokéloja | {persistedTheme().title}</title>
            </Head>
            <Header
                search={search}
                setSearch={setSearch}
            />
            <CatalogResults cards={pokemonToRender()} />
        </>
    )
}
