"use client";

import { createContext, useContext, useState } from "react";
import { SearchContextType } from "../interfaces/search-bar-interface";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [movieNameSearch, setMovieNameSearch] = useState("");

  return (
    <SearchContext.Provider value={{ movieNameSearch, setMovieNameSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("an error occured");
  }
  return context;
};
