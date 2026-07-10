import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
  src: './../fonts/mayaboti-normal.ttf',
});

export const metadata = {
  title: { 
    default: "Hero Kidz | Premium Kids Products & Toys", 
    template: "%s | Hero Kidz" 
  },
  description: "Hero Kidz is a leading provider of high-quality educational toys and resources for children. Our mission is to inspire creativity, learning, and fun through our carefully curated selection of products.",
  keywords: ["kids products", "children toys", "baby essentials", "hero kidz", "educational toys", "online kids shop"],
  authors: [{ name: "Hero Kidz Team" }],
  metadataBase: new URL("https://hero-kidz-iota.vercel.app"),

  openGraph: {
    title: "Hero Kidz | Premium Kids Products & Toys",
    description: "Explore a diverse range of premium quality kids' products, innovative toys, and everyday essentials designed to inspire creativity and learning.",
    url: "https://hero-kidz-iota.vercel.app",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co.com/fGNgv8Fd/home.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidz Home Page Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Premium Kids Products & Toys",
    description: "Explore our diverse range of products designed to meet your child's needs.",
    images: ["https://i.ibb.co.com/fGNgv8Fd/home.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/hRbt48zS/logo.png",
    shortcut: "https://i.ibb.co.com/hRbt48zS/logo.png",
    apple: "https://i.ibb.co.com/hRbt48zS/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} antialiased`}
    >
      <body className="flex flex-col min-h-screen"> 
        
        <header className="mx-auto px-4 md:px-0 py-2 w-full md:w-11/12">
          <Navbar />
        </header>
        
        <main className="flex-grow mx-auto px-4 md:px-0 py-2 w-full md:w-11/12 min-h-[calc(100vh-120px)]"> 
          {children}
        </main>

        <footer className="mt-auto w-full">
          <Footer />
        </footer>

      </body>
    </html>
  );
}