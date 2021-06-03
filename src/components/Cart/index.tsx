import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { getStoragedItem } from '../../helpers/storage'
import { Pokemon } from '../../interfaces/interfaces'

import { useCart } from '../../contexts/CartContext'

import Modal from 'react-modal'
import { Container, customStyles } from './styles'
import { MdClose } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { api } from '../../services/api'

Modal.setAppElement('#__next')

interface CartProps {
  isCartOpen: boolean
  toggleCart: () => void
  cart: Pokemon[]
}

export function Cart({ isCartOpen, toggleCart, cart }: CartProps) {
  const [cartTotal, setCartTotal] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const { removePokemon } = useCart()

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    const pokemonOnCart = JSON.parse(getStoragedItem('@Pokeloja:cart'))

    if (pokemonOnCart !== null && pokemonOnCart.length > 0) {
      const cartSum = pokemonOnCart.reduce((a: Pokemon, b: Pokemon) => ({ price: a.price + b.price * b.amount }))

      setCartTotal(cartSum.price)
    } else {
      setCartTotal(0)
    }
  }, [cart])

  return (
    <Container>
      <div className={isCartOpen ? 'cart active' : 'cart'}>
        <MdClose
          onClick={toggleCart}
          size="30"
          color="black"
        />
        <span className="cart-title">MOCHILA</span>
        <div className="cart-content">
          {
            cart === null
              ? ''
              : cart.map((pokemon) => {
                const nameCapitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

                return (
                  <div key={pokemon.uniquePokemonId} className="cart-item">
                    <Image
                      src={pokemon.pokemonImageURL}
                      width={60}
                      height={60}
                      alt=""
                      unoptimized
                    />
                    <span>
                      {nameCapitalized} x{pokemon.amount}
                    </span>
                    <div className="item-right-container">
                      <span className="item-price">
                        R${pokemon.price},00
                      </span>
                      <div
                        className="trash-icon"
                        onClick={e => removePokemon(pokemon.uniquePokemonId)}
                      >
                        <BsTrash
                          size="15"
                          color="black"
                        />
                      </div>
                    </div>
                  </div>
                )
              })
          }
        </div>
        <div className="cart-resume">
          <div className="cart-amount">
            <span className="amount-title">TOTAL</span>
            <span className="amount-value">R${cartTotal},00</span>
          </div>
          <button className="checkout-button"
            type="button"
            onClick={openModal}
          >
            FINALIZAR
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal de Compra Finalizada"
      >
        Obrigado!!!
      </Modal>
    </Container>
  )
}