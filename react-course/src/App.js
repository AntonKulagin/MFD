import './App.css';
import HookLocalStorageComponent from './components/hooksComponents/hookLocalStorageComponent';
import HookToggleComponent from './components/hooksComponents/hookToggleComponent';
import { useHover } from './hooks/useHover';

function App() {
  const { hovered, ref } = useHover();
  return (
    <div className="App">
      <header className="App-header">
        <HookToggleComponent />
        <HookLocalStorageComponent />
        <div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>
      </header>
    </div>
  );
}

export default App;
