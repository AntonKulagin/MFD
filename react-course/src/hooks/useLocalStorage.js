import { useState } from 'react'

function getToken(key) {
  const savedToken = JSON.parse(localStorage.getItem(key))

  if (savedToken) {
    return savedToken
  }
}

export function useLocalStorage(key) {
  const [token, setToken] = useState(() => getToken(key))

  const setItem = (key) => {
    const randomToken = String(new Date())
    localStorage.setItem(key, JSON.stringify(randomToken))
    setToken(randomToken)
  }
  const removeItem = () => {
    localStorage.clear()
    setToken('')
  }
  return [token, { setItem, removeItem }]
}
