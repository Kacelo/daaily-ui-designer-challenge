"use client";

import { createContext, useContext, useState } from "react";
import { SearchContextType } from "../interfaces/search-bar-interface";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * SearchProvider component that provides a context for managing movie name search state.
 *
 * @param props - The props object.
 * @param props.children - The child components that will have access to the search context.
 *
 * @returns A context provider component that supplies the movie name search state and its updater function.
 */
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
