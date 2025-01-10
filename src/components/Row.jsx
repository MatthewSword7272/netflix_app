import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 500;
  }

  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 500;
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <FaCircleChevronLeft
          size={30}
          onClick={slideLeft}
          className="absolute  rounded-full opacity-50 hover:opacity-100 cursor-pointer z-20 hidden left-3 group-hover:block text-white text-4xl"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>
        <FaCircleChevronRight
            onClick={slideRight}
          size={30}
          className="absolute rounded-full opacity-50 hover:opacity-100 cursor-pointer z-20 hidden right-3 group-hover:block text-white text-4xl"
        />
      </div>
    </div>
  );
};

export default Row;
