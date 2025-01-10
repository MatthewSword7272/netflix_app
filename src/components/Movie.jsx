import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);

  return (
    <>
      <div className="w-40 sm:w-[200px] md:w-60 lg:w-[280px] inline-block cursor-pointer relative p-2">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 transition-opacity">
          <p className="text-white text-center whitespace-normal text-sm font-bold flex justify-center items-center z-10 h-full">
            {movie?.title}
          </p>
          <p>
            {like ? (
              <FaHeart
                onClick={(e) => {
                  setLike(!like);
                }}
                className="text-gray-300 absolute top-4 left-4"
              />
            ) : (
              <FaRegHeart
                onClick={(e) => {
                  setLike(!like);
                }}
                className="text-gray-300 absolute top-4 left-4"
              />
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;
