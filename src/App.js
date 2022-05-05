import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner';
function App() {
  return (
    <div className='app'>
      <Banner fetchURL={request.fettchNetflixOriginals}/>
      <h1>
        Hello Netflix!
      </h1>
      <Row title='Trending' fetchURL = {request.fetchTrending} />
    </div>
  );
}

export default App;
