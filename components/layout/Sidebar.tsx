"use client";

import Image from "next/image";
import { Mail, MapPin, Smartphone, Linkedin, Github, Twitter, Instagram, Facebook, Moon, Sun, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { profile } = portfolioData;
  const pathname = usePathname();
  const isRoot = pathname === "/";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="bg-sidebar border border-border rounded-2xl flex flex-col items-center p-6">
      <div className="flex flex-col items-center w-full relative">
        {mounted && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="absolute left-0 top-0 rounded-lg p-2 text-foreground/70 transition-colors hover:text-foreground z-20"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        )}

        <motion.div
          initial={isRoot ? { scale: 0.9, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 p-1.5 bg-border rounded-3xl"
        >
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-3xl object-cover aspect-square"
          />
        </motion.div>

        <div className="text-center mb-2">
          <h1 className="text-xl font-medium">{profile.name}</h1>
          <p className="text-sm px-4 py-1 rounded-xl bg-card border border-border font-medium mt-2 inline-block">
            {profile.role}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-border pt-6 space-y-4 mt-4">
        <ContactItem icon={Mail} label="Email" value={profile.email} />
        <ContactItem icon={Smartphone} label="Phone" value={profile.phone} />
        {profile.locationLink ? (
          <a
            href={profile.locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 transition-colors hover:text-highlight"
          >
<MapPin size={16} className="shrink-0 text-foreground/70" />
            <div className="flex-1 overflow-hidden">
              <p className="text-foreground/70 text-xs">Location</p>
              <p className="text-sm truncate">{profile.location}</p>
            </div>
          </a>
        ) : (
          <ContactItem icon={MapPin} label="Location" value={profile.location} />
        )}

        <div className="flex justify-center gap-3 pt-4">
          {profile.socials.map((social, idx) => {
            const iconMap: Record<string, any> = {
              LinkedIn: Linkedin,
              GitHub: Github,
              Facebook: Facebook,
              Twitter: Twitter,
              Instagram: Instagram,
            };
            const Icon = iconMap[social.label] || Github;
            return <SocialIcon key={idx} href={social.href} icon={Icon} />;
          })}
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full mt-4 p-2 rounded-xl transition-colors text-sm font-medium text-highlight bg-highlight/10 hover:bg-highlight hover:text-background"
        >
          <FileText size={16} />
          Resume
        </a>
      </div>
    </aside>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon size={16} className="shrink-0 text-foreground/70" />
      <div className="flex-1 overflow-hidden">
        <p className="text-foreground/70 text-xs">{label}</p>
        <p className="text-sm truncate">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string, icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg p-2 text-foreground/70 transition-colors hover:text-highlight"
    >
      <Icon size={16} />
    </motion.a>
  );
}