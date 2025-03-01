"use client";
import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/search-bar";
import { useDebounce } from "./hooks/useDebounce";
import {
  useMovieInfiniteSearchScroll,
} from "./hooks/useMovies";
import { useInView } from "react-intersection-observer";
import GridDisplay from "./components/grid-display/grid-display";

export default function Home() {
  const [searchMovieName, setSearchMovieName] = useState("");
  const debouncedSearchTerm = useDebounce(searchMovieName, 300);
  const {
    data,
    isLoading,
    fetchNextPage,
  } = useMovieInfiniteSearchScroll(debouncedSearchTerm, 10);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  const allMovies = data?.pages.flatMap((page) => page.data) || [];
  return (
    <div className="">
      <div className="items-center mt-4">
        <SearchBar setSearchMovieName={setSearchMovieName} />
      </div>
      <div className="mt-4">
        <GridDisplay movies={allMovies} isLoading={isLoading}  ref={ref} />
      </div>
    </div>
  );
}
