function StoreButton({ labelTop, labelBottom }: { labelTop: string; labelBottom: string }) {
  const isAppStore = labelBottom === "App Store";
  const isGooglePlay = labelBottom === "Google Play";

  if (isAppStore) {
    return (
      <a href="#" aria-label="Download on the App Store">
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
      <a href="#" aria-label="Get it on Google Play">
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
    <svg
      viewBox="0 0 320 640"
      className="h-full w-full"
      role="img"
      aria-label="Mobile map interface showing biotech event discovery pins and event details"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.14" />
        </filter>
      </defs>

      <g id="device">
        <rect x="12" y="12" width="296" height="616" rx="36" fill="#f8fafc" />
      </g>

      <g id="map-surface">
        <rect x="28" y="76" width="264" height="526" rx="22" fill="#f3f4f6" />

        <path d="M40 132 H276 M40 180 H276 M40 228 H276 M40 276 H276 M40 324 H276 M40 372 H276 M40 420 H276 M40 468 H276 M40 516 H276 M40 564 H276" stroke="#e5e7eb" strokeWidth="1" />
        <path d="M64 92 V588 M108 92 V588 M152 92 V588 M196 92 V588 M240 92 V588" stroke="#e5e7eb" strokeWidth="1" />

        <path d="M32 140 C86 116, 120 164, 174 152 C216 142, 248 170, 292 148" stroke="#d1d5db" strokeWidth="1.5" fill="none" />
        <path d="M32 258 C74 232, 126 274, 170 248 C218 220, 248 266, 292 238" stroke="#d1d5db" strokeWidth="1.5" fill="none" />
        <path d="M32 374 C80 350, 130 404, 180 380 C220 360, 250 402, 292 388" stroke="#d1d5db" strokeWidth="1.5" fill="none" />
      </g>

      <g id="top-ui">
        <rect x="28" y="28" width="264" height="38" rx="12" fill="#ffffff" />
        <circle cx="48" cy="47" r="4.5" fill="#9ca3af" />
        <rect x="60" y="42" width="86" height="10" rx="5" fill="#d1d5db" />
        <rect x="248" y="38" width="34" height="18" rx="9" fill="#e5e7eb" />
      </g>

      <g id="pins">
        <g fill="#6b7280">
          <circle cx="78" cy="154" r="4.5" />
          <circle cx="128" cy="214" r="4.5" />
          <circle cx="220" cy="184" r="4.5" />
          <circle cx="252" cy="244" r="4.5" />
          <circle cx="88" cy="306" r="4.5" />
          <circle cx="156" cy="336" r="4.5" />
          <circle cx="234" cy="332" r="4.5" />
          <circle cx="114" cy="434" r="4.5" />
          <circle cx="192" cy="464" r="4.5" />
        </g>
        <g fill="#3b82f6">
          <circle cx="172" cy="262" r="6.5" />
          <circle cx="214" cy="404" r="6.5" />
        </g>
      </g>

      <g id="event-card" filter="url(#soft-shadow)">
        <rect x="34" y="448" width="252" height="132" rx="18" fill="#ffffff" />
        <line x1="112" y1="464" x2="112" y2="564" stroke="#e5e7eb" strokeWidth="1" />

        <text x="74" y="486" textAnchor="middle" fontSize="8" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="700" fill="#94a3b8">
          JAN 8-11
        </text>
        <text x="74" y="514" textAnchor="middle" fontSize="19" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="700" fill="#1e3a8a">
          2:00 PM
        </text>
        <text x="74" y="536" textAnchor="middle" fontSize="8" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="500" fill="#94a3b8">
          PST
        </text>

        <text x="124" y="485" fontSize="9.5" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="700" fill="#1e293b">
          BLPN Investor Summit
        </text>
        <text x="124" y="500" fontSize="9.5" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="700" fill="#1e293b">
          [Multi-Day Event]
        </text>
        <text x="124" y="520" fontSize="8.5" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="500" fill="#64748b">
          Carneros Resort and Spa
        </text>

        <rect x="124" y="532" width="43" height="16" rx="8" fill="#dcfce7" />
        <text x="145.5" y="543" textAnchor="middle" fontSize="8" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="700" fill="#059669">
          Featured
        </text>
        <text x="175" y="543" fontSize="8.5" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fontWeight="600" fill="#0ea5e9">
          See details
        </text>

        <path
          d="M268 479 l2.4 4.8 5.3 0.8-3.8 3.7 0.9 5.3-4.8-2.5-4.8 2.5 0.9-5.3-3.8-3.7 5.3-0.8z"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

const proofStats = [
  { value: "10,000+", label: "Biotech users" },
  { value: "260+", label: "Events at JPM '26" },
  { value: "3", label: "Flagship conferences" },
];

export default function Hero() {
  return (
    <section className="section pt-14 sm:pt-16 lg:pt-20">
      <div className="site-container">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="mb-6 inline-flex items-center rounded-full bg-[var(--primary-blue)] text-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em]">
            Brought to you by Novateur Ventures
          </p>
          <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight text-[var(--deep-blue)] sm:text-5xl lg:text-6xl">
            Make intelligent <span className="font-semibold text-[var(--primary-blue)]"> connections </span>
            at biotech&apos;s most important weeks.
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg">
            Every reception. Every satellite event. Every private gathering. <br /> At JPM 2026 alone, bioRSVP mapped 260+
            events across San Francisco and is now expanding to BIO International and Jefferies London Healthcare.
          </p>

          <div className="mb-7 grid gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-4 sm:grid-cols-3 sm:gap-3">
            {proofStats.map((item) => (
              <div key={item.label} className="sm:border-r sm:border-zinc-200 sm:pr-3 last:sm:border-r-0 last:sm:pr-0">
                <p className="text-2xl font-semibold tracking-tight text-[var(--deep-blue)] sm:text-[1.7rem]">
                  {item.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-zinc-500 sm:text-[11px]">{item.label}</p>
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

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
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
