"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { site } from "@/content/site.config";
import { waGeneralOrder } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { CartButton } from "@/components/CartDrawer";
import { SearchModal } from "@/components/SearchModal";

type NavChild = { label: string; href: string; external?: boolean };
type NavItem = NavChild & { children?: readonly NavChild[] };

function NavLink({ item, onClick, mobile }: { item: NavChild; onClick?: () => void; mobile?: boolean }) {
  const baseDesktop =
    "px-2 xl:px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-navy hover:text-brand-accent transition-colors whitespace-nowrap";
  const baseMobile =
    "px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider text-brand-navy hover:bg-brand-soft hover:text-brand-accent";
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

function NavDropdown({ item }: { item: NavItem }) {
  const trigger = (
    <span className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-bold uppercase tracking-wider text-brand-navy group-hover:text-brand-accent transition-colors whitespace-nowrap inline-flex items-center gap-1">
      {item.label}
      <ChevronDown className="w-3 h-3" />
    </span>
  );

  return (
    <div className="relative group">
      {item.external ? (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {trigger}
        </a>
      ) : (
        <Link href={item.href}>{trigger}</Link>
      )}
      <div className="absolute top-full left-0 pt-2 hidden group-hover:block group-focus-within:block z-50">
        <div className="bg-white border border-brand-border rounded-md shadow-xl py-2 min-w-[280px]">
          {item.children?.map((child) => (
            <a
              key={child.label}
              href={child.href}
              target={child.external ? "_blank" : undefined}
              rel={child.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-2.5 text-sm font-medium text-brand-navy hover:bg-brand-soft hover:text-brand-accent whitespace-nowrap"
            >
              {child.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-brand-border">
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
            {site.nav.map((item) =>
              "children" in item && item.children ? (
                <NavDropdown key={item.label} item={item as NavItem} />
              ) : (
                <NavLink key={item.label} item={item} />
              )
            )}
          </nav>
        </div>

        <Link
          href="/"
          aria-label={site.brand.short}
          className="flex items-center justify-center"
        >
          <Image
            src="/logo-icon.png"
            alt={site.brand.short}
            width={1024}
            height={530}
            priority
            className="h-9 md:h-12 w-auto"
          />
        </Link>

        <div className="flex items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Ürün ara"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-navy hover:bg-brand-soft hover:text-brand-accent transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
          <a
            href={waGeneralOrder()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile sipariş ver"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md text-brand-navy hover:bg-brand-soft hover:text-brand-accent transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
          </a>
          <CartButton />
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <nav className="container-x py-4 flex flex-col gap-1">
            {site.nav.map((item) => (
              <div key={item.label} className="flex flex-col">
                <NavLink item={item} onClick={() => setOpen(false)} mobile />
                {"children" in item && item.children && (
                  <div className="pl-4 border-l-2 border-brand-border ml-3 mb-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        target={child.external ? "_blank" : undefined}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm font-medium text-brand-muted hover:text-brand-accent"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={waGeneralOrder()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-semibold px-5 py-3 rounded-md"
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
