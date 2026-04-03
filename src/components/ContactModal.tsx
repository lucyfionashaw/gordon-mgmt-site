"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useContactModal } from "./ContactModalContext";
import RollText from "./RollText";

export default function ContactModal() {
  const { contactOpen, setContactOpen } = useContactModal();

  return (
    <AnimatePresence>
      {contactOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setContactOpen(false)}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
          >
            <div className="relative bg-[var(--color-beige)] rounded-2xl max-w-[680px] w-full overflow-hidden shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setContactOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Content */}
                <div className="flex flex-col gap-6 p-8 md:p-10 flex-1">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-sans-main text-[28px] md:text-[36px] font-semibold leading-none tracking-[-0.72px] text-[var(--color-body)]">
                      Get in touch
                    </h3>
                    <p className="font-sans-main text-base md:text-lg font-normal leading-[1.5] tracking-[-0.24px] text-[var(--color-text-primary)]">
                      Interested in working together? We&apos;d love to hear from you.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="mailto:lshaw@gordonmgmt.co.uk"
                      className="group/link inline-flex items-center gap-2"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-maroon)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 7L13.03 12.7a1.94 1.94 0 01-2.06 0L2 7" />
                      </svg>
                      <span className="font-sans-main text-[16px] md:text-[18px] font-medium tracking-[-0.36px] text-[var(--color-maroon)] underline underline-offset-4 decoration-[var(--color-maroon)]/30 group-hover/link:decoration-[var(--color-maroon)] transition-colors">
                        <RollText text="lshaw@gordonmgmt.co.uk" />
                      </span>
                    </a>

                    <p className="font-sans-main text-sm md:text-base text-[var(--color-muted)] tracking-[-0.2px]">
                      High St Kensington, London, UK
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a href="https://www.linkedin.com/in/lucyfionashaw" target="_blank" rel="noopener noreferrer" className="group/link font-sans-main text-[14px] md:text-[16px] font-medium tracking-[-0.32px] text-[var(--color-dark)] flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      <RollText text="LinkedIn" />
                    </a>
                    <a href="https://x.com/lucyfshaw" target="_blank" rel="noopener noreferrer" className="group/link font-sans-main text-[14px] md:text-[16px] font-medium tracking-[-0.32px] text-[var(--color-dark)] flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <RollText text="X.com" />
                    </a>
                    <a href="https://esgstuff.substack.com" target="_blank" rel="noopener noreferrer" className="group/link font-sans-main text-[14px] md:text-[16px] font-medium tracking-[-0.32px] text-[var(--color-dark)] flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
                      <RollText text="Substack" />
                    </a>
                  </div>
                </div>

                {/* Portrait */}
                <div className="hidden md:block w-[240px] shrink-0 p-4 pl-0">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <Image
                      src="/images/contact-portrait.jpg"
                      alt="Lucy Shaw"
                      fill
                      className="object-cover object-top"
                      sizes="240px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
