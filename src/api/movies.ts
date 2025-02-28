import { Movie } from "@/app/interfaces/movie-interface";
import { useEffect, useState } from "react";

const searchMovies = async (title: string): Promise<Array<Movie>> => {
//   const [movies, setMovies] = useState<Promise<Array<Movie>>>();

  const response = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=81145613`
  );
  const data = await response.json();
  console.log("data in search function",data);

  return data;
};

export { searchMovies };
