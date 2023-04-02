import {FC, PropsWithChildren} from 'react'
import cl from './title.module.css'

export const Title: FC<PropsWithChildren> = ({children}) => {
  return <div className={cl.title}>{children}</div>
}
