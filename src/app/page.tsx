"use client";
import { useEffect } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useMovieInfiniteSearchScroll } from "./hooks/useMovies";
import { useInView } from "react-intersection-observer";
import GridDisplay from "./components/grid-display/grid-display";
import { useSearch } from "./utils/search-provider";

export default function Home() {
  const { movieNameSearch } = useSearch();
  const debouncedSearchTerm = useDebounce(movieNameSearch, 300);
  const { data, isLoading, fetchNextPage } = useMovieInfiniteSearchScroll(
    debouncedSearchTerm,
    10
  );
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  const allMovies = data?.pages.flatMap((page) => page.data) || [];
  return (
    <div className="">

      <div className="mt-4">
        <GridDisplay movies={allMovies} isLoading={isLoading} ref={ref} />
      </div>
    </div>
  );
}
