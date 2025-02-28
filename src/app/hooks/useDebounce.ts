import { useEffect, useState } from "react";

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
