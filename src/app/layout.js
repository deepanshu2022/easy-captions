import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EasyCaptions",
  description: "Generate captions/subtitles automatically",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-b from-bg-gradient-from to-bg-gradient-to min-h-screen text-white"}>
        <main className="p-4 max-w-4xl mx-auto">
          <NavBar />
          {children}
        </main>  
      </body>
    </html>
  );
}
