const partnerTiers = [
  {
    tier: "Tier 01",
    name: "Listed Host",
    description: "For event organizers seeking organic visibility across the user base.",
    benefits: ["Standard event listing", "RSVP link forwarding", "Host page attribution"],
  },
  {
    tier: "Tier 02",
    name: "Splash Sponsor",
    description: "Your brand opens the app. 30K+ impressions in a single cycle, documented.",
    benefits: [
      "Full-screen splash placement",
      "Targeted by conference or date",
      "Dedicated campaign URL",
      "Impression and click reporting",
    ],
    featured: true,
    ribbon: "Most visible",
  },
  {
    tier: "Tier 03",
    name: "Conference Partner",
    description: "Category exclusivity, co-branded presence, and year-round engagement.",
    benefits: [
      "Category exclusivity",
      "Co-branded conference page",
      "Quarterly audience reports",
      "Custom activation support",
    ],
  },
];

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="site-container">
        <div className="flex flex-col gap-8">
          <div>
            <p className="section-eyebrow text-[var(--primary-blue)]">For partners</p>
            <h2 className="section-title text-[var(--deep-blue)]">
              Be the first thing <span className="font-semibold">every executive sees</span> all week.
            </h2>
          </div>
          <p className="section-body">
            bioRSVP places your brand in front of an audience that is already opted in, already engaged, and already
            making the decisions that matter.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {partnerTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl border p-6 ${
                tier.featured
                  ? "border-[var(--deep-blue)] bg-[var(--deep-blue)] text-white"
                  : "border-zinc-200 bg-stone-100/70 text-[var(--black)]"
              }`}
            >
              {tier.ribbon ? (
                <span className="absolute right-5 top-5 rounded-full bg-[var(--secondary-blue)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[var(--deep-blue)]">
                  {tier.ribbon}
                </span>
              ) : null}

              <p
                className={`text-xs font-medium uppercase tracking-[0.2em] ${
                  tier.featured ? "text-[var(--secondary-blue)]" : "text-[var(--primary-blue)]"
                }`}
              >
                {tier.tier}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{tier.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${tier.featured ? "text-white/80" : "text-zinc-700"}`}>
                {tier.description}
              </p>

              <ul className={`mt-5 space-y-2 border-t pt-4 ${tier.featured ? "border-white/20" : "border-zinc-200"}`}>
                {tier.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <span
                      className={`mt-1.5 h-2 w-2 rounded-full ${
                        tier.featured ? "bg-[var(--secondary-blue)]" : "bg-[var(--primary-blue)]"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="panel mt-10 rounded-3xl bg-stone-100/70 p-7 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-light tracking-tight text-[var(--deep-blue)]">
                Let&apos;s talk about <span className="font-semibold">your next conference cycle.</span>
              </h3>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">
                Custom packages available. We&apos;ll scope what fits your goals. Inventory is limited per conference.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:partners@biorsvp.com"
                className="inline-flex items-center justify-center rounded-full bg-[var(--black)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-blue)]"
              >
                partners@biorsvp.com
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[var(--deep-blue)] px-5 py-3 text-sm font-medium text-[var(--deep-blue)] transition-colors hover:bg-[var(--deep-blue)] hover:text-white"
              >
                Download media kit (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
