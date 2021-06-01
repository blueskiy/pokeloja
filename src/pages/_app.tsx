import { useContext } from 'react'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';

import { ThemeContext } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
    const { theme } = useContext(ThemeContext)

    return (
        <NextAuthProvider session={pageProps.session}>
            <ThemeProvider theme={water}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
