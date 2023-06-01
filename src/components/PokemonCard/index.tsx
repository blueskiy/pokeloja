import { useState } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import { CgPokemon } from 'react-icons/cg'
import { getStoragedItem } from '../../helpers/storage'
import { useCart } from '../../hooks/useCart'
import {
PokemonContainer,
    PokemonImage,
    PokemonInfo,
    AddToCartButton,
    customStyles
} from "./styles"

Modal.setAppElement('#__next')

interface PokemonCardProps {
    id: number
    name: string
    price: number
    url: string
    pokemonId: string
}

export const PokemonCard = ({ id, name, price, url, pokemonId }: PokemonCardProps) => {
    const { addPokemon } = useCart()
    const [modalIsOpen, setIsOpen] = useState(false)
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const autoToggleModal = () => {
        setTimeout(() => {
            setIsOpen(!modalIsOpen)
        }, 1500);
    }

    const getPokemonImage = () => {
        const imageURL = 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/'

        const imageId = pokemonId.padStart(3, '0')

        return `${imageURL + imageId}.png`
    }

    const handleAddPokemon = (id: number) => {
        const storeType = JSON.parse(getStoragedItem('@Pokeloja:tema')).storageKey
        const uniquePokemonId = `${storeType}_${id}`

        const pokemonToAdd = {
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