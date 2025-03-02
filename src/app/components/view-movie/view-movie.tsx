"use client";
import { useFetchFocusedMovie } from "@/app/hooks/useMovies";
import { focusedMovieProps } from "@/app/interfaces/focused-view-interface";
import { FocusedMovieSkeleton } from "../skeletons/view-focused-movie";

export const ViewFocusedMovie: React.FC<focusedMovieProps> = ({ imdbID }) => {
  const { data: focusedMovie, isLoading, error } = useFetchFocusedMovie(imdbID);

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

  const backgroundImage =
    focusedMovie?.Poster === "N/A"
      ? "./fallback-poster.jpg"
      : focusedMovie?.Poster;

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
        <p className="mt-4 text-gray-800">{focusedMovie?.Plot}</p>

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
