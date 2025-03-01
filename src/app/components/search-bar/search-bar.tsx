"use client";
import React from "react";
import { SearchBarProps } from "@/app/interfaces/search-bar-interface";
import { Input } from "@/components/ui/input"

const SearchBar: React.FC<SearchBarProps> = ({ setSearchMovieName }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
      <Input
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
