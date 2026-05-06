import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/content/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-brand-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
