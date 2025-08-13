import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { ThemeProviders } from "./ThemeProviders";

export const metadata: Metadata = {
  title: "Swetha's Portfolio",
  description: "Portfolio website for Swetha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviders>
          <Navbar />
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
