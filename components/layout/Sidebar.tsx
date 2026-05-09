"use client";

import Image from "next/image";
import { Mail, MapPin, Smartphone, Linkedin, Github, Twitter, Instagram, Facebook, Moon, Sun, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { profile } = portfolioData;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="bg-sidebar border border-border rounded-[20px] sticky top-10 flex flex-col items-center p-6 transition-all duration-300">
      <div className="flex flex-col items-center w-full relative">
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="absolute left-0 top-0 p-2 rounded-tl-2xl rounded-br-2xl bg-card text-[#C4704B] dark:text-[#F08060] border border-border hover:bg-border transition-colors z-20"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        )}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
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
          <h1 className="text-xl font-bold">{profile.name}</h1>
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
            className="flex items-center gap-3 hover:text-[#C4704B] dark:hover:text-[#F08060] transition-colors"
          >
<div className="p-2.5 rounded-xl bg-card border border-border text-[#C4704B] dark:text-[#F08060]">
              <MapPin size={16} />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider">Location</p>
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
          className="flex items-center justify-center gap-2 w-full mt-4 p-2 rounded-xl transition-all text-sm font-medium text-[#C4704B] bg-[#C4704B]/10 hover:bg-[#C4704B] hover:text-white dark:text-[#F08060] dark:bg-[#F08060]/10 dark:hover:bg-[#F08060]"
        >
          <FileText size={16} />
          Download Resume
        </a>
      </div>
    </aside>
  );
}

function ContactItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center gap-3"
    >
      <div className="p-2.5 rounded-xl bg-card border border-border text-[#C4704B] dark:text-[#F08060]">
        <Icon size={16} />
      </div>
      <div className="flex-1 overflow-hidden">
        <p className="text-foreground/60 text-xs font-semibold uppercase tracking-wider">{label}</p>
        <p className="text-sm truncate">{value}</p>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string, icon: any }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -3 }}
      className="p-2 rounded-lg bg-card border border-border text-foreground/70 hover:text-[#C4704B] dark:hover:text-[#F08060] hover:border-[#C4704B] dark:hover:border-[#F08060] transition-colors"
    >
      <Icon size={16} />
    </motion.a>
  );
}