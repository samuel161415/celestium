export function BackgroundLayers() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#131526]" />

      <div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0112fe, #f9e000)",
        }}
      />
      <div
        className="absolute left-10 top-20 h-[350px] w-[350px] rounded-full opacity-20 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f9e000, #0112fe)",
        }}
      />
      <div
        className="absolute bottom-10 right-20 h-[400px] w-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0112fe, #f9e000)",
        }}
      />
      <div
        className="absolute right-40 top-40 h-[250px] w-[250px] rounded-full opacity-15 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f9e000, #0112fe)",
        }}
      />
      <div
        className="absolute bottom-40 left-40 h-[300px] w-[300px] rounded-full opacity-15 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0112fe, #f9e000)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#131526]/30 to-black/50" />
    </div>
  );
}
