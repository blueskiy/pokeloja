export type ThemeType = typeof water;

export const water = {
    title: 'water',
    colors: {
        primary: '#0433ff',
        secundary: '#76b2ff'
    },
}

export const fire: ThemeType = {
    title: 'fire',
    colors: {
        primary: '#e60014',
        secundary: '#fad70a'
    },
}

export const dragon: ThemeType = {
    title: 'dragon',
    colors: {
        primary: '#4D1D78',
        secundary: '#d25aba'
    },
}

const theme = water;
export default theme;