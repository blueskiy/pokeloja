import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';

import { MyThemeProvider } from '../contexts/ThemeContext'
import { setItemOnLocalStorage } from '../helpers/storage';

const CartProvider = dynamic(
    () => import('../contexts/CartContext'),
    { ssr: false }
)

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)

    const toggleTheme = (theme) => () => {
        setTheme(theme)

        setItemOnLocalStorage('tema', JSON.stringify(theme))
    }

    return (
        <NextAuthProvider session={pageProps.session}>
            <MyThemeProvider value={{ theme, toggleTheme }}>
                <ThemeProvider theme={theme}>
                    <CartProvider>
                        <Component {...pageProps} />
                        <GlobalStyle />
                    </CartProvider>
                </ThemeProvider>
            </MyThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
