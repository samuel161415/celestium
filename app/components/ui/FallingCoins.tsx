"use client";

import { useCallback, useState, type CSSProperties } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

type Coin = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  sway: number;
};

const COIN_COUNT = 6;
const COIN_SRC = "/celestium-con-nobg.png";

let nextId = 0;

function makeCoin(initialDelay = false): Coin {
  return {
    id: nextId++,
    left: Math.random() * 95,
    size: 50 + Math.random() * 40,
    duration: 5 + Math.random() * 3,
    delay: initialDelay ? Math.random() * 4 : 0,
    opacity: 0.12 + Math.random() * 0.1,
    sway: (Math.random() - 0.5) * 80,
  };
}

export function FallingCoins() {
  const reduce = useReducedMotion();
  const [coins, setCoins] = useState<Coin[]>(() =>
    Array.from({ length: COIN_COUNT }, () => makeCoin(true)),
  );

  const respawn = useCallback((id: number) => {
    setCoins((prev) => prev.map((c) => (c.id === id ? makeCoin() : c)));
  }, []);

  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-5 overflow-hidden"
    >
      {coins.map((c) => {
        const style: CSSProperties & Record<"--sway", string> = {
          left: `${c.left}%`,
          width: `${c.size}px`,
          height: `${c.size}px`,
          top: "-100px",
          opacity: c.opacity,
          animation: `fallDown ${c.duration}s linear ${c.delay}s 1 forwards`,
          willChange: "transform",
          "--sway": `${c.sway}px`,
        };
        return (
          <div
            key={c.id}
            className="absolute"
            style={style}
            onAnimationEnd={() => respawn(c.id)}
          >
            <Image
              src={COIN_SRC}
              alt=""
              width={Math.round(c.size)}
              height={Math.round(c.size)}
              className="h-full w-full select-none"
              draggable={false}
              priority={false}
            />
          </div>
        );
      })}
    </div>
  );
}
