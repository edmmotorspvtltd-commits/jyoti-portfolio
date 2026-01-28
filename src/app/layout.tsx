import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Model Portfolio",
  description: "Explore my portfolio featuring fashion, beauty, lifestyle, editorial, and commercial work.",
  keywords: ["model", "portfolio", "fashion", "beauty", "editorial", "commercial"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Professional Model Portfolio",
    description: "Explore my portfolio featuring fashion, beauty, lifestyle, editorial, and commercial work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
