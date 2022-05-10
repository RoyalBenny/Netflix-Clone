import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import { Link } from 'react-router-dom'
function Row({ title, fetchURL, isLarge }) {

    const [movies, setMovies] = useState([]);
    const base_url = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchURL])


    return (
        <div>
            <p>{title}</p>
            <div className='rows'>
                <div className='row_posters'>
                    {movies.map((movie) => {
                        if (isLarge) {
                            return (
                                <Link key={movie.id} to={`detail/${movie.id}`} >
                                    <img className='row_poster-trending'  src={`${base_url}${movie.backdrop_path}`} alt={movie.name || movie.original_title} />
                                </Link>)
                        } else {
                            return (
                                <Link key={movie.id} to={`detail/${movie.id}`}>
                                    <img className='row_poster' src={`${base_url}${movie.poster_path}`} alt={movie.name || movie.original_title} />
                                </Link>
                            )
                        }

                        // return (<Link className='link' key={movie.id} to={`detail/${movie.id}`}>
                            
                        //              <img className='row_poster'  src={`${base_url}${movie.backdrop_path}`} alt={movie.name || movie.original_title} />
                            
                        // </Link>)
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default Row