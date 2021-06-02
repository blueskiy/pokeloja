import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { useContext } from 'react'
import { useCart } from '../../contexts/CartContext'
import { MyThemeContext } from '../../contexts/ThemeContext'

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

    return (
        <Container>
            <div>
                <h1>Pokéloja | <span>{theme.title}</span></h1>
                <input
                    type="text"
                    placeholder="busque aqui seu pokemon"
                />
                <span>
                    <span className="bag-icon">
                        <IconContext.Provider value={{}}>
                            <GiSchoolBag color="white" size="30" />
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
        </Container>
    )
}