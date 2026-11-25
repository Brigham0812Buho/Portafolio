import { Contact } from "@/components/Contact";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/contacto");

export default function ContactoPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}
