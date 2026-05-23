
import { use } from "react";
import ResetPasswordPageClient from "@/components/ResetPasswordPageClient";

export default function ResetPasswordPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = use(params);
  return <ResetPasswordPageClient token={resolvedParams.token} />;
}
