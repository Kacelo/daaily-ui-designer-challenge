import { MovieSearchResultType } from "./movie-interface";

/**
 * Interface representing the structure of the movie grid component.
 */
export interface MovieGridInterface {
  /**
   * An array of movie search results or undefined if no movies are available.
   */
  movies: MovieSearchResultType[] | undefined;

  /**
   * A boolean indicating whether the movie grid is currently loading data.
   */
  isLoading: boolean;

  /**
   * An optional callback function that receives a reference to a DOM element.
   */
  ref?: (node?: Element | null) => void;
}
