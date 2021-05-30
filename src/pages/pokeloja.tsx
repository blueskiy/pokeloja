import Head from 'next/head'
import { Searchbar } from '../components/SearchBar'


export default function Catalog() {
    return (
        <>
            <Head>
                <title>Pokéloja | Água</title>
            </Head>

            <Searchbar />
        </>
    )
}