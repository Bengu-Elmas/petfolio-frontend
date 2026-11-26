import { useEffect } from "react";
import { Check, Clock3, LockKeyhole, MapPin, Navigation, X } from "lucide-react";

const clinics = [
  { name: "Sample Vet Clinic", distance: "0.7 km" },
  { name: "Example Vet Clinic", distance: "1.3 km" },
];

const pins = [[148, 60], [258, 100], [333, 48]];
const roads = [
  "M-20 32 110 65 210 39 320 66 500 23",
  "M-10 143 135 101 274 125 510 77",
  "M78 -15 100 59 78 118 90 190",
  "M205 -15 222 36 198 110 222 190",
  "M348 -16 326 62 350 108 373 183",
];
const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const events = [
  { date: "12 Feb", title: "Annual check-up", detail: "Routine visit summary" },
  { date: "08 Mar", title: "Rabies booster", detail: "Vaccination recorded" },
  { date: "19 Apr", title: "Skin follow-up", detail: "Treatment notes added" },
];
const sharing = [
  { name: "Vaccinations", shared: true },
  { name: "Allergies", shared: true },
  { name: "Private notes", shared: false },
];
const qrPattern = [
  "111110011111", "100010010001", "101010010101", "100010010001",
  "111110011111", "000001100000", "101101011010", "000000110101",
  "111110001010", "100010110011", "101010010110", "100010101001",
  "111110001101",
];

const card = "min-w-0 rounded-3xl p-5 ring-1 ring-slate-900/10";
const heading = "text-xl font-bold leading-[1.25] tracking-[-0.02em] text-slate-900";
const body = "mt-2 text-base leading-relaxed text-slate-700";
const icon = "size-5 shrink-0";

