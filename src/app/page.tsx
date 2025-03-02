"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import {
  useFetchInitialMovies,
  useMovieInfiniteSearchScroll,
} from "./hooks/useMovies";
import { useInView } from "react-intersection-observer";
import GridDisplay from "./components/grid-display/grid-display";
import { useSearch } from "./utils/search-provider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [initialMoviesQuery, setInitialMoviesQuery] = useState("avengers");
  const { movieNameSearch } = useSearch();
  const debouncedSearchTerm = useDebounce(movieNameSearch, 300);
  const { data, isLoading, fetchNextPage, error } =
    useMovieInfiniteSearchScroll(debouncedSearchTerm, 10);
  const {
    data: initialMovies,
    isLoading: initialMovieLoad,
    error: initialMovieError,
  } = useFetchInitialMovies(initialMoviesQuery);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  const handleInitialMovies = (query: string) => {
    if (query) {
      setInitialMoviesQuery(query);
    }
  };
  const allMovies = data?.pages.flatMap((page) => page.data) || [];
  if (error)
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-bold text-5xl">
          Error fetching movie: {error.message}
        </p>
      </div>
    );
  if (initialMovieError)
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-bold text-5xl">
          Error fetching movies: {initialMovieError.message}
        </p>
      </div>
    );

  return (
    <div className="">
      {debouncedSearchTerm ? (
        <div className="mt-4">
          <GridDisplay movies={allMovies} isLoading={isLoading} ref={ref} />
        </div>
      ) : (
        <Tabs defaultValue="Trending" className="">
          <TabsList className="ml-15">
            <TabsTrigger
              value="Trending"
              onClick={() => handleInitialMovies("avengers")}
            >
              Trending Movies
            </TabsTrigger>
            <TabsTrigger
              value="Recommended"
              onClick={() => handleInitialMovies("star wars")}
            >
              Recommended
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Trending" className="">
            <GridDisplay movies={initialMovies} isLoading={initialMovieLoad} />
          </TabsContent>
          <TabsContent value="Recommended">
            {" "}
            <GridDisplay movies={initialMovies} isLoading={initialMovieLoad} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
