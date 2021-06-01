import { ThemeType } from '../styles/themes/themes';
import { createContext, useState, ReactNode } from 'react';
import { water, fire, dragon } from '../styles/themes/themes';

interface ThemeContextData {
    theme: ThemeType
    setTheme: ({ }: ThemeType) => void
}

export const ThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState(water)

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}>
            {children}
        </ThemeContext.Provider>
    )
}