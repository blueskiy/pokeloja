import Modal from 'react-modal';
import { MdClose } from 'react-icons/md'
import { Pokemon } from '../../interfaces/interfaces'
import { Container } from './styles'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getStoragedItem } from '../../helpers/storage';
import { BsTrash } from 'react-icons/bs';

const customStyles = {
    overlay: {
        zIndex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    // content: {
    //     top: '50%',
    //     left: '50%',
    //     right: 'auto',
    //     bottom: 'auto',
    //     marginRight: '-50%',
    //     transform: 'translate(-50%, -50%)'
    // }
};

Modal.setAppElement('#__next')

interface CartProps {
    isCartOpen: boolean
    toggleCart: () => void
    cart: Pokemon[]
}

export function Cart({ isCartOpen, toggleCart, cart }: CartProps) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const pokemonOnCart = JSON.parse(getStoragedItem('@Pokeloja:cart'))
        console.log(pokemonOnCart)

        if (pokemonOnCart !== null) {
            // const cartSum = pokemonOnCart.reduce((current, next) => {
            //     ({ price: current.price + next.price })
            // })

            const cartSum = pokemonOnCart.reduce((a, b) => ({ price: a.price + b.price }))

            setCartTotal(cartSum.price)
            console.log(cartSum.price)
        }

        // const total = pokemonOnCart.reduce((current, next) => {
        //     current.price + next.price
        // })
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
                                return (
                                    <div key={pokemon.storeId} className="cart-item">
                                        <Image
                                            src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
                                            width={60}
                                            height={60}
                                            alt=""
                                            unoptimized
                                        />
                                        <span>
                                            {pokemon.name} x{pokemon.amount}
                                        </span>
                                        <div className="item-right-container">
                                            <span className="item-price">
                                                R${pokemon.price},00
                                            </span>
                                            <BsTrash
                                                size="15"
                                                color="black"
                                            />
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
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                Obrigado!!!
            </Modal>
        </Container>
    )
}