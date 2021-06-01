import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { water, fire, dragon } from '../styles/themes/themes';
import { Pokeball } from '../components/Pokeball'
import { FlexContainerColumn, FlexContainerRow } from '../styles/pages/home'

import { ThemeContext } from '../contexts/ThemeContext'

export default function OnBoarding() {
  const { setTheme } = useContext(ThemeContext)

  return (
    <>
      <Head>
        <title>Início | Pokéloja</title>
      </Head>

      <FlexContainerColumn>
        <h1>Escolha sua Pokéloja</h1>
        <FlexContainerRow>

          <Link href="/pokeloja">
            <Pokeball
              onClick={setTheme(water)}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={setTheme(fire)}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={setTheme(dragon)}
            />
          </Link>

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  )
}
