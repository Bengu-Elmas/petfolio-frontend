import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeartHealth() {
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
          Heart Health in Pets: Recognizing Early Signs of Heart Disease
        </h1>

        <p className="mt-5 border-l-2 border-rose-400 pl-4 leading-7">
          <strong className="text-slate-900">When to seek urgent help:</strong>{" "}
          If your pet is struggling to breathe or collapses, contact an
          emergency veterinary clinic immediately.
        </p>

        <img
          src="/articles/heart.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          A dog who starts stopping halfway through a familiar walk or a cat
          whose breathing looks different while resting may be showing a change
          worth discussing with a veterinarian. What you notice at home can help
          your vet decide what to examine more closely.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Why heart health matters</h2>
            <p>
              Heart disease can affect the valves that direct blood through the
              heart or the muscle that pumps it. Some pets show few outward
              signs early on. A routine examination may reveal a clue, such as a
              heart murmur, before you notice a change at home.
            </p>
          </section>

          <section>
            <h2>Changes to discuss with your vet</h2>
            <p>
              Pay attention to changes from your pet’s usual routine. Contact
              your veterinarian if you notice:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-teal-700">
              <li>Breathing faster than usual while resting or asleep.</li>
              <li>Tiring sooner during familiar activities.</li>
              <li>A persistent cough, especially in a dog.</li>
              <li>A reduced appetite or unexplained weight loss.</li>
              <li>A belly that appears swollen or larger than usual.</li>
            </ul>
            <p className="mt-3">
              These changes can have several causes. Tell your vet when they
              began and whether they happen during activity, at rest or both.
            </p>
          </section>

          <section>
            <h2>What can a chest X-ray show?</h2>
            <p>
              A chest X-ray shows the outline of the heart as well as the lungs
              and airways. It can help a veterinarian spot an enlarged heart,
              look for fluid in the lungs and investigate other reasons a pet
              might be coughing or breathing differently.
            </p>
          </section>

          <section>
            <h2>What does a heart ultrasound add?</h2>
            <p>
              A heart ultrasound, also called an echocardiogram, lets the
              veterinarian watch the heart beat. They can examine the chambers
              and valves, measure the thickness of the heart muscle and assess
              how blood moves through the heart.
            </p>
          </section>

          <section>
            <h2>When to ask about screening</h2>
            <p>
              At your pet’s next check-up, ask whether their age, breed, family
              history or examination findings make a heart assessment
              worthwhile. If you have already noticed a change in breathing or
              stamina, call your vet to discuss how soon your pet should be
              seen.
            </p>
          </section>

          <section>
            <h2>Supporting your pet at home</h2>
            <p>
              Ask your vet what food, activity level and follow-up schedule suit
              your pet. If your pet has a heart condition, check before changing
              their diet or restricting sodium. Keep a dated note of changes you
              observe so you can describe them at the next visit.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Sources</h2>
          <ul className="mt-2 space-y-2 [&_a]:text-teal-800 [&_a]:underline [&_a]:underline-offset-4">
            <li>
              <a href="https://www.vet.cornell.edu/pets-get-heart-disease-too">
                Cornell University — Pets Get Heart Disease Too
              </a>
            </li>
            <li>
              <a href="https://vet.tufts.edu/foster-hospital-small-animals/specialty-services/cardiology/heartsmart/heart-disease-diagnosis">
                Tufts University — Heart Disease Diagnosis
              </a>
            </li>
            <li>
              <a href="https://vet.tufts.edu/foster-hospital-small-animals/specialty-services/cardiology/heartsmart/heart-disease-nutrition">
                Tufts University — Heart Disease Nutrition
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
