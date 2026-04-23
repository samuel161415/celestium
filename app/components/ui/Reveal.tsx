"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { useSyncExternalStore, type ReactNode } from "react";

function useIsMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

type Direction = "up" | "down" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport" | "transition">;

const OFFSET = 40;

const variants: Record<Direction, { x?: number; y?: number }> = {
  up: { y: OFFSET },
  down: { y: -OFFSET },
  left: { x: OFFSET },
  right: { x: -OFFSET },
  fade: {},
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  amount = 0.25,
  className,
  ...rest
}: RevealProps) {
  const mounted = useIsMounted();
  const reducedMotion = useReducedMotion();
  const reduce = mounted && reducedMotion;
  const offset = reduce ? {} : variants[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
