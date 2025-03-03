import React from "react";

import { Skeleton } from "@/components/ui/skeleton";

/**
 * A skeleton component that serves as a placeholder while the focused movie content is loading.
 * It displays a layout with a large image area and several text lines to mimic the structure of the actual content.
 *
 * @returns {JSX.Element} The skeleton component for the focused movie view.
 */
export function FocusedMovieSkeleton() {
  return (
    <div className="p-4 max-w-5xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6">
      <Skeleton className="rounded-xl bg-muted/100 w-full h-[80vh] aspect-[2/3] md:aspect-auto" />
      <div className="flex flex-col gap-4">
        <Skeleton className="h-10" />
        <Skeleton className="h-4" />
        <Skeleton className="h-30 mt-4" />

        <div className="mt-4">
          <Skeleton className="h-4" />
          <Skeleton className="h-4 w-[250px] mt-2" />
        </div>
      </div>
    </div>
  );
}
