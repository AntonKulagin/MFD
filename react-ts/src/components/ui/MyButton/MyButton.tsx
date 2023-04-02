import {FC, PropsWithChildren} from 'react'
import cl from './myButton.module.css'

interface ButtonProps {
  onClick: () => void
}

export const MyButton: FC<PropsWithChildren<ButtonProps>> = ({children, onClick}) => {
  return (
    <button onClick={onClick} className={cl.button}>
      {children}
    </button>
  )
}
