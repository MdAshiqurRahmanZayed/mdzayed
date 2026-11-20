import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Career from "@/components/sections/Career";

export const metadata: Metadata = {
  title: "Career",
  description: "Work experience of Md. Ashiqur Rahman Zayed: Django and Odoo backend engineering across ERP, SaaS and investment platforms, plus education and skills.",
};

export default function CareerPage() {
  return (
    <AppShell>
      <Career />
    </AppShell>
  );
}
