import type { Metadata } from "next";
import { Suspense } from "react";
import CityPartnersPageClient from "@/components/CityPartnersPageClient";

export const metadata: Metadata = {
  title: "City Contractors | Verified Construction Partners Across India | HousePlanFiles",
  description: "Find verified city contractors and construction partners in your city across India. Connect with trusted builders for quality home construction.",
  keywords: ["city contractors india", "construction partners", "builders near me", "verified contractors", "house construction india"],
  openGraph: {
    title: "City Contractors | HousePlanFiles",
    description: "Find verified construction partners in your city across India.",
    url: "https://www.houseplanfiles.com/contractors",
    images: [{ url: "/contractor.jpeg", width: 1200, height: 630, alt: "City Contractors India" }],
  },
  alternates: { canonical: "https://www.houseplanfiles.com/contractors" },
};

export default function ContractorsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading contractors...</div>}>
      <CityPartnersPageClient />
    </Suspense>
  );
}
