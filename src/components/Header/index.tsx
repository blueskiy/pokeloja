import Link from 'next/link'
import { useSession } from 'next-auth/client'
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
                    {session ? <img src={session.user.image} alt="profile image" /> : ''}
                    {session ? `Bem-vindo, ${session.user.name}` : 'Bem-vindo, treinador!'}
                </span>

                <SignInButton />
            </div>

            <Link href="/">
                <a>Home</a>
            </Link>
        </Container>
    )
}