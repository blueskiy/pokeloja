import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { getSession } from 'next-auth/client'

import { MyThemeContext } from '../contexts/ThemeContext'

import { api } from '../services/api'
import { Header } from '../components/Header'
import { CatalogResults } from '../components/CatalogResults'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

export default function Catalog() {
    const [pokemonCards, setPokemonCards] = useState([])
    const { theme, toggleTheme } = useContext(MyThemeContext)

    const requestByType = () => {
        if (theme.title === 'Água') {
            return '11'
        }

        if (theme.title === 'Fogo') {
            return '10'
        }

        if (theme.title === 'Dragão') {
            return '16'
        }
    }

    useEffect(() => {
        api.get(`type/${requestByType()}/`)
            .then(response => {
                const { pokemon } = response.data
                setPokemonCards(pokemon)

                localStorage.setItem('@Pokemon:list', JSON.stringify(pokemon))

                pokemon.forEach((pokemon) => {
                    // console.log(pokemon.pokemon.name)
                })
            })

        const storagedTheme = JSON.parse(localStorage.getItem('tema'))
        // console.log(storagedTheme)
        // toggleTheme(storagedTheme)
    }, [])

    return (
        <>
            <Head>
                <title>Pokéloja | {theme.title}</title>
            </Head>
            <Header />
            <CatalogResults cards={pokemonCards} />
        </>
    )
}
