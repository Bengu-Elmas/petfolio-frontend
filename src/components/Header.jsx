import { useId, useRef, useState } from "react";
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleEscape(event) {
    if (
      event.key !== "Escape" ||
      !isMenuOpen ||
      !toggleRef.current?.offsetWidth
    ) {
      return;
    }

    closeMenu();
    toggleRef.current.focus();
  }

  return (
    <header className="bg-white" onKeyDown={handleEscape}>
      <div
        aria-hidden="true"
        className="h-1 bg-linear-to-r from-teal-500 via-cyan-500 to-sky-500"
      />

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-4 sm:px-6 xl:flex-nowrap xl:gap-6 xl:px-8 xl:py-5">
        <Link
          to="/home"
          onClick={closeMenu}
          className="flex shrink-0 items-center font-logo text-2xl font-semibold text-teal-700 xl:text-3xl"
        >
          <img
            src="/petfolio_logo.png"
            alt=""
            className="h-12 w-auto origin-right scale-110 sm:scale-125 xl:h-16 xl:scale-150"
          />
          <span>PetFolio</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
          className="group relative grid size-12 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 xl:hidden"
        >
          <span
            aria-hidden="true"
            className="absolute h-0.5 w-6 -translate-y-2 rounded-full bg-current motion-safe:transition-transform motion-safe:duration-200 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-45"
          />
          <span
            aria-hidden="true"
            className="absolute h-0.5 w-6 rounded-full bg-current motion-safe:transition-opacity motion-safe:duration-200 group-aria-expanded:opacity-0"
          />
          <span
            aria-hidden="true"
            className="absolute h-0.5 w-6 translate-y-2 rounded-full bg-current motion-safe:transition-transform motion-safe:duration-200 group-aria-expanded:translate-y-0 group-aria-expanded:-rotate-45"
          />
        </button>

        <nav
          id={menuId}
          aria-label="Main navigation"
          className={`${isMenuOpen ? "flex motion-safe:max-xl:animate-[mobile-nav-enter_180ms_ease-out_both]" : "hidden"} mt-3 w-full flex-col items-start gap-3 border-t border-teal-100 pt-3 text-lg font-bold leading-tight xl:ml-auto xl:mt-0 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-8 xl:border-0 xl:pt-0 xl:text-2xl`}
        >
          <NavLink to="/home" end className={navLinkClass} onClick={closeMenu}>
            <img
              src="/home_icon.svg"
              alt=""
              className="size-8 shrink-0 xl:size-12"
            />
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
            <img
              src="/aboutus_icon.svg"
              alt=""
              className="size-8 shrink-0 xl:size-12"
            />
            About Us
          </NavLink>

          <NavLink to="/articles" className={navLinkClass} onClick={closeMenu}>
            <img
              src="/articles_icon.svg"
              alt=""
              className="size-8 shrink-0 xl:size-12"
            />
            Articles
          </NavLink>

          {isLoggedIn ? (
            <NavLink
              to="/pet-profile"
              className={navLinkClass}
              onClick={closeMenu}
            >
              <img
                src="/pet_profile_icon.svg"
                alt=""
                className="size-8 shrink-0 xl:size-12"
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
