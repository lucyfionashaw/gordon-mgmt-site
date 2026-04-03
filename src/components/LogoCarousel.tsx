"use client";

import Image from "next/image";

const allLogos = [
  // Past organisations
  { name: "Blackstone", src: "/logos/blackstone.svg", className: "" },
  { name: "IFC", src: "/logos/ifc.svg", className: "!h-6 md:!h-9" },
  { name: "Actis", src: "/logos/actis-full.svg", className: "!h-8 md:!h-12" },
  { name: "Harvard Business School", src: "/logos/edu-1.svg", className: "" },
  { name: "BCG", src: "/logos/bcg.svg", className: "!h-6 md:!h-9" },
  { name: "Harvard Kennedy School", src: "/logos/hks-logo.svg", className: "!h-6 md:!h-9" },
  { name: "CrossBoundary", src: "/logos/crossboundary-logo.svg", className: "" },
  { name: "UN WFP", src: "/logos/wfp-logo.svg", className: "!h-12 md:!h-16 rounded" },
  { name: "Vena Energy", src: "/logos/vena-group.png", className: "" },
  // Clients
  { name: "Octopus Energy Generation", src: "/logos/oe-generation.svg", className: "" },
  { name: "Denham Capital", src: "/logos/denham-capital.svg", className: "!h-6 md:!h-8" },
  { name: "SALT", src: "/logos/salt-logo.png", className: "!h-6 md:!h-8" },
  { name: "BasiGo", src: "/logos/basigo-logo.webp", className: "" },
  { name: "Globeleq", src: "/logos/globeleq.svg", className: "" },
];

export default function LogoCarousel() {
  return (
    <section className="w-full overflow-hidden py-8 md:py-12">
      <h3 className="font-sans-main text-lg md:text-2xl font-medium tracking-[-0.48px] text-[var(--color-dark)]/60 text-center mb-6 md:mb-10">
        Our team has experience with a diverse range of global organisations
      </h3>
      <div className="flex animate-scroll w-max">
        {allLogos.map((logo) => (
          <div
            key={logo.name}
            className="flex items-center justify-center h-20 md:h-32 px-8 md:px-14 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={56}
              className={`h-9 md:h-14 w-auto object-contain opacity-100 ${logo.className}`}
            />
          </div>
        ))}
        {allLogos.map((logo) => (
          <div
            key={`dup-${logo.name}`}
            className="flex items-center justify-center h-20 md:h-32 px-8 md:px-14 shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={140}
              height={56}
              className={`h-9 md:h-14 w-auto object-contain opacity-100 ${logo.className}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