function ClinicMap() {
  return (
    <div aria-hidden="true" className="mt-5">
      <svg viewBox="0 0 480 170" preserveAspectRatio="xMidYMid slice"
        className="h-40 w-full rounded-2xl bg-teal-950 md:h-48">
        <g fill="none" stroke="#245351" strokeWidth="2">
          <path d="m0 10 140 32 18-55 M-10 80l100 18 86-28 110 17 50-13 130 6 M26 165l31-96-14-61 M265-14l22 82-21 47 20 68 M423-9l-25 70 30 110" />
        </g>
        {roads.map(d => <path key={d} d={d} fill="none" stroke="#41716e" strokeWidth="5" />)}
        {pins.map(([x, y]) => (
          <MapPin key={x} x={x - 10} y={y - 20} width="20" height="20"
            strokeWidth="2" className="text-rose-400" fill="var(--color-teal-950)" />
        ))}
        <g transform="translate(201 101)">
          <circle r="12" fill="#99f6e4" opacity=".22"
            className="[@media(hover:hover)_and_(pointer:fine)]:motion-safe:animate-pulse" />
          <circle r="4" fill="white" stroke="#14b8a6" strokeWidth="2" />
          <text x="16" y="4" fill="white" fontSize=".8rem" fontWeight="500">You</text>
        </g>
      </svg>
      <ul className="mt-2 divide-y divide-teal-100/20">
        {clinics.map(({ name, distance }) => (
          <li key={name} className="flex min-w-0 items-center gap-2 py-3 text-sm font-medium">
            <span className="min-w-0 flex-1">{name}</span>
            <span className="whitespace-nowrap tabular-nums text-teal-100">{distance}</span>
            <Navigation className={icon + " text-rose-300"} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProfilePreview() {
  return (
    <div aria-hidden="true" className="mt-4">
      <div className="flex items-center gap-2">
        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-teal-50 font-medium text-teal-900">M</span>
        <div className="min-w-0 text-sm"><span className="font-medium">Milo</span>
          <div className="text-slate-600">Golden Retriever · 3 yrs</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5 text-xs font-medium">
        <span className="rounded-full bg-rose-50 px-2 py-1 text-rose-700">Allergy · pollen</span>
        <span className="rounded-full bg-teal-50 px-2 py-1 text-teal-900">Supplement · omega-3</span>
      </div>
    </div>
  );
}

function WeekStrip() {
  return (
    <div aria-hidden="true" className="mt-4">
      <ol className="grid grid-cols-7 gap-0.5 text-center text-xs font-medium">
        {days.map((day, index) => (
          <li key={day} className={`rounded-xl py-2 ${day === "Fr" ? "bg-teal-700 text-white" : "bg-slate-50 text-slate-600"}`}>
            {day}<span className="mt-1 block tabular-nums">{index + 7}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 text-sm font-medium text-rose-700">Rabies booster · due Friday</p>
    </div>
  );
}

function TimelinePreview() {
  return (
    <div aria-hidden="true" className="min-w-0">
      <ol className="ml-1 border-l border-teal-700/30 pl-5">
        {events.map(event => (
          <li key={event.date} className="relative pb-4 last:pb-0">
            <span className="absolute top-1.5 -left-[1.28rem] size-2 -translate-x-1/2 rounded-full bg-teal-700" />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-xs font-medium tabular-nums text-slate-600">{event.date}</span>
              <span className="text-sm font-medium">{event.title}</span>
            </div>
            <p className="text-sm text-slate-600">{event.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SharingPreview() {
  return (
    <div aria-hidden="true" className="mt-4">
      <ul className="divide-y divide-slate-200">
        {sharing.map(({ name, shared }) => (
          <li key={name} className="flex items-center justify-between gap-3 py-2 text-sm font-medium">
            {name}
            <span className={`flex w-10 rounded-full px-1 ${shared ? "justify-end bg-teal-700 text-white" : "bg-slate-100 text-slate-600"}`}>
              {shared ? <Check className={icon} /> : <X className={icon} />}
            </span>
          </li>
        ))}
      </ul>
      <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-900">
        <Clock3 className={icon} /> Link expires in 24 h
      </span>
    </div>
  );
}

function TagPreview() {
  return (
    <div aria-hidden="true" className="mt-5 flex flex-wrap items-center gap-4 rounded-2xl bg-slate-50 p-4">
      <svg viewBox="-1 -1 14 15" className="h-16 w-16 shrink-0 fill-teal-900" shapeRendering="crispEdges">
        {qrPattern.flatMap((row, y) => Array.from(row, (cell, x) => cell === "1"
          ? <rect key={y * 12 + x} x={x} y={y} width="1" height="1" /> : null))}
      </svg>
      <div className="min-w-0 text-sm font-medium">
        <p>Visible: name, phone</p>
        <p className="mt-1 flex items-center gap-1.5 text-slate-600"><LockKeyhole className={icon} />Hidden: medical records</p>
      </div>
    </div>
  );
}

const features = [
  { id: "nearby-vets", title: "Nearby Vets", text: "Away from your usual clinic? See vets around you, closest first, and open directions in one tap.", Visual: ClinicMap, layout: "md:col-span-4 md:row-span-2" },
  { id: "pet-profiles", title: "Pet Profiles", text: "One profile per pet. Allergies and medications ready the second someone asks.", Visual: ProfilePreview, layout: "md:col-span-2" },
  { id: "vaccination-calendar", title: "Vaccination Calendar", text: "See every vaccine and visit date at a glance.", Visual: WeekStrip, layout: "md:col-span-2" },
  { id: "health-timeline", title: "Health Timeline", text: "Every visit, vaccine and treatment in order, so a new vet gets the full story in seconds.", Visual: TimelinePreview, layout: "md:col-span-6 md:grid-cols-2" },
  { id: "safe-sharing", title: "Safe Sharing", text: "Sending records to a new clinic? Pick exactly what to share. The link expires on its own.", Visual: SharingPreview, layout: "md:col-span-3" },
  { id: "qr-pet-tag", title: "QR Pet Tag", text: "If your pet wanders off, a scan shows only the contact details you choose. Medical records stay private.", Visual: TagPreview, layout: "md:col-span-3" },
];

export default function Features() {
  useEffect(() => {
    // A cross-page link can arrive before React mounts the target card.
    const target = document.getElementById(window.location.hash.slice(1));
    if (target?.matches("article[id]")) target.scrollIntoView();
  }, []);

  return (
    <section aria-labelledby="features-heading" className="bg-cream pb-16 font-sans text-slate-900 lg:pb-24">
      <h2 id="features-heading" className="max-w-3xl text-3xl font-bold leading-[1.25] tracking-[-0.02em] sm:text-4xl">Built for the moments that matter</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-700">From the yearly check-up to the unexpected evening trip to the vet.</p>
      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-6">
        {features.map(({ id, title, text, Visual, layout }) => {
          const nearby = Visual === ClinicMap;
          const timeline = Visual === TimelinePreview;
          return (
            <article id={id} key={id} className={`scroll-mt-6 ${card} ${layout} ${nearby ? "flex flex-col bg-teal-900 text-white lg:p-8" : "bg-white"} ${timeline ? "grid items-center gap-6 lg:gap-12" : ""}`}>
              <div className="min-w-0">
                <h3 className={nearby ? "text-3xl font-bold leading-[1.25] tracking-[-0.02em] lg:text-4xl" : heading}>{title}</h3>
                <p className={nearby ? "mt-3 max-w-lg text-base leading-relaxed text-teal-50" : body}>{text}</p>
              </div>
              <Visual />
              {nearby && <p className="mt-auto pt-3 text-sm text-teal-100">Hours and availability may vary. Call ahead.</p>}
            </article>
          );
        })}
      </div>
    </section>
  );
}
