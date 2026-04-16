import type { ReactNode } from "react";

type GoldBorderCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export function GoldBorderCard({
  children,
  className = "",
  innerClassName = "",
}: GoldBorderCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-[2px] transition-all duration-300 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #DAA520 0%, #A67C00 30%, #131526 90%)",
      }}
    >
      <div
        className={`relative h-full w-full rounded-[10px] bg-[#131526] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
