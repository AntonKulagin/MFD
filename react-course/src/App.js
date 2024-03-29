import './App.css'
import {HookLocalStorageComponent} from './components/hooksComponents/hookLocalStorageComponent'
import {HookToggleComponent} from './components/hooksComponents/hookToggleComponent'
import {HookHoverComponent} from './components/hooksComponents/hookHoverComponent'
import {HookWindowScrollComponent} from './components/hooksComponents/hookWindowScrollComponent'
import {HookViewportComponent} from './components/hooksComponents/hookViewportComponent'
import {Login} from './components/authComponents/Login'
import {HookFetch} from './components/hooksComponents/hookFetch'

export function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Login />
        <HookToggleComponent />
        <HookLocalStorageComponent />
        <HookHoverComponent />
        <HookWindowScrollComponent />
        <HookViewportComponent />
        <HookFetch />
      </header>
    </div>
  )
}
