import { MovieSearchResultType } from "./movie-interface";

export interface MovieGridInterface {
  movies: MovieSearchResultType[] | undefined
  isLoading: boolean;
  ref?: (node?: Element | null) => void;
}
