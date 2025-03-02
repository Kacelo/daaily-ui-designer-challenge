import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchFocusedMovie,
  searchMovies,
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
const useInfiniteMoviesSearch = (query: string, limit: number = LIMIT) => {
  return useInfiniteQuery({
    queryKey: ["movies", query, limit],
    queryFn: async ({ pageParam = 1 }) => searchMovies(query, pageParam, limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: Boolean(query),
  });
};
const useFocusedMovie = (imdbID: string) => {
  return useQuery({
    queryKey: ["movies", imdbID],
    queryFn: () => fetchFocusedMovie(imdbID),
    enabled: Boolean(imdbID),
  });
};

export {
  useFetchInitialMovies,
  useInfiniteMoviesSearch,
  useFocusedMovie,
};
