import {useState} from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        let item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
    });

    const setValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value))
        setStoredValue(value)
    }
    return [storedValue, setValue]
}

