import { signIn, signOut, useSession } from 'next-auth/client'
import { SignInButtonStyled } from './styles'

export function SignInButton() {
    const [session] = useSession()
    console.log(session)

    return session ? (
        <SignInButtonStyled
            onClick={() => signOut()}
        >
            Sign out
        </SignInButtonStyled>
    ) : (
        <SignInButtonStyled
            onClick={() => signIn('github')}
        >
            Sign in with GitHub
        </SignInButtonStyled>
    )
}