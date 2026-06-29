"use client";

import { useState, useRef, FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiLoader } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
// import emailjs from "@emailjs/browser"; // I will uncomment when I add EmailJS keys

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const PACKAGES = ["Basic", "Luxe", "Grand Moment", "The Icon", "Not sure yet"];
const OCCASIONS = [
  "Romantic date",
  "Birthday",
  "Proposal",
  "Anniversary",
  "Family gathering",
  "Corporate / event",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function BookPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFormState("submitting");

    // --- EmailJS integration ---
    // 1. Sign up at emailjs.com and create a service + template.
    // 2. Add these to your .env.local:
    //    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    //    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    //    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    // 3. Uncomment the import above and the block below:
    //
    // try {
    //   await emailjs.sendForm(
    //     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    //     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    //     formRef.current!,
    //     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    //   );
    //   setFormState("success");
    // } catch {
    //   setFormState("error");
    // }

    // Placeholder — remove once EmailJS is wired:
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  const inputBase =
    "w-full rounded-lg border border-cream/15 bg-ink-soft px-4 py-3.5 text-cream text-sm placeholder:text-cream-dim/50 focus:outline-none focus:border-rose transition-colors duration-300";

  const labelBase = "block text-xs uppercase tracking-[0.12em] text-cream-dim mb-2";

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-36 pb-16 bg-ink">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <motion.p
            {...fadeUp(0)}
            className="text-rose text-xs uppercase tracking-[0.25em] mb-4"
          >
            Let&rsquo;s plan your experience
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-display text-cream text-5xl md:text-7xl leading-[0.95] max-w-3xl"
          >
            Reserve your{" "}
            <em className="text-rose not-italic font-light">date.</em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="text-cream-dim mt-6 max-w-md text-sm leading-relaxed"
          >
            Fill in the form below and we&rsquo;ll get back to you within 24 hours
            to confirm your booking and finalise every detail.
          </motion.p>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-ink pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* FORM */}
            <div className="lg:col-span-2">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-rose/30 bg-rose/5 p-12 text-center"
                >
                  <div className="mx-auto mb-6 w-14 h-14 rounded-full bg-rose/10 flex items-center justify-center">
                    <FiCheck className="text-rose" size={26} />
                  </div>
                  <h2 className="font-display text-cream text-3xl mb-3">
                    We&rsquo;ve received your enquiry!
                  </h2>
                  <p className="text-cream-dim text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                    Expect a message from us within 24 hours to confirm your date
                    and talk through the finer details.
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-rose/50 px-6 py-3 text-sm uppercase tracking-[0.08em] text-rose hover:bg-rose hover:text-ink transition-colors"
                  >
                    Explore packages
                    <FiArrowUpRight size={14} />
                  </Link>
                </motion.div>
              ) : (
                <motion.form
                  ref={formRef}
                  {...fadeUp(0)}
                  onSubmit={handleSubmit}
                  className="space-y-7"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="from_name" className={labelBase}>
                        Full name *
                      </label>
                      <input
                        id="from_name"
                        name="from_name"
                        type="text"
                        required
                        placeholder="Your name"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="from_email" className={labelBase}>
                        Email address *
                      </label>
                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Phone + Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className={labelBase}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+1 555 555 5555"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="picnic_date" className={labelBase}>
                        Preferred date *
                      </label>
                      <input
                        id="picnic_date"
                        name="picnic_date"
                        type="date"
                        required
                        className={`${inputBase} [scheme:dark]`}
                      />
                    </div>
                  </div>

                  {/* Guests + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="guests" className={labelBase}>
                        Number of guests *
                      </label>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        required
                        placeholder="2"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className={labelBase}>
                        Preferred location / area
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Park, beach, hotel grounds…"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Package selector */}
                  <div>
                    <label className={labelBase}>Package interest</label>
                    <div className="flex flex-wrap gap-2">
                      {PACKAGES.map((pkg) => (
                        <button
                          type="button"
                          key={pkg}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] border transition-colors duration-200 ${
                            selectedPackage === pkg
                              ? "bg-rose border-rose text-ink"
                              : "border-cream/20 text-cream-dim hover:border-rose hover:text-rose"
                          }`}
                        >
                          {pkg}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="package" value={selectedPackage} />
                  </div>

                  {/* Occasion selector */}
                  <div>
                    <label className={labelBase}>Occasion</label>
                    <div className="flex flex-wrap gap-2">
                      {OCCASIONS.map((occ) => (
                        <button
                          type="button"
                          key={occ}
                          onClick={() => setSelectedOccasion(occ)}
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.08em] border transition-colors duration-200 ${
                            selectedOccasion === occ
                              ? "bg-rose border-rose text-ink"
                              : "border-cream/20 text-cream-dim hover:border-rose hover:text-rose"
                          }`}
                        >
                          {occ}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="occasion" value={selectedOccasion} />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Anything else we should know?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Special requests, décor themes, add-ons, allergies…"
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  {formState === "error" && (
                    <p className="text-rose-light text-sm">
                      Something went wrong. Please try again or reach out via
                      WhatsApp below.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="inline-flex items-center gap-2 rounded-full bg-rose px-8 py-4 text-sm uppercase tracking-[0.08em] text-ink font-medium hover:bg-rose-light transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "submitting" ? (
                      <>
                        <FiLoader className="animate-spin" size={14} />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <FiArrowUpRight />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </div>

            {/* SIDEBAR */}
            <motion.aside
              {...fadeUp(0.15)}
              className="space-y-8 lg:pt-4 lg:sticky lg:top-28"
            >
              {/* WhatsApp */}
              <div className="rounded-xl border border-cream/10 p-7">
                <p className="text-xs uppercase tracking-[0.12em] text-rose mb-3">
                  Prefer to chat?
                </p>
                <p className="text-cream-dim text-sm leading-relaxed mb-5">
                  Reach us directly on WhatsApp for a faster response or to
                  discuss your ideas before booking.
                </p>
                <a
                  href="https://wa.me/255658126962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 px-5 py-2.5 text-sm text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                >
                  <FaWhatsapp size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* What to expect */}
              <div className="rounded-xl border border-cream/10 p-7">
                <p className="text-xs uppercase tracking-[0.12em] text-rose mb-4">
                  What happens next
                </p>
                <ul className="space-y-4">
                  {[
                    "We confirm your enquiry within 24 hours",
                    "We agree on your package, date & add-ons",
                    "Setup details are finalised",
                    "We handle everything — you just arrive",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-cream-dim">
                      <span className="font-display text-rose text-lg leading-none shrink-0">
                        {i + 1}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package reminder */}
              <div className="rounded-xl bg-rose/5 border border-rose/20 p-7">
                <p className="text-xs uppercase tracking-[0.12em] text-rose-light mb-3">
                  Not sure which package?
                </p>
                <p className="text-cream-dim text-sm leading-relaxed mb-4">
                  Browse our packages and add-ons to find the right fit before
                  you book.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-rose text-sm hover:text-rose-light transition-colors"
                >
                  View all packages <FiArrowUpRight size={13} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  );
}
