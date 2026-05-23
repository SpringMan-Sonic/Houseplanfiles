import type { Metadata } from "next";
import ContactUsClient from "@/components/ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | HousePlanFiles - House Plans & Architecture",
  description: "Contact HousePlanFiles for house plan queries, architect connections or custom design requests. Call +91 9755248864 or email us.",
  openGraph: {
    title: "Contact HousePlanFiles",
    description: "Get in touch for house plan queries and custom design requests.",
    url: "https://www.houseplanfiles.com/contact",
    images: [{ url: "/logo1.png", width: 800, height: 600, alt: "Contact HousePlanFiles" }],
  },
  twitter: { card: "summary", title: "Contact HousePlanFiles", description: "Get in touch for house plan queries." },
  alternates: { canonical: "https://www.houseplanfiles.com/contact" },
};

const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.houseplanfiles.com" }, { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://www.houseplanfiles.com/contact" }] };

export default function ContactPage() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
<main>
      <div className="bg-white border-b py-6 px-4"><div className="max-w-7xl mx-auto">
        <nav className="text-sm text-gray-500 mb-2" aria-label="Breadcrumb"><ol className="flex items-center gap-2"><li><a href="/" className="hover:text-orange-500">Home</a></li><li className="text-gray-400">/</li><li className="text-orange-500 font-medium">Contact Us</li></ol></nav>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Contact HousePlanFiles</h1>
        <p className="mt-2 text-gray-600 max-w-2xl">Have a query about house plans, architects, or custom design? We are here to help.</p>
      </div></div>
      <ContactUsClient />
    </main>
</>);
}
