import Image from "next/image";
import { Reveal } from "../ui/Reveal";

const VALUES = [
  {
    title: "Transparency",
    icon: "/transparency-icon.3a73d8a5.svg",
    alt: "Transparency icon showing a diamond",
  },
  {
    title: "Fairness",
    icon: "/fairness-icon.db3a02d4.svg",
    alt: "Fairness icon showing balanced scales",
  },
  {
    title: "Decentralization",
    icon: "/decentralization-icon.31cb4f8f.svg",
    alt: "Decentralization icon showing network nodes",
  },
];

export function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-transparent lg:py-18">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-radial-[circle_at_center] from-[#1e1c2d]/30 to-transparent"
        />
        <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
          <Reveal>
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Values carved into the{" "}
              <span className="line-through">stone</span>{" "}
              <span className="text-yellow-500">blockchain</span>
            </h2>
          </Reveal>

          <div className="flex w-full flex-wrap justify-center gap-4">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 0.15}
                className="w-[calc(50%-8px)] max-w-[240px] sm:w-[calc(50%-8px)] md:w-[calc(33.333%-16px)]"
              >
                <div className="flex h-full w-full flex-col items-center gap-y-3 rounded-lg bg-[#131526] px-2 py-5 transition-all duration-300 hover:scale-105">
                  <Image
                    src={v.icon}
                    alt={v.alt}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <h3 className="text-md font-semibold text-white md:text-2xl">
                    {v.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-header relative overflow-hidden bg-transparent py-18"
      >
        <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
          <Reveal>
            <h2 className="mb-6 text-center text-2xl font-bold text-white md:text-4xl">
              Celestium is a DeFi platform with no analog
            </h2>
            <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-[#a9a7bc]">
              Celestium is an ecosystem of smartcontracts that allows anyone to
              create a platform with blockchain-powered games and gaming-backed
              staking. All platforms are interconnected by a common core and the
              CELT token. That makes Celestium the most unique and progressive
              DeFi platform ever!
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
