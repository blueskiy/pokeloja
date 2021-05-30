import { useSession } from 'next-auth/client'
import { SignInButton } from '../SignInButton'
import { Container } from './styles'

export function Searchbar() {
    const [session] = useSession()

    return (
        <Container>
            <h1>Pokéloja | Água</h1>

            <input
                type="text"
                placeholder="busque aqui seu pokemon"
            />

            <span>
                {session ? `Bem-vindo, ${session.user.name}` : 'Bem-vindo, treinador!'}
            </span>

            <SignInButton />
        </Container>
    )
}