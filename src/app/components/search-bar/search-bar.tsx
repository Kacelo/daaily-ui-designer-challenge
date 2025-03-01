"use client";
import React from "react";
import { SearchBarProps } from "@/app/interfaces/search-bar-interface";
const SearchBar: React.FC<SearchBarProps> = ({ setSearchMovieName }) => {
  return (
    <div className="">
      <input
        type="text"
        name="query"
        onChange={(e) => setSearchMovieName(e.target.value)}
        className="border m-auto"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
