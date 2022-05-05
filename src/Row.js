import axios from './axios'
import React, { useEffect, useState } from 'react'

function Row({title,fetchURL}) {

    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        const result = axios.get(fetchURL);
        result.then(
            (data)=>setMovies(data)
        ).catch((error)=>console.log(error))
    },[fetchURL])

    console.table(movies)

  return (
    <div>
        <h2>title</h2>
    </div>
  )
}

export default Row