import type { Metadata } from "next";
import ProtectedRoute from "@/components/ProtectedRoute";
import ProfessionalDashboardClient from "@/components/professional/ProfessionalDashboard";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function ProfessionalPage() {
  return (
    <ProtectedRoute allowedRoles={["professional", "contractor", "architect"]}>
      <ProfessionalDashboardClient />
    </ProtectedRoute>
  );
}
