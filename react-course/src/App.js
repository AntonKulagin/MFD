import './App.css';
import { useToggle } from './hooks/useToggle';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);
  
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => toggle()}>{value}</button>

        <p>Твой токен: {token}</p>
        <div>
          <button onClick={() => setItem('token')}>Задать токен</button>
          <button onClick={() => removeItem()}>Удалить токен</button>
        </div>

      </header>
    </div>
  );
}

export default App;
