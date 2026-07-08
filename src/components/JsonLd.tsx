interface JsonLdProps {
  id: string;
  data: Record<string, unknown>;
}

// A plain <script> tag (not next/script) so this renders in the initial
// server HTML — next/script's beforeInteractive/afterInteractive strategies
// insert the tag only after client JS runs, which crawlers that don't
// execute JS (and social link unfurlers) would never see.
export default function JsonLd({ id, data }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
