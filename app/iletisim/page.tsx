import type { Metadata } from "next";
import { MapPin, Phone, Clock, AtSign, MessageCircle } from "lucide-react";
import { site } from "@/content/site.config";
import { ContactForm } from "@/components/ContactForm";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.brand.short} iletişim — ${site.contact.address}. WhatsApp: ${site.whatsapp.primaryDisplay}`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white border-b border-brand-border">
        <div className="container-x py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-primary mb-3">
            İletişim
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-brand-navy">
            Bize Ulaşın
          </h1>
          <p className="text-brand-text/80 text-lg max-w-2xl">
            7/24 sipariş ve bilgi için WhatsApp hattımız hazır. Form da
            doldurabilirsiniz — direkt WhatsApp'a yönlendirir.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-x py-16 md:py-20 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <InfoCard
              icon={MapPin}
              title="Adres"
              lines={[site.contact.address, "İstanbul, Türkiye"]}
              cta={{
                href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.contact.mapsQuery)}`,
                label: "Google Maps'te Aç",
              }}
            />
            <InfoCard
              icon={Phone}
              title="Telefon / WhatsApp"
              lines={[site.whatsapp.primaryDisplay]}
              cta={{
                href: waLink("Merhaba, sipariş için yazıyorum."),
                label: "WhatsApp'tan Yaz",
                icon: MessageCircle,
              }}
            />
            <InfoCard
              icon={Clock}
              title="Çalışma Saatleri"
              lines={[site.contact.hours, site.contact.hoursDetail]}
            />
            <InfoCard
              icon={AtSign}
              title="Sosyal Medya"
              lines={[
                site.social.instagramMain.handle,
                site.social.instagramFresh.handle,
              ]}
              cta={{
                href: site.social.instagramMain.url,
                label: "Instagram'da Takip Et",
              }}
            />
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-brand-light">
        <div className="container-x py-12">
          <div className="bg-white rounded-lg overflow-hidden border border-brand-light">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.mapsQuery)}&output=embed`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konum"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  cta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  cta?: { href: string; label: string; icon?: React.ComponentType<{ className?: string }> };
}) {
  const CtaIcon = cta?.icon;
  return (
    <div className="bg-white border border-brand-light rounded-lg p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-brand-primary" />
        </div>
        <h3 className="font-bold text-brand-primary">{title}</h3>
      </div>
      <div className="text-brand-text space-y-1 mb-3">
        {lines.map((line, i) => (
          <div key={i} className={i === 0 ? "font-semibold" : "text-sm text-brand-muted"}>
            {line}
          </div>
        ))}
      </div>
      {cta && (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brand-accent hover:text-brand-accent-dark font-semibold text-sm"
        >
          {CtaIcon && <CtaIcon className="w-4 h-4" />}
          {cta.label} →
        </a>
      )}
    </div>
  );
}
