import './App.css';
import Nav from './components/Nav/Nav';
import TopBanner from './Blah';
import MovieList from './Movies';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <TopBanner saying="Joel Hilton's Movie Collection" />
        <MovieList />
      </div>
    </>
  );
}

export default App;
