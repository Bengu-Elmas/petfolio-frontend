import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PetVaccinations() {
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
          Protecting Your Furry Friends: The Essential Role of Vaccinations in
          Pet Health
        </h1>

        <img
          src="/articles/asi.jpeg"
          alt=""
          className="my-7 h-auto w-full rounded-3xl"
        />

        <p className="text-lg leading-8">
          Open your pet’s vaccination booklet and you’ll find names, dates and
          stickers from past visits. What do they mean, and which date should go
          in your calendar? Understanding what each vaccine protects against is
          a good place to start.
        </p>

        <div className="mt-9 space-y-8 leading-7 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-teal-900">
          <section>
            <h2>How vaccines work</h2>
            <p>
              Vaccination gives your pet’s immune system a chance to learn to
              recognize a particular infection. If your pet encounters it later,
              that immune memory can help prevent illness or reduce its
              severity.
            </p>
          </section>

          <section>
            <h2>Which vaccines does my pet need?</h2>
            <p>
              Core vaccines protect against diseases serious enough to warrant
              broad protection. Other vaccines are recommended according to
              where your pet lives and what they are likely to encounter.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-teal-700">
              <li>
                <strong>Dogs.</strong> Core protection includes distemper,
                parvovirus and canine adenovirus. If your dog stays at boarding
                kennels, ask about Bordetella. Ask which local risks, such as
                leptospirosis, affect the plan as well.
              </li>
              <li>
                <strong>Cats.</strong> Core protection includes feline
                panleukopenia, herpesvirus and calicivirus. Your cat’s age and
                contact with other cats also matter when discussing feline
                leukemia vaccination.
              </li>
            </ul>
          </section>

          <section>
            <h2>Why puppies and kittens need a series</h2>
            <p>
              Antibodies received from their mother can interfere with a young
              animal’s response to some vaccines. Those antibodies fade at
              different times, which is one reason your vet plans several early
              visits. Before leaving the clinic, ask which dose your pet
              received and when the next one is due.
            </p>
          </section>

          <section>
            <h2>What to watch for after a vaccination</h2>
            <p>
              Mild soreness or tiredness can occur after a vaccine. Call your
              clinic if a reaction persists or your pet seems to be getting
              worse. Facial swelling, difficulty breathing or collapse after
              vaccination needs immediate veterinary care.
            </p>
          </section>

          <section>
            <h2>Rabies vaccination and travel</h2>
            <p>
              Rabies can spread from animals to people. Vaccination requirements
              vary by location. If you plan to travel with your pet, check the
              destination’s official entry requirements well before departure
              and keep the vaccination certificate with your travel documents.
            </p>
          </section>

          <section>
            <h2>Can an antibody test replace a booster?</h2>
            <p>
              A titer test measures antibodies in a blood sample. For certain
              infections, such as canine parvovirus, the result can help a
              veterinarian assess protection. The same approach does not work
              for every vaccine. Ask your vet what a test would tell you before
              changing a booster appointment.
            </p>
          </section>

          <section>
            <h2>What to save after your visit</h2>
            <p>
              Record the vaccine name, the date it was given and the next due
              date provided by your clinic. Keep the original certificate too.
              If you switch clinics, these details give your new veterinarian a
              clear starting point.
            </p>
          </section>
        </div>

        <section className="mt-10 border-t border-teal-900/15 pt-5">
          <h2 className="font-bold text-slate-900">Further reading</h2>
          <a
            href="https://wsava.org/Global-Guidelines/Vaccination-Guidelines/"
            className="mt-2 inline-block rounded-sm text-teal-800 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          >
            World Small Animal Veterinary Association — Vaccination Guidelines
          </a>
        </section>
      </article>
    </main>
  );
}
