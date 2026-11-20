"use client";

import { motion } from "framer-motion";
import { item } from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.header variants={item} className="mb-6">
      <h2 className="text-2xl font-medium tracking-tight">{title}</h2>
      {subtitle && <p className="text-sm text-foreground/60 mt-1">{subtitle}</p>}
      <div className="mt-4 h-px w-12 bg-highlight" />
    </motion.header>
  );
}
