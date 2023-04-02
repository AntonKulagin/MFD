import {useState} from 'react'

interface IFunc {
  setItem: (value: string) => void
  removeItem: () => void
}

export const useLocalStorage = (key: string): [string | null, IFunc] => {
  const [value, setValue] = useState(() => localStorage.getItem(key) || null)

  const setItem = (value: string) => {
    setValue(value)
    localStorage.setItem(key, value)
  }

  const removeItem = () => {
    setValue(null)
    localStorage.removeItem(key)
  }

  return [value, {setItem, removeItem}]
}
