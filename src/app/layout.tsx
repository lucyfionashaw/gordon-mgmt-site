import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/components/Providers";
import "./globals.css";

const saans = localFont({
  src: [
    { path: "../../public/fonts/saans/Saans-TRIAL-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/saans/Saans-TRIAL-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-saans",
  display: "swap",
});

const plantin = localFont({
  src: [
    { path: "../../public/fonts/plantin/PlantinMTProLight.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProRg.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProSmBd.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProSmBd.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/plantin/PlantinMTProBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plantin",
  display: "swap",
});

const meritocracy = localFont({
  src: [
    { path: "../../public/fonts/meritocracy/Meritocracy-Regular.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-meritocracy",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gordon Management — Energy & Infrastructure Advisory",
  description:
    "Gordon Management advises investors, companies, and governments on energy and infrastructure investments, economic development, and climate matters across Europe, the US, and Africa.",
  openGraph: {
    title: "Gordon Management — Energy & Infrastructure Advisory",
    description:
      "Gordon Management advises investors, companies, and governments on energy and infrastructure investments, economic development, and climate matters.",
    images: [{ url: "/images/opengraph.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gordon Management — Energy & Infrastructure Advisory",
    description:
      "Gordon Management advises investors, companies, and governments on energy and infrastructure investments, economic development, and climate matters.",
    images: ["/images/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${saans.variable} ${plantin.variable} ${meritocracy.variable} font-sans-main antialiased bg-[var(--color-bg)] text-[var(--color-dark)]`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
