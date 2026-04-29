const statCards = [
  {
    tag: "Install base",
    value: "10,000+",
    label: "Cumulative installs across iOS and Android.",
  },
  {
    tag: "Events mapped",
    value: "260+",
    label: "Receptions and satellite events indexed at JPM 2026.",
  },
  {
    tag: "Retention",
    value: "89%",
    label: "Active users running the latest release.",
  },
  {
    tag: "Sponsor reach",
    value: "30K+",
    label: "Splash-page impressions in one conference cycle.",
  },
  {
    tag: "Peak DAU",
    value: "1,349",
    label: "Highest daily active user count during JPM week.",
  },
  {
    tag: "Coverage",
    value: "3",
    label: "Flagship conferences currently supported.",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="section bg-[var(--deep-blue)] text-stone-50">
      <div className="site-container">
        <p className="section-eyebrow text-[var(--secondary-blue)]">By the numbers</p>
        <h2 className="section-title max-w-3xl">
          A proven audience. <br />
          <span className="font-semibold text-[var(--secondary-blue)]">An unmatched directory.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone-300">
          Results from the most recent Guide to JPM cycle, now carried into bioRSVP.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((stat) => (
            <article
              key={stat.tag}
              className="rounded-2xl border border-[var(--secondary-blue)]/20 bg-white/5 p-6 transition-colors lg:hover:border-[var(--secondary-blue)]/50 lg:hover:bg-[rgba(79,195,247,0.12)]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--secondary-blue)]">{stat.tag}</p>
              <p className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-300">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
