import Link from "next/link";
import { SiTiktok } from "react-icons/si";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-cream/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-cream mb-3">
              The <em className="text-rose not-italic font-medium">Laviera</em>{" "}
              Picnics
            </p>
            <p className="text-cream-dim text-sm leading-relaxed max-w-xs">
              Hand-styled outdoor picnics for birthdays, proposals, and
              golden-hour gatherings. We bring the table, the linens, the
              flowers — you bring your people.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-rose mb-4">
              Explore
            </p>
            <ul className="space-y-3 text-sm text-cream-dim">
              <li>
                <Link href="/about" className="hover:text-cream transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cream transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-cream transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-cream transition-colors">
                  Book a picnic
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-rose mb-4">
              Say hello
            </p>
            <ul className="space-y-3 text-sm text-cream-dim">
              <li className="flex items-center gap-2">
                <FiMail size={14} className="text-rose" />
                <a
                  href="mailto:thelavierapicnics@gmail.com"
                  className="hover:text-cream transition-colors"
                >
                  thelavierapicnics@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone size={14} className="text-rose" />
                <a href="tel:+255 658 126 962" className="hover:text-cream transition-colors">
                  +255 658 126 962
                </a>
              </li>
              <li className="flex items-center gap-2">
                <SiTiktok size={14} className="text-rose" />
                <a
                  href="https://tiktok.com/@TheLavierapicnics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors"
                >
                  @TheLavierapicnics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-cream-dim/70">
            &copy; {new Date().getFullYear()} The Laviera Picnics. All rights
            reserved.
          </p>
          <p className="text-xs text-cream-dim/70">
            Designed by Shannia Geofrey &amp; built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
