"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const PACKAGES = [
  {
    name: "Basic",
    tagline: "Simple, styled, and beautiful",
    description:
      "The perfect introduction to The Laviera experience. A fully styled outdoor setup with everything you need for a relaxed, memorable gathering.",
    features: [
      "Styled low table & floor cushions",
      "Curated snacks & non-alcoholic drinks",
      "Themed décor & linen",
      "Hotel pickup & drop-off",
      "Welcome drinks on arrival",
      "Host assistance throughout",
    ],
    cta: "Book Basic",
    highlight: false,
  },
  {
    name: "Luxe",
    tagline: "Elevated in every detail",
    description:
      "Our most popular experience. Everything in Basic, elevated with richer décor, a wider drinks selection, and the signature Golden Rush Hour guided photo session.",
    features: [
      "Everything in Basic",
      "Premium décor & florals",
      "Expanded drinks menu",
      "Golden Rush Hour photo session",
      "Ambient music",
      "Extended experience time",
    ],
    cta: "Book Luxe",
    highlight: true,
  },
  {
    name: "Grand Moment",
    tagline: "The full luxury experience",
    description:
      "For milestone occasions that deserve a grand setting. Romantic private setup, candle lighting, and access to exclusive wellness add-ons.",
    features: [
      "Everything in Luxe",
      "Private romantic setup",
      "Candles & evening lighting",
      "Customised décor theme",
      "Champagne service",
      "Optional massage or ice bath",
    ],
    cta: "Book Grand Moment",
    highlight: false,
  },
  {
    name: "The Icon",
    tagline: "Beyond the ordinary",
    description:
      "Our flagship experience. A complete luxury journey including a private yacht experience, fully bespoke styling, and every add-on available.",
    features: [
      "Everything in Grand Moment",
      "Yacht experience included",
      "Fully bespoke styling & theme",
      "Champagne on arrival",
      "Custom cake & celebration setup",
      "Priority scheduling & VIP host",
    ],
    cta: "Enquire for The Icon",
    highlight: false,
  },
];

const ADDONS = [
  {
    name: "Champagne service",
    detail: "A chilled bottle served on arrival for you and your guests.",
  },
  {
    name: "Celebration cake",
    detail: "Customised cakes for birthdays, proposals, or any milestone.",
  },
  {
    name: "Extra guests",
    detail: "Expand your setup to accommodate more people.",
  },
  {
    name: "Custom décor theme",
    detail: "Personalised colour palettes, florals, and styled backdrops.",
  },
  {
    name: "Romantic/private setup",
    detail: "An intimate arrangement designed for two.",
  },
  {
    name: "Massage or ice bath",
    detail: "A wellness treat to complement your Grand Moment experience.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 bg-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            {...fadeUp(0)}
            className="text-rose text-xs uppercase tracking-[0.25em] mb-4"
          >
            Packages & pricing
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-cream text-5xl md:text-7xl leading-[0.95] max-w-3xl"
          >
            Three ways to gather.{" "}
            <em className="text-rose not-italic font-light">One standard of care.</em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-cream-dim mt-7 max-w-lg text-base leading-relaxed"
          >
            Every package includes hotel pickup, full setup, welcome drinks, and
            complete cleanup. All you bring is yourself.
          </motion.p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section className="bg-ink py-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                {...fadeUp(i * 0.1)}
                className={`relative flex flex-col rounded-lg p-8 border transition-colors duration-300 ${
                  pkg.highlight
                    ? "border-rose bg-rose/5 hover:bg-rose/10"
                    : "border-cream/10 bg-ink hover:border-rose/40 hover:bg-ink-soft"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-rose px-4 py-1 text-xs uppercase tracking-[0.12em] text-ink font-medium">
                    Most popular
                  </span>
                )}
                <div className="mb-6">
                  <h2 className="font-display text-cream text-3xl mb-1">
                    {pkg.name}
                  </h2>
                  <p
                    className={`text-xs uppercase tracking-[0.1em] ${
                      pkg.highlight ? "text-rose-light" : "text-rose"
                    }`}
                  >
                    {pkg.tagline}
                  </p>
                </div>
                <p className="text-cream-dim text-sm leading-relaxed mb-8 flex-1">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-cream-dim">
                      <FiCheck
                        className={`shrink-0 mt-0.5 ${
                          pkg.highlight ? "text-rose-light" : "text-rose"
                        }`}
                        size={14}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm uppercase tracking-[0.07em] transition-colors duration-300 ${
                    pkg.highlight
                      ? "bg-rose text-ink hover:bg-rose-light"
                      : "border border-rose/50 text-rose hover:bg-rose hover:text-ink"
                  }`}
                >
                  {pkg.cta}
                  <FiArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeUp(0.2)}
            className="text-center text-cream-dim/60 text-xs mt-8 tracking-wide"
          >
            All packages are customisable. Pricing shared on enquiry — we tailor
            each experience to your needs.
          </motion.p>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-cream text-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p {...fadeUp(0)} className="text-rose-deep text-xs uppercase tracking-[0.2em] mb-3">
            Enhance your experience
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="font-display text-ink text-4xl md:text-5xl mb-4 max-w-xl">
            Optional add-ons
          </motion.h2>
          <motion.p {...fadeUp(0.15)} className="text-ink/60 mb-16 max-w-md text-sm">
            Every package can be personalised with one or more add-ons. Let us
            know what you have in mind when you book.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                {...fadeUp(i * 0.07)}
                className="bg-cream p-8 hover:bg-rose/5 transition-colors duration-300 group"
              >
                <h3 className="font-display text-ink text-xl mb-2 group-hover:text-rose-deep transition-colors">
                  {addon.name}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  {addon.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW BOOKING WORKS */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p {...fadeUp(0)} className="text-rose text-xs uppercase tracking-[0.2em] mb-3">
            Getting started
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="font-display text-cream text-4xl md:text-5xl mb-16">
            How to book
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {[
              {
                n: "01",
                title: "Send an enquiry",
                body: "Fill in our booking form with your date, guest count, and preferred package.",
              },
              {
                n: "02",
                title: "We confirm your setup",
                body: "We get back to you within 24 hours to confirm availability and finalise details.",
              },
              {
                n: "03",
                title: "Arrive & enjoy",
                body: "On the day, we handle everything. You just show up.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.n}
                {...fadeUp(i * 0.12)}
                className="bg-ink p-10 hover:bg-ink-soft transition-colors duration-400"
              >
                <span className="font-display text-rose text-5xl">{step.n}</span>
                <h3 className="font-display text-cream text-2xl mt-6 mb-3">
                  {step.title}
                </h3>
                <p className="text-cream-dim text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-rose-deep py-28 md:py-36 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_80%,_white,_transparent_45%)]" />
        <div className="relative mx-auto max-w-2xl px-6">
          <motion.h2 {...fadeUp(0)} className="font-display text-cream text-4xl md:text-5xl mb-6">
            Ready to reserve your date?
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-cream/80 mb-10 max-w-md mx-auto text-sm leading-relaxed">
            Dates fill up quickly — especially on weekends and public holidays.
            Reach out today and we&rsquo;ll make it happen.
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.08em] text-cream font-medium hover:bg-ink-soft transition-colors duration-300"
            >
              Start your booking
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
