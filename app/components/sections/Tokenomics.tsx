"use client";

import { ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
import { Reveal } from "../ui/Reveal";

type Slice = { label: string; value: number; color: string };

const SLICES: Slice[] = [
  { label: "Affiliate pool", value: 35, color: "#22c55e" },
  { label: "Founders team", value: 20, color: "#3b82f6" },
  { label: "Bonus pool", value: 15, color: "#f97316" },
  { label: "Initial airdrop pool", value: 15, color: "#facc15" },
  { label: "Partners pool", value: 15, color: "#ef4444" },
];

type LabelProps = {
  cx: number;
  cy: number;
  midAngle: number;
  outerRadius: number;
  index: number;
};

function renderLeaderLabel(props: unknown) {
  const { cx, cy, midAngle, outerRadius, index } = props as LabelProps;
  const slice = SLICES[index];
  if (!slice) return null;

  const RAD = Math.PI / 180;
  const sin = Math.sin(-midAngle * RAD);
  const cos = Math.cos(-midAngle * RAD);

  const startX = cx + outerRadius * cos;
  const startY = cy + outerRadius * sin;
  const elbowX = cx + (outerRadius + 28) * cos;
  const elbowY = cy + (outerRadius + 28) * sin;
  const isRight = cos >= 0;
  const endX = elbowX + (isRight ? 36 : -36);
  const textAnchor = isRight ? "start" : "end";

  return (
    <g>
      <path
        d={`M${startX},${startY}L${elbowX},${elbowY}L${endX},${elbowY}`}
        stroke={slice.color}
        strokeWidth={1}
        fill="none"
      />
      <circle cx={startX} cy={startY} r={2.5} fill={slice.color} />
      <text
        x={endX + (isRight ? 6 : -6)}
        y={elbowY}
        dy={4}
        textAnchor={textAnchor}
        fill="#e5e7eb"
        fontSize={13}
      >
        {slice.label}
      </text>
    </g>
  );
}

function CenterLabel() {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
      <span className="text-[12px] font-semibold uppercase tracking-widest text-white sm:text-sm">
        CELT TOKEN EMISSION
      </span>
      <span className="mt-1 font-mono text-sm text-[#a9a7bc] sm:text-base">
        777 777 777 CELT
      </span>
    </div>
  );
}

function ActionButton({
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
      className="inline-flex items-center gap-3 rounded-md border-2 border-yellow-500 bg-transparent px-7 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 hover:bg-yellow-500/10 hover:text-yellow-400"
    >
      {label}
      <Icon size={18} className="text-yellow-500" />
    </a>
  );
}

function MobileLegend() {
  return (
    <ul className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 text-left text-sm sm:hidden">
      {SLICES.map((s) => (
        <li key={s.label} className="flex items-center gap-3">
          <span
            className="inline-block h-3 w-3 rounded-sm"
            style={{ backgroundColor: s.color }}
          />
          <span className="text-[#a9a7bc]">{s.label}</span>
          <span className="ml-auto font-mono text-xs text-white">
            {s.value}%
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Tokenomics() {
  return (
    <section
      id="tokenomics"
      className="scroll-mt-header relative py-20 sm:py-28"
    >
      <div className="container mx-auto max-w-[1240px] px-4 text-center md:px-6 xl:px-0">
        <Reveal>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tokenomics
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#a9a7bc]">
            All transactions on the Celestium platform are settled by the native
            utility token CELT. The token has stable demand and growing potential
            thanks to a unique business model and sustainable tokenomics.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ActionButton href="#" label="BUY" Icon={ArrowUpRight} />
            <ActionButton href="#" label="VERIFY" Icon={ShieldCheck} />
            <ActionButton href="#" label="DOCS" Icon={FileText} />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center">
            <div className="relative aspect-square w-full max-w-[300px] sm:hidden">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SLICES}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius="55%"
                    outerRadius="90%"
                    paddingAngle={1}
                    stroke="#131526"
                    strokeWidth={2}
                    isAnimationActive
                    animationDuration={900}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#131526",
                      border: "1px solid #232333",
                      borderRadius: 8,
                      color: "#fff",
                      fontSize: 12,
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <CenterLabel />
            </div>

            <div className="relative hidden aspect-square w-full max-w-[480px] sm:block lg:max-w-[580px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart
                  margin={{ top: 40, right: 110, bottom: 40, left: 110 }}
                >
                  <Pie
                    data={SLICES}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius="55%"
                    outerRadius="80%"
                    paddingAngle={1}
                    stroke="#131526"
                    strokeWidth={2}
                    isAnimationActive
                    animationDuration={900}
                    label={renderLeaderLabel}
                    labelLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "#131526",
                      border: "1px solid #232333",
                      borderRadius: 8,
                      color: "#fff",
                      fontSize: 12,
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <CenterLabel />
            </div>

            <MobileLegend />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
