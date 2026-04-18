import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`flex items-center gap-2 ${className}`}
      aria-label="Celestium"
    >
      <CelestiumMark className="h-7 w-7" />
      <span className="hidden text-lg font-extrabold tracking-tight text-white sm:inline-block">
        celestium
      </span>
    </span>
  );
}

export function CelestiumMark({ className = "" }: LogoProps) {
  return (
    <Image
      src="/celestium-con-nobg.png"
      alt=""
      width={112}
      height={112}
      className={`object-contain ${className}`}
      aria-hidden
    />
  );
}
