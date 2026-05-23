import type { Metadata } from "next";
import MarketPlaceClient from "@/components/MarketPlaceClient";
export const metadata: Metadata = {
  title: "Marketplace | Building Materials & Construction Products | HousePlanFiles",
  description: "Browse building materials, construction products and home improvement items from verified sellers on HousePlanFiles marketplace.",
  openGraph: { title: "Marketplace | HousePlanFiles", description: "Building materials and construction products from verified sellers.", url: "https://www.houseplanfiles.com/marketplace", images: [{ url: "/marketplace.png", width: 1200, height: 630, alt: "Building Materials Marketplace India" }] },
  twitter: { card: "summary_large_image", title: "Marketplace | HousePlanFiles", description: "Building materials from verified sellers.", images: ["/marketplace.png"] },
  alternates: { canonical: "https://www.houseplanfiles.com/marketplace" },
};
const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.houseplanfiles.com" }, { "@type": "ListItem", position: 2, name: "Marketplace", item: "https://www.houseplanfiles.com/marketplace" }] };
export default function MarketplacePage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
<main>
      <div className="bg-white border-b py-6 px-4"><div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb"><ol className="flex items-center gap-2"><li><a href="/" className="hover:text-orange-500">Home</a></li><li className="text-gray-400">/</li><li className="text-orange-500 font-medium">Marketplace</li></ol></nav>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Building Materials Marketplace</h1>
        <p className="mt-2 text-gray-600">Browse building materials and construction products from verified sellers across India.</p>
      </div></div>
      <MarketPlaceClient />
    </main>
</>);
}
