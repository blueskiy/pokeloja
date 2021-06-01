import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';
import { Provider as NextAuthProvider } from 'next-auth/client'
import { useState } from 'react';
// import ThemeContext from '../contexts/theme';

function MyApp({ Component, pageProps }) {
    const [theme, setTheme] = useState(water)
    // const [type, setType] = useState('qualquer')

    // const choseTheme = (type) => {
    //     setType(type)
    // }

    return (
        <NextAuthProvider session={pageProps.session}>
            <ThemeProvider theme={theme}>
                {/* <ThemeContext.Provider value={{value: type, update:choseTheme}}> */}
                    <Component {...pageProps} />
                    <GlobalStyle />
                {/* </ThemeContext.Provider> */}
            </ThemeProvider>
        </NextAuthProvider>
    )
}

export default MyApp
