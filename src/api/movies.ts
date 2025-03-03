"use client";
import { LIMIT } from "@/app/constants/constants";
import { Movie, MovieSearchResultType } from "@/app/interfaces/movie-interface";
import { API_KEY, BASE_URL } from "@/config/env";

/**
 * Fetches the initial list of movies based on the search query.
 *
 * @param query - The search query string to find movies.
 * @param limit - The maximum number of movies to return (default is LIMIT).
 * @returns A promise that resolves to an array of MovieSearchResultType.
 * @throws Will throw an error if the API request fails or if no movies are found.
 */
const fetchInitialMovies = async (
  query: string,
  limit = LIMIT
): Promise<Array<MovieSearchResultType>> => {
  const response = await fetch(
    `${BASE_URL}?s=${query}&apikey=${API_KEY}`
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }
  if (data.Response === "True" && data.Search) {
    return data.Search.slice(0, limit);
  }
  return [];
};
/**
 * Searches for movies based on a query string.
 *
 * @param query - The search query string.
 * @param pageParam - The page number for pagination (optional).
 * @param limit - The number of results to return per page (default is LIMIT).
 * @returns A promise that resolves to an object containing:
 * - `data`: An array of movie search results.
 * - `currentPage`: The current page number.
 * - `nextPage`: The next page number, or null if there are no more pages.
 * @throws Will throw an error if the API request fails or if no movies are found.
 */
export const searchMovies = async (
  query: string,
  pageParam: number = 1,
  limit: number = LIMIT
): Promise<{
  data: MovieSearchResultType[];
  currentPage: number;
  nextPage: number | null;
}> => {
  const response = await fetch(
    `${BASE_URL}?s=${query}&apikey=${API_KEY}&page=${pageParam}`
  );
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  const data = await response.json();
  if (data.Response === "True" && data.Search && pageParam) {
    return {
      data: data.Search.slice(pageParam, pageParam + limit),
      currentPage: pageParam,
      nextPage: data.totalResults > pageParam * limit ? pageParam + 1 : null,
    };
  }
  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }
  return {
    data: [],
    currentPage: 0,
    nextPage: 0,
  };
};
/**
 * Fetches detailed information about a movie from the API using the provided IMDb ID.
 *
 * @param {string} imdbID - The IMDb ID of the movie to fetch.
 * @returns {Promise<Movie>} A promise that resolves to the movie details.
 * @throws {Error} If the API request fails or the movie is not found.
 */
const fetchFocusedMovie = async (imdbID: string): Promise<Movie> => {
  const response = await fetch(
    `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }
  const data = await response.json();
  if (data.Response === "False") {
    throw new Error(data.Error || "Movie not found");
  }
  return data;
};
export { fetchInitialMovies, fetchFocusedMovie };
