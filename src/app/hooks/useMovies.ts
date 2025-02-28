import { useQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/movie-interface";
const API_KEY = process.env.API_KEY;
const fetchMovies = async (limit = 10): Promise<Array<Movie>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=81145613`
  );
  const data = await response.json();
  console.log("Data:", data);
  return data.filter((x: Movie, index: number) => index <= limit);
};
console.log("api key", API_KEY);
const searchMovies = async (
  limit = 10,
  title: string
): Promise<Array<Movie>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${title}&apikey=81145613`
  );
  const data = await response.json();
  console.log(data);

  return data.filter((x: Movie, index: number) => index <= limit);
};
const useMovies = (limit: number) => {
  return useQuery({
    queryKey: ["movies", limit],
    queryFn: () => fetchMovies(limit),
  });
};
const useMovieSearch2 = (limit: number, title: string) => {
  console.log("Tite", title);
  return useQuery({
    queryKey: ["movies", title],
    queryFn: () => searchMovies(limit, title),
  });
};

export { useMovies, fetchMovies, useMovieSearch2, searchMovies };
