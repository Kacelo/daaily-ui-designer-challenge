"use client";
import { LIMIT } from "@/app/constants/constants";
import { Movie, MovieSearchResult } from "@/app/interfaces/movie-interface";

// function to search for movies
const fetchInitialMovies = async (
  query: string,
  limit = LIMIT
): Promise<Array<MovieSearchResult>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=81145613`
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
export const searchFilms = async (
  query: string,
  pageParam?: number,
  limit: number = LIMIT
): Promise<{
  data: MovieSearchResult[];
  currentPage: number;
  nextPage: number | null;
}> => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=81145613&page=${pageParam}`
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
const fetchFocusedMovie = async (imdbID: string): Promise<Movie> => {
  const response = await fetch(
    `https://www.omdbapi.com/?i=${imdbID}&apikey=81145613`
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
