import Link from "next/link";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-white">
      <section className="border-b border-brand-border">
        <div className="container-x py-10 md:py-14">
          <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.18em] text-brand-muted mb-3">
            <Link href="/" className="hover:text-brand-primary">
              Anasayfa
            </Link>{" "}
            · Yasal
          </p>
          <h1
            className="font-extrabold uppercase tracking-tight text-brand-navy leading-none"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-2xl text-brand-text/80 leading-relaxed">
              {intro}
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="container-x py-10 md:py-14 max-w-3xl prose-legal text-brand-text leading-relaxed text-[15px]">
          {children}
        </div>
      </section>
    </article>
  );
}
