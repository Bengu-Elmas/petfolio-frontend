import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const litterTypes = [
  {
    title: "Clumping clay",
    description:
      "Forms clumps around urine so you can scoop out the used litter. Dust and tracking vary by product. Look for an unscented option if you’re trying it for the first time.",
  },
  {
    title: "Non-clumping clay",
    description:
      "Absorbs moisture without forming clumps. It can be an affordable choice, but removing just the wet litter can be harder. Check the package for replacement instructions.",
  },
  {
    title: "Silica gel crystals",
    description:
      "The crystals absorb moisture. Most products of this type need solid waste scooped out and the crystals replaced as directed. Some cats may prefer a finer texture under their paws.",
  },
  {
    title: "Plant-based and paper litter",
    description:
      "Options include corn, wheat, wood and paper. Some come in fine grains and others in pellets. Clumping, dust and odor control vary, so compare individual products.",
  },
  {
    title: "Pine pellets",
    description:
      "Many pine pellets break down into sawdust as they absorb moisture. A sifting tray can help separate the used material. Give your cat a choice if they’re used to finer litter.",
  },
];

export default function CatLitter() {
  return (
    <main className="bg-cream font-sans text-slate-700">
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6 sm:pt-10">
        <Link
          to="/articles"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm font-medium text-teal-700 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          All articles
        </Link>

        <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          The Ultimate Guide to Cat Litter: Choosing the Best Option for Your
          Feline Friend
        </h1>

        <img
          src="/articles/catlitter.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          A litter that’s easy for you to scoop also needs to feel comfortable
          under your cat’s paws. Texture, scent and how easily you can keep the
          box clean are good places to start.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Comparing five types of cat litter</h2>

            <dl className="divide-y divide-teal-900/15 border-y border-teal-900/15">
              {litterTypes.map(({ title, description }) => (
                <div key={title} className="py-4">
                  <dt className="font-bold text-slate-900">{title}</dt>
                  <dd className="mt-1">{description}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section>
            <h2>Let your cat try the new litter</h2>
            <p>
              Fine-grained, unscented litter is a reasonable starting point. If
              you want to try something different, offer it in a second box
              while keeping the familiar litter available. Notice which box your
              cat chooses over the next few days.
            </p>
          </section>

          <section>
            <h2>Make the box easy to use</h2>
            <p>
              Put the box somewhere quiet and easy to reach, away from food and
              water. Scoop it daily and follow the product instructions for
              replacing the litter. If you have several cats, spread boxes
              around the home so each cat can reach one easily.
            </p>
          </section>

          <section>
            <h2>When litter box habits change</h2>
            <p>
              A new litter, a noisy location or tension with another pet can
              affect litter box use. A sudden change can also have a medical
              cause. Contact your veterinarian if your cat starts urinating
              outside the box or their usual habits change.
            </p>

            <p className="mt-4 border-l-2 border-rose-400 pl-4">
              <strong className="text-slate-900">Seek urgent care.</strong> If
              your cat repeatedly strains to urinate and passes little or no
              urine, contact an emergency veterinary clinic right away.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <ul className="mt-2 space-y-2 [&_a]:text-teal-800 [&_a]:underline [&_a]:underline-offset-4">
            <li>
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-house-soiling">
                Cornell Feline Health Center — House Soiling
              </a>
            </li>
            <li>
              <a href="https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease">
                Cornell Feline Health Center — Feline Lower Urinary Tract
                Disease
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
