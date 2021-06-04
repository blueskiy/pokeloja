import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { useState, useEffect, useContext } from 'react'
import { useCart } from '../../contexts/CartContext'
import { MyThemeContext } from '../../contexts/ThemeContext'

import { Cart } from '../Cart/index'

import { IconContext } from 'react-icons'
import { GiSchoolBag } from 'react-icons/gi'
import { BsArrowLeft } from 'react-icons/bs'

import { Container } from './styles'
import { SignInButton } from '../SignInButton'

export function Header(props) {
    const [session] = useSession()
    const { persistedTheme } = useContext(MyThemeContext)
    const { cart } = useCart()
    const cartSize = cart.length
    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <Container>
            <IconContext.Provider value={{}}>
                <div className="header-main-content">
                    <h1>Pokéloja | <span>{persistedTheme().title}</span></h1>
                    <Link href="/">
                        <a>
                            <BsArrowLeft color="white" size="17" />
                            Home
                        </a>
                    </Link>
                    <div className="input-container">
                        <input
                            type="text"
                            onChange={e => props.setSearch(e.target.value)}
                            placeholder="busque aqui seu pokemon"
                        />
                    </div>
                    <div className="bag-profile">
                        <span onClick={toggleCart} className="bag-icon">
                            <GiSchoolBag
                                color="white"
                                size="30"
                            />
                            {cartSize > 0 ?
                                <span className="pokemon-count">
                                    {cartSize}
                                </span> : ''
                            }
                        </span>
                        <div className="profile-info">
                            {session ? <img src={session.user.image} alt="profile image" /> : ''}
                            {session ? `Olá, ${session.user.name}` : 'Olá, treinador(a)!'}
                        </div>
                    </div>
                    <SignInButton />
                </div>

                <Cart
                    toggleCart={toggleCart}
                    isCartOpen={isCartOpen}
                    cartPokemon={cart}
                />
            </IconContext.Provider>
        </Container>
    )
}