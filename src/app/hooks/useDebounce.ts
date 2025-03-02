import { useEffect, useState } from "react";

/**
 * Custom hook that debounces a query string.
 *
 * @param query - The input query string to debounce.
 * @param milliseconds - The delay in milliseconds to debounce the query.
 * @returns The debounced query string.
 *
 * @example
 * const debouncedQuery = useDebounce(searchTerm, 300);
 */
const useDebounce = (query: string, milliseconds: number) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedQuery(query);
    }, milliseconds); 
    return () => clearTimeout(delay); 
  }, [milliseconds, query]);

  return debouncedQuery;
};

export { useDebounce };
