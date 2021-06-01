import { useState } from 'react'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';

import { MyThemeProvider, MyThemeContext } from '../contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)

    const toggleTheme = (theme) => () => {
        setTheme(theme)
    }

    return (
        <NextAuthProvider session={pageProps.session}>
            <MyThemeProvider value={{ theme, toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                    <GlobalStyle />
                </ThemeProvider>
            </MyThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
