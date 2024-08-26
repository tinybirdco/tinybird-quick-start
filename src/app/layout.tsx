
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Early Bird Café",
  description: "Customer rewards dashboard built with Tinybird and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
