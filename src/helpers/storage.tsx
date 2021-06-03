export const getStoragedItem = (name: string) => {
    if (!window || !window.localStorage) {
        return null
    }

    return localStorage.getItem(name)
}

export const setItemOnLocalStorage = (name: string, value: string) => {
    if (!window || !window.localStorage) {
        return null
    }

    localStorage.setItem(name, value)
}

export const removeItemOnLocalStorage = (name: string) => {
    if (!window || !window.localStorage) {
        return null
    }

    localStorage.removeItem(name)
}