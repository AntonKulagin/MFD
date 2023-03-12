import './App.css';
import HookLocalStorageComponent from './components/hooksComponents/hookLocalStorageComponent';
import HookToggleComponent from './components/hooksComponents/hookToggleComponent';
import HookHoverComponent from './components/hooksComponents/hookHoverComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookToggleComponent />
        <HookLocalStorageComponent />
        <HookHoverComponent />
      </header>
    </div>
  );
}

export default App;
