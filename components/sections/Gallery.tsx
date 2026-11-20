"use client";

import { container, item } from "@/lib/motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  const next = () => setSelected((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  const prev = () => setSelected((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* HEADER */}
      <SectionHeader title="Pixels & Passion" />

      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((src, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="aspect-square relative overflow-hidden rounded-xl cursor-pointer border border-border"
            onClick={() => setSelected(idx)}
          >
            <img
              src={src}
              alt={`Gallery ${idx}`}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors" />
          </motion.div>
        ))}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-3 text-white/70 hover:text-highlight transition-colors bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-4 text-white/70 hover:text-highlight transition-colors bg-white/10 rounded-full"
            >
              <ChevronLeft size={28} />
            </button>

            <motion.img
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={photos[selected]}
              alt={`Gallery ${selected}`}
              className="max-h-[80vh] max-w-[85vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-4 text-white/70 hover:text-highlight transition-colors bg-white/10 rounded-full"
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-8 text-white/60 text-sm font-medium">
              {selected + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
