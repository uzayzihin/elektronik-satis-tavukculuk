import { Star } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white border-t border-brand-border">
      <div className="container-x pt-10 pb-12 md:pt-12 md:pb-14">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy tracking-[-0.03em] mb-3 leading-tight">
          Müşteri Değerlendirmeleri
        </h2>
        <p className="text-sm md:text-base text-brand-muted mb-8 italic">
          Restoran, kasap, şarküteri ve bireysel müşterilerimizin yorumları.
        </p>
      </div>

      <div className="-mt-4 pb-12 md:pb-16">
        <div className="container-x">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 scroll-px-[var(--container-padding,1rem)] -mx-4 px-4 md:mx-0 md:px-0">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex-shrink-0 w-[78%] sm:w-[55%] md:w-[40%] lg:w-[30%] snap-start bg-white border border-brand-border/60 hover:border-brand-accent/40 rounded-lg p-5 flex flex-col hover:shadow-sm transition-all duration-300"
              >
                <div className="flex mb-3" aria-label={`${t.rating} yıldız`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-brand-accent text-brand-accent"
                    />
                  ))}
                </div>
                <p className="text-brand-text text-sm leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="font-bold text-brand-navy text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-brand-muted mt-0.5">
                    {t.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
