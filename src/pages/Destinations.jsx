
import { useState } from "react";
import { destinations } from "../models/Destination";
import { useItinerary } from "../context/ItineraryContext";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const { itinerary, addDestination, removeDestination } = useItinerary();

  const categories = [
    "All",
    ...new Set(destinations.map((destination) => destination.category)),
  ];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.location.toLowerCase().includes(search.toLowerCase()) ||
      destination.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || destination.category === category;

    return matchesSearch && matchesCategory;
  });

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
          Find your next getaway
        </p>

        <h1 className="mt-2 text-4xl font-black text-stone-900">
          Explore Destinations
        </h1>

        <p className="mt-3 text-stone-600">
          Discover places to visit across the Philippines.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search destinations..."
            aria-label="Search destinations"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-700"
          />

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            aria-label="Filter by category"
            className="rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-700"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-stone-500">
            {filteredDestinations.length} destination(s) found
          </p>

          <p className="text-sm font-semibold text-emerald-800">
            {itinerary.getDestinationCount()} saved to your itinerary
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((destination) => {
            const isAdded = itinerary.destinations.some(
              (item) => item.id === destination.id
            );

            return (
              <article
                key={destination.id}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {destination.category}
                  </span>

                  <h2 className="mt-3 text-2xl font-bold text-stone-900">
                    {destination.name}
                  </h2>

                  <p className="mt-1 text-sm text-stone-500">
                    {destination.location}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {destination.description}
                  </p>

                  <p className="mt-4 text-xl font-bold text-emerald-800">
                    {money(destination.price)}
                  </p>

                  <button
                    type="button"
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

        {filteredDestinations.length === 0 && (
          <p className="mt-10 text-center text-stone-500">
            No destinations found. Try another search or category.
          </p>
        )}
      </div>
    </section>
  );
}
