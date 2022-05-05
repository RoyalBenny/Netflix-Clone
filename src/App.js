import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className='app'>
      <h1>
        Hello Netflix!
      </h1>
      <div className='rows'>
        <Row title='Trending' fetchURL={request.fetchTrending} isLarge />
        <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} />
        <Row title='Top Rated' fetchURL={request.fetchTopRated} />
        <Row title='Action Movies' fetchURL={request.fetchActionMovies} />
        <Row title='Comdey Movies' fetchURL={request.fetchComedyMovies} />
        <Row title='Horror Movies' fetchURL={request.fetchHorrorMovies} />
        <Row title='Romance Movies' fetchURL={request.fetchRomanceMovies} />
        <Row title='Documentaries' fetchURL={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
