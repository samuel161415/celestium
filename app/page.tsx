import { BackgroundLayers } from "./components/ui/BackgroundLayers";
import { FallingCoinsClient } from "./components/ui/FallingCoinsClient";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Partner } from "./components/sections/Partner";
import { Roadmap } from "./components/sections/Roadmap";
import { Tokenomics } from "./components/sections/Tokenomics";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <BackgroundLayers />
      <FallingCoinsClient />

      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Partner />
        <Roadmap />
        <Tokenomics />
      </main>
      <Footer />
    </>
  );
}
