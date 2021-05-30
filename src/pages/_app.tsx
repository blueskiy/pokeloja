import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
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
