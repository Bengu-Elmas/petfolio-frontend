import { Link, NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

function navLinkClass({ isActive }) {
  const base = "inline-flex items-center gap-1.5 whitespace-nowrap";
  const color = isActive
    ? "text-teal-700"
    : "text-slate-800 hover:text-teal-700";

  return `${base} ${color}`;
}

export default function Header({ isLoggedIn = false }) {
  return (
    <header className="bg-white">
      <div
        aria-hidden="true"
        className="h-1 bg-linear-to-r from-teal-500 via-cyan-500 to-sky-500"
      />

      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <Link
          to="/home"
          className="flex shrink-0 items-center font-logo text-2xl font-semibold text-teal-700 lg:text-3xl"
        >
          <img
            src="/petfolio_logo.png"
            alt=""
            className="h-12 w-auto origin-right scale-110 sm:scale-125 lg:h-16 lg:scale-150"
          />
          <span>PetFolio</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="ml-auto flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-base font-bold leading-tight sm:gap-x-6 sm:text-xl lg:gap-x-8 lg:text-2xl"
        >
          <NavLink to="/home" end className={navLinkClass}>
            <img
              src="/home_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            <img
              src="/aboutus_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            About Us
          </NavLink>

          <NavLink to="/articles" className={navLinkClass}>
            <img
              src="/articles_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            Articles
          </NavLink>

          {isLoggedIn ? (
            <NavLink to="/pet-profile" className={navLinkClass}>
              <img
                src="/pet_profile_icon.svg"
                alt=""
                className="size-8 shrink-0 lg:size-12"
              />
              <span className="[font-variant-ligatures:none]">Pet Profile</span>
            </NavLink>
          ) : (
            <LoginButton />
          )}
        </nav>
      </div>
    </header>
  );
}
