"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "../ui/Logo";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Become a partner", href: "#partner" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Statistics", href: "#stats" },
];

function UsFlag({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 513 342"
      className={className}
      aria-hidden
    >
      <path fill="#FFF" d="M0 0h513v341.3H0z" />
      <path
        fill="#D80027"
        d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288z"
      />
    </svg>
  );
}

const LANGUAGES = [{ code: "en", label: "English" }] as const;

function LanguageButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center space-x-2 rounded-md px-3 py-2 text-white/80 transition-colors duration-300 hover:bg-[#232333]/50 hover:text-yellow-500"
      >
        <UsFlag className="mr-1 mt-0.5 h-4 w-5 overflow-hidden rounded" />
        <span className="ml-2 text-sm font-medium">English</span>
        <ChevronDown
          size={14}
          className={`ml-1 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-md border border-[#232333] bg-[#131526] shadow-xl"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang.code === "en"}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-white/90 transition-colors duration-200 hover:bg-[#232333] hover:text-yellow-500"
                >
                  <UsFlag className="h-4 w-5 overflow-hidden rounded" />
                  <span className="font-medium">{lang.label}</span>
                  {lang.code === "en" && (
                    <Check size={14} className="ml-auto text-yellow-500" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled
            ? "border-b border-[#232333] bg-[#131526]/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent py-5",
        ].join(" ")}
      >
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center">
              <Logo />
            </a>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative whitespace-nowrap text-xs font-medium tracking-wide text-white/80 transition-colors duration-300 hover:text-yellow-500 lg:text-sm"
                >
                  {link.label}
                  <span className="absolute bottom-[-4px] left-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <LanguageButton />
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="rounded-md border border-[#232333] p-2 text-white transition-colors duration-300 hover:bg-[#232333]/50 lg:hidden"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col bg-[#131526] shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
            >
              <div className="flex items-center justify-between border-b border-[#232333] px-6 py-5">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="rounded-md border border-[#232333] p-2 text-white transition-colors duration-300 hover:bg-[#232333]/50"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col px-6 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-[#232333] py-4 text-base font-medium text-white/90 transition-colors duration-300 hover:text-yellow-500"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
