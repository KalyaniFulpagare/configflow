// TypeScript may not have CSS module declarations in this project setup.
// @ts-ignore: Allow side-effect import of global CSS
import "./globals.css";

import type { Metadata } from "next";

import Navbar from "@/components/layout/Navbar";

import Providers from "@/components/Providers";

export const metadata: Metadata = {

  title: "ConfigFlow",

  description:
    "Metadata Driven Application Runtime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-black text-white">

        <Providers>

          <Navbar />

          {children}

        </Providers>

      </body>

    </html>
  );
}