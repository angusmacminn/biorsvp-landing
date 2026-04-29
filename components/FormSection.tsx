"use client";

import { useState } from "react";

const formBenefits = [
  "Direct exposure to a biotech executive audience",
  "Discoverable by date, venue, and host",
  "RSVP link forwarding to your registration page",
  "Reviewed and published within 48 hours",
];

const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeHM8XEZekH3WMUCsG5Bsnlbwgy33ZXMJmXV3t_bFyKvpjhVQ/viewform?embedded=true";

export default function FormSection() {
  const [loadForm, setLoadForm] = useState(false);

  return (
    <section id="submit" className="section border-y border-zinc-200 bg-stone-100/80">
      <div className="site-container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          
          <p className="section-eyebrow text-[var(--primary-blue)]">List your event</p>
          <h2 className="section-title text-[var(--deep-blue)]">
            Hosting something? <span className="font-semibold">Get it on the map.</span>
          </h2>
          <p className="section-body">
            Submit your reception, breakfast, panel, dinner, or satellite session and we will review it for listing.
          </p>

          <ul className="mt-6 space-y-3">
            {formBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-800">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--primary-blue)]" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel rounded-3xl p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--deep-blue)]">Event submission form</h3>

          {!loadForm ? (
            <div className="mt-6 flex min-h-[360px] items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center sm:min-h-[420px]">
              <div>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Click below to load the event submission form.
                </p>
                <button
                  type="button"
                  onClick={() => setLoadForm(true)}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--black)] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-blue)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-blue)] focus-visible:ring-offset-2"
                >
                  Open submission form
                </button>
              </div>
            </div>
          ) : (
            <iframe
              title="bioRSVP event submission form"
              src={googleFormUrl}
              loading="lazy"
              className="mt-6 h-[980px] w-full rounded-2xl border border-zinc-200"
            >
              Loading...
            </iframe>
          )}
        </div>
      </div>
    </section>
  );
}
