import { MovieSearchResult } from "./movie-interface";

export interface MovieGridInterface {
  movies: MovieSearchResult[] | undefined
  isLoading: boolean;
  ref?: (node?: Element | null) => void;
}
