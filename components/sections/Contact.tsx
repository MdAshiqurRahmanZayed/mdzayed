"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { showToast } from "@/components/layout/Toast";

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        showToast("success", "Message sent successfully!");
        form.reset();
      } else {
        showToast("error", "Failed to send message. Please try again.");
      }
    } catch {
      showToast("error", "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Let's Connect
        </h2>
      </motion.header>

      {/* MAP */}
      <motion.div variants={item} className="rounded-xl overflow-hidden border border-[var(--border)] h-[250px] md:h-[300px]">
        <iframe
          src={portfolioData.profile.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233013.5361534093!2d90.34772926521753!3d23.87107764999819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42a59476447%3A0x924a6ea3d6644b69!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1750000000000!5m2!1sen!2sbd"}
          width="100%"
          height="100%"
          style={{ border: 0, filter: "var(--map-filter)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* CONTACT DETAILS */}
      <motion.section variants={item}>
        <h3 className="text-lg font-semibold mb-4">Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <div className="p-2.5 rounded-xl bg-[var(--color-highlight)]/10 text-[var(--color-highlight)]">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-[var(--foreground)]/50 uppercase tracking-wider mb-0.5">Mobile</p>
              <a href={`tel:${portfolioData.profile.phone}`} className="text-sm font-medium hover:text-[var(--color-highlight)] transition-colors">
                {portfolioData.profile.phone}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <div className="p-2.5 rounded-xl bg-[var(--color-highlight)]/10 text-[var(--color-highlight)]">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs text-[var(--foreground)]/50 uppercase tracking-wider mb-0.5">Email</p>
              <a href={`mailto:${portfolioData.profile.email}`} className="text-sm font-medium hover:text-[var(--color-highlight)] transition-colors">
                {portfolioData.profile.email}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTACT FORM */}
      <motion.section variants={item}>
        <h3 className="text-lg font-semibold mb-5">Contact Form</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl px-4 py-3 text-base md:text-sm focus:border-[var(--color-highlight)] outline-none transition-colors placeholder:text-[var(--foreground)]/40"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl px-4 py-3 text-base md:text-sm focus:border-[var(--color-highlight)] outline-none transition-colors placeholder:text-[var(--foreground)]/40"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full bg-[var(--foreground)]/5 border border-[var(--border)] rounded-xl px-4 py-3 text-base md:text-sm focus:border-[var(--color-highlight)] outline-none transition-colors resize-none placeholder:text-[var(--foreground)]/40"
            required
          ></textarea>
          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""} />
          <input type="hidden" name="subject" value={`New Contact from ${portfolioData.profile.name}'s Portfolio`} />
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-highlight)] text-black px-6 py-3 rounded-xl font-semibold text-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.section>
    </motion.div>
  );
}
