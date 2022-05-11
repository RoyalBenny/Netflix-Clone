import React from 'react'
import Banner from './Banner'
import Row from './Row'
import request from './request';
import Nav from './Nav';


function Home() {
    return (
        <>     
        {localStorage.getItem("isLoggedIn") === 'true' && < Nav />}
            <Banner />
            <div className='rows'>
                <Row title='Trending' fetchURL={request.fetchTrending} isLarge isLinkAvilable/>
                <Row title='Netflix Originals' fetchURL={request.fetchNetflixOriginals} isLinkAvilable/>
                <Row title='Top Rated' fetchURL={request.fetchTopRated} isLinkAvilable/>
                <Row title='Action Movies' fetchURL={request.fetchActionMovies} isLinkAvilable />
                <Row title='Horror Movies' fetchURL={request.fetchHorrorMovies} isLinkAvilable/>
                <Row title='Romance Movies' fetchURL={request.fetchRomanceMovies} isLinkAvilable/>
                <Row title='Documentaries' fetchURL={request.fetchDocumentaries} isLinkAvilable/>
            </div>
        </>
    )
}

export default Home