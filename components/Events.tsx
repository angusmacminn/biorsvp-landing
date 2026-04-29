const conferences = [
  {
    code: "01",
    title: "BIO International Convention",
    description: "The largest biotech industry gathering in the world.",
    cadence: "Annual",
    date: "June",
    location: "Rotating US cities",
  },
  {
    code: "02",
    title: "Jefferies Healthcare Conference",
    description: "Europe's premier healthcare finance event.",
    cadence: "Annual",
    date: "November",
    location: "London, UK",
  },
  {
    code: "03",
    title: "J.P. Morgan Healthcare Conference",
    description: "The defining week of the biotech calendar.",
    cadence: "Annual",
    date: "January",
    location: "San Francisco, CA",
  },
];

export default function Events() {
  return (
    <section id="events" className="section">
      <div className="site-container">
        <p className="section-eyebrow text-[var(--primary-blue)]">Coverage</p>
        <h2 className="section-title max-w-3xl text-[var(--deep-blue)]">
          Three flagship conferences. <br /> <span className="font-semibold">One directory.</span>
        </h2>
        <p className="section-body max-w-2xl">Where biotech capital, strategy, and science converge.</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {conferences.map((conference) => (
            <article
              key={conference.code}
              className="flex min-h-64 flex-col justify-between rounded-2xl border border-zinc-200 bg-stone-100/70 px-6 py-4 transition-colors hover:border-[var(--primary-blue)]"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-[var(--primary-blue)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary-blue)]">
                  {conference.cadence}
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--deep-blue)]">{conference.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-700">{conference.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-zinc-200 pt-4 text-sm">
                <p className="text-zinc-600">{conference.date}</p>
                <p className="font-medium text-[var(--deep-blue)]">{conference.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
