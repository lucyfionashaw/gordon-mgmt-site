"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RollText from "./RollText";
import { useContactModal } from "./ContactModalContext";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setContactOpen } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#contact") {
      setContactOpen(true);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-[var(--color-maroon)] ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-sans-main text-[18px] md:text-[20px] font-semibold tracking-[-0.4px] text-[var(--color-beige)]"
        >
          Gordon Management
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="group/link font-sans-main text-[16px] font-medium tracking-[-0.32px] text-[var(--color-beige)]/80 transition-colors hover:text-[var(--color-beige)] cursor-pointer"
            >
              <RollText text={link.label} />
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[var(--color-beige)] transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[var(--color-beige)] transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[var(--color-beige)] transition-transform duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-6 pb-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-sans-main text-[20px] font-medium tracking-[-0.4px] text-[var(--color-beige)] text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
