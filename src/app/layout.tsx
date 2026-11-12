import type { Metadata } from "next";
import Script from "next/script";
import { Fira_Code, Major_Mono_Display } from "next/font/google";
import "./globals.css";
// Import Navabar and Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import { Analytics } from "@vercel/analytics/next"

const firaCode = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-headers",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Chaim Mendes | 3D Artist & Web Developer",
  description: "Chaim Mendes's personal website showcasing his work as a 3D artist and web developer.",
  metadataBase: new URL('https://chaimmendes.vercel.app'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'qN9blXpCI6P2Dn-cYGOEh9x4SDOgJCK9CZGxp20P5R8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="google-tag-manager"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TMPKNNS2');
      `,
        }}
      />
      <body className={`${majorMonoDisplay.variable} ${firaCode.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMPKNNS2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <LenisScroll />
        {/* Navagation bar and header */}
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
