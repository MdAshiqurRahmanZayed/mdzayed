"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-6 px-4 py-4 md:flex-row md:gap-8 md:px-6 md:py-8">
      <div className="hidden w-[300px] shrink-0 md:block">
        <div className="sticky top-8">
          <Sidebar />
        </div>
      </div>

      <div className="md:hidden">
        <Sidebar />
      </div>

      <main className="min-w-0 flex-1 pb-24 md:pb-0">{children}</main>

      <div className="hidden shrink-0 md:block">
        <div className="sticky top-8">
          <Navbar />
        </div>
      </div>

      <div className="pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 px-4 pt-3 backdrop-blur-sm md:hidden">
        <Navbar isMobileBottom />
      </div>
    </div>
  );
}
