import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CatsAndDogs() {
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
          Do Cats Really Love You Less Than Dogs?
        </h1>

        <img
          src="/articles/catdog.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          Your dog might meet you at the door while your cat waits until you sit
          down, then quietly settles beside you. Which greeting means more?
          Researchers have studied how cats respond when a familiar person
          leaves and returns. Their findings tell us something about attachment,
          but a greeting alone can’t tell us how much a pet loves someone.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>What did the secure attachment study test?</h2>
            <p>
              In 2015, Alice Potter and Daniel Mills recruited 20 cats and their
              caregivers for an experiment. In an unfamiliar room, each cat
              spent time with their caregiver and a stranger. The researchers
              filmed what happened as the people took turns leaving and
              returning.
            </p>
            <p className="mt-3">
              The question was specific: would a cat use their caregiver as a
              secure base? One sign researchers look for is whether an animal
              feels comfortable enough to explore an unfamiliar place when a
              familiar person is there.
            </p>
          </section>

          <section>
            <h2>What happened when the caregiver left?</h2>
            <p>
              In one comparison, the cats vocalized more after their caregiver
              left than after the stranger left. Across the other observations,
              the researchers found no consistent pattern showing that the cats
              used their caregiver as a secure base in this test.
            </p>
            <p className="mt-3">
              The authors raised a question about the test itself. Waiting by
              the door might be a useful clue when observing a dog. A cat could
              respond to the same departure in a different way. Counting only
              the behavior you expect to see can leave part of the picture out.
            </p>
          </section>

          <section>
            <h2>What does that mean for you and your cat?</h2>
            <p>
              A later study, published in 2019, looked at how cats behaved when
              reunited with their caregivers. Many showed a pattern consistent
              with secure attachment: after their person returned, they could
              balance seeking contact with exploring the room.
            </p>
            <p className="mt-3">
              So if your cat skips the welcome at the door, there’s no reason to
              read that moment as a verdict on your bond. Notice the rest of the
              evening, too. When given a choice of places to settle, does your
              cat choose the seat next to yours?
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Sources</h2>
          <ul className="mt-2 space-y-2 text-teal-800 underline underline-offset-4">
            <li>
              <a href="https://doi.org/10.1371/journal.pone.0135109">
                Potter and Mills (2015) — The secure attachment study
              </a>
            </li>
            <li>
              <a href="https://pubmed.ncbi.nlm.nih.gov/31550468/">
                Vitale and colleagues (2019) — Attachment bonds between domestic
                cats and humans
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
