import './App.css';
import HookLocalStorageComponent from './components/hooksComponents/hookLocalStorageComponent';
import HookToggleComponent from './components/hooksComponents/hookToggleComponent';
import HookHoverComponent from './components/hooksComponents/hookHoverComponent';
import HookWindowScrollComponent from './components/hooksComponents/hookWindowScrollComponent';
import HookViewportComponent from './components/hooksComponents/hookViewportComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookToggleComponent />
        <HookLocalStorageComponent />
        <HookHoverComponent />
        <HookWindowScrollComponent />
        <HookViewportComponent />
      </header>
    </div>
  );
}

export default App;
