import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistMono = localFont({
  src: "../fonts/upheavtt.ttf", 
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SpeedHacks 2.0 Schedule",
  description: "SpeedHacks 2.0 Schedule",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("dark relative h-full font-sans antialiased", geistMono.className)}>
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}