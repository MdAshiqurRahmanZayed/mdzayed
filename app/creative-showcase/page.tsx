import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import CreativeShowcase from "@/components/sections/CreativeShowcase";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and open-source projects by Md. Ashiqur Rahman Zayed, including a Django observability template and a job portal.",
};

export default function CreativeShowcasePage() {
  return (
    <AppShell>
      <CreativeShowcase />
    </AppShell>
  );
}
