import localFont from "next/font/local";  // Only use this if you're importing a local font
import "./globals.css";
import { Inter } from "next/font/google"; // Import Inter properly from next/font/google
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Initialize the Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai - Fund your projects with chai",
  description: "This is a crowdfunding platform for Creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className='min-h-[78vh] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]'>{children}</div>
        
        <Footer />
      </body>
    </html>
  );
}
