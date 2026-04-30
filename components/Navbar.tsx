const navItems = [
  { href: "#features", label: "Features" },
  { href: "#events", label: "Coverage" },
  { href: "#stats", label: "Stats" },
  { href: "#submit", label: "List an event" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-stone-50/90 backdrop-blur">
      <nav className="site-container flex items-center justify-between py-4" aria-label="Main navigation">
        <a href="#" className="flex items-center text-[var(--deep-blue)]" aria-label="bioRSVP home">
          <img
            src="/assets/Logo_Horizontal_Light.svg"
            alt="bioRSVP"
            className="h-20 w-auto"
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-[var(--primary-blue)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#partners"
            className="hidden items-center rounded-full border border-[var(--deep-blue)] px-4 py-2 text-sm font-medium text-[var(--deep-blue)] transition-colors hover:bg-[var(--deep-blue)] hover:text-white sm:inline-flex"
          >
            Become a partner
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-full bg-[var(--black)] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-blue)] focus-visible:ring-offset-2"
          >
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}
