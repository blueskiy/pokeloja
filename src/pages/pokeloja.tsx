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
    const { theme } = useContext(MyThemeContext)

    const requestByType = () => {
        if (theme.title === 'water') {
            return '11'
        }

        if (theme.title === 'fire') {
            return '10'
        }

        if (theme.title === 'dragon') {
            return '16'
        }
    }

    useEffect(() => {
        api.get(`type/${requestByType()}/`)
            .then(response => {
                const { pokemon } = response.data
                setPokemonCards(pokemon)
            })
    }, [])

    return (
        <>
            <Head>
                <title>Pokéloja | Água</title>
            </Head>

            <Header />

            <CatalogResults cards={pokemonCards} />
        </>
    )
}
