"use client";

import { container, item } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";

export default function About() {
  const { profile, about, experience, industrialProjects, projects } = portfolioData;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      {/* HERO */}
      <motion.section variants={item} className="space-y-6 pt-2 md:pt-6">
        <h1 className="max-w-2xl text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
          {about.headline}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          {about.bio}
        </p>

        {/* HIGHLIGHTS */}
        <ul className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 md:grid-cols-4">
          {about.stats.map((stat) => (
            <li key={stat.label}>
              <Link href={stat.href} className="group block">
                <span className="block text-2xl font-medium tabular-nums tracking-tight transition-colors group-hover:text-highlight md:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs text-foreground/70">{stat.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section variants={item}>
        <div className="mb-2 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Experience</h2>
            <p className="mt-1 text-sm text-foreground/70">Where I have worked</p>
          </div>
          <Link
            href="/career"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-highlight hover:underline underline-offset-4"
          >
            Full career
            <ArrowRight size={14} />
          </Link>
        </div>
        <ul className="divide-y divide-border">
          {experience.map((job) => (
            <li key={`${job.company}-${job.role}`} className="grid gap-1 py-5 md:grid-cols-[220px_1fr] md:gap-8">
              <p className="text-sm text-foreground/70">{job.period}</p>
              <div>
                <h3 className="text-base font-medium">{job.role}</h3>
                <p className="mt-0.5 text-sm text-foreground/70">{job.company}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* INDUSTRIAL WORKS */}
      <motion.section variants={item}>
        <div className="mb-2">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Industrial Works</h2>
          <p className="mt-1 text-sm text-foreground/70">Selected professional work</p>
        </div>
        <ul className="divide-y divide-border">
          {industrialProjects.map((work) => (
            <li key={work.title} className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8">
              <h3 className="text-base font-medium">{work.title}</h3>
              <div>
                <p className="text-sm leading-relaxed text-foreground/70">{work.description}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/70">
                  {work.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      {/* PROJECTS */}
      <motion.section variants={item}>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Projects</h2>
            <p className="mt-1 text-sm text-foreground/70">Selected personal projects</p>
          </div>
          <Link
            href="/creative-showcase"
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-highlight hover:underline underline-offset-4"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
            >
              <div className="relative h-40 w-full overflow-hidden border-b border-border md:h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium">{project.title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="mt-0.5 shrink-0 text-foreground/40 transition-colors group-hover:text-highlight"
                  />
                </div>
                <p className="mt-1 text-xs text-foreground/70">{project.category}</p>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* QUICK LINKS (mobile only; desktop has the sidebar) */}
      <motion.section variants={item} data-nosnippet className="md:hidden">
        <h2 className="mb-3 text-2xl font-medium tracking-tight">Get in touch</h2>
        <ul className="divide-y divide-border border-y border-border">
          {[
            { href: `mailto:${profile.email}`, label: profile.email, Icon: Mail, external: false },
            ...profile.socials.map((social) => ({
              href: social.href,
              label: social.label,
              Icon: social.label === "LinkedIn" ? Linkedin : Github,
              external: true,
            })),
            { href: "/resume.pdf", label: "Resume", Icon: FileText, external: true },
          ].map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 py-3.5 text-sm transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-highlight"
              >
                <Icon size={16} className="shrink-0 text-foreground/70" />
                <span className="min-w-0 flex-1 truncate">{label}</span>
                <ArrowUpRight size={14} className="shrink-0 text-foreground/40" />
              </a>
            </li>
          ))}
        </ul>
      </motion.section>
    </motion.div>
  );
}
