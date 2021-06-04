export type ThemeType = typeof water

export const water = {
    storageKey: 'AGUA',
    title: 'Água',
    colors: {
        primary: '#0433ff',
        secundary: '#76b2ff',
        buttonBackground: '#33237e'
    },
}

export const fire: ThemeType = {
    storageKey: 'FOGO',
    title: 'Fogo',
    colors: {
        primary: '#e60014',
        secundary: '#fad70a',
        buttonBackground: '#F24A0C'
    },
}

export const grass: ThemeType = {
    storageKey: 'PLANTA',
    title: 'Planta',
    colors: {
        primary: '#409e71',
        secundary: '#68ebac',
        buttonBackground: '#3EA2AB'
    },
}

export const flying: ThemeType = {
    storageKey: 'VOADOR',
    title: 'Voador',
    colors: {
        primary: '#1d97bd',
        secundary: '#39d1ff',
        buttonBackground: '#1440C9'
    },
}

export const fighting: ThemeType = {
    storageKey: 'LUTADOR',
    title: 'Lutador',
    colors: {
        primary: '#75482d',
        secundary: '#c27e54',
        buttonBackground: '#82332B'
    },
}

export const dragon: ThemeType = {
    storageKey: 'DRAGAO',
    title: 'Dragão',
    colors: {
        primary: '#4D1D78',
        secundary: '#d25aba',
        buttonBackground: '#851977'
    },
}

const theme = water
export default theme