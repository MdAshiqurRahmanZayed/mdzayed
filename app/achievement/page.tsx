import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Achievement from "@/components/sections/Achievement";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Certifications and achievements of Md. Ashiqur Rahman Zayed, Software Engineer.",
};

export default function AchievementPage() {
  return (
    <AppShell>
      <Achievement />
    </AppShell>
  );
}
