import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';
import { Provider as NextAuthProvider } from 'next-auth/client'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)

    // const choseTheme = () => {}

    return (
        <NextAuthProvider session={pageProps.session}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
                <GlobalStyle />
            </ThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
