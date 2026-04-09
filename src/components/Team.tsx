"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="flex flex-col gap-10 md:gap-16 py-12 md:py-24 px-4 md:px-6 w-full">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-sans-main text-[48px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-semibold leading-[1.1] tracking-[-0.8px] md:tracking-[-1.6px] text-[var(--color-body)]"
      >
        Team
      </motion.h2>

      {/* Lucy's profile */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-8 lg:gap-10 w-full">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-5 relative w-full aspect-[3/4] md:h-[640px] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/about-headshot.png"
            alt="Lucy Shaw"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-7 flex flex-col justify-center gap-6"
        >
          <div className="flex flex-col gap-2">
            <h3 className="font-sans-main text-[32px] md:text-[48px] font-semibold leading-none tracking-[-0.8px] text-[var(--color-body)]">
              Lucy Shaw
            </h3>
            <p className="font-sans-main text-lg md:text-xl font-medium tracking-[-0.4px] text-[var(--color-maroon)]">
              Founder & CEO
            </p>
          </div>

          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Lucy Shaw works on how to make energy cheaper and cleaner around the world. She leads Gordon Management, an investment firm focused on energy transition in the UK and Africa. She advises institutional investors, energy companies, and governments on energy deals and strategies.
          </p>
          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Before founding Gordon Management, Lucy spent her career at Blackstone, the IFC (World Bank Group), BCG, and the United Nations. She has lived and worked on six continents and brings a global perspective to her work, bridging business and policy.
          </p>
          <p className="font-sans-main text-lg md:text-[22px] font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
            Lucy studied at Harvard Business School on a Fulbright Scholarship, where she graduated as a Baker Scholar in the top 5% of her class. She also holds a Masters in Public Administration from Harvard Kennedy School and a mechanical engineering degree from the University of Melbourne.
          </p>

          {/* Link to personal site */}
          <a
            href="https://lucyfshaw.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-2 self-start mt-2"
          >
            <span className="font-sans-main text-[16px] md:text-[18px] font-medium tracking-[-0.36px] text-[var(--color-maroon)] underline underline-offset-4 decoration-[var(--color-maroon)]/30 group-hover/link:decoration-[var(--color-maroon)] transition-colors">
              <RollText text="lucyfshaw.com" />
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--color-maroon)]">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function RollText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <span
            key={i}
            className="inline-block overflow-hidden h-[1.2em] leading-[1.2] align-middle"
          >
            <span
              className="inline-flex flex-col transition-transform duration-300 ease-in-out group-hover/link:-translate-y-1/2"
              style={{ transitionDelay: `${i * 25}ms` }}
            >
              <span className="inline-block leading-[1.2]">{char}</span>
              <span className="inline-block leading-[1.2]">{char}</span>
            </span>
          </span>
        )
      )}
    </>
  );
}
