import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { water, fire, dragon } from '../styles/themes/themes';
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

          <Link href="/pokeloja">
            <Pokeball
              onClick={toggleTheme(water)}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={toggleTheme(fire)}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={toggleTheme(dragon)}
            />
          </Link>

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  )
}
