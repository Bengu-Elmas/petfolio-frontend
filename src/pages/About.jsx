import { CalendarDays, HeartPulse, MapPin, ScanLine } from "lucide-react";

const capabilities = [
  {
    icon: HeartPulse,
    title: "All-in-one health timeline",
    description:
      "Each pet has a story of their own. A dedicated profile keeps vaccinations, allergies, regular medications and vet visits together, even when you’re caring for more than one pet.",
  },
  {
    icon: CalendarDays,
    title: "A calendar for everyday care",
    description:
      "Keep upcoming checkups, medication days and daily care notes in one calendar. When you’re wondering what comes next, there’s one place to look.",
  },
  {
    icon: MapPin,
    title: "Help when you’re away from home",
    description:
      "Find veterinary clinics near you and keep your pet’s essential health notes close at hand. If you need an urgent visit, call the clinic to confirm it can see your pet.",
  },
  {
    icon: ScanLine,
    title: "Sharing on your terms",
    description:
      "Choose which records to share with a new clinic as a PDF or through a temporary link. A collar QR tag serves a different purpose: someone who finds your pet can see the contact details you’ve chosen to share.",
  },
];

const team = ["Bengü ELMAS", "Zehra ASLAN", "Hande KAYA"];

export default function About() {
  return (
    <main className="bg-cream font-sans text-slate-700">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section
          aria-labelledby="about-heading"
          className="grid gap-8 pb-12 pt-12 sm:py-16 lg:grid-cols-12 lg:items-start lg:gap-12 lg:py-24"
        >
          <div className="min-w-0 lg:col-span-6">
            <p className="mb-4 flex items-center gap-3 font-medium text-teal-700">
              <span
                aria-hidden="true"
                className="h-0.5 w-8 rounded-full bg-rose-400"
              />
              About us
            </p>

            <h1
              id="about-heading"
              className="max-w-[15ch] text-balance text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Our furry friends deserve better than{" "}
              <span className="text-teal-700">scattered notes.</span>
            </h1>
          </div>

          <div className="min-w-0 max-w-prose space-y-5 text-base leading-8 lg:col-span-6 lg:pt-10">
            <p>
              A vaccination booklet tucked away in a drawer. Lab results buried
              in a phone gallery. A medication schedule you’re trying to
              remember on the way to an unfamiliar clinic. As pet owners, we
              know that feeling of needing everything at once.
            </p>

            <p>
              We started PetFolio to make those moments easier for pet owners
              and veterinarians. Our goal is to bring a pet’s health history,
              everyday care plans and essential contact details together in one
              place, whether you’re at home on your computer or standing at a
              clinic with your phone.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="border-t border-teal-900/15 py-10 sm:py-14 lg:py-16"
        >
          <h2
            id="capabilities-heading"
            className="max-w-[22ch] text-balance text-3xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-4xl"
          >
            What can you do with PetFolio?
          </h2>

          <ul className="mt-8 grid gap-x-12 gap-y-7 md:grid-cols-2 lg:mt-10 lg:gap-x-16">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="min-w-0 border-t border-teal-900/15 pt-5"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="mt-0.5 size-6 shrink-0 text-teal-700"
                  />
                  <h3 className="text-xl font-bold leading-tight tracking-[-0.02em] text-slate-900">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 max-w-prose text-base leading-7">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-prose border-l-2 border-rose-400 pl-4 text-base leading-7">
            PetFolio helps you stay organized and prepared alongside your
            veterinarian. It does not provide medical diagnoses.
          </p>
        </section>

        <section
          aria-labelledby="team-heading"
          className="pb-12 sm:pb-16 lg:pb-20"
        >
          <div className="rounded-3xl bg-teal-900 p-6 text-teal-50 sm:p-9 lg:grid lg:grid-cols-12 lg:gap-16 lg:p-12">
            <div className="lg:col-span-7">
              <h2
                id="team-heading"
                className="text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl"
              >
                Who are we?
              </h2>

              <p className="mt-5 max-w-prose text-base leading-8">
                We’re three Computer Engineering students at Istanbul Beykent
                University. PetFolio began as a coursework prototype and grew
                into our graduation design project.
              </p>

              <p className="mt-4 max-w-prose text-base leading-8">
                Our love for animals shaped the questions we asked while
                building it. What would you want to have ready at a first vet
                visit? If someone found your pet, how could they reach you?
                Those questions guide what we build and which details we keep
                private.
              </p>
            </div>

            <ul
              aria-label="PetFolio team members"
              className="mt-7 self-center divide-y divide-teal-100/20 border-y border-teal-100/20 lg:col-span-5 lg:mt-0"
            >
              {team.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 py-3 text-xl font-medium tracking-[-0.02em] text-white sm:py-4 sm:text-2xl"
                >
                  <img src="/paw.svg" alt="" className="size-5 shrink-0" />
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
