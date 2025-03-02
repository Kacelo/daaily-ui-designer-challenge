"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

/**
 * ReactQueryProvider component that sets up the React Query client context.
 * This component initializes a new QueryClient instance and provides it to the
 * QueryClientProvider, which makes the client available to the rest of the application.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will be wrapped by the provider.
 *
 * @returns {JSX.Element} The QueryClientProvider component with the initialized QueryClient.
 */
const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;