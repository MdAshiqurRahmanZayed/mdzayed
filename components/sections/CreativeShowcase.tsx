"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* HEADER */}
      <motion.header variants={item}>
        <h2 className="text-2xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-highlight after:to-highlight after:rounded-full">
          Creative Showcase
        </h2>
      </motion.header>

      {/* PORTFOLIO ITEMS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {portfolioData.projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ y: -4 }}
            className="group rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--card-bg)] shadow-lg"
          >
            <div className="relative h-44 md:h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium px-4 py-2 bg-[var(--color-highlight)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project
                </span>
              </div>
            </div>
            <div className="p-4">
              <span className="text-xs text-[var(--color-highlight)] font-medium">{project.link.replace("https://", "")}</span>
              <h3 className="font-semibold text-base mt-1">{project.title}</h3>
              <p className="text-sm text-[var(--foreground)]/60 mt-1 line-clamp-2">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
