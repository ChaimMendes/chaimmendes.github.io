import type { Metadata } from "next";
import { Fira_Code, Major_Mono_Display, Lexend_Deca } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// Import Navabar and Footer
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const firaCode = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

const majorMonoDisplay = Major_Mono_Display({
  variable: "--font-headers",
  subsets: ["latin"],
  weight: "400",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chaim Mendes | 3D Artist & Web Developer",
  description: "Chaim Mendes's personal website showcasing his work as a 3D artist and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} ${majorMonoDisplay.variable} ${firaCode.variable} antialiased`}>
        {/* Navagation bar and header */}
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
