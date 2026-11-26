import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PetShedding() {
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
          Shedding 101: Understanding Your Pet’s Shedding Cycle
        </h1>

        <img
          src="/articles/tuydokenkopek.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          Some weeks, a quick brush picks up a few loose hairs. Other weeks, the
          same brush fills up before you’ve finished one side. Shedding is a
          normal part of life for dogs and cats, and knowing your pet’s usual
          pattern helps you spot changes in their coat.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Why do pets shed?</h2>
            <p>
              Hair grows from follicles in the skin and is replaced over time.
              How much loose hair you see depends on factors such as coat type
              and season. A double-coated dog may leave more undercoat on the
              brush during seasonal changes, while a dog with a longer growth
              phase may need more frequent trims.
            </p>
          </section>

          <section>
            <h2>The four stages of the hair cycle</h2>
            <dl className="space-y-3 [&_dt]:font-bold [&_dt]:text-slate-900">
              <div>
                <dt>Anagen (growth)</dt>
                <dd>The follicle actively produces a growing hair.</dd>
              </div>
              <div>
                <dt>Catagen (transition)</dt>
                <dd>Growth stops and the follicle begins to shrink.</dd>
              </div>
              <div>
                <dt>Telogen (rest)</dt>
                <dd>The follicle rests while the hair remains in place.</dd>
              </div>
              <div>
                <dt>Exogen (shedding)</dt>
                <dd>The old hair is released from the follicle.</dd>
              </div>
            </dl>
            <p className="mt-3">
              Different hairs can be at different stages at the same time. The
              length of each stage varies with the animal and its coat.
            </p>
          </section>

          <section>
            <h2>Managing loose hair at home</h2>
            <ul className="list-disc space-y-3 pl-6 marker:text-teal-700">
              <li>
                <strong>Brush gently.</strong> Choose a brush or comb that suits
                your pet’s coat. If you find a tight mat close to the skin, ask
                a groomer or veterinarian how to handle it safely.
              </li>
              <li>
                <strong>Check the skin as you groom.</strong> Part the coat and
                look for redness, flakes or spots that are thinning.
              </li>
              <li>
                <strong>Use a pet shampoo when bathing is needed.</strong> Ask
                your veterinarian which product to use if your pet has irritated
                skin.
              </li>
              <li>
                <strong>Wash bedding and vacuum favorite resting spots.</strong>{" "}
                A washable cover can make it easier to collect loose hair from
                the chair or sofa your pet uses most.
              </li>
            </ul>
          </section>

          <section>
            <h2>When to talk to your vet</h2>
            <p>
              Contact your veterinarian if you notice bald patches, a sudden
              change in shedding, redness or persistent scratching or licking.
              Note when the change started and which areas are affected. A photo
              can help you show how the coat has changed over time.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <a
            href="https://www.merckvetmanual.com/dog-owners/skin-disorders-of-dogs/hair-loss-alopecia-in-dogs"
            className="mt-2 inline-block rounded-sm text-teal-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            Merck Veterinary Manual — Hair Loss in Dogs
          </a>
        </section>
      </article>
    </main>
  );
}
