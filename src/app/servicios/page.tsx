import { ServicesCatalog } from "@/components/ServicesCatalog";

import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/servicios");

export default function ServiciosPage() {
  return (
    <>
      <ServicesCatalog />
    </>
  );
}
