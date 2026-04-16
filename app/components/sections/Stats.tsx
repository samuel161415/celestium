import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GoldBorderCard } from "../ui/GoldBorderCard";
import { Reveal } from "../ui/Reveal";

function Pill({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-y-2 rounded-md border-2 border-[#232333] bg-transparent px-3 py-1.5">
      <span className="mr-2 text-xs text-[#6F6B81]">{label}:</span>
      {items.map((it, i) => (
        <span key={it} className="flex items-center">
          {i > 0 && <span className="mx-2 text-[#6F6B81]">+</span>}
          <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
            {it}
          </span>
        </span>
      ))}
    </div>
  );
}

function StatCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <GoldBorderCard className="h-full" innerClassName="flex flex-col items-center justify-center gap-4 p-6">
      <div className="flex w-full items-center justify-center">
        <p className="truncate text-sm font-bold text-[#7A76AB]">{label}</p>
      </div>
      {children}
    </GoldBorderCard>
  );
}

export function Stats() {
  return (
    <section
      id="stats"
      className="scroll-mt-header overflow-hidden bg-transparent lg:py-18"
    >
      <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
        <Reveal>
          <div className="flex flex-col items-center justify-center gap-3 text-center text-xs text-[#6F6B81] sm:flex-row md:text-start">
            <Pill label="Audited by" items={["Certik", "Ackee"]} />
            <Pill label="Powered by" items={["Polygon"]} />
            <Pill label="Protected by" items={["Chainlink"]} />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col-reverse items-center justify-center gap-4 lg:mt-20 lg:flex-row lg:gap-12 xl:gap-20">
          <Reveal direction="right" className="flex justify-center">
            <Image
              src="/suitcase-duck.427d2cc5.png"
              alt="Celestium suitcase mascot"
              width={320}
              height={320}
              className="h-auto w-64 select-none object-contain sm:w-80"
            />
          </Reveal>

          <Reveal direction="left" delay={0.1} className="mt-12 w-full lg:mt-0 lg:w-1/2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <StatCard label="Staking value">
                <span className="text-xl font-bold text-white">35.54B CELT</span>
              </StatCard>

              <StatCard label="Members">
                <div className="flex items-center justify-center gap-x-1 xl:gap-x-2">
                  <span className="text-xl font-bold text-white">80.56K</span>
                  <span className="text-xs text-white md:text-sm">members</span>
                  <span className="text-[#8274C5] md:mx-1">&amp;</span>
                  <span className="text-xl font-bold text-white">0</span>
                  <span className="text-xs text-white md:text-sm">partners</span>
                </div>
              </StatCard>

              <StatCard label="MarketCap">
                <span className="whitespace-nowrap text-2xl font-bold text-white">
                  301.18M USDT
                </span>
              </StatCard>

              <StatCard label="Liquidity">
                <span className="whitespace-nowrap text-2xl font-bold text-white">
                  582.98K USDT
                </span>
              </StatCard>
            </div>

            <div className="mt-6 flex items-center justify-center gap-1 text-sm text-[#6F6B81]">
              <span>Complete statistics: </span>
              <a href="#" className="inline-flex items-center">
                <span className="font-semibold gold-gradient-text">
                  celestium.io/statistics
                </span>
                <ArrowUpRight size={16} className="ml-1 text-yellow-400" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
