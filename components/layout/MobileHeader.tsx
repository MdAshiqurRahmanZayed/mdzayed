"use client";

import Image from "next/image";
import Link from "next/link";
import { FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function MobileHeader() {
  const { profile } = portfolioData;

  return (
    <header className="flex items-center justify-between gap-3">
      <Link href="/" className="flex min-w-0 items-center gap-3">
        <Image
          src={profile.avatar}
          alt=""
          width={40}
          height={40}
          className="aspect-square rounded-xl object-cover"
        />
        <span className="min-w-0">
          <span className="block truncate text-sm font-medium">{profile.name}</span>
          <span className="block text-xs text-foreground/70">{profile.role}</span>
        </span>
      </Link>
      <div className="flex shrink-0 items-center gap-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="rounded-lg p-2 text-foreground/70 transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-highlight"
        >
          <FileText size={18} />
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
