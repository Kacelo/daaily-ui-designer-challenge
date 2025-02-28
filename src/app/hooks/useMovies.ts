import { useQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/movie-interface";
import { searchMovies } from "@/api/movies";
const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const fetchMovies = async (limit = 10): Promise<Array<Movie>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=81145613`
  );
  const data = await response.json();
  console.log("Data:", data);
  return data.filter((x: Movie, index: number) => index <= limit);
};
console.log("api key", API_KEY);
const useMovies = (limit: number) => {
  return useQuery({
    queryKey: ["movies", limit],
    queryFn: () => fetchMovies(limit),
  });
};
const useMovieSearch = (limit: number, query: string) => {
  console.log("Tite", query);
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => searchMovies(limit, query),
    enabled: Boolean(query)
  });
};

export { useMovies, fetchMovies, useMovieSearch, searchMovies };
