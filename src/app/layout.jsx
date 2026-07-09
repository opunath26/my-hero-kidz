import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
})

export const metadata = {
  title: { default: "Hero Kidz", template: "%s | Hero Kidz" },
  description: "Hero Kidz is a leading provider of high-quality educational toys and resources for children. Our mission is to inspire creativity, learning, and fun through our carefully curated selection of products.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} antialiased`}
    >
      <body className="flex flex-col min-h-full">
        <header className="mx-auto py-2 md:w-11/12">
          <Navbar />
        </header>
        
        <main className="mx-auto py-2 md:w-11/12 min-h-[calc(100vh-30px)]"> 
        {children}
        </main>

        <footer>
          <Footer />
        </footer>

        </body>
    </html>
  );
}


