import { LIMIT } from "@/app/constants/constants";
import {
  MovieSearchResult,
  SearchResult,
} from "@/app/interfaces/movie-interface";

// function to search for movies
const searchMovies = async (
  limit = 10,
  query: string
): Promise<Array<MovieSearchResult>> => {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${query}&apikey=81145613`
  );
  const data = (await response.json()) as SearchResult;
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
  const data = await response.json();
  if (data.Response === "True" && data.Search && pageParam) {
    return {
      data: data.Search.slice(pageParam, pageParam + limit),
      currentPage: pageParam,
      nextPage: data.totalResults > pageParam * limit ? pageParam + 1 : null,
    };
  }
  return {
    data: [],
    currentPage: 0,
    nextPage: 0,
  };
};
export { searchMovies };
