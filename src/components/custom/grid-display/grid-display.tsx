"use client";
import React from "react";
import { MovieCards } from "../cards/cards";
import { MovieGridInterface } from "@/app/interfaces/movie-grid-interface";
import { useRouter } from "next/navigation";
import { GridMovieSkeleton } from "../skeletons/grid-skeleton";

const GridDisplay: React.FC<MovieGridInterface> = ({
  movies,
  isLoading,
  ref,
}) => {
  const router = useRouter();
  if (isLoading) return <GridMovieSkeleton />;
  if (!movies || movies.length === 0) {
    return (
      <p className="text-gray-500">No movies found. Try a different search.</p>
    );
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-x-2 md:grid-cols-5 lg-grid-cols-6 p-12"
    >
      {movies?.map((movie, index) => (
        <li
          key={index}
          className=""
          onClick={() => router.push(`/view-focused-movie/${movie.imdbID}`)}
        >
          <MovieCards
            Title={movie.Title}
            Year={movie.Year}
            Poster={movie?.Poster}
            imdbID={movie.imdbID}
            Type={movie.Type}
          />
        </li>
      ))}
      <div ref={ref}></div>
    </ul>
  );
};

export default GridDisplay;
