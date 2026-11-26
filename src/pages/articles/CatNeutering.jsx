import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CatNeutering() {
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
          What Is Neutering?
        </h1>

        <img
          src="/articles/kisir.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          Neutering is surgery that prevents a cat from reproducing. The
          procedure is called spaying for female cats and castration for male
          cats. If you’re planning the operation, ask your veterinarian when to
          book it and what care your cat will need at home afterward.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>When should I talk to my vet about neutering?</h2>
            <p>
              Bring it up at your kitten’s first veterinary visits. Cats
              Protection recommends neutering by four months because some cats
              can breed at that age. Your veterinarian can recommend timing
              based on your cat’s health and circumstances. Until the procedure,
              keep your cat indoors and separate from unneutered cats of the
              opposite sex, including littermates.
            </p>
          </section>

          <section>
            <h2>What are the benefits?</h2>
            <p>
              Neutering prevents unwanted litters. The procedure can also affect
              some behaviors linked to breeding.
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-teal-700">
              <li>
                <strong>Female cats.</strong> Spaying prevents heat cycles and
                reduces the risk of uterine infection. Spaying early can also
                lower the risk of mammary tumors.
              </li>
              <li>
                <strong>Male cats.</strong> Castration can reduce roaming in
                search of a mate, fighting with other males and urine marking.
              </li>
            </ul>
          </section>

          <section>
            <h2>What happens on the day?</h2>
            <p>
              The procedure is done under general anesthesia. During a spay, the
              veterinarian removes the ovaries and may also remove the uterus,
              depending on the technique. During castration, the testicles are
              removed. Follow your clinic’s instructions about food and water
              before the operation. Ask when you can collect your cat and how to
              give any prescribed pain medication.
            </p>
          </section>

          <section>
            <h2>Helping your cat recover at home</h2>
            <p>
              Your cat may be sleepy or unsteady while the anesthetic wears off.
              Use the clinic’s discharge instructions to plan feeding, activity
              and follow-up visits.
            </p>
            <ul className="mt-3 list-disc space-y-3 pl-6 marker:text-teal-700">
              <li>
                Set up a quiet place to rest. Keep your cat indoors and limit
                running and jumping for as long as your vet advises.
              </li>
              <li>
                Keep any prescribed collar or recovery suit on as directed to
                prevent licking or chewing at the incision.
              </li>
              <li>
                Give prescribed medication according to the clinic’s
                instructions and attend any scheduled recheck.
              </li>
              <li>
                Check the incision daily. Call your clinic if redness or
                swelling increases, you see discharge, or the incision opens.
              </li>
            </ul>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <ul className="mt-2 space-y-2 [&_a]:text-teal-800 [&_a]:underline [&_a]:underline-offset-4">
            <li>
              <a href="https://www.cats.org.uk/help-and-advice/health/caring-for-your-cat-after-an-operation">
                Cats Protection — Caring for Your Cat After an Operation
              </a>
            </li>
            <li>
              <a href="https://vcahospitals.com/know-your-pet/care-of-surgical-incisions-in-cats">
                VCA Animal Hospitals — Care of Surgical Incisions in Cats
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
