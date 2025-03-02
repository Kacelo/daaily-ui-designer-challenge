import React from "react";
import { cn } from "@/lib/utils";
import { MovieSearchResultType } from "@/app/interfaces/movie-interface";

/**
 * A React functional component that displays a movie card with a background image, title, year, and type.
 * 
 * @component
 * @param  props - The properties object containing movie details.
 * @param  props.Title - The title of the movie.
 * @param  props.Year - The release year of the movie.
 * @param  props.Poster - The URL of the movie poster. If the poster is not available, a fallback image is used.
 * @param  props.Type - The type of the movie (e.g., movie, series).
 * 
 * @returns {JSX.Element} A JSX element representing the movie card.
 */
export const MovieGridCard: React.FC<MovieSearchResultType> = ({
  Title,
  Year,
  Poster,
  Type,
}) => {
    const backgroundImage = Poster === "N/A" ? "./fallback-poster.jpg" : Poster;
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4"
        )}
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {Type}
            </p>
            <p className="text-sm text-gray-400"></p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {Title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {Year}
          </p>
        </div>
      </div>
    </div>
  );
};
