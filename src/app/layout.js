import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://isra-pro-app.vercel.app'),
  // Bilingual Title is best for high CTR in your main markets
  title: {
    default: "Isra Pro: Prayer Times & Qibla | Namaz Vakitleri ve Kıble",
    template: "%s | Isra Pro"
  },
  // Clean Description for higher Google Authority
  description: "Highly accurate prayer times, Athan alerts, and Qibla finder for the global Muslim community. 100% ad-free and privacy-focused.",
  
  // ALL Multi-language keywords included here for the bots
  keywords: [
    "prayer times", "qibla finder", "athan", "salat", 
    "namaz vakitleri", "kıble bulucu", "ezan vakti", 
    "horarios de oración", "dirección de la qibla", 
    "намаз убактылары", "кыбыла", "азан", 
    "gebetszeiten", "gebet", "isra pro"
  ],
  
  themeColor: "#2563eb",
  
  alternates: {
    canonical: '/',
    // Removed language paths because they don't exist as separate pages
  },
  
  openGraph: {
    title: "Isra Pro: Global Prayer Times & Qibla Finder",
    description: "No ads, just peace. Experience accurate prayer times with a beautifully designed app.",
    url: 'https://isra-pro-app.vercel.app',
    siteName: 'Isra Pro',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Isra Pro: Accurate Prayer Times',
    description: 'Ad-free, beautifully designed prayer times and Qibla finder.',
    images: ['/og-image.png'],
  },

  verification: {
    google: 'K9BvBwmV9NPpOmTyiDLsdwjGrx2ccvtiQdHq0UKr4E4',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}