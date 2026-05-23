import type { Metadata } from "next";
import ProtectedRoute from "@/components/ProtectedRoute";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function SellerPage() {
  return (
    <ProtectedRoute allowedRoles={["seller"]}>
      <SellerDashboardPage />
    </ProtectedRoute>
  );
}
