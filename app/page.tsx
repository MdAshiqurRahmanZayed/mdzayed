"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Achievements from "@/components/sections/Achievements";

type Section = "About" | "Resume" | "Portfolio" | "Achievements" | "Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("About");

  const renderSection = () => {
    switch (activeSection) {
      case "About": return <About />;
      case "Resume": return <Resume />;
      case "Portfolio": return <Portfolio />;
      case "Achievements": return <Achievements />;
      case "Contact": return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* LEFT SIDEBAR - FIXED */}
      <div className="w-[300px] h-[calc(100%-40px)] overflow-hidden ml-5 mr-5 mt-5">
        <Sidebar />
      </div>
      
      {/* MAIN CONTENT - SCROLLABLE */}
      <div className="hide-scrollbar flex-1 h-[calc(100%-40px)] overflow-y-auto p-10 mr-5 mt-5">
        <div className="bg-background border border-border rounded-[20px] p-6">
          {renderSection()}
        </div>
      </div>

      {/* RIGHT NAVBAR - FIXED */}
      <div className="w-[100px] h-full flex items-center justify-center">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
    </div>
  );
}