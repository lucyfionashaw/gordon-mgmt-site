"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

function AnimatedHeroTitle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  let charIndex = 0;
  const words = [
    { text: "Gordon" },
    { text: "Management" },
  ];

  return (
    <div ref={ref} className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
      {words.map((word, wi) => (
        <span
          key={wi}
          className="font-sans-main text-[56px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-semibold leading-[0.9] tracking-[-2px] md:tracking-[-4px] text-[var(--color-beige)]"
        >
          <span className="inline-flex overflow-hidden py-[0.2em] -my-[0.2em]">
            {word.text.split("").map((char) => {
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
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full pb-4 pt-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-[500px] sm:h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden"
      >
        <Image
          src="/images/hero-energy.jpg"
          alt="Energy infrastructure"
          fill
          className="object-cover sepia-[0.4] brightness-[0.95]"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon-dark)]/70 via-[var(--color-maroon-dark)]/20 to-transparent" />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-8 md:pb-12">
          <div className="flex flex-col w-full gap-6">
            <AnimatedHeroTitle />
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-sans-main text-base md:text-xl font-normal tracking-[-0.4px] text-[var(--color-beige)]/80 text-left max-w-[700px]"
            >
              Energy & infrastructure advisory across Europe, the US, and Africa
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
