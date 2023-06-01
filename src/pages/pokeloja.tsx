import Head from 'next/head'
import { useState, useContext, useEffect } from 'react'
import { getSession } from 'next-auth/client'
import { MyThemeContext } from '../contexts/ThemeContext'
import { api } from '../services/api'
import { Header } from '../components/Header'
import { CatalogResults } from '../components/CatalogResults'
import { getStoragedItem, setItemOnLocalStorage } from '../helpers/storage'
import { CatalogPokemon } from '../interfaces/interfaces'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

const Catalog = ({ session }) => {
    console.log('session', session)
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

    const pokemonToRender = () => {
        if (getStoragedItem('@Pokemon:list')) {
            const pokemonList = JSON.parse(getStoragedItem('@Pokemon:list'))
            const filteredPokemon = pokemonList.filter((pokemon: CatalogPokemon) => {
                return pokemon.pokemon.name.toLowerCase().includes(search.toLowerCase())
            })

            return filteredPokemon
        } else {
            const filteredPokemon = pokemonCards
            return filteredPokemon
        }
    }

    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('@Pokemon:list')))
        api.get(`type/${requestByType()}/`)
            .then(response => {
                const { pokemon } = response.data                
                for (let i = 0; i < pokemon.length; i++) {
                    const randomPrice = Math.floor(Math.random() * 1000) + 50
                    pokemon[i].pokemon.price = randomPrice
                }
                setPokemonCards(pokemon)
                setItemOnLocalStorage('@Pokemon:list', JSON.stringify(pokemon))
            })
    }, [])

    return (
        <>
            <Head>
                <title>Pokéloja | {persistedTheme().title}</title>
            </Head>
            <Header
                setSearch={setSearch}
            />
            <CatalogResults cards={pokemonToRender()} />
        </>
    )
}

export default Catalog;