"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Trophy, GraduationCap } from "lucide-react";

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

export default function Achievements() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {/* HEADER */}
      <motion.header variants={item}>
        <h2 className="text-2xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-highlight after:to-highlight after:rounded-full">
          Achievements & Certifications
        </h2>
      </motion.header>

      {/* ACHIEVEMENTS */}
      {portfolioData.achievements && portfolioData.achievements.length > 0 && (
        <motion.section variants={item}>
          <h3 className="text-lg font-semibold mb-4 inline-flex items-center gap-2">
            <Trophy size={20} className="text-highlight" />
            Achievements
          </h3>
          <div className="space-y-3">
            {portfolioData.achievements.map((achievement, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-sm text-highlight">{achievement.title}</h4>
                <p className="text-sm text-foreground/60 mt-1">{achievement.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CERTIFICATIONS */}
      {portfolioData.certifications && portfolioData.certifications.length > 0 && (
        <motion.section variants={item}>
          <h3 className="text-lg font-semibold mb-4 inline-flex items-center gap-2">
            <GraduationCap size={20} className="text-highlight" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {portfolioData.certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-card border border-border hover:border-highlight hover:text-highlight transition-colors text-sm"
              >
                {cert.title}
              </a>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
  );
}