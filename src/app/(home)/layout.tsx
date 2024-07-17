import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeTea",
  openGraph: {
    title: "DeTea",
    description: "Happiness can simply come from your own cup",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
