import Image from "next/image";
import { FileText, PieChart } from "lucide-react";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-header relative overflow-hidden bg-transparent pt-24 pb-16 lg:pt-54"
    >
      <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row xl:gap-20">
          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <Reveal direction="right">
              <h1 className="w-full">
                <span className="mb-3 block whitespace-nowrap text-3xl font-extrabold text-yellow-500 md:text-4xl lg:text-5xl">
                  BUILD THE WORLD&apos;S
                </span>
                <span className="block text-2xl font-bold leading-[1.1] text-white md:text-4xl">
                  leading decentralized gaming
                  <br className="hidden md:block" /> platform with us
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="mt-8 flex flex-col gap-4 md:flex-row md:gap-6">
                {/* Hover swap: primary "TRY OUR PARTNERS" → two partner links */}
                <div className="group/cta relative h-10 w-[260px] shrink-0">
                  <button
                    type="button"
                    className="absolute inset-0 inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 text-xs font-bold tracking-wider whitespace-nowrap text-black uppercase opacity-100 transition-opacity duration-200 group-hover/cta:pointer-events-none group-hover/cta:opacity-0 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:outline-none"
                  >
                    Try our partners
                  </button>
                  <div className="pointer-events-none absolute inset-0 flex items-center gap-3 opacity-0 transition-opacity duration-200 group-hover/cta:pointer-events-auto group-hover/cta:opacity-100">
                    <a
                      href="https://celestium.games"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 flex-1 items-center justify-center rounded-md bg-yellow-400 px-3 text-xs font-bold tracking-wider whitespace-nowrap text-black uppercase transition-colors duration-200 hover:bg-yellow-500"
                    >
                      celestium.games
                    </a>
                    <a
                      href="https://celestium.network"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 flex-1 items-center justify-center rounded-md bg-yellow-400 px-3 text-xs font-bold tracking-wider whitespace-nowrap text-black uppercase transition-colors duration-200 hover:bg-yellow-500"
                    >
                      celestium.network
                    </a>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center space-x-8 text-start md:flex-col md:items-start md:space-x-0 md:space-y-2">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-[#6F6B81] transition-colors duration-300 hover:text-yellow-500"
                  >
                    <FileText size={18} className="opacity-60" />
                    <span className="text-xs md:text-sm">Celestium Docs</span>
                  </a>
                  <a
                    href="#tokenomics"
                    className="flex items-center space-x-2 text-[#6F6B81] transition-colors duration-300 hover:text-yellow-500"
                  >
                    <PieChart size={18} className="opacity-60" />
                    <span className="text-xs md:text-sm">Tokenomy</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.1} className="aspect-video w-full max-w-[460px]">
            <div className="relative w-full">
              <Image
                src="/suitcase-duck.427d2cc5.png"
                alt="Celestium mascot"
                width={460}
                height={460}
                priority
                loading="eager"
                className="mx-auto h-auto w-full max-w-[360px] select-none object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
