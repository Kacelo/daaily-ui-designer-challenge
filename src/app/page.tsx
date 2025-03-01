// import Image from "next/image";
"use client";
import { useState } from "react";
import SearchBar from "./components/search-bar/search-bar";
import { useDebounce } from "./hooks/useDebounce";
import {
  useMovieInfiniteSearchScroll,
  useMovieSearch,
} from "./hooks/useMovies";
import GridDisplay from "./components/grid-display/grid-display";

export default function Home() {
  const [searchMovieName, setSearchMovieName] = useState("");
  const debouncedSearchTerm = useDebounce(searchMovieName, 300);
  const { data: movies, isLoading } = useMovieSearch(10, debouncedSearchTerm);
  const { data, isLoading: loader } = useMovieInfiniteSearchScroll(
    debouncedSearchTerm,
    10
  );
  console.log("data from film search:", data?.pages[0]);
  return (
    <div className="">
      <div className="items-center">
        <SearchBar setSearchMovieName={setSearchMovieName} />
      </div>
      <div className="mt-4">
        <GridDisplay movies={data?.pages[0].data} isLoading={isLoading} />
      </div>
    </div>
  );
}
