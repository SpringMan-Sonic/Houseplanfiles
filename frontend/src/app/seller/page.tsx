import type { Metadata } from "next";
import ProtectedRoute from "@/components/ProtectedRoute";
import SellerDashboardClient from "@/components/seller/SellerDashboard";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function SellerPage() {
  return (
    <ProtectedRoute allowedRoles={["seller"]}>
      <SellerDashboardClient />
    </ProtectedRoute>
  );
}
