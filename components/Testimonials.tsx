import { Quote, Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="container-x py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
            Müşteri Yorumları
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary leading-tight">
            Bizi Tercih Edenler Ne Diyor?
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-brand-primary">
              4.9/5 — 1000+ memnun müşteri
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-brand-light border border-brand-light rounded-lg p-6 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-accent mb-3" />
              <p className="text-brand-text leading-relaxed text-sm flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-brand-primary text-sm">{t.name}</div>
                  <div className="text-xs text-brand-muted">{t.role}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
