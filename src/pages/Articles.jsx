import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    path: "/articles/playing-with-your-pet",
    title: "4 Reasons Why Playing with Your Pet Is Important",
    description:
      "From chasing a feather toy to bringing back a favorite ball, discover what playtime means for your pet.",
  },
  {
    path: "/articles/cats-and-dogs",
    title: "Do Cats Really Love You Less Than Dogs?",
    description:
      "What can a quiet greeting tell you? Explore what researchers learned by watching cats reunite with their favorite people.",
  },
  {
    path: "/articles/heart-health",
    title: "Heart Health in Pets: Recognizing Early Signs of Heart Disease",
    description:
      "Learn which changes in breathing or stamina to mention to your vet, when to seek urgent help and what a heart examination can show.",
  },
  {
    path: "/articles/pets-and-mental-health",
    title: "How Pets Impact Our Mental Health",
    description:
      "Explore how pets can bring companionship and routine to daily life, and what to consider before welcoming one into your home.",
  },
  {
    path: "/articles/choosing-pet-food",
    title: "How to Choose the Best Food for Your Pet",
    description:
      "Learn what to look for on a food label, how wet and dry meals compare, and how your pet’s needs change with age.",
  },
  {
    path: "/articles/vaccinations",
    title:
      "Protecting Your Furry Friends: The Essential Role of Vaccinations in Pet Health",
    description:
      "Make sense of your pet’s vaccination booklet, from core vaccines and booster visits to the records worth keeping.",
  },
  {
    path: "/articles/regular-checkups",
    title: "The Importance of Regular Check-ups for Pet Health",
    description:
      "See what happens during a routine vet visit, what changes to mention and what to bring with you.",
  },
  {
    path: "/articles/cat-litter",
    title:
      "The Ultimate Guide to Cat Litter: Choosing the Best Option for Your Feline Friend",
    description:
      "Compare five types of cat litter and learn how to set up a box your cat feels comfortable using.",
  },
  {
    path: "/articles/shedding",
    title: "Shedding 101: Understanding Your Pet’s Shedding Cycle",
    description:
      "Learn why pets shed, how to manage loose hair at home and which changes in their coat to mention to your vet.",
  },
  {
    path: "/articles/neutering",
    title: "What Is Neutering?",
    description:
      "Learn what spaying and castration involve, when to discuss timing with your vet and how to care for your cat after surgery.",
  },
];

export default function Articles() {
  return (
    <main className="bg-cream font-sans text-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="grid items-center gap-6 border-b border-teal-900/15 py-8 sm:grid-cols-[1fr_auto] sm:gap-10 sm:py-12">
          <div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Articles
            </h1>

            <p className="mt-4 text-xl font-medium text-teal-800 sm:text-2xl">
              Get to know your pet a little better.
            </p>

            <p className="mt-2 max-w-[46ch] text-base leading-7 text-slate-700">
              Curious about your pet’s habits, health or everyday care? Pick a
              story below and settle in for a read.
            </p>
          </div>

          <img
            src="/Articles_Main_Picture.png"
            alt="A cat peeking over an open newspaper"
            className="w-40 justify-self-center object-contain sm:w-48 lg:mr-8 lg:w-64"
          />
        </header>

        <section aria-label="Pet care articles" className="py-8 sm:py-12">
          <ul className="divide-y divide-teal-900/15">
            {articles.map(({ path, title, description }) => (
              <li key={path}>
                <Link
                  to={path}
                  className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-3 rounded-xl py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 sm:gap-5 sm:py-6"
                >
                  <span
                    aria-hidden="true"
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-teal-100 sm:size-10"
                  >
                    <span
                      className="size-6 bg-teal-800"
                      style={{
                        mask: 'url("/paw.svg") center / contain no-repeat',
                      }}
                    />
                  </span>

                  <div className="min-w-0 pt-0.5">
                    <h2 className="max-w-[44ch] text-xl font-bold leading-tight tracking-tight text-teal-900 underline-offset-4 group-hover:underline sm:text-2xl lg:text-3xl">
                      {title}
                    </h2>

                    <p className="mt-2 max-w-[65ch] text-base leading-7 text-slate-700">
                      {description}
                    </p>
                  </div>

                  <span className="grid size-8 place-items-center self-center rounded-full bg-teal-50 text-teal-800 group-hover:bg-teal-100 sm:size-10">
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
