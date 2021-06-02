export const getStoragedItem = (name: string) => {
    if (!window || !window.localStorage) {
        return null
    }

    return localStorage.getItem(name)
}

export const setItemOnLocalStorage = (name, value) => {
    if (!window || !window.localStorage) {
        return null
    }

    localStorage.setItem(name, value)
}