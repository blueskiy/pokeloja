import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'

import { water, fire, dragon } from '../styles/themes/themes';
import { Pokeball } from '../components/Pokeball'
import { FlexContainerColumn, FlexContainerRow } from '../styles/pages/home'

import { ThemeContext } from '../contexts/ThemeContext'

export default function OnBoarding() {
  const { setTheme } = useContext(ThemeContext)

  function teste() {
    console.log('kkkkk')
  }

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
              onClick={teste}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={teste}
            />
          </Link>

          <Link href="/pokeloja">
            <Pokeball
              onClick={teste}
            />
          </Link>

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  )
}
