import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import GTM from "./components/GTM";

/**
 * TODO
 * - add canonical url
 *
 */

const raleway = Raleway({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Fire Arts Center of Chicago",
  description:
    "The Fire Arts Center of Chicago provides instruction in foundry, forging, welding, metalsmithing, figure sculpture, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} bg-black-light font-sans text-gray`}
      >
        <GTM />
        <div id="top" className="container grid grid-main mx-auto">
          <Header />
          <Navigation />
          <main id="content" className="px-4 sm:py-4 md:py-4">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
