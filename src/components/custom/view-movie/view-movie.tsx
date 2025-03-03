"use client";
import { useFocusedMovie } from "@/app/hooks/useMovies";
import { focusedMovieProps } from "@/app/interfaces/focused-view-interface";
import { FocusedMovieSkeleton } from "../skeletons/view-focused-movie";
import { getMoviePoster } from "@/app/utils/helpers";

/**
 * Component to display detailed information about a focused movie.
 * 
 * @param {focusedMovieProps} props - The properties for the component.
 * @param {string} props.imdbID - The IMDb ID of the movie to fetch and display.
 * 
 * @returns {JSX.Element} The rendered component displaying the movie details.
 * 
 * @example
 * ```tsx
 * <ViewFocusedMovie imdbID="tt0111161" />
 * ```
 * 
 * @remarks
 * This component fetches movie data using the `useFocusedMovie` hook and displays
 * a loading skeleton while the data is being fetched. If an error occurs during
 * fetching, an error message is displayed. Once the data is successfully fetched,
 * the movie's poster, title, year, rating, runtime, genre, plot, actors, and director
 * are displayed.
 */
export const ViewFocusedMovie: React.FC<focusedMovieProps> = ({ imdbID }) => {
  const { data: focusedMovie, isLoading, error } = useFocusedMovie(imdbID);

  if (isLoading) {
    return (
      <div>
        <FocusedMovieSkeleton />
      </div>
    );
  }
  if (error)
    return (
      <p className="text-red-500">Error fetching movie: {error.message}</p>
    );

  const backgroundImage = getMoviePoster(focusedMovie);

  return (
    <div className="p-4 max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6">
      <div
        className="rounded-xl bg-muted/100 w-full h-[80vh] aspect-[2/3] md:aspect-auto"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">{focusedMovie?.Title}</h1>
        <p className="text-lg text-gray-600">
          {focusedMovie?.Year} | {focusedMovie?.Rated} | {focusedMovie?.Runtime}{" "}
          | {focusedMovie?.Genre}
        </p>
        <p className="mt-4 text-gray-500">{focusedMovie?.Plot}</p>

        <div className="mt-4">
          <p>
            <strong>Starring:</strong> {focusedMovie?.Actors}
          </p>
          <p>
            <strong>Director:</strong> {focusedMovie?.Director}
          </p>
        </div>
      </div>
    </div>
  );
};


