"use client";

import { container, item } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";

export default function About() {
  const { profile, about, industrialProjects, projects } = portfolioData;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-16"
    >
      {/* HERO */}
      <motion.section variants={item} className="space-y-6 pt-2 md:pt-6">
        <p className="text-sm text-foreground/60">
          {profile.role} · {profile.company}
        </p>
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          {about.bio}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-highlight px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            <FileText size={16} />
            Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-highlight hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* HIGHLIGHTS */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 md:grid-cols-4">
          {about.stats.map((stat) => (
            <Link key={stat.label} href={stat.href} className="group">
              <dt className="text-2xl font-medium tabular-nums tracking-tight transition-colors group-hover:text-highlight md:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-foreground/60">{stat.label}</dd>
            </Link>
          ))}
        </dl>
      </motion.section>

      {/* PROJECTS */}
      <motion.section variants={item}>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Projects</h2>
            <p className="mt-1 text-sm text-foreground/60">Selected personal projects</p>
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
                <p className="mt-1 text-xs text-foreground/60">{project.category}</p>
                <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* INDUSTRIAL WORKS */}
      <motion.section variants={item}>
        <div className="mb-2">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Industrial Works</h2>
          <p className="mt-1 text-sm text-foreground/60">Selected professional work</p>
        </div>
        <ul className="divide-y divide-border">
          {industrialProjects.map((work) => (
            <li key={work.title} className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:gap-8">
              <h3 className="text-base font-medium">{work.title}</h3>
              <div>
                <p className="text-sm leading-relaxed text-foreground/70">{work.description}</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-foreground/60">
                  {work.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    </motion.div>
  );
}
