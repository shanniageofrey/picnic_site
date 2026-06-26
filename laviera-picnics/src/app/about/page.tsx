"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "Booking & Confirmation",
    detail:
      "Choose your package, share your date, location, and any special requests. Hotel pickup, drop-off, and optional add-ons are all sorted at this stage.",
  },
  {
    number: "02",
    title: "Pickup & Arrival",
    detail:
      "We collect you directly from your hotel and transfer you comfortably to the picnic location. A warm welcome and refreshing drinks greet you on arrival.",
  },
  {
    number: "03",
    title: "The Picnic Begins",
    detail:
      "Settle into a fully styled setup — snacks, curated drinks, beautiful themed décor, and a relaxing ambiance. All you need to do is enjoy the moment.",
  },
  {
    number: "04",
    title: "Photo & Content Session",
    detail:
      "Our host guides you through the best lighting moments — especially during Golden Rush Hour — for aesthetic photos and short videos worth keeping.",
  },
  {
    number: "05",
    title: "Sunset & Golden Hour",
    detail:
      "As the sun dips, the experience deepens. Candles, ambient lighting, and the best sunset views come together for an unforgettable evening.",
  },
  {
    number: "06",
    title: "Drop-Off & Departure",
    detail:
      "We handle every bit of cleanup while you're transferred back to your hotel. You leave with memories. We handle the rest.",
  },
];

const VALUES = [
  {
    label: "Beauty",
    body: "Every element — from linen to florals — is selected to delight the eye.",
  },
  {
    label: "Comfort",
    body: "We design environments where guests feel at ease from first arrival to last farewell.",
  },
  {
    label: "Intention",
    body: "Nothing is accidental. Every detail is placed with purpose and care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 bg-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            {...fadeUp(0)}
            className="text-rose text-xs uppercase tracking-[0.25em] mb-4"
          >
            Our story
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-cream text-5xl md:text-7xl leading-[0.95] max-w-3xl"
          >
            The art of{" "}
            <em className="text-rose not-italic font-light">outdoor leisure.</em>
          </motion.h1>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-cream text-ink py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeUp(0)}>
              <p className="font-display text-2xl md:text-3xl leading-snug">
                We believe that moments deserve more than ordinary settings.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="space-y-5 text-sm md:text-base leading-relaxed text-ink/80">
              <p>
                At THE LAVIERA PICNICS, we transform outdoor spaces into
                elegant, unforgettable experiences designed with beauty, comfort,
                and attention to detail.
              </p>
              <p>
                From romantic setups and intimate celebrations to birthdays,
                proposals, family gatherings, and luxury outdoor experiences, we
                create thoughtfully curated environments that turn simple moments
                into lasting memories.
              </p>
              <p>
                Our goal is to bring creativity, sophistication, and
                personalised experiences to every setup we design. Every
                detail — from décor and styling to atmosphere and comfort — is
                carefully arranged to deliver an experience that feels
                effortless, unique, and memorable.
              </p>
              <p className="font-medium text-ink">
                We are not simply creating picnics; we are creating experiences
                where people connect, celebrate, and enjoy the art of outdoor
                leisure.
              </p>
            </motion.div>
          </div>

          {/* Tagline strip */}
          <motion.div
            {...fadeUp(0.1)}
            className="mt-20 border-t border-ink/10 pt-12 flex flex-col md:flex-row gap-6 md:gap-0"
          >
            {["Create memories.", "Celebrate moments.", "Experience elegance."].map(
              (phrase, i) => (
                <p
                  key={phrase}
                  className={`flex-1 font-display text-xl md:text-2xl text-ink ${
                    i < 2 ? "md:border-r border-ink/15 md:pr-10" : ""
                  } ${i > 0 ? "md:pl-10" : ""}`}
                >
                  <em className="text-rose-deep not-italic">{phrase}</em>
                </p>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p {...fadeUp(0)} className="text-rose text-xs uppercase tracking-[0.2em] mb-3">
            What guides us
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="font-display text-cream text-4xl md:text-5xl mb-16">
            Our values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                {...fadeUp(i * 0.1)}
                className="bg-ink p-10 hover:bg-ink-soft transition-colors duration-400"
              >
                <h3 className="font-display text-rose text-3xl mb-4">{v.label}</h3>
                <p className="text-cream-dim text-sm leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-cream text-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p {...fadeUp(0)} className="text-rose-deep text-xs uppercase tracking-[0.2em] mb-3">
            The experience
          </motion.p>
          <motion.h2 {...fadeUp(0.08)} className="font-display text-ink text-4xl md:text-5xl mb-16 max-w-xl">
            From first message to final sunset
          </motion.h2>

          <div className="space-y-0">
            {EXPERIENCE_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                {...fadeUp(i * 0.07)}
                className="flex gap-8 md:gap-14 items-start border-t border-ink/10 py-8 group hover:bg-ink/3 transition-colors px-2 -mx-2 rounded"
              >
                <span className="font-display text-rose-deep text-4xl md:text-5xl shrink-0 w-14 leading-none mt-1">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-ink text-xl md:text-2xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink/70 text-sm leading-relaxed max-w-xl">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-ink/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 md:py-28 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <motion.h2 {...fadeUp(0)} className="font-display text-cream text-4xl md:text-5xl mb-6">
            Ready to experience it?
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-cream-dim mb-10">
            Browse our packages and reserve your date.
          </motion.p>
          <motion.div {...fadeUp(0.2)} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-ink font-medium hover:bg-rose-light transition-colors duration-300"
            >
              View packages
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-cream hover:border-rose hover:text-rose transition-colors duration-300"
            >
              Book now
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
