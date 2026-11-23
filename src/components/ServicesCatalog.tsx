"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiCheck,
  FiDownload,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import { useLanguage } from "@/components/LanguageProvider";
import { personalInfo } from "@/data/personalInfo";
import { quotationDocumentUrl, serviceCatalog } from "@/data/serviceCatalog";

type PricedService = (typeof serviceCatalog)["es"]["services"][number];

function PriceCard({ service }: { service: PricedService }) {
  return (
    <article className="rounded-[22px] border border-[rgba(213,178,124,0.18)] bg-[linear-gradient(135deg,rgba(40,29,21,0.95),rgba(31,24,19,0.98))] p-5 shadow-[0_16px_40px_rgba(8,5,3,0.28)]">
      <h3 className="text-lg font-semibold text-foreground">{service.name}</h3>
      <p className="mt-3 text-xl font-bold text-accent-secondary">{service.price}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
      {service.details && (
        <p className="mt-3 border-t border-border pt-3 text-xs leading-5 text-muted">
          {service.details}
        </p>
      )}
    </article>
  );
}

function CheckboxGroup({
  label,
  name,
  options,
  description,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  description?: string;
  onChange?: (value: string, checked: boolean) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-medium text-foreground">{label}</legend>
      {description && (
        <p className="mb-3 text-xs leading-5 text-muted">{description}</p>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-start gap-2 rounded-xl border border-border bg-background/70 p-3 text-sm text-muted transition hover:border-accent-secondary"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={(event) => onChange?.(option, event.target.checked)}
              className="mt-1 accent-accent-secondary"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ServicesCatalog() {
  const { locale } = useLanguage();
  const copy = serviceCatalog[locale];
  const { form } = copy;
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const syncDialogWithHash = () => {
      if (window.location.hash === "#requisitos") {
        if (!dialog.open) dialog.showModal();
      } else if (dialog.open) {
        dialog.close();
      }
    };

    syncDialogWithHash();
    window.addEventListener("hashchange", syncDialogWithHash);
    return () => window.removeEventListener("hashchange", syncDialogWithHash);
  }, []);

  const closeRequirements = () => {
    dialogRef.current?.close();
  };

  const clearRequirementsHash = () => {
    if (window.location.hash === "#requisitos") {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`
      );
    }
  };

  const toggleObjective = (value: string, checked: boolean) => {
    setSelectedObjectives((current) =>
      checked
        ? [...current, value]
        : current.filter((objective) => objective !== value)
    );
  };

  const sendRequirements = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const values = (name: string) =>
      formData
        .getAll(name)
        .map((item) => String(item).trim())
        .filter(Boolean);

    const details = [
      `${form.contactName.replace(" *", "")}: ${value("contactName")}`,
      value("company") && `${form.company}: ${value("company")}`,
      value("taxId") && `${form.taxId}: ${value("taxId")}`,
      value("requestDate") && `${form.requestDate}: ${value("requestDate")}`,
      value("phone") && `${form.phone}: ${value("phone")}`,
      value("email") && `${form.email}: ${value("email")}`,
      value("users") && `${form.users}: ${value("users")}`,
      value("roles") && `${form.roles}: ${value("roles")}`,
      values("objectives").length > 0 &&
        `${form.objectives}: ${values("objectives").join(", ")}`,
      value("otherObjective") &&
        `${form.otherObjective}: ${value("otherObjective")}`,
      values("modules").length > 0 &&
        `${form.modules}: ${values("modules").join(", ")}`,
      values("integrations").length > 0 &&
        `${form.integrations}: ${values("integrations").join(", ")}`,
      value("migration") && `${form.migration} ${value("migration")}`,
      value("hosting") && `${form.hosting}: ${value("hosting")}`,
      value("comments") && `${form.comments}: ${value("comments")}`,
    ].filter((detail): detail is string => Boolean(detail));

    const message = `${form.whatsappIntro}\n\n${details.join("\n")}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = personalInfo[locale].phone?.replace(/\D/g, "");
    const contactUrl = whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
      : `mailto:${personalInfo[locale].email}?subject=${encodeURIComponent(
          form.whatsappIntro
        )}&body=${encodedMessage}`;
    window.open(contactUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
    setSelectedObjectives([]);
    closeRequirements();
  };

  return (
    <main className="services-page">
      <section className="services-printable mx-auto max-w-[1200px] px-4 pb-14 pt-12 md:px-8 md:pt-20">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-secondary">
              {copy.eyebrow}
            </p>
            <h1 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted md:text-base">
              {copy.description}
            </p>
          </div>
          <div className="catalog-actions flex flex-wrap gap-3">
            <a
              href="#requisitos"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent-secondary px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              {copy.requestQuote}
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={quotationDocumentUrl}
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent-secondary px-5 py-3 text-sm font-semibold text-accent-secondary transition hover:bg-accent-secondary hover:text-background"
            >
              <FiDownload aria-hidden="true" />
              {copy.download}
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">{copy.webTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.services.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-foreground">{copy.customTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.customServices.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-foreground">{copy.extrasTitle}</h2>
            <p className="mt-2 text-sm text-muted">{copy.extrasDescription}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.extras.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <p className="mt-8 rounded-xl border border-border bg-background/70 p-4 text-sm leading-6 text-muted">
          {copy.priceNote}
        </p>
        <div className="mt-6 grid gap-2 border-t border-border pt-5 text-sm text-muted sm:grid-cols-2">
          <p className="font-semibold text-foreground">{copy.developer.name}</p>
          <p>{copy.developer.specialty}</p>
          <p>RUC: {copy.developer.taxId}</p>
          <p>WhatsApp: {copy.developer.phone}</p>
          <a
            href={`mailto:${copy.developer.email}`}
            className="text-accent-secondary underline underline-offset-4"
          >
            {copy.developer.email}
          </a>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        id="requisitos"
        aria-labelledby="requirements-title"
        onClose={clearRequirementsHash}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeRequirements();
        }}
        className="services-form m-auto max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-[24px] border border-border bg-background p-0 text-foreground shadow-[0_28px_90px_rgba(8,5,3,0.7)] backdrop:bg-black/75"
      >
        <div className="border-b border-border p-5 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-secondary">
                {form.eyebrow}
              </p>
              <h2
                id="requirements-title"
                className="text-2xl font-bold text-foreground md:text-3xl"
              >
                {form.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                {form.description}
              </p>
            </div>
            <button
              type="button"
              onClick={closeRequirements}
              aria-label={locale === "es" ? "Cerrar formulario" : "Close form"}
              className="rounded-full border border-border p-2 text-muted transition hover:border-accent-secondary hover:text-accent-secondary"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>
        </div>
        <form
          onSubmit={sendRequirements}
          className="space-y-7 bg-[linear-gradient(135deg,rgba(37,27,19,0.94),rgba(31,24,19,0.98))] p-5 md:p-7"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: form.company, name: "company" },
              { label: form.taxId, name: "taxId" },
              { label: form.contactName, name: "contactName", required: true },
              { label: form.requestDate, name: "requestDate", type: "date" },
              { label: form.phone, name: "phone", type: "tel" },
              { label: form.email, name: "email", type: "email" },
              { label: form.users, name: "users", type: "number", min: "1" },
            ].map(({ label, name, type = "text", required, min }) => (
              <label key={name} className="block text-sm text-foreground">
                <span className="mb-2 block">{label}</span>
                <input
                  name={name}
                  type={type}
                  min={min}
                  required={required}
                  className="w-full rounded-xl border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent-secondary"
                />
              </label>
            ))}
            <label className="block text-sm text-foreground md:col-span-2">
              <span className="mb-2 block">{form.roles}</span>
              <input
                name="roles"
                type="text"
                className="w-full rounded-xl border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent-secondary"
              />
            </label>
          </div>

          <CheckboxGroup
            label={form.objectives}
            name="objectives"
            options={form.objectivesOptions}
            onChange={toggleObjective}
          />
          {selectedObjectives.includes(form.objectivesOptions[5]) && (
            <label className="block text-sm text-foreground">
              <span className="mb-2 block">{form.otherObjective}</span>
              <input
                name="otherObjective"
                type="text"
                className="w-full rounded-xl border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent-secondary"
              />
            </label>
          )}

          <CheckboxGroup
            label={form.modules}
            name="modules"
            options={form.moduleOptions}
            description={form.modulesHint}
          />
          <CheckboxGroup
            label={form.integrations}
            name="integrations"
            options={form.integrationOptions}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm text-foreground">
              <span className="mb-2 block">{form.migration}</span>
              <select
                name="migration"
                defaultValue=""
                className="w-full rounded-xl border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent-secondary"
              >
                <option value="" disabled>
                  —
                </option>
                {form.migrationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-foreground">
              <span className="mb-2 block">{form.hosting}</span>
              <select
                name="hosting"
                defaultValue=""
                className="w-full rounded-xl border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent-secondary"
              >
                <option value="" disabled>
                  —
                </option>
                {form.hostingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm text-foreground">
            <span className="mb-2 block">{form.comments}</span>
            <textarea
              name="comments"
              rows={4}
              placeholder={form.commentsPlaceholder}
              className="w-full rounded-xl border border-border bg-background/90 px-3 py-3 text-sm text-foreground outline-none focus:border-accent-secondary"
            />
          </label>

          <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">{form.required}</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-secondary px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
            >
              <FiMessageCircle aria-hidden="true" />
              {form.submit}
              <FiCheck aria-hidden="true" />
            </button>
          </div>
        </form>
      </dialog>
    </main>
  );
}
