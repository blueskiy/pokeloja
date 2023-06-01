import { Dispatch, useEffect, useState } from 'react'
import Image from 'next/image'
import { getStoragedItem } from '../../helpers/storage'

import { useCart } from '../../hooks/useCart'

import Modal from 'react-modal'
import { Container, customStyles } from './styles'
import { MdClose } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

Modal.setAppElement('#__next')

interface CartProps {
  toggleCart: () => void
  isCartOpen: boolean
  setIsCartOpen: Dispatch<React.SetStateAction<boolean>>
}

export const Cart = ({ toggleCart, isCartOpen, setIsCartOpen }: CartProps) => {
  const [cartTotal, setCartTotal] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false)

  const {
    cart,
    removePokemon,
    finalizePurchase,
    handlePokemonIncrement,
    handlePokemonDecrement
  } = useCart()
  const cartSize = cart.length

  const toggleModal = () => {
    setIsOpen(!modalIsOpen)
  }

  const autoCloseModal = () => {
    setTimeout(() => {
      setIsOpen(!modalIsOpen)
      setIsCartOpen(false)
    }, 2200);
  }

  const purchasePokemon = () => {
    toggleModal()
    finalizePurchase()
  }

  useEffect(() => {
    const pokemonOnCart = JSON.parse(getStoragedItem('@Pokeloja:cart'))

    if (pokemonOnCart !== null && pokemonOnCart.length > 0) {
      let total = 0
      pokemonOnCart.forEach((pokemon) => {
        total = total + pokemon.price
      })

      setCartTotal(total)
    } else {
      setCartTotal(0)
    }
  }, [cart, cart.map(pokemon => pokemon.amount)])

  useEffect(() => {
    if (window.innerWidth > 768) {
      return
    }

    isCartOpen === true
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'
  }, [isCartOpen])

  return (
    <Container className={isCartOpen ? 'cart-container active' : 'cart-cotainer'}>
      <div className="cart">
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
                      <div className="cart-handles">
                        <div className="quantity-handles">
                          <div>
                            <IoIosArrowUp
                              size="15"
                              color="black"
                              onClick={() => handlePokemonIncrement(pokemon.uniquePokemonId)}
                            />
                          </div>
                          <div>
                            <IoIosArrowDown
                              size="15"
                              color="black"
                              onClick={() => handlePokemonDecrement(pokemon.uniquePokemonId)}
                            />
                          </div>
                        </div>
                        <div
                          className="trash-icon"
                          onClick={() => removePokemon(pokemon.uniquePokemonId)}
                        >
                          <BsTrash
                            size="15"
                            color="black"
                          />
                        </div>
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
        onAfterOpen={autoCloseModal}
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customStyles}
        contentLabel="Modal de Compra Finalizada"
      >
        Muito obrigado, treinador! Boa sorte em sua jornada!
      </Modal>
    </Container>
  )
}