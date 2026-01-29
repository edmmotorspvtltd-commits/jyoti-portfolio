import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jyoti Soni Model",
  description: "Professional model specializing in Indian fashion, bridal wear, and ethnic styling. Available for editorial, commercial, and runway work.",
  keywords: ["model", "portfolio", "fashion", "beauty", "editorial", "commercial", "Indian fashion", "bridal", "ethnic wear", "Jyoti Soni"],
  authors: [{ name: "Jyoti Soni" }],
  openGraph: {
    title: "Jyoti Soni Model",
    description: "Professional model specializing in Indian fashion, bridal wear, and ethnic styling. Available for editorial, commercial, and runway work.",
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
