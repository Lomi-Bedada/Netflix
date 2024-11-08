import "./banner.css";

import React, { useEffect, useState } from "react";

import axios from "../../utils/axios";
import requests from "../../utils/requests";

const Banner = () => {
  const [movie, setmovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(requests.fetchTopRatedMovies);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        console.log(request);
        setmovie(request.data.results[randomIndex]);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run once on mount

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">{movie?.title || movie?.name}</h1>
        {/* <h1 className="banner_description">{movie?.overview}</h1> */}
        <a
          href={`https://www.themoviedb.org/movie/${movie?.id}`}
          className="banner_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="banner_button">
            <button className="banner_button_player">play</button>
            <button className="banner_button_info">my list</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 120)}
          </h1>
        </a>
      </div>
      <div className="banner_fadebotton"></div>
    </header>
  );
};

export default Banner;
