
import { useItinerary } from "../context/ItineraryContext";
import { destinations } from "../models/Destination";

export default function ItineraryPage() {
  const { itinerary, addDestination, removeDestination } = useItinerary();

  const money = (amount) =>
    new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <section className="min-h-screen bg-stone-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Your travel plans
        </p>

        <h1 className="mt-2 text-4xl font-black text-stone-900">
          My Itinerary
        </h1>

        <p className="mt-3 text-stone-600">
          Choose destinations and estimate your travel budget.
        </p>

        <div className="mt-8 rounded-2xl bg-emerald-900 p-6 text-white">
          <p className="text-sm text-emerald-100">
            Estimated total budget
          </p>

          <p className="mt-2 text-4xl font-black">
            {money(itinerary.getTotalBudget())}
          </p>

          <p className="mt-2 text-sm text-emerald-100">
            {itinerary.getDestinationCount()} destination(s) selected
          </p>
        </div>

        <h2 className="mt-10 text-2xl font-bold text-stone-900">
          Available destinations
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => {
            const isAdded = itinerary.destinations.some(
              (item) => item.id === destination.id
            );

            return (
              <article
                key={destination.id}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-44 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold text-stone-900">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-stone-600">
                    {money(destination.price)}
                  </p>

                  <button
                    onClick={() =>
                      isAdded
                        ? removeDestination(destination.id)
                        : addDestination(destination)
                    }
                    className={`mt-4 w-full rounded-full px-4 py-3 font-semibold text-white transition ${
                      isAdded
                        ? "bg-red-700 hover:bg-red-600"
                        : "bg-emerald-800 hover:bg-emerald-700"
                    }`}
                  >
                    {isAdded
                      ? "Remove from itinerary"
                      : "Add to itinerary"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {itinerary.getDestinationCount() > 0 && (
          <section className="mt-12 rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-stone-900">
              Your selected destinations
            </h2>

            <ul className="mt-4 space-y-3">
              {itinerary.destinations.map((destination) => (
                <li
                  key={destination.id}
                  className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 py-3"
                >
                  <span className="font-medium text-stone-800">
                    {destination.name} — {money(destination.price)}
                  </span>

                  <button
                    onClick={() => removeDestination(destination.id)}
                    className="text-sm font-semibold text-red-700 hover:underline"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
}
