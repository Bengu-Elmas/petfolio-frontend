export default function Header() {
  return (
    <header className="bg-white">
      <div
        aria-hidden="true"
        className="h-1 bg-linear-to-r from-teal-500 via-cyan-500 to-sky-500"
      />

      <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
        <a
          href="/"
          className="flex shrink-0 items-center font-logo text-2xl font-semibold text-teal-700 lg:text-3xl"
        >
          <img
            src="/petfolio_logo.png"
            alt=""
            className="h-12 w-auto origin-right scale-110 sm:scale-125 lg:h-16 lg:scale-150"
          />
          <span>PetFolio</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="ml-auto flex flex-wrap items-center justify-end gap-x-3 gap-y-1 text-base font-bold leading-tight sm:gap-x-6 sm:text-xl lg:gap-x-8 lg:text-2xl"
        >
          <a
            href="/"
            aria-current="page"
            className="inline-flex items-center gap-1.5 text-teal-700"
          >
            <img
              src="/home_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            Home
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-slate-800 hover:text-teal-700"
          >
            <img
              src="/aboutus_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            About Us
          </a>
          <a
            href="/articles"
            className="inline-flex items-center gap-1.5 text-slate-800 hover:text-teal-700"
          >
            <img
              src="/articles_icon.svg"
              alt=""
              className="size-8 shrink-0 lg:size-12"
            />
            Articles
          </a>
        </nav>
      </div>
    </header>
  );
}
