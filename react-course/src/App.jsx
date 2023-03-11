import './App.css';
import { useFetch } from './hooks/useFetch';

function App() {
  const { data, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => refetch({ params: { _limit: 3 } })}>Перезапросить</button>
        </div>
        {isLoading && <span style={{ color: 'greenyellow' }}>Загрузка...</span>}
        {error && <span style={{ color: 'red' }}>Произошла ошибка</span>}
        {data && !isLoading && data.map((item) => <div key={item.id}>{item.title}</div>)}
      </header>
    </div>
  );
}

export default App;
