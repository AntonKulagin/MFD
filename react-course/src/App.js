import './App.css';
import HookLocalStorageComponent from './components/hooksComponents/hookLocalStorageComponent';
import HookToggleComponent from './components/hooksComponents/hookToggleComponent';
import HookHoverComponent from './components/hooksComponents/hookHoverComponent';
import HookWindowScrollComponent from './components/hooksComponents/hookWindowScrollComponent';
import HookViewportComponent from './components/hooksComponents/hookViewportComponent';
import HookFetch from './components/hooksComponents/hookFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookToggleComponent />
        <HookLocalStorageComponent />
        <HookHoverComponent />
        <HookWindowScrollComponent />
        <HookViewportComponent />
        <HookFetch />
      </header>
    </div>
  );
}

export default App;
