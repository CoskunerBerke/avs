import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileActionBar from "@/components/ui/MobileActionBar";
import CookieBanner from "@/components/ui/CookieBanner";
import { businessConfig } from "@/config/business";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: businessConfig.seo.title,
    template: `%s | ${businessConfig.name}`
  },
  description: businessConfig.seo.description,
  keywords: businessConfig.seo.keywords,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || businessConfig.domain),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    url: "./",
    siteName: businessConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {/* Ortak Sticky Header */}
        <Header />
        
        {/* Sayfa İçeriği */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Ortak Footer */}
        <Footer />
        
        {/* Global Etkileşim Elemanları */}
        <WhatsAppButton />
        <MobileActionBar />
        <CookieBanner />
      </body>
    </html>
  );
}
