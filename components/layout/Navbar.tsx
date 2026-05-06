"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { UserCircle, FileText, Briefcase, Trophy, Mail } from "lucide-react";

type Section = "About" | "Resume" | "Portfolio" | "Achievements" | "Contact";

type NavbarProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
};

const navItems: { section: Section; icon: React.ReactNode }[] = [
  { section: "About", icon: <UserCircle size={20} /> },
  { section: "Resume", icon: <FileText size={20} /> },
  { section: "Portfolio", icon: <Briefcase size={20} /> },
  { section: "Achievements", icon: <Trophy size={20} /> },
  { section: "Contact", icon: <Mail size={20} /> },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  return (
    <nav className="bg-card border border-border rounded-2xl p-2">
      {/* Desktop: Vertical icons */}
      <ul className="hidden md:flex flex-col gap-2">
        {navItems.map(({ section, icon }) => (
          <li key={section} className="relative group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section)}
              className={cn(
                "transition-all p-2 rounded-lg",
                activeSection === section
                  ? "text-sky-blue-crayola bg-sky-blue-crayola/10"
                  : "text-foreground/70 hover:text-foreground/90"
              )}
              aria-label={section}
            >
              {icon}
            </motion.button>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-card border border-border rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {section}
            </span>
          </li>
        ))}
      </ul>

      {/* Mobile: Horizontal text buttons */}
      <ul className="md:hidden flex flex-wrap gap-2 justify-center">
        {navItems.map(({ section, icon }) => (
          <li key={section}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(section)}
              className={cn(
                "transition-all px-3 py-2 rounded-lg flex items-center gap-2 text-sm",
                activeSection === section
                  ? "text-sky-blue-crayola bg-sky-blue-crayola/10"
                  : "text-foreground/70 hover:text-foreground/90"
              )}
              aria-label={section}
            >
              <span className="w-4 h-4">{icon}</span>
              {section}
            </motion.button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
