import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../axios'
import '../DetailPage/DetailPage.css'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsFillPauseFill } from 'react-icons/bs'
import { BsPlusLg } from 'react-icons/bs'
import Row from '../Row'
import request from '../request'
import Nav from '../Nav'

function DetailPage() {
  const { id } = useParams()
  console.log(id)
  const [movie, setMovie] = useState([])
  const API_KEY = '062c01389274694ba2cfedd0a137130a';
  const truncate = (str, n) => {
    if (str.length > n) return str.substr(0, n - 1) + "...";
    return str;
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${id}?api_key=${API_KEY}`).then((data) => {
        console.log(data.data)
        setMovie(
          data.data
        )
      })
      return request
    }
    fetchData()
  }, [])
  console.log(movie)
  return (
    <div>
              {localStorage.getItem("isLoggedIn") === 'true' && < Nav />}
      <header
        className="poster"
        style={
          movie && {
            backgroundSize: "cover",
            backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path}" 
        )`,
            backgroundPosition: "center center",
          }
        }
      >
        <div className='poster--fadeLeft'>

          <h1 className='movie-detial-name'>
            {movie?.title}
          </h1>
          <h5 className='movie-detail-name-h5'>
            {movie?.title}
          </h5>
          <p className='movie-detail-properties'>
            {`${movie?.release_date && movie?.release_date.split('-')[0]} | ${movie?.adult ? '18+' : '13+'} | ${Math.floor(movie?.runtime / 60) + 'h ' + movie?.runtime % 60 + 'm'} | Rating: ${movie?.vote_average}`}
          </p>
          <div className="movie__description">
            {/* <p>{truncate(movie?.overview,300)}</p> */}
            {movie?.overview && truncate(movie?.overview, 100)}
          </div>
          <div>
            <div className='play-button'>
              <p>
                <BsFillPlayFill style={{ paddingTop: '1px' }} /> Start From Beginning
              </p>
            </div>
            <div className='play-button'>
              <p>
                <BsFillPauseFill style={{ paddingTop: '1px' }} /> Play Continune
              </p>
              {movie?.runtime &&
                <div className="progress" style={{ width: '10rem', marginLeft: '10px', marginTop: '2px' }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${(movie?.runtime / 100) * 30}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">{(movie?.runtime / 100) * 30}%</div>
                </div>
              }
            </div>
            <div className='play-button'>
              <p>
                <BsPlusLg style={{ paddingTop: '1px' }} /> Add To Wishlist
              </p>
            </div>
          </div>
        </div>
      </header>
      <Row title='Action Movies' fetchURL={request.fetchActionMovies} />
      <Row title='Comdey Movies' fetchURL={request.fetchComedyMovies} />
    </div>
  )
}

export default DetailPage