"use client";

import dynamic from "next/dynamic";

const FallingCoins = dynamic(
  () => import("./FallingCoins").then((m) => m.FallingCoins),
  { ssr: false },
);

export function FallingCoinsClient() {
  return <FallingCoins />;
}
