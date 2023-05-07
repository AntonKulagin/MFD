import './App.css'
import {HookLocalStorageComponent} from './components/hooksComponents/hookLocalStorageComponent'
import {HookToggleComponent} from './components/hooksComponents/hookToggleComponent'
import {HookHoverComponent} from './components/hooksComponents/hookHoverComponent'
import {HookWindowScrollComponent} from './components/hooksComponents/hookWindowScrollComponent'
import {HookViewportComponent} from './components/hooksComponents/hookViewportComponent'
import {Login} from './components/authComponents/Login'
import {HookFetch} from './components/hooksComponents/hookFetch'
import {RouterTask} from './components/routerDomComponents/RouterTask'
import {AuthProvider} from './components/routerDomComponents/context/AuthProvider'

export function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AuthProvider>
          <RouterTask />
        </AuthProvider>
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