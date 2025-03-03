/**
 * Represents a movie with various details.
 */
export interface Movie {
  /**
   * The title of the movie.
   */
  Title: string;

  /**
   * The year the movie was released.
   */
  Year: string;

  /**
   * The movie's rating.
   */
  Rated: string;

  /**
   * The release date of the movie.
   */
  Released: string;

  /**
   * The runtime of the movie.
   */
  Runtime: string;

  /**
   * The genre of the movie.
   */
  Genre: string;

  /**
   * The director of the movie.
   */
  Director: string;

  /**
   * The writer of the movie.
   */
  Writer: string;

  /**
   * The actors in the movie.
   */
  Actors: string;

  /**
   * The plot summary of the movie.
   */
  Plot: string;

  /**
   * The language(s) spoken in the movie.
   */
  Language: string;

  /**
   * The country where the movie was produced.
   */
  Country: string;

  /**
   * The awards the movie has won.
   */
  Awards: string;

  /**
   * The URL of the movie's poster image.
   */
  Poster: string;

  /**
   * The ratings given to the movie.
   */
  Ratings: Rating[];

  /**
   * The Metascore of the movie.
   */
  Metascore: string;

  /**
   * The IMDb rating of the movie.
   */
  imdbRating: string;

  /**
   * The number of votes the movie received on IMDb.
   */
  imdbVotes: string;

  /**
   * The IMDb ID of the movie.
   */
  imdbID: string;

  /**
   * The type of the movie (e.g., movie, series).
   */
  Type: string;

  /**
   * The DVD release date of the movie.
   */
  DVD: string;

  /**
   * The box office earnings of the movie.
   */
  BoxOffice: string;

  /**
   * The production company of the movie.
   */
  Production: string;

  /**
   * The official website of the movie.
   */
  Website: string;

  /**
   * The response status of the movie data.
   */
  Response: string;
}

/**
 * Represents a movie rating from a specific source.
 * 
 * @interface Rating
 * @property {string} Source - The source of the rating (e.g., "Internet Movie Database").
 * @property {string} Value - The value of the rating (e.g., "8.5/10").
 */
interface Rating {
  Source: string;
  Value: string;
}
/**
 * Represents the structure of a movie search result.
 */
export interface MovieSearchResultType {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

