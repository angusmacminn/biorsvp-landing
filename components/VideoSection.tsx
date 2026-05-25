export default function VideoSection() {
  return (
    <section id="video" className="section bg-stone-50">
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-eyebrow text-[var(--primary-blue)]">See bioRSVP in action</p>
            <h2 className="section-title max-w-2xl text-[var(--deep-blue)]">
              A closer look at how bioRSVP can help you navigate conference week.
            </h2>
            <p className="section-body max-w-xl">
              This short walkthrough shows how bioRSVP helps attendees discover events, plan their schedule, and
              connect with the right people before they ever step onsite.
            </p>
            
          </div>

          <div className="mx-auto w-full max-w-[340px]">
            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-600/80 bg-white shadow-[0_20px_45px_rgba(10,43,76,0.12)]">
              <video
                className="block aspect-[9/16] h-auto w-full object-cover"
                controls
                preload="metadata"
                playsInline
                aria-label="BioRSVP marketing video"
              >
                <source src="/assets/BioRSVP-compressed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}