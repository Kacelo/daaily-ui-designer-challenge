"use client";
import { Movie } from "@/app/interfaces/movie-interface";
import React, { useState, useEffect } from "react";
// import { searchMovies, useMovieSearch } from "@/app/hooks/useMovies";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import useMovies from "@/app/hooks/useMovies2";
import { searchMovies } from "@/api/movies";
import { useDebounce } from "@/app/hooks/useDebounce";
import { useMovieSearch2 } from "@/app/hooks/useMovies";
const SearchBar = () => {
  const [movieName, setMovieName] = useState("");
  const debouncedSearchTerm = useDebounce(movieName, 300);
  const { data: movies } = useMovieSearch2(10, debouncedSearchTerm);
  const handleSearch = (searchTerm: string) => {
    setMovieName(searchTerm);
  };
  console.log("data from hook:", movies);
//   const { data, isLoading } = useQuery({
//     queryKey: ["movies", debouncedSearchTerm],
//     queryFn: () => searchMovies(debouncedSearchTerm),
//   });
//   if (data) {
//     console.log("Data:", debouncedSearchTerm);
//   }
  console.log("Data:", debouncedSearchTerm);

  return (
    <div className="">
      <form>
        <input
          type="text"
          name="query"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="border m-auto"
          placeholder="Search"
        ></input>
        <input type="text" name="name" />
      </form>
    </div>
  );
};

export default SearchBar;
