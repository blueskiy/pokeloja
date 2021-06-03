export type ThemeType = typeof water

export const water = {
    storageKey: 'AGUA',
    title: 'Água',
    colors: {
        primary: '#0433ff',
        secundary: '#76b2ff'
    },
}

export const fire: ThemeType = {
    storageKey: 'FOGO',
    title: 'Fogo',
    colors: {
        primary: '#e60014',
        secundary: '#fad70a'
    },
}

export const dragon: ThemeType = {
    storageKey: 'DRAGAO',
    title: 'Dragão',
    colors: {
        primary: '#4D1D78',
        secundary: '#d25aba'
    },
}

const theme = water
export default theme