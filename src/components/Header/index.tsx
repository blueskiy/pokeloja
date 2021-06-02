import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { useState, useEffect, useContext } from 'react'
import { useCart } from '../../contexts/CartContext'
import { MyThemeContext } from '../../contexts/ThemeContext'

// import { setCookie } from 'nookies'

import { Cart } from '../Cart/index'

import { IconContext } from 'react-icons'
import { GiSchoolBag } from 'react-icons/gi'
import { BsArrowLeft } from 'react-icons/bs'

import { Container } from './styles'
import { SignInButton } from '../SignInButton'

export function Header() {
    const [session] = useSession()
    const { theme } = useContext(MyThemeContext)

    const { cart } = useCart()
    const cartSize = cart.length

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [uniquePokemonAmount, setUniquePokemonAmount] = useState([])

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
        setUniquePokemonAmount(JSON.parse(localStorage.getItem('@Pokeloja:cart')))
        console.log('esse cara aqui', uniquePokemonAmount)
    }

    return (
        <Container>
            <div className="header-main-content">
                <h1>Pokéloja | <span>{theme.title}</span></h1>
                <input
                    type="text"
                    placeholder="busque aqui seu pokemon"
                />
                <span>
                    <span className="bag-icon">
                        <IconContext.Provider value={{}}>
                            <GiSchoolBag
                                onClick={toggleCart}
                                color="white"
                                size="30"
                            />
                        </IconContext.Provider>
                        <span className="pokemon-count">
                            {true ? `${cartSize}` : ''}
                        </span>
                    </span>
                    {session ? <img src={session.user.image} alt="profile image" /> : ''}
                    {session ? `Olá, ${session.user.name}` : 'Olá, treinador(a)!'}
                </span>
                <SignInButton />
            </div>
            <Link href="/">
                <a>
                    <IconContext.Provider value={{}}>
                        <BsArrowLeft color="white" size="17" />
                    </IconContext.Provider>
                    Home
                </a>
            </Link>

            <Cart
                toggleCart={toggleCart}
                isCartOpen={isCartOpen}
                uniquePokemonAmount={uniquePokemonAmount}
            />
        </Container>
    )
}