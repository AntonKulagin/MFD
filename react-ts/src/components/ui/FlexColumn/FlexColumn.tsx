import {FC, PropsWithChildren} from 'react'
import cl from './flexColumn.module.css'

export const FlexColumn: FC<PropsWithChildren> = ({children}) => {
  return <div className={cl.flexColumn}>{children}</div>
}
