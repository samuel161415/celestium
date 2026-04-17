import Image from "next/image";

type LogoEntry = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Pill = {
  label: string;
  logos: LogoEntry[];
};

const PILLS: Pill[] = [
  {
    label: "Audited by",
    logos: [
      {
        src: "/certik.cd227485.svg",
        alt: "Certik",
        width: 70,
        height: 16,
      },
      {
        src: "/ackee.cee059dd.svg",
        alt: "Ackee Blockchain Security",
        width: 50,
        height: 18,
      },
    ],
  },
  {
    label: "Powered by",
    logos: [
      { src: "/polygon.861ff5a9.svg", alt: "Polygon", width: 80, height: 18 },
    ],
  },
  {
    label: "Protected by",
    logos: [
      { src: "/chainlink.a86413ba.svg", alt: "Chainlink", width: 70, height: 18 },
    ],
  },
];

export function TrustPills({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        "flex flex-col items-center justify-center gap-3 sm:flex-row",
        className,
      ].join(" ")}
    >
      {PILLS.map((pill) => (
        <div
          key={pill.label}
          className="flex shrink-0 items-center gap-2 rounded-md border-2 border-[#232333] bg-transparent px-3 py-1.5"
        >
          <span className="text-xs text-[#6F6B81]">{pill.label}:</span>
          {pill.logos.map((logo, i) => (
            <span key={logo.src} className="flex items-center">
              {i > 0 && <span className="mx-1 text-[#6F6B81]">+</span>}
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-4 w-auto select-none"
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
