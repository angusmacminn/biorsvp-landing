function StoreButton({ labelTop, labelBottom }: { labelTop: string; labelBottom: string }) {
  const isAppStore = labelBottom === "App Store";
  const isGooglePlay = labelBottom === "Google Play";

  if (isAppStore) {
    return (
      <a
        href="https://apps.apple.com/au/app/guide-to-jpm26/id1494244381"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <img
          src="/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          alt="Download on the App Store"
          className="h-12 w-auto"
        />
      </a>
    );
  }

  if (isGooglePlay) {
    return (
      <a
        href="https://play.google.com/store/apps/details?id=org.novateur.ConferenceGuide&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get it on Google Play"
      >
        <img
          src="/assets/GetItOnGooglePlay_Badge_Web_color_English.svg"
          alt="Get it on Google Play"
          className="h-12 w-auto"
        />
      </a>
    );
  }

  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 rounded-xl border border-[var(--black)] bg-[var(--black)] px-5 py-3 text-stone-50 transition-colors hover:bg-[var(--deep-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-blue)] focus-visible:ring-offset-2"
      aria-label={`${labelBottom} download placeholder`}
    >
      <div
        className="flex h-8 w-8 items-center justify-center rounded-md bg-white/15 text-[10px] font-semibold uppercase"
        role="img"
        aria-label={`${labelBottom} icon placeholder`}
      >
        App
      </div>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] uppercase tracking-[0.18em] text-stone-300">{labelTop}</span>
        <span className="text-base font-semibold">{labelBottom}</span>
      </span>
    </a>
  );
}

function MapAppPreview() {
  return (
    <img
      src="/assets/map-ui-svg.svg"
      alt="Preview of the bioRSVP mobile map interface"
      className="hero-map-preview h-auto w-full object-contain"
    />
  );
}

const proofStats = [
  { value: "10,000+", label: "Biotech users" },
  { value: "260+", label: "Events at JPM '26" },
  { value: "3", label: "Flagship conferences" },
];

export default function Hero() {
  return (
    <section className="section hero-identity-bg pt-14 sm:pt-16 lg:pt-20">
      <div className="site-container">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-6 inline-block max-w-full rounded-2xl bg-[var(--deep-blue)] px-3 py-2 text-[10px] font-semibold uppercase leading-[1.35] tracking-[0.14em] text-white sm:inline-flex sm:items-center sm:rounded-full sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.2em]">
            Brought to you by Novateur Ventures
          </p>
          <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-[var(--deep-blue)] sm:text-5xl lg:text-6xl">
            Make intelligent <span className="font-semibold text-[var(--primary-blue)]"> connections </span>
            at biotech&apos;s most important weeks.
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Every reception. Every satellite event. Every private gathering. <br /> At JPM 2026 alone, bioRSVP mapped 260+
            events across San Francisco and is now expanding to BIO International and Jefferies London Healthcare.
          </p>

          <div className="mb-6 grid gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-4 sm:grid-cols-3 sm:gap-3">
            {proofStats.map((item) => (
              <div key={item.label} className="sm:border-r sm:border-zinc-200 sm:pr-3 last:sm:border-r-0 last:sm:pr-0">
                <p className="text-2xl font-semibold tracking-tight text-[var(--deep-blue)] sm:text-[1.7rem]">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-zinc-600 sm:text-[11px]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <StoreButton labelTop="Download on the" labelBottom="App Store" />
            <StoreButton labelTop="Get it on" labelBottom="Google Play" />
          </div>

          <p className="text-sm text-zinc-600">
            Free forever · No account required ·{" "}
            <a
              href="#submit"
              className="font-medium text-[var(--deep-blue)] underline decoration-[var(--primary-blue)] underline-offset-4"
            >
              List your event for free.
            </a>
          </p>
        </div>

        <div >
          <div
            className="hero-map-preview-wrap overflow-hidden"
            role="img"
            aria-label="Preview of the bioRSVP mobile map interface"
          >
            <MapAppPreview />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
