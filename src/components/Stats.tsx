const STATS = [
  { label: "GPA / 4.00", value: "3.60" },
  { label: "AI Products", value: "4" },
  { label: "Positions Held", value: "5" },
];


export default function Stats() {
  return (
    <section className="bg-bg py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-stroke py-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-4 transition-transform group-hover:scale-110 duration-500">
                {stat.value}
              </div>
              <div className="text-xs text-muted uppercase tracking-[0.3em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
