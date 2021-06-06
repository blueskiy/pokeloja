import Image from 'next/image'
import {
    PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton,
    customStyles
} from "./styles"

import { useCart } from '../../hooks/useCart'
import { getStoragedItem } from '../../helpers/storage'

import Modal from 'react-modal'
import { CgPokemon } from 'react-icons/cg'
import { useState } from 'react'

Modal.setAppElement('#__next')

interface PokemonCardProps {
    id: number
    name: string
    price: number
    url: string
}

export function PokemonCard({ id, name, price, url }: PokemonCardProps) {
    const { addPokemon } = useCart()

    const pokemonId = url.split('/')[6]
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    const [modalIsOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!modalIsOpen)
    }

    function autoToggleModal() {
        setTimeout(() => {
            setIsOpen(!modalIsOpen)
        }, 1500);
    }

    function getPokemonImage() {
        const imageURL = 'https://pokeres.bastionbot.org/images/pokemon/'

        return `${imageURL + pokemonId}.png`
    }

    function handleAddPokemon(id: number) {
        const storeType = JSON.parse(getStoragedItem('@Pokeloja:tema')).storageKey
        const uniquePokemonId = `${storeType}_${id}`

        const pokemonToAdd = {
            pokemonId: id,
            uniquePokemonId,
            pokemonName: name,
            price
        }

        addPokemon(pokemonToAdd)
        toggleModal()
    }

    return (
        <>
            <PokemonContainer>
                <PokemonImage >
                    <Image
                        src={getPokemonImage()}
                        width={200}
                        height={200}
                        alt={name}
                        unoptimized
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "https://i.ibb.co/chbmTjs/pixlr-bg-result-1.png" }}
                    />
                </PokemonImage>
                <PokemonInfo>
                    <p>{nameCapitalized}</p>
                    <span>
                        {`R$${price},00`}
                    </span>
                </PokemonInfo>
                <AddToCartButton
                    type="button"
                    onClick={() => handleAddPokemon(id)}
                >
                    <CgPokemon
                        color="#fff"
                        size="30"
                    />
                    Comprar
                </AddToCartButton>
            </PokemonContainer>
            <Modal
                onAfterOpen={autoToggleModal}
                closeTimeoutMS={200}
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="Modal de Compra Finalizada"
            >
                Pokemon adicionado!
            </Modal>
        </>
    )
}