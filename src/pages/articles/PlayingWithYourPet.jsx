import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PlayingWithYourPet() {
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
          4 Reasons Why Playing with Your Pet Is Important
        </h1>

        <img
          src="/articles/play.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          A game of fetch or a few minutes with a feather toy can be fun for
          both of you. Play also gives your pet a chance to move, explore and
          spend time with you. Here are four reasons to make room for it in your
          daily routine.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Maintaining a Healthy Weight</h2>
            <p>
              Regular play gives your pet a chance to stay active. A dog might
              enjoy chasing a toy across the yard, while a cat might prefer
              following a feather wand around the room. Choose an activity that
              suits your pet’s size, age and energy level.
            </p>
          </section>

          <section>
            <h2>Helps Them Behave Better</h2>
            <p>
              Pets need opportunities to use their energy and explore. When your
              dog keeps picking up your slippers, try inviting them to play with
              a toy they can carry or chase. Giving that energy somewhere to go
              can help ease frustration.
            </p>
          </section>

          <section>
            <h2>Great Way to Relieve Stress</h2>
            <p>
              A familiar game can help your pet unwind, especially when their
              routine changes. Let them approach the toy at their own pace and
              take a break when they lose interest. Even a short session can be
              an enjoyable part of their day.
            </p>
          </section>

          <section>
            <h2>Strengthens Your Bond</h2>
            <p>
              Play gives your pet your undivided attention. You get to learn the
              little things they enjoy: which toy they bring back, where they
              like to hide, or when they’re ready for another round. Those
              everyday moments help you build trust and get to know each other
              better.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
