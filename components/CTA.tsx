function DownloadButton({ labelTop, labelBottom }: { labelTop: string; labelBottom: string }) {
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

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="site-container max-w-4xl text-center">
        <h2 className="text-4xl font-light leading-tight tracking-tight text-[var(--deep-blue)] sm:text-5xl lg:text-6xl">
          Download bioRSVP. <span className="font-semibold text-[var(--primary-blue)]">Make the week count.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
          Free on iOS and Android. No account required. Built for biotech conference networking.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <DownloadButton labelTop="Download on the" labelBottom="App Store" />
          <DownloadButton labelTop="Get it on" labelBottom="Google Play" />
        </div>

        <p className="mt-8 text-sm text-zinc-600">
          Partnership inquiries:{" "}
          <a
            href="mailto:partners@biorsvp.com"
            className="font-medium text-[var(--deep-blue)] underline decoration-[var(--primary-blue)] underline-offset-4"
          >
            partners@biorsvp.com
          </a>
        </p>
      </div>
    </section>
  );
}
