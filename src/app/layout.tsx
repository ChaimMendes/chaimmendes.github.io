import type { Metadata } from "next";
import { Fira_Code, Major_Mono_Display} from "next/font/google";
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
      <body className={`${majorMonoDisplay.variable} ${firaCode.variable} antialiased`}>
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
