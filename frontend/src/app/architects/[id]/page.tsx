import type { Metadata } from "next";
import ArchitectProfilePageClient from "@/components/ArchitectProfilePageClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://houseplansfiles-backend.vercel.app";
  try {
    const res = await fetch(`${BACKEND_URL}/api/users/architects/${resolvedParams.id}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    const arch = data?.architect || data;
    if (!arch) return { title: "Architect Profile | HousePlanFiles" };
    return {
      title: `${arch.name} - ${arch.city || "India"} Architect | HousePlanFiles`,
      description: `View portfolio and projects of ${arch.name}${arch.companyName ? `, ${arch.companyName}` : ""}${arch.city ? ` based in ${arch.city}` : ""}. Contact for custom house plans and design services.`,
      alternates: { canonical: `https://www.houseplanfiles.com/architects/${resolvedParams.id}` },
    };
  } catch { return { title: "Architect Profile | HousePlanFiles" }; }
}

export default async function ArchitectProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.houseplanfiles.com" },
      { "@type": "ListItem", position: 2, name: "Architects", item: "https://www.houseplanfiles.com/architects" },
      { "@type": "ListItem", position: 3, name: "Architect Profile", item: `https://www.houseplanfiles.com/architects/${resolvedParams.id}` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
<main>
        <div className="bg-white border-b py-3 px-4">
          <div className="max-w-7xl mx-auto">
            <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-orange-500">Home</a></li>
                <li className="text-gray-400">/</li>
                <li><a href="/architects" className="hover:text-orange-500">Architects</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-orange-500 font-medium">Profile</li>
              </ol>
            </nav>
          </div>
        </div>
        <ArchitectProfilePageClient architectId={resolvedParams.id} />
      </main>
</>
  );
}
