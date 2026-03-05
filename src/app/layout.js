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
  // Title: Hem marka hem anahtar kelime dengesi mükemmel.
  title: "Isra Pro: Prayer Times, Qibla & Athan | Namaz Vakitleri ve Kıble",
  
  // Description: Google için 5 dilde optimize edilmiş açıklama.
  description: "Accurate Prayer Times, Qibla & Athan alerts worldwide. | Profesyonel Namaz Vakitleri ve Kıble Bulucu. | Horarios de oración y Qibla. | Намаз убактылары жана Кыбыла. | Gebetszeiten und Qibla. | Время намаза и Кибла.",
  
  // Keywords: 5 dilde en çok aranan terimler.
  keywords: [
    "prayer times", "qibla finder", "athan", "salat", 
    "namaz vakitleri", "kıble bulucu", "ezan vakti", 
    "horarios de oración", "dirección de la qibla", "adhan", 
    "намаз убактылары", "кыбыла", "азан", 
    "gebetszeiten", "gebet", "prayer app", "isra pro"
  ].join(", "),

  // Sosyal Medya Paylaşım Ayarları (Open Graph)
  openGraph: {
    title: "Isra Pro: Global Prayer Times",
    description: "Beautifully designed, highly accurate prayer times for the global Muslim community. No ads, just peace.",
    url: 'https://isra-pro.vercel.app', // Deploy sonrası kendi domaininle değiştir abi
    siteName: 'Isra Pro',
    locale: 'en_US',
    type: 'website',
  },

  // Apple & Google için teknik meta tagler
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  
  // Alternatif diller sinyali
  alternates: {
    languages: {
      'en-US': '/en',
      'tr-TR': '/tr',
      'es-ES': '/es',
      'ky-KG': '/ky',
      'de-DE': '/de',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}