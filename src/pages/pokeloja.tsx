import { useEffect } from 'react'
import { api } from '../services/api'
import Head from 'next/head'
import { Searchbar } from '../components/SearchBar'


export default function Catalog() {
    useEffect(() => {
        api.get('')
            .then(response => console.log(response.data))
    }, [])

    function getPokemon() {
        api.get('').then(response => console.log(response.data))
    }

    return (
        <>
            <Head>
                <title>Pokéloja | Água</title>
            </Head>

            <Searchbar />
            <button onClick={getPokemon}>ihu</button>
        </>
    )
}