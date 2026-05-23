import type { Metadata } from "next";
export const metadata: Metadata = { robots: { index: false, follow: false } };
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import ProfessionalDashboardClient from "@/components/professional/ProfessionalDashboard";
export default function ProfessionalPage() {
  return <ProtectedRoute allowedRoles={["professional", "contractor", "architect"]}><ProfessionalDashboardClient /></ProtectedRoute>;
}
