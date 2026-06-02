"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CartButton } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";
import { Logo } from "@/components/Logo";

type NavChild = { label: string; href: string; external?: boolean };

function NavLink({ item, onClick, mobile }: { item: NavChild; onClick?: () => void; mobile?: boolean }) {
  const baseDesktop =
    "px-2 xl:px-3 py-2 text-xs xl:text-sm font-semibold uppercase tracking-[0.14em] text-brand-navy hover:text-brand-accent transition-colors whitespace-nowrap";
  const baseMobile =
    "px-3 py-3 rounded-sm text-base font-semibold uppercase tracking-[0.14em] text-brand-navy hover:bg-brand-soft hover:text-brand-accent";
  const className = mobile ? baseMobile : baseDesktop;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-light/95 backdrop-blur border-b border-brand-border">
      <div className="container-x grid grid-cols-3 items-center h-16 md:h-20">
        <div className="flex items-center justify-start">
          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2 text-brand-navy"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <nav className="hidden lg:flex items-center gap-1 xl:gap-3">
            {site.nav.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>
        </div>

        <Link
          href="/"
          aria-label={site.brand.short}
          className="flex flex-col items-center justify-center leading-none hover:opacity-90 transition-opacity"
        >
          <Logo className="w-10 h-10 md:w-11 md:h-11" />
          <span className="font-semibold text-brand-navy text-[7px] md:text-[9px] tracking-[0.18em] uppercase mt-2 whitespace-nowrap">
            Elektronik Satış · Tavukçuluk
          </span>
        </Link>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Ürün ara"
            className="inline-flex items-center justify-center w-10 h-10 rounded-sm text-brand-navy hover:bg-brand-soft hover:text-brand-accent transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile sipariş ver"
            className="inline-flex items-center justify-center w-10 h-10 rounded-sm text-brand-navy hover:bg-brand-soft hover:text-brand-accent transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <CartButton />
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-border bg-brand-light">
          <nav className="container-x py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <NavLink key={item.label} item={item} onClick={() => setOpen(false)} mobile />
            ))}
            <a
              href={waGeneralOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-semibold px-5 py-3 rounded-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Sipariş
            </a>
          </nav>
        </div>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
