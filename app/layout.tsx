import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { CartProvider } from "@/lib/cart-context";
import { site } from "@/content/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

export const viewport: Viewport = {
  themeColor: "#013F80",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand.short} — ${site.brand.tagline}`,
    template: `%s | ${site.brand.short}`,
  },
  description: site.brand.description,
  keywords: [
    "tavukçuluk",
    "beyaz et",
    "toptan tavuk",
    "perakende tavuk",
    "İstanbul gıda toptancılar çarşısı",
    "donuk gıda",
    "Evka Surur",
  ],
  openGraph: {
    title: site.brand.short,
    description: site.brand.description,
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-text">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": site.brand.short,
                "image": "https://estavukculuk.com/logo-main.png",
                "description": site.brand.description,
                "url": site.url,
                "telephone": site.whatsapp.primaryDisplay,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bayrampaşa",
                  "addressRegion": "İstanbul",
                  "addressCountry": "TR"
                }
              })
            }}
          />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "var(--color-brand-primary)",
                color: "var(--color-brand-soft)",
                border: "none",
                fontWeight: "bold",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
