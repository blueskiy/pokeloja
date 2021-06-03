import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { getSession } from 'next-auth/client'

import { MyThemeContext } from '../contexts/ThemeContext'

import { api } from '../services/api'
import { Header } from '../components/Header'
import { CatalogResults } from '../components/CatalogResults'
import { getStoragedItem, removeItemOnLocalStorage, setItemOnLocalStorage } from '../helpers/storage'
import { fire } from '../styles/themes/themes'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

export default function Catalog() {
    const [pokemonCards, setPokemonCards] = useState([])
    const { persistedTheme } = useContext(MyThemeContext)

    const requestByType = () => {
        if (persistedTheme().storageKey === 'AGUA') {
            return '11'
        }

        if (persistedTheme().storageKey === 'FOGO') {
            return '10'
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

                localStorage.setItem('@Pokemon:list', JSON.stringify(pokemon))
            })

        console.log('amigo', persistedTheme())
    }, [])

    return (
        <>
            <Head>
                <title>Pokéloja | {persistedTheme().title}</title>
            </Head>
            <Header />
            <CatalogResults cards={pokemonCards} />
        </>
    )
}
