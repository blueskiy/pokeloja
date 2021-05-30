import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { water, fire, dragon } from '../styles/themes/themes';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={water}>
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MyApp
