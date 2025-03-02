"use client";

import { ThemeProvider } from "next-themes";

/**
 * DaailyFlixThemeProvider is a React component that provides theme context to its children.
 * It uses the `ThemeProvider` component to manage theme settings.
 *
 * @param props - The properties object.
 * @param props.children - The child components that will receive the theme context.
 *
 * @returns {JSX.Element} The ThemeProvider component wrapping the children.
 */
const DaailyFlixThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default DaailyFlixThemeProvider;
