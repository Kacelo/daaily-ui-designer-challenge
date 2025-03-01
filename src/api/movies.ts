import {MovieSearchResult, SearchResult } from "@/app/interfaces/movie-interface";
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
    console.log('index 0:',data.Search);
    return data.Search.slice(0, limit);
  }
  return [];
};

export { searchMovies };
