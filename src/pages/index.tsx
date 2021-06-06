import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { water, fire, dragon, flying, grass, fighting } from '../styles/themes/themes'
import { Pokeball } from '../components/Pokeball'
import { FlexContainerColumn, FlexContainerRow } from '../styles/pages/home'

import { MyThemeContext } from '../contexts/ThemeContext'

export default function OnBoarding() {
    const { toggleTheme } = useContext(MyThemeContext)

    return (
        <>
            <Head>
                <title>Início | Pokéloja</title>
            </Head>

            <FlexContainerColumn>
                <h1>Escolha sua Pokéloja</h1>
                <FlexContainerRow>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(water)}
                            />
                        </Link>
                        <p>Água</p>
                    </div>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(fire)}
                            />
                        </Link>
                        <p>Fogo</p>
                    </div>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(grass)}
                            />
                        </Link>
                        <p>Planta</p>
                    </div>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(flying)}
                            />
                        </Link>
                        <p>Voador</p>
                    </div>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(fighting)}
                            />
                        </Link>
                        <p>Lutador</p>
                    </div>
                    <div className="pokeball-container">
                        <Link href="/pokeloja">
                            <Pokeball
                                onClick={toggleTheme(dragon)}
                            />
                        </Link>
                        <p>Dragão</p>
                    </div>
                </FlexContainerRow>
            </FlexContainerColumn>
        </>
    )
}
