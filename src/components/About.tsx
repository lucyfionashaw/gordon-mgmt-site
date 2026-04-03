"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="flex flex-col gap-10 md:gap-16 py-16 md:py-24 px-4 md:px-6 w-full">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-sans-main text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-none tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)] max-w-[1100px]"
      >
        Advising investors, companies, and governments on energy and infrastructure.
      </motion.h2>

      {/* Description paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Gordon Management advises investors, companies, and governments on energy and infrastructure investments, economic development, and climate matters. The firm operates across Europe, the US, and Africa.
          </p>
          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            We bring deep sector knowledge and a global network to help our clients navigate the energy transition with confidence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-5"
        >
          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            From fundraising support and investment due diligence to strategic market analysis and policy advisory, we connect capital with opportunity to accelerate cleaner, cheaper energy around the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
