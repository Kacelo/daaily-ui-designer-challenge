// import Image from "next/image";
"use client";
import { useEffect, useState } from "react";
import SearchBar from "./components/search-bar/search-bar";
import { useDebounce } from "./hooks/useDebounce";
import {
  useMovieInfiniteSearchScroll,
  useMovieSearch,
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
  console.log("In View:", inView);
  useEffect(() => {
    if (inView) {
      console.log("fecthing more");
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  const allMovies = data?.pages.flatMap((page) => page.data) || [];

  console.log("data from film search:", data?.pages);
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
