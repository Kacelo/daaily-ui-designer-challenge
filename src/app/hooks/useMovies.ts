import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  fetchFocusedMovie,
  searchMovies,
  fetchInitialMovies,
} from "@/api/movies";
import { LIMIT } from "../constants/constants";

/**
 * Custom hook to fetch initial movies based on a query string.
 *
 * @param query - The search query to fetch movies.
 * @returns - The result of the `useQuery` hook, which includes the fetched movies data, loading state, and error state.
 */
const useFetchInitialMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => fetchInitialMovies(query),
    enabled: Boolean(query),
  });
};

/**
 * Custom hook to perform an infinite search for movies based on a query string.
 *
 * @param  query - The search query string.
 * @param   [limit=LIMIT] - The maximum number of results to fetch per page.
 * @returns {UseInfiniteQueryResult} - The result of the infinite query, including data, status, and fetchNextPage function.
 *
 * @example
 * const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteMoviesSearch("Inception");
 *
 * @remarks
 * This hook uses the `useInfiniteQuery` hook from React Query to handle infinite scrolling and pagination.
 * The `queryKey` is composed of the "movies" string, the query, and the limit.
 * The `queryFn` is an asynchronous function that calls `searchMovies` with the query, page parameter, and limit.
 * The `getNextPageParam` function extracts the next page parameter from the last page of results.
 * The query is enabled only if the `query` parameter is truthy.
 */
const useInfiniteMoviesSearch = (query: string, limit: number = LIMIT) => {
  return useInfiniteQuery({
    queryKey: ["movies", query, limit],
    queryFn: async ({ pageParam = 1 }) => searchMovies(query, pageParam, limit),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: Boolean(query),
  });
};

/**
 * Custom hook to fetch and manage the state of a focused movie based on its IMDb ID.
 *
 * @param {string} imdbID - The IMDb ID of the movie to fetch.
 * @returns {object} - The result of the `useQuery` hook, which includes the movie data, loading state, and error state.
 *
 * @example
 * const { data, isLoading, error } = useFocusedMovie("tt0111161");
 */
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
