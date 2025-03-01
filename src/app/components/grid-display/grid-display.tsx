import React from "react";
import { Cards } from "../cards/cards";
import { MovieGridInterface } from "@/app/interfaces/movie-grid-interface";

const GridDisplay: React.FC<MovieGridInterface> = ({ movies, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg-grid-cols-4 xl:gap-x-8"
    >
      {movies?.map((movie, index) => (
        <li key={index} className="relative">
          <Cards
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie?.Poster}
            imdbID={movie.imdbID}
            Type={movie.Type}
          />
        </li>
      ))}
    </ul>
  );
};

export default GridDisplay;
