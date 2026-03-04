import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Ussama BinYamin — Full-Stack Developer",
  description: "Professional portfolio built with .Dat .",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="container-px pt-24 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
