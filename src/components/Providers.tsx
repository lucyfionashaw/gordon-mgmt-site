"use client";

import { ContactModalProvider } from "./ContactModalContext";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return <ContactModalProvider>{children}</ContactModalProvider>;
}
