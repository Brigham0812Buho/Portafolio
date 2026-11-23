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
    <article className="card flex h-full flex-col p-6">
      <h3 className="font-semibold text-foreground">{service.name}</h3>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-accent">{service.price}</p>
      <p className="mb-5 mt-4 text-sm leading-relaxed text-muted">{service.description}</p>
      {service.details && (
        <p className="mt-auto border-t border-border pt-4 text-xs leading-5 text-subtle">
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
            className="flex cursor-pointer items-start gap-2.5 rounded-lg border border-border bg-background p-3 text-sm text-muted transition hover:border-border-strong has-[:checked]:border-accent/50 has-[:checked]:text-foreground"
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              onChange={(event) => onChange?.(option, event.target.checked)}
              className="mt-0.5 accent-[var(--accent)]"
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
      <section className="services-printable page-container pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">
              {copy.eyebrow}
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
              {copy.description}
            </p>
          </div>
          <div className="catalog-actions flex flex-wrap gap-3">
            <a
              href="#requisitos"
              className="btn btn-primary"
            >
              {copy.requestQuote}
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href={quotationDocumentUrl}
              download
              className="btn btn-secondary"
            >
              <FiDownload aria-hidden="true" />
              {copy.download}
            </a>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">{copy.webTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {copy.services.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">{copy.customTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.customServices.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">{copy.extrasTitle}</h2>
            <p className="mt-2 text-sm text-muted">{copy.extrasDescription}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {copy.extras.map((service) => (
              <PriceCard key={service.name} service={service} />
            ))}
          </div>
        </section>

        <p className="card mt-10 p-5 text-sm leading-6 text-muted">
          {copy.priceNote}
        </p>
        <div className="mt-8 grid gap-2 border-t border-border pt-6 text-sm text-muted sm:grid-cols-2">
          <p className="font-semibold text-foreground">{copy.developer.name}</p>
          <p>{copy.developer.specialty}</p>
          <p>RUC: {copy.developer.taxId}</p>
          <p>WhatsApp: {copy.developer.phone}</p>
          <a
            href={`mailto:${copy.developer.email}`}
            className="text-accent underline-offset-4 hover:underline"
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
        className="services-form m-auto max-h-[92vh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-2xl border border-border-strong bg-surface p-0 text-foreground shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="border-b border-border p-5 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow mb-2">
                {form.eyebrow}
              </p>
              <h2
                id="requirements-title"
                className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
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
              className="icon-btn h-9 w-9 shrink-0"
            >
              <FiX aria-hidden="true" />
            </button>
          </div>
        </div>
        <form
          onSubmit={sendRequirements}
          className="space-y-7 p-5 md:p-7"
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
                  className="field"
                />
              </label>
            ))}
            <label className="block text-sm text-foreground md:col-span-2">
              <span className="mb-2 block">{form.roles}</span>
              <input
                name="roles"
                type="text"
                className="field"
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
                className="field"
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
                className="field"
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
                className="field"
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
              className="field"
            />
          </label>

          <div className="flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">{form.required}</p>
            <button
              type="submit"
              className="btn btn-primary"
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
