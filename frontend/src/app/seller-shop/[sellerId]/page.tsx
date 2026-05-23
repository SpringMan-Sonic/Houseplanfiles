import type { Metadata } from "next";
import SellerStorePageClient from "@/components/SellerStorePageClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function SellerShopPage({ params }: { params: Promise<{ sellerId: string }> }) {
  const resolvedParams = await params;
  return (
    <>
<main>
        <SellerStorePageClient />
      </main>
</>
  );
}
