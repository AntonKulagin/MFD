import './App.css';
import { useWindowScroll } from './hooks/useWindowScroll';

function App() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Scroll position x: {scroll.x}, y: {scroll.y}
        </p>
        <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
      </header>
    </div>
  );
}

export default App;
