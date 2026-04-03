"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import LogoCarousel from "@/components/LogoCarousel";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1440px]">
          <About />
        </div>
      </div>

      <LogoCarousel />

      <div className="flex flex-col items-center">
        <div className="w-full max-w-[1440px]">
          <Services />
          <Team />
        </div>
      </div>

      <Newsletter />
      <Footer />
      <ContactModal />
    </>
  );
}
