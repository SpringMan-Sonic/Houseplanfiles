import type { Metadata } from "next";
export const metadata: Metadata = { robots: { index: false, follow: false } };
"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import SellerDashboardClient from "@/components/seller/SellerDashboard";
export default function SellerPage() {
  return <ProtectedRoute allowedRoles={["seller"]}><SellerDashboardClient /></ProtectedRoute>;
}
