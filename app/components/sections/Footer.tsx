import { Headphones, MessageCircle, Send, Wallet, X } from "lucide-react";
import { Logo } from "../ui/Logo";
import { TrustPills } from "../ui/TrustPills";

const LEGAL_LINKS = [
  { label: "All terms & conditions", href: "#" },
  { label: "Official contracts", href: "#" },
  { label: "Audits", href: "#" },
  { label: "Legal disclaimers", href: "#" },
];

const SOCIAL_ICONS = [
  { Icon: X, label: "Twitter", href: "#" },
  { Icon: Send, label: "Telegram", href: "#" },
];

const EXCHANGE_ICONS = [
  { Icon: Wallet, label: "CoinMarketCap", href: "#" },
  { Icon: MessageCircle, label: "CoinGecko", href: "#" },
  { Icon: Wallet, label: "Uniswap", href: "#" },
];

function IconButton({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#232333] text-white/80 transition-colors duration-300 hover:border-yellow-500 hover:text-yellow-500"
    >
      <Icon size={14} />
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-[#232333]">
      <div className="container mx-auto max-w-[1240px] px-4 py-10 md:px-8">
        {/* Row 1: brand + legal links */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <Logo />
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 text-sm text-[#6F6B81]">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-yellow-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Row 2: socials + exchanges */}
        <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-[#232333] pt-8 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#6F6B81]">Socials</span>
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  label={s.label}
                  Icon={s.Icon}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-[#6F6B81]">Exchanges</span>
            <div className="flex items-center gap-3">
              {EXCHANGE_ICONS.map((e) => (
                <IconButton
                  key={e.label}
                  href={e.href}
                  label={e.label}
                  Icon={e.Icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: trust pills + support */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-[#232333] pt-8 lg:flex-row">
          <div className="flex-1 lg:flex lg:justify-center">
            <TrustPills />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-300 hover:text-yellow-500"
          >
            <Headphones size={16} />
            Support
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-[#6F6B81]">
          © {new Date().getFullYear()} Celestium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
