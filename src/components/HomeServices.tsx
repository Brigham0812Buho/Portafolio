"use client";

import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";
import { Animated } from "@/components/Animated";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { quotationDocumentUrl, serviceCatalog } from "@/data/serviceCatalog";

export function HomeServices() {
  const { locale, translations } = useLanguage();
  const copy = translations.homeServices;
  const services = serviceCatalog[locale].services;

  return (
    <section id="servicios" className="border-t border-border py-20 md:py-28">
      <div className="page-container">
        <SectionHeader
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
          action={
            <Link href="/servicios" className="btn btn-secondary">
              {copy.viewCatalog}
              <FiArrowRight aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <Animated key={service.name} className="h-full">
              <article className="card flex h-full flex-col p-6">
                <h3 className="font-semibold text-foreground">{service.name}</h3>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-accent">{service.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Animated>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/servicios#requisitos" className="btn btn-primary">
            {copy.requestQuote}
            <FiArrowRight aria-hidden="true" />
          </Link>
          <a href={quotationDocumentUrl} download className="btn btn-ghost">
            <FiDownload aria-hidden="true" />
            {copy.downloadWord}
          </a>
        </div>
      </div>
    </section>
  );
}
