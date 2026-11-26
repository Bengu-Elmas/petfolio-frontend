import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const featureLinks = [
  ["Pet Profiles", "/home#pet-profiles"],
  ["Vaccination Calendar", "/home#vaccination-calendar"],
  ["Health Timeline", "/home#health-timeline"],
  ["Nearby Vets", "/home#nearby-vets"],
  ["Safe Sharing", "/home#safe-sharing"],
  ["QR Pet Tag", "/home#qr-pet-tag"],
];
const siteLinks = [
  ["Home", "/home"],
  ["About Us", "/about"],
  ["Articles", "/articles"],
];
const accountLinks = [
  ["Log In", "/login"],
  ["Sign Up", "/signup"],
];

const container = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
const focus =
  "focus-visible:outline-[0.1875rem] focus-visible:outline-solid focus-visible:outline-rose-300 focus-visible:outline-offset-[0.1875rem]";
const link = `inline-flex min-h-11 items-center py-2 font-medium text-teal-100 underline-offset-4 hover:text-white hover:underline ${focus}`;

function FooterNav({ title, links, className }) {
  return (
    <nav aria-label={`Footer: ${title}`} className={`min-w-0 ${className}`}>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <ul>
        {links.map(([label, href]) => (
          <li key={href}>
            <a href={href} className={link}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function backToTop() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export default function Footer() {
  return (
    <footer className="bg-cream font-sans text-base font-normal">
      <div className="bg-teal-950 text-teal-50">
        <div className={container}>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8 py-10 sm:py-12 lg:grid-cols-12 lg:py-16">
            <div className="col-span-2 lg:col-span-4">
              <a
                href="/home"
                className={`inline-flex min-h-11 items-center gap-2 rounded-lg font-logo text-3xl font-semibold underline-offset-4 hover:underline ${focus}`}
              >
                <span className="grid size-12 place-items-center rounded-xl bg-teal-50">
                  <img
                    src="/petfolio_logo.png"
                    alt=""
                    className="size-10 object-contain"
                  />
                </span>
                PetFolio
              </a>
              <p className="mt-4 max-w-[24em] leading-relaxed text-teal-100">
                Health, care and guidance for your beloved companion, all in one
                place.
              </p>
            </div>
            <FooterNav
              title="Features"
              links={featureLinks}
              className="col-span-2 sm:col-span-1 sm:row-span-2 lg:col-span-3 lg:row-span-1"
            />
            <FooterNav
              title="PetFolio"
              links={siteLinks}
              className="lg:col-span-3"
            />
            <FooterNav
              title="Account"
              links={accountLinks}
              className="lg:col-span-2"
            />
          </div>
          <div className="border-t border-white/15 pb-8 pt-4">
            <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
              <small className="text-sm">
                © {new Date().getFullYear()} PetFolio. All rights reserved.
              </small>
              <div className="flex gap-5 lg:ml-auto">
                <Link to="/privacy" className={link}>
                  Privacy
                </Link>
                <Link to="/terms" className={link}>
                  Terms
                </Link>
              </div>
              <button
                type="button"
                onClick={backToTop}
                className={`${link} cursor-pointer gap-2`}
              >
                Back to top <ArrowUp aria-hidden="true" className="size-4" />
              </button>
            </div>
            <p className="mt-3 max-w-[76em] text-sm leading-relaxed text-teal-100">
              PetFolio is a record-keeping tool. It does not provide veterinary
              diagnosis or medical advice. In an emergency, contact a
              veterinarian directly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
