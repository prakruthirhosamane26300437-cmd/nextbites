import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Everyday recipes",
  description: "Simple recipes and delicious possibilities for everyday cooking.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="navbar" aria-label="Main navigation">
            <Link href="/" className="brand">Next<span>Bites</span></Link>
            <Link href="/" className="nav-link">Home</Link>
          </nav>
        </header>
        {children}
        <footer>Made with curiosity. Served with love.</footer>
      </body>
    </html>
  );
}
