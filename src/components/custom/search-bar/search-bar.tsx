"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useSearch } from "@/app/contexts/search-provider";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { useRouter } from "next/navigation";

/**
 * SearchBar component renders a search input field with an icon and a theme switcher.
 * It allows users to type a search query and triggers a search action when the Enter key is pressed.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 *
 * @returns {JSX.Element} The rendered search bar component.
 *
 * @remarks
 * This component uses the `useSearch` hook to set the movie name search state and the `useRouter` hook to navigate to the home page on search.
 *
 * @function handleSearch
 * @param event - The keyboard event triggered when a key is pressed in the input field.
 *
 * @function setMovieNameSearch
 * @param value - The search query entered by the user.
 */
const SearchBar = () => {
  const { setMovieNameSearch } = useSearch();
  const router = useRouter();

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      router.push(`/`);
    }
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 m-auto">
      <div className="relative flex">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          name="query"
          onChange={(e) => setMovieNameSearch(e.target.value)}
          className="border  pl-8 mr-2"
          placeholder="Search"
          onKeyDown={handleSearch}
        />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default SearchBar;
