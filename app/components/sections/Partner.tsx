import Image from "next/image";
import { ArrowUpRight, FileText } from "lucide-react";
import { GoldBorderCard } from "../ui/GoldBorderCard";
import { Reveal } from "../ui/Reveal";

function HorizontalArrow({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      width="71"
      height="8"
      viewBox="0 0 101 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      aria-hidden
    >
      {flipped ? (
        <>
          <path d="M5 4L101 4" stroke="#6A6A9F" strokeWidth="1" />
          <path
            d="M0.646447 3.64645C0.451184 3.84171 0.451184 4.15829 0.646447 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646447 3.64645Z"
            fill="#6A6A9F"
          />
        </>
      ) : (
        <>
          <path d="M0 4L96 4" stroke="#6A6A9F" strokeWidth="1" />
          <path
            d="M100.354 4.35356C100.549 4.1583 100.549 3.84172 100.354 3.64646L97.1716 0.464475C96.9763 0.269212 96.6597 0.269212 96.4645 0.464475C96.2692 0.659737 96.2692 0.976319 96.4645 1.17158L99.2929 4.00001L96.4645 6.82844C96.2692 7.0237 96.2692 7.34028 96.4645 7.53554C96.6597 7.7308 96.9763 7.7308 97.1716 7.53554L100.354 4.35356Z"
            fill="#6A6A9F"
          />
        </>
      )}
    </svg>
  );
}

function FoxNode({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-col">
      <div className="flex items-center justify-center rounded-full bg-[#131526]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-transparent">
          <Image
            src="/fox.5ac292ab.png"
            alt="fox-icon"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </div>
      </div>
      <span className="font-normal text-[#9BA9B4]">{label}</span>
    </div>
  );
}

function ContractPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[210px] self-center whitespace-nowrap rounded-md bg-[#5D5694] px-10 py-5 text-center text-sm font-medium">
      <span className="text-white">{children}</span>
    </div>
  );
}

function SidePartnerCard({
  title,
  reverse = false,
  flowLabel,
  nodeLabel,
  contractLabel,
}: {
  title: string;
  reverse?: boolean;
  flowLabel: string;
  nodeLabel: string;
  contractLabel: string;
}) {
  const fox = <FoxNode label={nodeLabel} />;
  const arrow = (
    <div className="mt-4 flex flex-1 flex-col items-center">
      <span className="mb-1 text-sm text-[#6A6A9F]">{flowLabel}</span>
      <HorizontalArrow flipped={reverse} />
    </div>
  );
  const contract = <ContractPill>{contractLabel}</ContractPill>;

  return (
    <GoldBorderCard className="w-fit" innerClassName="px-8 pt-8 pb-12">
      <h3 className="text-md mb-12 text-center font-bold text-white">
        {title}
      </h3>
      <div className="flex w-fit items-start gap-x-4">
        {reverse ? (
          <>
            {contract}
            {arrow}
            {fox}
          </>
        ) : (
          <>
            {fox}
            {arrow}
            {contract}
          </>
        )}
      </div>
    </GoldBorderCard>
  );
}

function CoreCenter() {
  return (
    <div className="relative flex flex-col items-center justify-center pt-12">
      <div
        className="absolute top-[calc(50%+24px)] left-[-90px] z-30 hidden md:block"
        aria-hidden
      >
        <HorizontalArrow />
      </div>
      <div
        className="rounded-md p-px transition-all duration-300"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #FFD700, #FFA500, #FF8C00)",
        }}
      >
        <div
          className="rounded-md px-10 py-5 text-lg font-medium whitespace-nowrap text-black transition-all hover:animate-pulse"
          style={{
            backgroundImage: "linear-gradient(to right, #C0830B, #FFE68B)",
          }}
        >
          Celestium CORE
        </div>
      </div>
      <div
        className="absolute top-[calc(50%+24px)] right-[-90px] z-30 hidden md:block"
        aria-hidden
      >
        <HorizontalArrow flipped />
      </div>
    </div>
  );
}

function FlowLoop({
  label,
  color,
  position,
}: {
  label: string;
  color: string;
  position: "top" | "bottom";
}) {
  const isTop = position === "top";
  return (
    <div
      className={[
        "absolute left-[20%] right-[25%]",
        isTop ? "top-[28%]" : "bottom-[12%]",
      ].join(" ")}
      aria-hidden
    >
      <svg
        viewBox="0 0 427 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        {isTop ? (
          <>
            <path
              d="M1 1V0.5H0.5V1H1ZM423 1H423.5V0.5H423V1ZM422.646 25.3536C422.842 25.5488 423.158 25.5488 423.354 25.3536L426.536 22.1716C426.731 21.9763 426.731 21.6597 426.536 21.4645C426.34 21.2692 426.024 21.2692 425.828 21.4645L423 24.2929L420.172 21.4645C419.976 21.2692 419.66 21.2692 419.465 21.4645C419.269 21.6597 419.269 21.9763 419.465 22.1716L422.646 25.3536ZM1.5 25V1H0.5V25H1.5ZM1 1.5H423V0.5H1V1.5ZM422.5 1V25H423.5V1H422.5Z"
              stroke={color}
              strokeWidth="1.4"
              strokeOpacity="0.55"
            />
            <circle cx="423" cy="13.7" r="3" fill={color} />
          </>
        ) : (
          <>
            <path
              d="M426 25V25.5H426.5V25H426ZM4 25H3.5V25.5H4V25ZM4.354 0.646C4.158 0.451 3.842 0.451 3.646 0.646L0.464 3.828C0.269 4.024 0.269 4.34 0.464 4.536C0.66 4.731 0.976 4.731 1.172 4.536L4 1.707L6.828 4.536C7.024 4.731 7.34 4.731 7.536 4.536C7.731 4.34 7.731 4.024 7.536 3.828L4.354 0.646ZM425.5 1V25H426.5V1H425.5ZM426 24.5H4V25.5H426V24.5ZM4.5 25V1H3.5V25H4.5Z"
              stroke={color}
              strokeWidth="1.4"
              strokeOpacity="0.55"
            />
            <circle cx="4" cy="12.3" r="3" fill={color} />
          </>
        )}
      </svg>
      <div
        className={[
          "absolute left-1/2 -translate-x-1/2 text-center text-xs",
          isTop ? "bottom-[150%] w-44" : "bottom-[-25px]",
        ].join(" ")}
        style={{ color }}
      >
        {label}
      </div>
    </div>
  );
}

