import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Movie } from "../interfaces/movie-interface";
import { searchFilms, searchMovies } from "@/api/movies";
import { LIMIT } from "../constants/constants";
// const API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const fetchMovies = async (limit = 10): Promise<Array<Movie>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=81145613`
  );
  const data = await response.json();
  return data.filter((x: Movie, index: number) => index <= limit);
};
const useMovies = (limit: number) => {
  return useQuery({
    queryKey: ["movies", limit],
    queryFn: () => fetchMovies(limit),
  });
};
const useMovieSearch = (limit: number, query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => searchMovies(limit, query),
    enabled: Boolean(query),
  });
};
const useMovieInfiniteSearchScroll = (query: string, limit: number = LIMIT) => {
  return useInfiniteQuery({
    queryKey: ["movies", query, limit],
    queryFn: async ({pageParam = 1}) => searchFilms(query, pageParam, limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export { useMovies, fetchMovies, useMovieSearch, searchMovies, useMovieInfiniteSearchScroll };

