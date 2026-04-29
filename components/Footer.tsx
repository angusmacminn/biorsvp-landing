export default function Footer() {
  return (
    <footer className="bg-[var(--black)] py-12 text-stone-100 sm:py-16">
      <div className="site-container">
        <div className="grid gap-8 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-medium tracking-tight">
              bio<span className="text-[var(--secondary-blue)]">RSVP</span>
            </h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-400">
              The permanent directory for biotech&apos;s most important conversations.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary-blue)]">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#cta" className="transition-colors hover:text-white">
                  Download iOS
                </a>
              </li>
              <li>
                <a href="#cta" className="transition-colors hover:text-white">
                  Download Android
                </a>
              </li>
              <li>
                <a href="#events" className="transition-colors hover:text-white">
                  Coverage
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary-blue)]">Community</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>
                <a href="#submit" className="transition-colors hover:text-white">
                  List an event
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#stats" className="transition-colors hover:text-white">
                  Audience data
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--secondary-blue)]">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              <li>
                <a href="https://novateur.ca" className="transition-colors hover:text-white">
                  Novateur Ventures
                </a>
              </li>
              <li>
                <a href="mailto:partners@biorsvp.com" className="transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
          <p>© 2026 bioRSVP. Make Intelligent Connections.</p>
          <p className="font-mono">v2.0 · built on the Guide to JPM platform</p>
        </div>
      </div>
    </footer>
  );
}
