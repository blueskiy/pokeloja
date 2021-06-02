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
    const { theme } = useContext(MyThemeContext)

    const requestByType = () => {
        if (theme.title === 'Água') {
            setItemOnLocalStorage('@Pokeloja:type', 'AGUA')
            return '11'
        }

        if (theme.title === 'Fogo') {
            setItemOnLocalStorage('@Pokeloja:type', 'FOGO')
            return '10'
        }

        if (theme.title === 'Dragão') {
            setItemOnLocalStorage('@Pokeloja:type', 'DRAGAO')
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

        const storagedTheme = JSON.parse(getStoragedItem('tema'))
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
