import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import { getSession } from 'next-auth/client'

import { api } from '../services/api'
import { Header } from '../components/Header'
import { CatalogResults } from '../components/CatalogResults'

// import ThemeContext from '../contexts/theme'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

export default function Catalog() {
    const [pokemonCards, setPokemonCards] = useState([])
    
    // const themeContext = useContext(ThemeContext)
    // console.log('esse é o barato', themeContext)

    useEffect(() => {
        api.get('')
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
