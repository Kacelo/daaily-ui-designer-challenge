
/**
 * Interface representing the context type for search functionality.
 */
export interface SearchContextType {
    /**
     * The search query for the movie name.
     */
    movieNameSearch: string;

    /**
     * Function to update the search query for the movie name.
     * @param query - The new search query.
     */
    setMovieNameSearch: (query: string) => void;
}
