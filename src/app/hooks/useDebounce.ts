import { useEffect, useState } from "react";

const useDebounce = (searchTerm: string, milliseconds: number) => {
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, milliseconds); 
    return () => clearTimeout(delay); 
  }, [milliseconds, searchTerm]);

  return debouncedTerm;
};

export { useDebounce };
