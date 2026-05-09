"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Briefcase, School } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Resume() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-10"
    >
      {/* HEADER */}
      <motion.header variants={item}>
        <h2 className="text-2xl font-semibold mb-6 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-gradient-to-r after:from-highlight after:to-highlight after:rounded-full">
          Career Snapshot
        </h2>
      </motion.header>

      {/* EXPERIENCE */}
      <motion.section variants={item}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-highlight/10 text-highlight">
            <Briefcase size={18} />
          </div>
          <h3 className="text-lg font-semibold">Experience</h3>
        </div>
        
        <div className="ml-7 border-l border-border pl-8 space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative before:content-[''] before:absolute before:-left-[41px] before:top-2 before:w-3 before:h-3 before:bg-highlight before:rounded-full before:shadow-[0_0_0_4px_var(--border)]"
            >
              <h4 className="font-semibold text-base">{exp.company}</h4>
              <p className="text-highlight text-sm mb-1">{exp.period}</p>
              <p className="text-sm font-medium mb-2">{exp.role}</p>
              <div className="text-foreground/60 text-sm space-y-1">
                {(Array.isArray(exp.description) ? exp.description : [exp.description]).map((point, i) => (
                  <p key={i} className="pl-4 relative before:content-['•'] before:absolute before:left-0">{point}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section variants={item}>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-highlight/10 text-highlight">
            <School size={18} />
          </div>
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
        
        <div className="ml-7 border-l border-border pl-8 space-y-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative before:content-[''] before:absolute before:-left-[41px] before:top-2 before:w-3 before:h-3 before:bg-highlight before:rounded-full before:shadow-[0_0_0_4px_var(--border)]"
            >
              <h4 className="font-semibold text-base">{edu.institution}</h4>
              <p className="text-sm font-medium mb-2">{edu.degree}</p>
              <p className="text-foreground/60 text-sm">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section variants={item}>
        <h3 className="text-lg font-semibold mb-5">My Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.skills.map((skillGroup) => (
            <div key={skillGroup.name}>
              <h4 className="text-sm font-medium text-foreground/70 mb-3">{skillGroup.name}</h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-foreground/5 text-foreground/80 px-3 py-1.5 rounded-lg text-sm border border-border hover:border-highlight hover:text-highlight transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
}
