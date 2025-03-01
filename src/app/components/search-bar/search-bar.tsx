"use client";
import React from "react";
import { SearchBarProps } from "@/app/interfaces/search-bar-interface";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar: React.FC<SearchBarProps> = ({ setSearchMovieName }) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          name="query"
          onChange={(e) => setSearchMovieName(e.target.value)}
          className="border m-auto pl-8"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
