import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

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
      <body className={raleway.variable}>{children}</body>
    </html>
  );
}

// <Script id='gtm-head'>
//   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-5BNZSL');
// </Script>
// <Script id="gtm-nosript">
//   <noscript>
//     <iframe
//       src="https://www.googletagmanager.com/ns.html?id=GTM-5BNZSL"
//       height="0"
//       width="0"
//       style="display:none;visibility:hidden"
//     ></iframe>
//   </noscript>
// </Script>
