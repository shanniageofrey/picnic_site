"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiInstagram } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

// GALLERY IMAGES
// We will replace src values with real images from your photoshoots.
// For the live Instagram feed integration:
//   1. Getting an Instagram Basic Display API access token from
//      developers.facebook.com/docs/instagram-basic-display-api
//   2. Creating a src/lib/instagram.ts that fetches
//      https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_TOKEN
//   3. Passing the array as props from a Server Component here, replacing GALLERY_ITEMS.
const GALLERY_ITEMS = [
  { id: 1, src: "/images/insta-1.jpg", alt: "Styled picnic setup with florals and linen", span: "col-span-2 row-span-2" },
  { id: 2, src: "/images/insta-2.jpg", alt: "Intimate two-person picnic at golden hour" },
  { id: 3, src: "/images/insta-3.jpg", alt: "Birthday picnic setup with balloon styling" },
  { id: 4, src: "/images/insta-4.jpg", alt: "Grazing board and welcome drinks" },
  { id: 5, src: "/images/insta-1.jpg", alt: "Romantic proposal picnic with candles" },
  { id: 6, src: "/images/insta-2.jpg", alt: "Full-length table setup for group gathering" },
  { id: 7, src: "/images/insta-3.jpg", alt: "Overhead shot of the picnic spread" },
  { id: 8, src: "/images/insta-4.jpg", alt: "Sunset view from the picnic location" },
  { id: 9, src: "/images/insta-1.jpg", alt: "Custom décor theme with pink and gold tones" },
];

const CATEGORIES = ["All", "Romantic", "Birthdays", "Proposals", "Groups", "Sunset"];

export default function GalleryPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-36 pb-20 bg-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-rose text-xs uppercase tracking-[0.25em] mb-4"
            >
              Our work
            </motion.p>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-cream text-5xl md:text-7xl leading-[0.95]"
            >
              Every setup,{" "}
              <em className="text-rose not-italic font-light">a story.</em>
            </motion.h1>
          </div>
          <motion.a
            {...fadeUp(0.15)}
            href="https://instagram.com/thelavierapicnics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream-dim hover:text-rose text-sm uppercase tracking-[0.08em] transition-colors group shrink-0"
          >
            <FiInstagram />
            @thelavierapicnics
            <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* CATEGORY FILTER — visual only, wire to state to filter when real data is connected */}
      <section className="bg-ink pb-8 sticky top-[60px] z-40 border-b border-cream/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`shrink-0 rounded-full px-5 py-2 text-xs uppercase tracking-[0.1em] transition-colors duration-300 ${
                  cat === "All"
                    ? "bg-rose text-ink"
                    : "border border-cream/20 text-cream-dim hover:border-rose hover:text-rose"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY-STYLE GALLERY */}
      <section className="bg-ink py-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Featured grid — first image is large, rest fill in */}
          <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[280px] md:auto-rows-[320px] gap-3 md:gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                className={`relative overflow-hidden rounded-sm group cursor-pointer bg-ink-soft ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-400 flex items-end p-5 opacity-0 group-hover:opacity-100">
                  <p className="text-cream text-xs uppercase tracking-[0.1em]">
                    {item.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            {...fadeUp(0.1)}
            className="mt-14 text-center"
          >
            <p className="text-cream-dim text-sm mb-5">
              See more on our Instagram for the latest setups and behind-the-scenes.
            </p>
            <a
              href="https://instagram.com/thelavierapicnics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rose/50 px-6 py-3 text-sm uppercase tracking-[0.08em] text-rose hover:bg-rose hover:text-ink transition-colors duration-300"
            >
              <FiInstagram />
              Follow @thelavierapicnics
              <FiArrowUpRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* BOOK PROMPT */}
      <section className="bg-cream text-ink py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <motion.h2 {...fadeUp(0)} className="font-display text-3xl md:text-4xl mb-5">
            Like what you see?
          </motion.h2>
          <motion.p {...fadeUp(0.1)} className="text-ink/60 text-sm mb-8">
            Every setup is unique. Let us design yours.
          </motion.p>
          <motion.div {...fadeUp(0.15)}>
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm uppercase tracking-[0.08em] text-ink font-medium hover:bg-rose-light transition-colors duration-300"
            >
              Reserve a date
              <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
