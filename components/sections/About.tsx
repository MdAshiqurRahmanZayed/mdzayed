"use client";

import { container, item } from "@/lib/motion";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, FileText, Star } from "lucide-react";

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12"
    >
      {/* HERO */}
      <motion.section variants={item} className="space-y-6 pt-2 md:pt-6">
        <p className="text-sm text-foreground/60">
          {portfolioData.profile.role} · {portfolioData.profile.company}
        </p>
        <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {portfolioData.profile.name}
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-foreground/70 md:text-lg">
          {portfolioData.about.bio.replace(/{name}/g, portfolioData.profile.name).replace(/{role}/g, portfolioData.profile.role).replace(/{company}/g, portfolioData.profile.company)}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-highlight px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <FileText size={16} />
            Resume
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-highlight hover:text-highlight"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.section>

      {/* HIGHLIGHTS */}
      <motion.section variants={item}>
        <h3 className="text-lg font-medium mb-4 inline-flex items-center gap-2">
          <Star size={20} className="text-highlight" />
          Highlights
        </h3>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {portfolioData.about.stats.map((stat) => (
            <Link key={stat.label} href={stat.href}>
              <motion.div
                variants={item}
                                className="flex flex-col items-center text-center min-w-[120px] h-full p-4 md:p-6 rounded-xl bg-card border border-border hover:border-highlight transition-colors"
              >
                <span className="text-2xl md:text-3xl font-medium tabular-nums text-highlight mb-2">
                  {stat.value}
                </span>
                <span className="text-xs text-foreground/60">
                  {stat.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* INDUSTRIAL WORKS */}
      <motion.section variants={item}>
        <div className="mb-2">
          <h3 className="text-lg font-medium inline-flex items-center gap-2">
            <Briefcase size={20} className="text-highlight" />
            Industrial Works
          </h3>
          <p className="text-sm text-foreground/50 mt-1">Selected professional work</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {portfolioData.industrialProjects.map((work) => (
            <motion.div
              key={work.title}
              variants={item}
                            className="rounded-xl border border-border bg-card p-4"
            >
              <h4 className="font-medium text-base">{work.title}</h4>
              <p className="text-sm text-foreground/60 mt-1">{work.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {work.tech.map((t) => (
                  <span key={t} className="bg-foreground/5 text-foreground/80 px-2 py-1 rounded-md text-xs border border-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FEATURED PORTFOLIOS */}
      <motion.section variants={item}>
        <div className="mb-2">
          <h3 className="text-lg font-medium inline-flex items-center gap-2">
            <Award size={20} className="text-highlight" />
            Projects
          </h3>
          <p className="text-sm text-foreground/50 mt-1">Selected personal projects</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {portfolioData.projects.slice(0, 2).map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
                            className="group rounded-xl overflow-hidden border border-border bg-card"
            >
              <div className="relative h-36 md:h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-highlight font-medium">{project.category}</span>
                <h4 className="font-medium text-base mt-1">{project.title}</h4>
                <p className="text-sm text-foreground/60 mt-1 line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
