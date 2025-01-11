import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import Button from "./Button";

const Main = () => {
  const [movies, setMovies] = useState([]);

  // Get Random Movie
  const movie = movies[Math.floor(Math.random() * movies.length - 1)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncate = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  }

  return (
    <div className="w-full h-[35rem]">
      <div className="w-full h-full">
        <div className=" absolute w-full h-[35rem] bg-gradient-to-r from-black"></div>
        <img
            className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold">{movie?.title}</h1>
            <div className="flex gap-3 my-4">
                <Button buttonText={'Play'} variant="lightGray"></Button>
                <Button buttonText={'Watch Later'} variant="blackBorder"></Button>
            </div>
            <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
            <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
