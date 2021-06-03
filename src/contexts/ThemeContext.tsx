import { ThemeType } from '../styles/themes/themes'
import { createContext, ReactNode } from 'react'

interface ThemeContextData {
    toggleTheme: (ThemeType: ThemeType) => () => void
    persistedTheme: () => ThemeType
}

export const MyThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
    children: ReactNode
    value: {
        toggleTheme: (ThemeType: ThemeType) => () => void
        persistedTheme: () => ThemeType
    }
}

export function MyThemeProvider({ children, value }: ThemeProviderProps) {
    const { toggleTheme, persistedTheme } = value

    return (
        <MyThemeContext.Provider
            value={{
                toggleTheme,
                persistedTheme
            }}>
            {children}
        </MyThemeContext.Provider>
    )
}