"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* HEADER */}
      <motion.header variants={item}>
        <h2 className="text-2xl font-semibold mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-sky-blue-crayola after:to-sky-blue-crayola after:rounded-full">
          About Me
        </h2>
      </motion.header>

      {/* BIO */}
      <motion.section variants={item} className="space-y-4 text-foreground/80 leading-relaxed text-sm md:text-base">
        <p dangerouslySetInnerHTML={{
          __html: portfolioData.about.bio
            .replace(/{name}/g, `<span class="text-sky-blue-crayola font-semibold">${portfolioData.profile.name}</span>`)
            .replace(/{role}/g, `<span class="text-sky-blue-crayola font-semibold">${portfolioData.profile.role}</span>`)
            .replace(/{company}/g, `<span class="text-sky-blue-crayola font-semibold">${portfolioData.profile.company}</span>`)
        }} />
      </motion.section>

      {/* HIGHLIGHTS */}
      <motion.section variants={item}>
        <h3 className="text-lg font-semibold mb-4 inline-flex items-center gap-2">
          <Star size={20} className="text-sky-blue-crayola" />
          Highlights & Successes
        </h3>
        <div className="flex flex-wrap gap-4 md:gap-6">
          {portfolioData.about.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center min-w-[120px] p-4 md:p-6 rounded-xl bg-card border border-border"
            >
              <span className="text-2xl md:text-3xl font-bold text-sky-blue-crayola mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs text-foreground/60 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FEATURED PORTFOLIOS */}
      <motion.section variants={item}>
        <div className="mb-2">
          <h3 className="text-lg font-semibold inline-flex items-center gap-2">
            <Award size={20} className="text-sky-blue-crayola" />
            Projects
          </h3>
          <p className="text-sm text-foreground/50 mt-1">A glimpse into my professional journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {portfolioData.projects.slice(0, 2).map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -4 }}
              className="group rounded-xl overflow-hidden border border-border bg-card shadow-lg"
            >
              <div className="relative h-36 md:h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-sky-blue-crayola font-medium">{project.category}</span>
                <h4 className="font-semibold text-base mt-1">{project.title}</h4>
                <p className="text-sm text-foreground/60 mt-1 line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
