import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "../styles/globals.css";
import "../styles/material-icons.css";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify – Web player: música para todas as pessoas",
  description: "open.spotify.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
