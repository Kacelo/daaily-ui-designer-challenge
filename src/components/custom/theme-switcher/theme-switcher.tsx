"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
// import Image from "next/image";
import { Button } from "@/components/ui/button";

export const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();
  if (resolvedTheme === "dark") {
    return (
      <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
        <Sun />
      </Button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div>
        <Button variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      </div>
    );
  }
};
