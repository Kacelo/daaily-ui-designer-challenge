import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchFocusedMovie,
  searchFilms,
  fetchInitialMovies,
} from "@/api/movies";
import { LIMIT } from "../constants/constants";

const useFetchInitialMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => fetchInitialMovies(query),
    enabled: Boolean(query),
  });
};
const useMovieInfiniteSearchScroll = (query: string, limit: number = LIMIT) => {
  return useInfiniteQuery({
    queryKey: ["movies", query, limit],
    queryFn: async ({ pageParam = 1 }) => searchFilms(query, pageParam, limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: Boolean(query),
  });
};
const useFetchFocusedMovie = (imdbID: string) => {
  return useQuery({
    queryKey: ["movies", imdbID],
    queryFn: () => fetchFocusedMovie(imdbID),
    enabled: Boolean(imdbID),
  });
};

export {
  useFetchInitialMovies,
  useMovieInfiniteSearchScroll,
  useFetchFocusedMovie,
};
