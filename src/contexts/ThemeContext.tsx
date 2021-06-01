import { ThemeType } from '../styles/themes/themes';
import { createContext, ReactNode } from 'react';

interface ThemeContextData {
    theme: ThemeType
    toggleTheme: (ThemeType) => () => void
}

export const MyThemeContext = createContext({} as ThemeContextData)

interface ThemeProviderProps {
    children: ReactNode
    value: {
        theme: ThemeType
        toggleTheme: (ThemeType) => () => void
    }
}

export function MyThemeProvider({ children, value }: ThemeProviderProps) {
    const { theme, toggleTheme } = value

    return (
        <MyThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}>
            {children}
        </MyThemeContext.Provider>
    )
}