import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Md. Ashiqur Rahman Zayed, Software Engineer based in Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <AppShell>
      <Contact />
    </AppShell>
  );
}
