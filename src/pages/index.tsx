import Head from 'next/head'
import { Pokeball } from '../components/Pokeball'
import { FlexContainerColumn, FlexContainerRow } from '../styles/pages/home'

export default function OnBoarding(props) {
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
            name="water"
          />

          <Pokeball
            onClick={log}
            name="fire"
          />

          <Pokeball
            onClick={log}
            name="dragon"
          />

        </FlexContainerRow>
      </FlexContainerColumn>
    </>
  )
}
