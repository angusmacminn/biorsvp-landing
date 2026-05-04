export default function Story() {
  return (
    <section id="story" className="section bg-stone-50">
      <div className="site-container max-w-4xl">
        <p className="section-eyebrow">Our story</p>
        <h2 className="section-title max-w-3xl text-[var(--deep-blue)]">
          Why we built BioRSVP
        </h2>
        <p className="section-body max-w-3xl">
          BioRSVP started as a way to navigate the overwhelming number of satellite events during JPM Week.
          What began as a simple solution has grown into a platform connecting biotech professionals across
          major global conferences.
        </p>
        <a
          href="https://www.novateur.ca/the-story-behind-a-game-changing-app-for-jpm-healthcare-conference"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--black)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-blue)] focus-visible:ring-offset-2"
        >
          Read the full story
        </a>
      </div>
    </section>
  );
}
