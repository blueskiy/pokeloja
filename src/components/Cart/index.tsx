import Modal from 'react-modal';
import { MdClose } from 'react-icons/md'
import { Pokemon } from '../../interfaces/interfaces'
import { Container } from './styles'
import { useState } from 'react';

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
                                    <span key={pokemon.storeId}>{pokemon.name} x{pokemon.amount}</span>
                                )
                            })
                    }
                </div>
                <button className="checkout-button"
                    type="button"
                    onClick={openModal}
                >
                    FINALIZAR
                </button>
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