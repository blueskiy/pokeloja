import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Provider as NextAuthProvider } from 'next-auth/client'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { water, fire, dragon, ThemeType } from '../styles/themes/themes'

import { MyThemeProvider } from '../contexts/ThemeContext'
import { getStoragedItem, removeItemOnLocalStorage, setItemOnLocalStorage } from '../helpers/storage'

const CartProvider = dynamic(
    () => import('../hooks/useCart'),
    { ssr: false }
)

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)

    const toggleTheme = (theme: ThemeType) => () => {
        setTheme(theme)
        setItemOnLocalStorage('@Pokeloja:tema', JSON.stringify(theme))
        removeItemOnLocalStorage('@Pokemon:list')
    }

    const persistedTheme = () => {
        if (getStoragedItem('@Pokeloja:tema')) {
            const typeTheme = JSON.parse(getStoragedItem('@Pokeloja:tema'))
            return typeTheme
        }

        return water
    }

    return (
        <NextAuthProvider session={pageProps.session}>
            <MyThemeProvider value={{ toggleTheme, persistedTheme }}>
                <CartProvider>
                    <ThemeProvider theme={persistedTheme}>
                        <Component {...pageProps} />
                        <GlobalStyle />
                    </ThemeProvider>
                </CartProvider>
            </MyThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
