"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCircle, FileText, Briefcase, Trophy, Mail } from "lucide-react";

type NavbarProps = {
  isMobileBottom?: boolean;
};

const navItems: { href: string; icon: React.ReactNode; label: string }[] = [
  { href: "/", icon: <UserCircle size={20} />, label: "About" },
  { href: "/career", icon: <FileText size={20} />, label: "Career" },
  { href: "/creative-showcase", icon: <Briefcase size={20} />, label: "Creative" },
  { href: "/achievement", icon: <Trophy size={20} />, label: "Achievement" },
  { href: "/contact", icon: <Mail size={20} />, label: "Contact" },
];

export default function Navbar({ isMobileBottom }: NavbarProps) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (isMobileBottom) {
    return (
      <nav className="w-full">
        <ul className="flex justify-around items-center gap-1">
          {navItems.map(({ href, icon, label }) => (
            <li key={href}>
              <Link href={href}>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 min-h-12 min-w-11 px-3 py-2 rounded-lg transition-colors",
                    isActive(href) ? "bg-highlight/10 text-highlight" : "text-foreground/50"
                  )}
                  aria-label={label}
                >
                  {icon}
                  <span className="text-[10px] font-medium">{label}</span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav className="bg-card border border-border rounded-2xl p-2">
      <ul className="hidden md:flex flex-col gap-2">
        {navItems.map(({ href, icon, label }) => (
          <li key={href} className="relative group">
            <Link href={href}>
              <motion.div
                className={cn(
                  "transition-colors p-2 rounded-lg",
                  isActive(href) ? "bg-highlight/10 text-highlight" : "text-foreground/60 hover:text-foreground"
                )}
                aria-label={label}
              >
                {icon}
              </motion.div>
            </Link>
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-card border border-border rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
