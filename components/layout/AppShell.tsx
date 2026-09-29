"use client";

import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* LEFT SIDEBAR - DESKTOP / TOP ON MOBILE */}
      <div className="hidden md:block w-[300px] h-[calc(100%-40px)] overflow-hidden ml-5 mr-5 mt-5">
        <Sidebar />
      </div>

      {/* MAIN CONTENT - SCROLLABLE (Includes Sidebar on mobile) */}
      <div className="hide-scrollbar flex-1 md:h-[calc(100%-40px)] overflow-y-auto p-4 md:p-10 mt-0 md:mt-5 pb-24 md:pb-0">
        {/* Mobile: Sidebar first in scroll */}
        <div className="md:hidden mb-4">
          <Sidebar />
        </div>

        <div className="bg-background border border-border rounded-[20px] p-4 md:p-6">
          {children}
        </div>
      </div>

      {/* RIGHT NAVBAR - DESKTOP / BOTTOM FIXED ON MOBILE */}
      <div className="hidden md:flex w-[100px] h-full items-center justify-center">
        <Navbar />
      </div>

      {/* MOBILE: Fixed bottom navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border px-4 pt-3 z-50 pb-safe">
        <Navbar isMobileBottom />
      </div>
    </div>
  );
}
