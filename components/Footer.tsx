import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, AtSign } from "lucide-react";
import { site } from "@/content/site.config";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="bg-white inline-block rounded-md p-3 mb-4">
            <Image
              src="/logo.png"
              alt={site.brand.short}
              width={512}
              height={512}
              className="h-20 w-auto"
            />
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            {site.brand.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
            İletişim
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-white/80">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-accent" />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 flex-shrink-0 text-brand-accent" />
              <a href={`tel:+${site.whatsapp.primary}`} className="hover:text-white">
                {site.whatsapp.primaryDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 flex-shrink-0 text-brand-accent" />
              <a href={`tel:+${site.whatsapp.secondary}`} className="hover:text-white">
                {site.whatsapp.secondaryDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <Clock className="w-4 h-4 flex-shrink-0 text-brand-accent" />
              <span>{site.contact.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
            Sayfalar
          </h3>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-white/90">
            Sosyal Medya
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={site.social.instagramMain.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <AtSign className="w-4 h-4" />
                {site.social.instagramMain.handle}
              </a>
            </li>
            <li>
              <a
                href={site.social.instagramFresh.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white"
              >
                <AtSign className="w-4 h-4" />
                {site.social.instagramFresh.handle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {site.brand.legal}. Tüm hakları saklıdır.</p>
          <p>{site.brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
