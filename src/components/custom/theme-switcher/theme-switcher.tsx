"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * ThemeSwitcher component allows users to toggle between light and dark themes.
 * It uses the `useTheme` hook to get and set the current theme.
 *
 * @component
 * @example
 * // Usage example:
 * <ThemeSwitcher />
 *
 * @returns {JSX.Element} A button that toggles the theme between light and dark.
 */
export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const handleOnClick = () => {
    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <>
      <Button variant="outline" size="icon" onClick={handleOnClick}>
        {resolvedTheme === "dark" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
};
