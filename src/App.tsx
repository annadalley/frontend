import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Spencer's React Website" />
      <MovieList />
    </div>
  );
}

export default App;
