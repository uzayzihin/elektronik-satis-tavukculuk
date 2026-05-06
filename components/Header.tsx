"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-brand-light">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={site.brand.short}>
          <Image
            src="/logo.png"
            alt={site.brand.short}
            width={512}
            height={512}
            priority
            className="h-12 md:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-brand-text hover:text-brand-primary font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            7/24 Açık
          </span>
          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            <Phone className="w-4 h-4" />
            WhatsApp Sipariş
          </a>
        </div>

        <button
          type="button"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 -mr-2 text-brand-primary"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-light bg-white">
          <nav className="container-x py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-brand-text hover:bg-brand-light font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={waGeneralOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-accent text-white font-semibold px-5 py-3 rounded-md"
            >
              <Phone className="w-4 h-4" />
              WhatsApp Sipariş
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
