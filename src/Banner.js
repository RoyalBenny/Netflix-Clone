import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";
import requests from "./request";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncate = (str, n) => {
    if (str.length > n) return str.substr(0, n - 1) + "...";
    return str;
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={
        movie && {
          backgroundSize: "cover",
          backgroundImage: `url(
            "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
        )`,
          backgroundPosition: "center center",
        }
      }
    >
      {/* <div className="banner_iframe" disabled>
      <iframe className="banner_background"
        width="420"
        height="345"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&controls=0"
        
      ></iframe>
      </div> */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.original_title || movie?.name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <div className="banner__description">
          {/* <p>{truncate(movie?.overview,300)}</p> */}
          {movie?.overview && truncate(movie?.overview, 100)}
        </div>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
