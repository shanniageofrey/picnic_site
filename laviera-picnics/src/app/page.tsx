"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiInstagram, FiStar } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};               

const SERVICES = [
  {
    name: "The Sweetheart",
    tagline: "Intimate setups for two",
    detail: "Low table, floor cushions, candles, a curated playlist.",
  },
  {
    name: "The Gathering",
    tagline: "Up to 10 guests",
    detail: "Long table, full tableware, grazing board, market lights.",
  },
  {
    name: "The Celebration",
    tagline: "Birthdays & milestones",
    detail: "Custom backdrop, balloon styling, personalized signage.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Every detail felt considered — from the linen napkins to the playlist. Our anniversary picnic looked like something from a magazine.",
    name: "Amara K.",
    stars: 5,
  },
  {
    quote:
      "They set everything up before we arrived and packed it all away after. We just got to enjoy the evening.",
    name: "Daniel R.",
    stars: 5,
  },
  {
    quote:
      "Booked The Laviera for my sister's proposal. She still talks about the flowers a year later.",
    name: "Priya M.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        {/* background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-picnic.jpg"
            alt="A styled picnic set up in golden-hour light with linens, florals, and a low table"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-20 md:pb-28 pt-40">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-rose-light text-sm uppercase tracking-[0.25em] mb-5"
          >
            Curated outdoor picnic experiences
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={fadeUp}
            className="font-display text-cream text-[14vw] leading-[0.95] md:text-7xl lg:text-8xl max-w-4xl"
          >
            Set the table
            <br />
            <em className="text-rose not-italic font-light">under the sky.</em>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={fadeUp}
            className="text-cream-dim text-base md:text-lg max-w-md mt-7 leading-relaxed"
          >
            We design and set up fully styled picnics with linens, florals,
            tableware, and atmosphere  so all you have to do is show up.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-ink font-medium hover:bg-rose-light transition-colors duration-300"
            >
              Reserve your picnic
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-cream hover:border-rose hover:text-rose transition-colors duration-300"
            >
              View packages
            </Link>
          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cream text-ink py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-2xl md:text-4xl leading-snug max-w-3xl mx-auto"
          >
            From first date picnics to milestone proposals, The Laviera
            Picnics turns any patch of grass into{" "}
            <em className="text-rose-deep not-italic">somewhere worth
            remembering.</em>
          </motion.p>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-rose text-xs uppercase tracking-[0.2em] mb-3">
                Packages
              </p>
              <h2 className="font-display text-cream text-4xl md:text-5xl">
                Three ways to gather
              </h2>
            </motion.div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cream-dim hover:text-rose text-sm uppercase tracking-[0.08em] transition-colors group"
            >
              See full pricing
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-ink p-10 group hover:bg-ink-soft transition-colors duration-500"
              >
                <span className="text-rose font-display text-5xl">
                  0{i + 1}
                </span>
                <h3 className="font-display text-cream text-2xl mt-6 mb-2">
                  {service.name}
                </h3>
                <p className="text-rose-light text-sm uppercase tracking-[0.06em] mb-4">
                  {service.tagline}
                </p>
                <p className="text-cream-dim text-sm leading-relaxed">
                  {service.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM TEASER */}
      <section className="bg-cream text-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-rose-deep text-xs uppercase tracking-[0.2em] mb-3">
                Follow along
              </p>
              <h2 className="font-display text-ink text-4xl md:text-5xl">
                @thelavierapicnics
              </h2>
            </motion.div>
            <a
              href="https://instagram.com/thelavierapicnics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink/70 hover:text-rose-deep text-sm uppercase tracking-[0.08em] transition-colors group"
            >
              <FiInstagram />
              View on Instagram
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Placeholder grid — swap for live Instagram Basic Display API feed */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[1, 2, 3, 4].map((n) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: n * 0.08 }}
                className="relative aspect-square overflow-hidden rounded-sm bg-ink/5 group cursor-pointer"
              >
                <Image
                  src={`/images/insta-${n}.jpg`}
                  alt={`The Laviera Picnics Instagram post ${n}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose-deep/0 group-hover:bg-rose-deep/20 transition-colors duration-300 flex items-center justify-center">
                  <FiInstagram className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={22} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-ink py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-rose text-xs uppercase tracking-[0.2em] mb-3 text-center"
          >
            Kind words
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-cream text-4xl md:text-5xl text-center mb-16"
          >
            Loved by our guests
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="border border-cream/10 rounded-lg p-8 hover:border-rose/40 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-5 text-rose">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <FiStar key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-cream-dim text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-display text-cream text-lg">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-rose-deep py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,_white,_transparent_45%)]" />
        <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-display text-cream text-4xl md:text-6xl leading-tight mb-6"
          >
            Let&rsquo;s set the scene.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-cream/80 text-base md:text-lg mb-10 max-w-xl mx-auto"
          >
            Tell us your date, your guest count, and your vision. We&rsquo;ll
            handle the rest.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
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
