import {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {
  const [userEmail, setUserEmail] = useState(() => localStorage.getItem('userEmail') || null)

  const signin = (newUserEmail, callback) => {
    setUserEmail(newUserEmail)
    localStorage.setItem('userEmail', newUserEmail)
    callback()
  }

  const signout = (callback) => {
    setUserEmail(null)
    localStorage.removeItem('userEmail')
    callback()
  }

  const value = {
    userEmail,
    signin,
    signout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
