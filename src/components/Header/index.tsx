import Link from 'next/link'
import { useSession } from 'next-auth/client'

import { IconContext } from 'react-icons'
import { GiSchoolBag } from 'react-icons/gi'
import { BsArrowLeft } from 'react-icons/bs'

import { SignInButton } from '../SignInButton'
import { Container } from './styles'

export function Header() {
    const [session] = useSession()

    return (
        <Container>
            <div>
                <h1>Pokéloja | <span>Água</span></h1>

                <input
                    type="text"
                    placeholder="busque aqui seu pokemon"
                />

                <span>
                    <span className="bag-icon">
                        <IconContext.Provider value={{ color: "white", size:"30" }}>
                            <GiSchoolBag />
                        </IconContext.Provider>
                    </span>
                    {session ? <img src={session.user.image} alt="profile image" /> : ''}
                    {session ? `Olá, ${session.user.name}` : 'Olá, treinador(a)!'}
                </span>

                <SignInButton />
            </div>

            <Link href="/">
                <a>
                    <IconContext.Provider value={{ color: "white", size:"17" }}>
                        <BsArrowLeft />
                    </IconContext.Provider>
                    Home
                </a>
            </Link>
        </Container>
    )
}