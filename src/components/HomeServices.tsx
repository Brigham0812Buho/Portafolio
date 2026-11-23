"use client";

import Link from "next/link";
import { FiArrowRight, FiDownload, FiFileText } from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";
import { quotationDocumentUrl, serviceCatalog } from "@/data/serviceCatalog";

export function HomeServices() {
  const { locale, translations } = useLanguage();
  const copy = translations.homeServices;
  const services = serviceCatalog[locale].services;

  return (
    <section
      id="servicios"
      className="mx-auto max-w-[1400px] px-4 py-14 md:px-8 md:py-20"
    >
      <div className="rounded-[28px] border border-border bg-[linear-gradient(135deg,rgba(39,29,21,0.92),rgba(25,19,15,0.98))] p-6 shadow-[0_20px_60px_rgba(8,5,3,0.3)] md:p-9">
        <div className="mb-7 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-secondary">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted md:text-base">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="rounded-[20px] border border-border bg-background/55 p-5"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {service.name}
              </h3>
              <p className="mt-3 text-xl font-bold text-accent-secondary">
                {service.price}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-secondary px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            {copy.viewCatalog}
            <FiArrowRight aria-hidden="true" />
          </Link>
          <Link
            href="/servicios#requisitos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-accent-secondary px-5 py-3 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-background"
          >
            {copy.requestQuote}
          </Link>
          <a
            href={quotationDocumentUrl}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent-secondary"
          >
            <FiDownload aria-hidden="true" />
            {copy.downloadWord}
            <FiFileText aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
