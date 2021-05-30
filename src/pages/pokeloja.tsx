import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/client'

import { api } from '../services/api'
import { Searchbar } from '../components/SearchBar'
import { CatalogResults } from '../components/CatalogResults'

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx)
    return ({ props: { session } })
}

export default function Catalog() {
    const [pokemonCards, setPokemonCards] = useState([])

    useEffect(() => {
        api.get('')
            .then(response => {
                const { results } = response.data
                setPokemonCards(results)
            })
    }, [])

    return (
        <>
            <Head>
                <title>Pokéloja | Água</title>
            </Head>

            <Searchbar />

            <CatalogResults cards={pokemonCards} />
        </>
    )
}
