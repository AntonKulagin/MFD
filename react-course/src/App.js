import './App.css';
import { useToggle } from './hooks/useToggle';

function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => toggle()}>{value}</button>
      </header>
    </div>
  );
}

export default App;
