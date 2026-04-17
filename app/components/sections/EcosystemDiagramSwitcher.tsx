"use client";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { EcosystemDiagram, MobileEcosystemDiagram } from "./Partner";

const DESKTOP_QUERY = "(min-width: 1024px)";

export function EcosystemDiagramSwitcher() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);
  return isDesktop ? <EcosystemDiagram /> : <MobileEcosystemDiagram />;
}
