import { useEffect, useState } from "react";
import BlurText from "../components/BlurText";
import Features from "../components/Features";

const secondLineDelayMs = 650;
const headingAnimation = {
  effect: "tilt",
  animateBy: "letters",
  direction: "top",
  staggerFrom: "start",
  trigger: "load",
  delay: 30,
  stepDuration: 0.45,
  blur: 8,
  distance: 40,
  fromColor: "#FB7185",
  loop: false,
  focusOnHover: false,
};

const heroImage = "/petfolio_home_picture.png";

export default function Home() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(
      () => setShowSecondLine(true),
      secondLineDelayMs,
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#FBF8F4] text-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          aria-labelledby="home-heading"
          className="grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-20"
        >
          <div>
            <h1
              id="home-heading"
              aria-label="Everything your pet needs, in one place."
              className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              <BlurText
                {...headingAnimation}
                text="Everything your pet needs,"
                color="#1E293B"
              />
              {showSecondLine ? (
                <BlurText
                  {...headingAnimation}
                  text="in one place."
                  color="#0F766E"
                />
              ) : (
                <span aria-hidden="true" className="invisible block">
                  in one place.
                </span>
              )}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Vaccinations, vet visits, medications and appointments, organized
              in one timeline. Share only what your vet needs, and find help
              nearby when it matters most.
            </p>
          </div>
          {heroImage ? (
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-teal-50 p-6">
              <img
                src={heroImage}
                alt="A calico cat listening to a Rottweiler’s heartbeat with a stethoscope"
                className="h-auto w-full object-contain"
              />
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="hidden aspect-[4/3] rounded-3xl border-2 border-dashed border-teal-200 bg-teal-50 lg:block"
            />
          )}
        </section>
        <Features />
      </div>
    </main>
  );
}
