import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";
export const metadata: Metadata = {
  title: "House Design Gallery | 3D Elevations & Floor Plans | HousePlanFiles",
  description: "Browse our gallery of beautiful house designs, 3D elevations, floor plans and architectural renders. Get inspired for your dream home design.",
  openGraph: { title: "House Design Gallery | HousePlanFiles", description: "Browse beautiful house designs, 3D elevations and floor plans.", url: "https://www.houseplanfiles.com/gallery", images: [{ url: "/3d.jpg", width: 1200, height: 630, alt: "House Design Gallery India" }] },
  twitter: { card: "summary_large_image", title: "House Design Gallery | HousePlanFiles", description: "Browse beautiful house designs, 3D elevations and floor plans.", images: ["/3d.jpg"] },
  alternates: { canonical: "https://www.houseplanfiles.com/gallery" },
};
const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.houseplanfiles.com" }, { "@type": "ListItem", position: 2, name: "Gallery", item: "https://www.houseplanfiles.com/gallery" }] };
export default function GalleryPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
<main>
      <div className="bg-white border-b py-6 px-4"><div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb"><ol className="flex items-center gap-2"><li><a href="/" className="hover:text-orange-500">Home</a></li><li className="text-gray-400">/</li><li className="text-orange-500 font-medium">Gallery</li></ol></nav>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">House Design Gallery</h1>
        <p className="mt-2 text-gray-600">Explore beautiful house designs, 3D elevations, floor plans and architectural renders from across India.</p>
      </div></div>
      <GalleryPageClient />
    </main>
</>);
}
