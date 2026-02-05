import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Gidugu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Added font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const gidugu = Gidugu({
  weight: "400",            // Gidugu requires a fixed weight
  subsets: ["telugu", "latin"],
  variable: "--font-gidugu", // Define a variable name
});

export const metadata: Metadata = {
  title: "Easy Resume",
  description: "Craft you professional resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${gidugu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
