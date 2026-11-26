import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PetsAndMentalHealth() {
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
          How Pets Impact Our Mental Health
        </h1>

        <img
          src="/articles/mental.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          A dog waiting at the door or a cat settling beside you can change how
          it feels to come home. Sharing your life with a pet can bring
          companionship and give your days a familiar rhythm. It also means
          caring for another living being, including on the days when your own
          time, energy or money is stretched.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>How pets can support mental well-being</h2>

            <dl className="space-y-4 [&_dt]:font-bold [&_dt]:text-teal-900">
              <div>
                <dt>Companionship</dt>
                <dd>
                  A pet can keep you company during an otherwise quiet evening.
                  Caring for one can also open the door to human connection. The
                  neighbor you pass on your dog walk each morning might
                  eventually become someone you stop to talk to.
                </dd>
              </div>

              <div>
                <dt>Small lifts in mood</dt>
                <dd>
                  Sometimes it’s the little things you look forward to: the toy
                  your dog brings over when you close your laptop, or the spot
                  your cat picks beside you while you read. Those shared moments
                  can brighten an ordinary day.
                </dd>
              </div>

              <div>
                <dt>Familiar routines</dt>
                <dd>
                  Feeding, grooming and play give the day a few predictable
                  moments. On a morning when it’s hard to decide where to start,
                  filling a water bowl is one small, concrete thing you can do.
                </dd>
              </div>

              <div>
                <dt>A moment to unwind</dt>
                <dd>
                  Some people find it calming to stroke a pet or sit quietly
                  together. Let your pet choose whether to come closer or move
                  away, so the time together feels comfortable for both of you.
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2>Movement and everyday connection</h2>
            <p>
              Walking a dog gives you a reason to step outside and move
              regularly. At home, a short play session can give you both a break
              after a long stretch at your desk. Even a pet wandering into a
              video call can spark a conversation with a colleague you usually
              only talk to about work.
            </p>
          </section>

          <section>
            <h2>Before you get a pet</h2>
            <p>
              Think through an ordinary week with the animal you’re considering.
              Where will they rest? Who will care for them when you travel?
              These questions matter as much as how you feel when you first meet
              them.
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-teal-700">
              <li>
                <strong>Space.</strong> Plan for a suitable habitat, a quiet
                resting place and enough room for movement and play.
              </li>
              <li>
                <strong>Cost.</strong> Budget for food, supplies, veterinary
                care and unexpected expenses. Include grooming or a pet sitter
                if you’re likely to need them.
              </li>
              <li>
                <strong>Age.</strong> A puppy or kitten needs close supervision
                and time to learn. An older animal may already have familiar
                routines and may need extra medical care.
              </li>
              <li>
                <strong>Activity.</strong> Ask what exercise, interaction and
                enrichment this particular animal needs. Consider how you’ll
                meet those needs on your busiest days.
              </li>
            </ul>

            <p className="mt-4">
              A veterinarian or shelter team can help you picture daily life
              with a particular pet. Tell them about your schedule, your home
              and the kind of companionship you’re looking for.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <a
            href="https://newsinhealth.nih.gov/2018/02/power-pets"
            className="mt-2 inline-block rounded-sm text-teal-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            NIH News in Health — The Power of Pets
          </a>
        </section>
      </article>
    </main>
  );
}
