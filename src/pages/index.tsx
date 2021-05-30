import Head from 'next/head'
import { Pokeball } from '../components/Pokeball'
import { FlexContainerColumn, FlexContainerRow } from '../styles/pages/home'

export default function OnBoarding() {
  function log() {
    console.log('o que eu quero')
  }

  return (
    <>
      <Head>
        <title>Início | Pokéloja</title>
      </Head>

      <FlexContainerColumn>
        <h1>Escolha sua Pokéloja</h1>
        <FlexContainerRow>

          <Pokeball
            onClick={log}
          />

          <Pokeball
            onClick={log}
          />

          <Pokeball
            onClick={log}
          />

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  )
}
