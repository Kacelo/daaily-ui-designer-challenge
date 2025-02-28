"use client";
import { Movie } from "@/app/interfaces/movie-interface";
import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieResult, setMovieResult] = useState<Movie[]>()
  const handleSearch = (query: string) => {
    console.log("hello:", query);
    setSearchTerm(query);
  };
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
