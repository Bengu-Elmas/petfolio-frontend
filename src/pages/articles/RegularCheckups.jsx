import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegularCheckups() {
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
          The Importance of Regular Check-ups for Pet Health
        </h1>

        <img
          src="/articles/checkup.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          A routine visit gives your veterinarian a chance to see how your pet
          is doing on an ordinary day. It also gives you time to ask about the
          small changes you’ve noticed at home, from a slower walk to a new
          habit at mealtime.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Spotting changes early</h2>
            <p>
              Some health problems begin with subtle changes. During a physical
              exam, your veterinarian may notice something that warrants a
              closer look, such as a change in weight or a new heart murmur.
              They can explain whether monitoring or further tests would help.
            </p>
          </section>

          <section>
            <h2>Keeping preventive care up to date</h2>
            <p>
              Bring your pet’s vaccination and parasite prevention records. Your
              vet can review what your pet has already received and discuss
              which vaccines or preventive products make sense for their
              lifestyle and the risks where you live.
            </p>
          </section>

          <section>
            <h2>Making a plan for your pet</h2>
            <p>
              A growing kitten, a healthy adult dog and a pet with a chronic
              condition may need different follow-up schedules. Ask your vet
              when they would like to see your pet again and which changes
              should prompt an earlier call.
            </p>
          </section>

          <section>
            <h2>Tracking weight and body condition</h2>
            <p>
              Your vet can compare your pet’s weight with earlier visits and
              assess their body condition. If you’re discussing a change, bring
              a note of what your pet eats in a typical day, including treats.
              That gives you a starting point for talking about portions and
              activity.
            </p>
          </section>

          <section>
            <h2>Checking teeth and gums</h2>
            <p>
              An oral exam gives your vet a chance to look for signs of dental
              problems. Mention if your pet has started dropping food, chewing
              differently or avoiding their usual toys. Ask what home dental
              care or follow-up is appropriate.
            </p>
          </section>

          <section>
            <h2>Talking about behavior</h2>
            <p>
              Tell your vet if your pet has started hiding more, hesitating
              before a jump or sleeping differently. Describe when the change
              began and what happens around it. A short video, if you already
              have one, can help illustrate what you mean.
            </p>
          </section>

          <section>
            <h2>Supporting quality of life over time</h2>
            <p>
              Check-ups give you and your vet a chance to revisit earlier
              concerns and see how your pet is doing with their current care.
              Before your visit, make a short list of changes you’ve noticed,
              medications your pet takes and questions you want to ask. Write
              down the follow-up plan before you leave.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <a
            href="https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/preventive-healthcare/aaha-preventive-healthcare-guidelines-for-dogs-and-cats.pdf"
            className="mt-2 inline-block rounded-sm text-teal-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            AAHA–AVMA Preventive Healthcare Guidelines for Dogs and Cats
          </a>
        </section>
      </article>
    </main>
  );
}
