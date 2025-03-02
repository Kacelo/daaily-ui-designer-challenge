"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./utils/react-query-provider";
import DaailyFlixThemeProvider from "./utils/theme-provider";
import { SearchProvider } from "./utils/search-provider";
import SearchBar from "./components/search-bar/search-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DaailyFlixThemeProvider>
          <ReactQueryProvider>
            <SearchProvider>
              <div className="items-center mt-4">
                <SearchBar />
              </div>{" "}
              <main>{children}</main>
            </SearchProvider>
          </ReactQueryProvider>
        </DaailyFlixThemeProvider>
      </body>
    </html>
  );
}
