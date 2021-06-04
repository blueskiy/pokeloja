import { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { getStoragedItem } from '../../helpers/storage'
import { Pokemon } from '../../interfaces/interfaces'

import { useCart } from '../../contexts/CartContext'

import Modal from 'react-modal'
import { Container, customStyles } from './styles'
import { MdClose } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'

Modal.setAppElement('#__next')

interface CartProps {
  isCartOpen: boolean
  toggleCart: () => void
  cartPokemon: Pokemon[]
}

export function Cart({ isCartOpen, toggleCart, cartPokemon }: CartProps) {
  const [cartTotal, setCartTotal] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const { cart, removePokemon, finalizePurchase } = useCart()
  const cartSize = cart.length

  function toggleModal() {
    setIsOpen(!modalIsOpen)
  }

  function purchasePokemon() {
    toggleModal()
    finalizePurchase()
  }

  useEffect(() => {
    const pokemonOnCart = JSON.parse(getStoragedItem('@Pokeloja:cart'))

    if (pokemonOnCart !== null && pokemonOnCart.length > 0) {
      const cartSum = pokemonOnCart.reduce((a: Pokemon, b: Pokemon) => ({ price: a.price + b.price * b.amount }))

      setCartTotal(cartSum.price)
    } else {
      setCartTotal(0)
    }
  }, [cartPokemon])

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
            cartPokemon === null
              ? ''
              : cartPokemon.map((pokemon) => {
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
                        {
                          nameCapitalized === 'Pidgey'
                            ? 'R$9.999.999,99'
                            : `R$${pokemon.price},00`
                        }
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
          <button
            className={cartSize > 0 ? "checkout-button" : "checkout-button disabled"}
            disabled={cartSize > 0 ? false : true}
            type="button"
            onClick={purchasePokemon}
          >
            FINALIZAR
          </button>
        </div>
      </div>

      <Modal
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Modal de Compra Finalizada"
      >
        Obrigado!!!
      </Modal>
    </Container>
  )
}