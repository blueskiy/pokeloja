import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';

import { MyThemeProvider } from '../contexts/ThemeContext'

const CartProvider = dynamic(
    () => import('../contexts/CartContext'),
    { ssr: false }
)

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)

    const toggleTheme = (theme) => () => {
        setTheme(theme)

        localStorage.setItem('tema', JSON.stringify(theme))
    }

    return (
        <CartProvider>
            <NextAuthProvider session={pageProps.session}>
                <MyThemeProvider value={{ theme, toggleTheme }}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                        <GlobalStyle />
                    </ThemeProvider>
                </MyThemeProvider>
            </NextAuthProvider>
        </CartProvider>
    )
}

export default MyApp
