import axios from './axios'
import React, { useEffect, useState } from 'react'

function Row({title,fetchURL}) {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(fetchURL)
        setMovies(request.data.results)
  
      }
        fetchData()
    },[fetchURL])

    console.log(movies)

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export default Row