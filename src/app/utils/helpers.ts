import { Movie } from "../interfaces/movie-interface";

/**
 * Returns the poster URL of the given movie. If the poster is not available ("N/A"),
 * it returns the URL of a fallback poster image.
 *
 * @param {Movie | undefined} focusedMovie - The movie object which contains the poster URL.
 * @returns {string | undefined} - The URL of the movie poster or the fallback poster image.
 */
export function getMoviePoster(focusedMovie: Movie | undefined) {
  return focusedMovie?.Poster === "N/A"
    ? "./fallback-poster.jpg"
    : focusedMovie?.Poster;
}
