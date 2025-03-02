export interface SearchBarProps {
    setSearchMovieName: (term: string) => void;
  }

 export interface SearchContextType {
  movieNameSearch: string;
  setMovieNameSearch: (query: string) => void;
  }