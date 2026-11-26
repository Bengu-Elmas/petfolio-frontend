import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChoosingPetFood() {
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
          How to Choose the Best Food for Your Pet
        </h1>

        <img
          src="/articles/catfood.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          When two bags of pet food look equally promising, turn them over. The
          first things to check are whether the food is a complete diet, which
          species it is made for and which life stage it supports. From there,
          you can narrow the choice to foods that suit your pet and fit your
          budget.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>Start with your pet’s life stage</h2>

            <ul className="list-disc space-y-3 pl-6 marker:text-teal-700">
              <li>
                <strong>Puppies and kittens.</strong> Look for a food formulated
                for growth in your pet’s species. If you have a large-breed
                puppy, check that the food is suitable for large-breed growth.
              </li>
              <li>
                <strong>Adult pets.</strong> A complete adult maintenance food
                is a starting point for a healthy adult cat or dog. The right
                portion depends on the food’s calorie content, your pet’s
                activity and their body condition.
              </li>
              <li>
                <strong>Older pets.</strong> A birthday alone doesn’t determine
                when to change food. If your pet is losing weight, gaining
                weight or finding meals harder to eat, discuss those changes
                with your veterinarian.
              </li>
            </ul>
          </section>

          <section>
            <h2>Dry food, wet food or a mix?</h2>

            <p>
              Dry food is easy to measure and store. Wet food adds moisture to
              meals, and some pets prefer its texture. Either can serve as the
              main meal if it is a complete diet for your pet. A pouch labeled
              “complementary” is meant to accompany other food, even if it looks
              like a full meal.
            </p>

            <p className="mt-3">
              If you serve both, count both toward the daily portion. A full
              serving of kibble plus a full serving of wet food can add up
              quickly. Keep fresh water available whichever format you choose.
            </p>

            <p className="mt-3">
              If dental care is a priority, ask your vet about products accepted
              by the Veterinary Oral Health Council for plaque or tartar
              control. A crunchy texture alone doesn’t tell you how well a food
              cleans teeth.
            </p>
          </section>

          <section>
            <h2>Look beyond the front of the package</h2>

            <p>
              Check whether the manufacturer explains who formulates the diet,
              how it checks the finished product and how to contact the company
              with questions. Look for calorie information, too. Two foods can
              have similar serving sizes and still provide different amounts of
              energy.
            </p>

            <p className="mt-3">
              At home, pay attention to your pet’s appetite, weight and usual
              stool consistency. Enjoying a meal is useful information, but it
              tells you little about whether the diet meets every nutritional
              need. If your pet repeatedly has loose stools, starts losing
              weight or seems uncomfortable chewing, talk with your vet before
              trying a series of different foods.
            </p>
          </section>

          <section>
            <h2>When does a therapeutic diet make sense?</h2>

            <p>
              Some diets are formulated to help manage a diagnosed condition,
              such as kidney disease. Your veterinarian can explain what a
              recommended diet is intended to do, how to introduce it and
              whether your pet’s usual treats still fit the plan.
            </p>
          </section>

          <section>
            <h2>What to bring to your next check-up</h2>

            <p>
              Take a photo of the food label and write down how much your pet
              actually eats in a typical day, including treats and toppers. That
              gives you and your vet a practical starting point for deciding
              whether to keep the current food, adjust the portion or try
              something different.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <ul className="mt-2 space-y-2 [&_a]:text-teal-800 [&_a]:underline [&_a]:underline-offset-4">
            <li>
              <a href="https://wsava.org/wp-content/uploads/2020/01/Frequently-Asked-Questions-and-Myths.pdf">
                WSAVA — Frequently Asked Questions About Pet Nutrition
              </a>
            </li>
            <li>
              <a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/age-specific-and-breed-specific-diets/">
                AAHA — Age-specific and Breed-specific Diets
              </a>
            </li>
            <li>
              <a href="https://www.aaha.org/resources/2019-aaha-dental-care-guidelines-for-dogs-and-cats/nutrition/">
                AAHA — The Role of Nutrition in Dental Health
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
