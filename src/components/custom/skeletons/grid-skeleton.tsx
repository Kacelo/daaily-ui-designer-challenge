import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * GridMovieSkeleton is a functional component that renders a grid of skeleton loaders.
 * It is used to display a loading state for a grid of movie items.
 *
 * @returns {JSX.Element} A JSX element containing a grid of skeleton loaders.
 *
 * @example
 * ```tsx
 * import { GridMovieSkeleton } from './path/to/GridMovieSkeleton';
 *
 * function App() {
 *   return (
 *     <div>
 *       <GridMovieSkeleton />
 *     </div>
 *   );
 * }
 * ```
 */
export function GridMovieSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-5 max-w-8xl mx-auto">
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index} className="flex flex-col gap-4">
        <Skeleton className="rounded-xl bg-muted/100 w-full h-[400px] md:h-[350px]" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
  );
}