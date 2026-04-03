"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const ContactModalContext = createContext<{
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
}>({ contactOpen: false, setContactOpen: () => {} });

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ contactOpen, setContactOpen }}>
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  return useContext(ContactModalContext);
}
