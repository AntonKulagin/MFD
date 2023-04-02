import {FC, PropsWithChildren} from 'react'
import cl from './taskWrapper.module.css'

export const TaskWrapper: FC<PropsWithChildren> = ({children}) => {
  return <div className={cl.wrapper}>{children}</div>
}
