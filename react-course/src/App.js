import './App.css';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');
  return (
    <div className="App">
      <header className="App-header">
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
