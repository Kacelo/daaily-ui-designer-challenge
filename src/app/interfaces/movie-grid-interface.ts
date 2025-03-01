import { MovieSearchResult } from "./movie-interface";

export interface MovieGridInterface {
  movies: MovieSearchResult[];
  isLoading: boolean;
  ref: (node?: Element | null) => void;
}
