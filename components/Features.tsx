const features = [
  {
    title: "Complete conference coverage",
    description:
      "Every reception, breakfast, panel, and private event in one searchable directory across key biotech weeks.",
  },
  {
    title: "Free event listings",
    description:
      "Hosts can submit qualifying events at no cost, with review and publishing workflows designed for speed.",
  },
  {
    title: "Built for dealmaking",
    description:
      "A focused audience of biotech executives, operators, and investors uses bioRSVP to plan their highest-value meetings.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section features-section-bg">
      <div className="site-container">
        <p className="section-eyebrow text-[var(--primary-blue)]">Why bioRSVP</p>
        <h2 className="section-title max-w-3xl text-[var(--deep-blue)]">
          From a single-week utility to <span className="font-semibold">industry infrastructure</span>.
        </h2>
        <p className="section-body max-w-2xl">
          What started as Guide to JPM now supports year-round discovery across flagship events that shape biotech.
        </p>

        <div className="feature-network mt-10 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card panel bg-stone-100/70 p-6">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--deep-blue)]">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
