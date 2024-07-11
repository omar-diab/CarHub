import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "CarHub",
  description: "Discover the best cars on the world",
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
