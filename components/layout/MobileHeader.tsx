"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const subscribe = () => () => {};

export default function MobileHeader() {
  const { profile } = portfolioData;
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

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
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
          className="rounded-lg p-2 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-highlight"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      )}
    </header>
  );
}
