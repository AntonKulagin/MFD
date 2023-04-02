import './App.css'
import {FC} from 'react'
import {HookFetch} from './components/hooksComponents/HookFetch'
import {HookLocalStorage} from './components/hooksComponents/HookLocalStorage'
import {HookHover} from './components/hooksComponents/HookHover'
import {HookViewportSize} from './components/hooksComponents/HookViewportSize'
import {HookWindowScroll} from './components/hooksComponents/HookWindowScroll'
import {HookToggle} from './components/hooksComponents/HookToggle'

export const App: FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <HookToggle />
        <HookWindowScroll />
        <HookViewportSize />
        <HookHover />
        <HookLocalStorage />
        <HookFetch />
      </header>
    </div>
  )
}
