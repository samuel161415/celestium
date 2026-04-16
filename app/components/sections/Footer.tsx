import { X, GitBranch, MessageCircle, Send } from "lucide-react";
import { Logo } from "../ui/Logo";

const LEGAL_LINKS = [
  "All terms & conditions",
  "Official contracts",
  "Audits",
  "Legal disclaimers",
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4">
            <Logo />
            <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
              {[X, GitBranch, MessageCircle, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-[var(--color-gold)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-text-dim)] sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Celestium. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <span>
              Audited by{" "}
              <span className="text-[var(--color-text-muted)]">
                [Placeholder]
              </span>
            </span>
            <span>
              Powered by{" "}
              <span className="text-[var(--color-text-muted)]">
                [Placeholder]
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
