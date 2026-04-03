"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import RollText from "./RollText";
import { useContactModal } from "./ContactModalContext";

const links = [
  {
    label: "Slow Burn",
    href: "https://esgstuff.substack.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-middle mr-2">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lucyfionashaw",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-middle mr-2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X.com",
    href: "https://x.com/lucyfshaw",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-middle mr-2">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Podcast",
    href: "https://open.spotify.com/show/2GdZJbi4VE9lr2V8GdtG5b",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="inline-block align-middle mr-2">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    label: "lucyfshaw.com",
    href: "https://lucyfshaw.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
];

const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.04,
    },
  }),
};

function AnimatedFooterTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const words = ["Gordon", " ", "Management"];

  let charIndex = 0;

  return (
    <span
      ref={ref}
      className="font-sans-main text-[56px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-semibold leading-[0.85] tracking-[-2px] md:tracking-[-5.4px] text-[var(--color-maroon)] -mb-[0.1em]"
    >
      {words.map((word, wi) => {
        if (word === " ") {
          return <span key={`space-${wi}`}>&nbsp;</span>;
        }
        return (
          <span key={wi} className="inline-flex overflow-hidden py-[0.2em] -my-[0.2em]">
            {word.split("").map((char) => {
              const idx = charIndex++;
              return (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={letterVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

export default function Footer() {
  const { setContactOpen } = useContactModal();

  return (
    <section className="w-full p-4">
      {/* Large name */}
      <div className="px-0 py-4 md:p-6 md:pb-12">
        <AnimatedFooterTitle />
      </div>

      {/* Bottom row */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10 xl:gap-4 px-0 py-4 md:px-6 md:pb-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-sans-main text-lg xl:text-2xl font-normal tracking-[-0.48px] text-[var(--color-dark)] shrink-0"
        >
          Energy & infrastructure advisory
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-4 xl:gap-10"
        >
          {links.map((link, i) => {
            const linkContent = (
              <>
                {link.icon}
                <RollText text={link.label} />{" "}
                <span className="inline-block opacity-0 -translate-x-2 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="inline-block align-middle">
                    <path d="M3.33 8H12.67M12.67 8L8.67 4M12.67 8L8.67 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </>
            );

            if (link.href === "#contact") {
              return (
                <motion.button
                  key={link.label}
                  onClick={() => setContactOpen(true)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group/link font-sans-main text-[16px] md:text-[20px] font-medium tracking-[-0.4px] text-[var(--color-dark)] transition-colors flex items-center cursor-pointer"
                >
                  {linkContent}
                </motion.button>
              );
            }

            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="group/link font-sans-main text-[16px] md:text-[20px] font-medium tracking-[-0.4px] text-[var(--color-dark)] transition-colors flex items-center"
              >
                {linkContent}
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="px-0 md:px-6 py-4 border-t border-[var(--color-dark)]/10">
        <p className="font-sans-main text-sm text-[var(--color-muted)] tracking-[-0.2px]">
          &copy; {new Date().getFullYear()} Gordon Management. High St Kensington, London, UK.
        </p>
      </div>
    </section>
  );
}
