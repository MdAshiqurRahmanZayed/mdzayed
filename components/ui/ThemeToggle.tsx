"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};

const options = [
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  // Reserve space before mount so the header does not shift.
  if (!mounted) return <div className={cn("h-8 w-[68px]", className)} />;

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn("relative flex h-8 w-[68px] items-center rounded-full border border-border bg-card p-0.5", className)}
    >
      {options.map(({ value, label, Icon }) => {
        const active = resolvedTheme === value;
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(value)}
            className={cn(
              "relative z-10 flex h-full flex-1 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-highlight",
              active ? "text-background" : "text-foreground/60 hover:text-foreground"
            )}
          >
            {active && (
              <motion.span
                layoutId="theme-thumb"
                transition={{ type: "spring", stiffness: 500, damping: 36 }}
                className="absolute inset-0 -z-10 rounded-full bg-highlight"
              />
            )}
            <Icon size={14} />
          </button>
        );
      })}
    </div>
  );
}
