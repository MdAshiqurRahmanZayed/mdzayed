"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { UserCircle, FileText, Briefcase, Trophy, Mail } from "lucide-react";

type Section = "About" | "Resume" | "Portfolio" | "Achievements" | "Contact";

type NavbarProps = {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isMobileBottom?: boolean;
};

const navItems: { section: Section; icon: React.ReactNode; label: string }[] = [
  { section: "About", icon: <UserCircle size={20} />, label: "About" },
  { section: "Resume", icon: <FileText size={20} />, label: "Career" },
  { section: "Portfolio", icon: <Briefcase size={20} />, label: "Creative" },
  { section: "Achievements", icon: <Trophy size={20} />, label: "Achievement" },
  { section: "Contact", icon: <Mail size={20} />, label: "Contact" },
];

export default function Navbar({ activeSection, setActiveSection, isMobileBottom }: NavbarProps) {
  if (isMobileBottom) {
    return (
      <nav className="w-full">
        <ul className="flex justify-around items-center gap-1">
          {navItems.map(({ section, icon, label }) => (
            <li key={section}>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection(section)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 min-h-[48px] min-w-[44px] px-3 py-2 rounded-lg transition-all",
                  activeSection === section
                    ? "text-sky-blue-crayola"
                    : "text-foreground/50 hover:text-foreground/70"
                )}
                aria-label={section}
              >
                {icon}
                <span className="text-[10px] font-medium">{label}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="bg-card border border-border rounded-2xl p-2">
      <ul className="hidden md:flex flex-col gap-2">
        {navItems.map(({ section, icon, label }) => (
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
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