function EcosystemDiagram() {
  return (
    <div className="relative hidden w-full xl:block">
      <div className="relative flex flex-col gap-x-16 md:flex-row">
        <SidePartnerCard
          title="Celestium staking partner's page"
          flowLabel="Staking"
          nodeLabel="Staker"
          contractLabel="Staking contract"
        />
        <CoreCenter />
        <SidePartnerCard
          reverse
          title="Celestium gaming partner's page"
          flowLabel="Betting"
          nodeLabel="Player"
          contractLabel="Game contract"
        />
      </div>

      <FlowLoop
        position="top"
        color="#7CAEFF"
        label="Liquidity for winnings & DAO voting of results"
      />
      <FlowLoop
        position="bottom"
        color="#D97F00"
        label="Lost bets and winning fees"
      />
    </div>
  );
}

function TryLink({ url, label }: { url: string; label: string }) {
  return (
    <div className="flex w-full max-w-md items-center justify-center gap-x-1 text-center">
      <p className="text-sm text-text-muted">Try:</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        <span className="font-medium gold-gradient-text">{label}</span>
        <ArrowUpRight size={16} className="ml-1 text-yellow-500" />
      </a>
    </div>
  );
}

type SolutionCard = {
  title: string;
  iconSrc: string;
  brand: string;
  href: string;
};

const SOLUTIONS: SolutionCard[] = [
  {
    title: "Decentralized gaming platform",
    iconSrc: "/gaming-icon.d30dc890.svg",
    brand: "celestium.games",
    href: "https://celestium.games",
  },
  {
    title: "Service backed staking platform",
    iconSrc: "/download.svg",
    brand: "celestium.network",
    href: "https://celestium.network",
  },
  {
    title: "Custom solution",
    iconSrc: "/custom-icon.1ea7d804.svg",
    brand: "celestium.network",
    href: "https://celestium.network",
  },
];

const PARTNER_BENEFITS = [
  "Gain from each bet with zero risk",
  "Lifetime license for all (future) games",
  "You can still benefit from affiliate",
];

function SolutionCardItem({ s, delay }: { s: SolutionCard; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col items-center gap-5 rounded-xl border border-[#232333] bg-[#131526] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-yellow-500/60">
        <h4 className="text-base font-semibold text-white">{s.title}</h4>
        <div className="flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <Image
            src={s.iconSrc}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </div>
        <a
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-8 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-yellow-500"
        >
          Contact us
        </a>
        <span className="text-xs text-[#6F6B81]">
          by{" "}
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium gold-gradient-text"
          >
            {s.brand}
          </a>
        </span>
      </div>
    </Reveal>
  );
}

export function Partner() {
  return (
    <section
      id="partner"
      className="scroll-mt-header relative overflow-hidden bg-transparent py-20 sm:py-28"
    >
      <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
        <Reveal>
          <EcosystemDiagram />
        </Reveal>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <TryLink url="https://celestium.network" label="celestium.network" />
          <TryLink url="https://celestium.games" label="celestium.games" />
        </div>

        <Reveal className="mt-24">
          <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-4xl">
            Become a Celestium partner
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-center text-lg leading-relaxed text-text-muted">
            To become a partner means to purchase a lifetime license for the
            whole Celestium ecosystem. Build your own independent DeFi business
            with a custom UI and brand, or use the option of UI rental and
            regional representation.
          </p>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start max-w-2xl margin-auto ">
              <div className="mx-auto w-full overflow-hidden rounded-2xl border border-yellow-500/70 bg-[#101323] p-2">
                <Image
                  src="/partner-preview.png"
                  alt="Celestium partner preview"
                  width={1000}
                  height={600}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>

              <div className="flex justify-between items-center">
                <ul className=" mt-10 max-w-2xl space-y-4">
                  {PARTNER_BENEFITS.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm text-[#d9d6e8]"
                    >
                      <span className="mt-0.5 text-lg leading-none text-yellow-500">
                        ✓
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="inline-flex items-center gap-3 rounded-lg bg-[#131625] px-6 py-4 text-sm font-medium text-white transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer ml-5 "
                  type="button"
                >
                  <FileText size={18} className="text-white" />
                  <span>Docs</span>
                  <ArrowUpRight size={18} className="text-yellow-500" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <SolutionCardItem key={s.title} s={s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
