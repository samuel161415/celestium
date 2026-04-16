import { ArrowUpRight } from "lucide-react";
import { roadmapItems, type RoadmapItem } from "../../lib/roadmap";
import { Reveal } from "../ui/Reveal";

function YellowDot() {
  return (
    <span
      aria-hidden
      className="block h-3 w-3 rounded-full bg-yellow-500 shadow-[0_0_0_4px_rgba(245,197,24,0.15)]"
    />
  );
}

function Card({ item }: { item: RoadmapItem }) {
  return (
    <div className="group rounded-xl border border-[#232333] bg-[#131526] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-500/60">
      <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-yellow-500">
        <span>{item.range}</span>
      </div>
      <h4 className="text-base font-semibold text-white">{item.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-[#a9a7bc]">
        {item.description}
      </p>
    </div>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="scroll-mt-header relative py-20 sm:py-28">
      <div className="container mx-auto max-w-[1240px] px-4 md:px-6 xl:px-0">
        <Reveal>
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Roadmap of{" "}
              <span className="text-yellow-500">celestium.io</span>
            </h3>
            <a
              href="#"
              className="mt-3 inline-flex items-center gap-1 text-sm text-[#a9a7bc] transition-colors duration-300 hover:text-yellow-500"
            >
              Live roadmap of development in GITHUB
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden
            className="absolute left-6 top-0 h-full w-[2px] bg-yellow-500/70 md:left-1/2 md:-translate-x-1/2"
          />

          <ul className="flex flex-col gap-10">
            {roadmapItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={item.id} className="relative">
                  <div
                    aria-hidden
                    className="absolute left-6 top-4 -translate-x-1/2 md:left-1/2"
                  >
                    <YellowDot />
                  </div>

                  <div className="ml-14 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                    {isLeft ? (
                      <>
                        <Reveal direction="right" className="md:pr-8">
                          <Card item={item} />
                        </Reveal>
                        <div className="hidden md:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block" />
                        <Reveal direction="left" className="md:pl-8">
                          <Card item={item} />
                        </Reveal>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
