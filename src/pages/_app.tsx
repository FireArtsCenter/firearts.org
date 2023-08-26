import "@/app/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${raleway.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
