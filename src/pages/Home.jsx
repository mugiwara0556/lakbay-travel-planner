export default function Home() {
  return (
    <section className="bg-stone-50 px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">
            Discover the Philippines
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-stone-900 md:text-7xl">
            Your next
            <span className="block text-emerald-700">
              adventure awaits.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
            Discover beautiful destinations, explore new experiences,
            and plan your next unforgettable Philippine getaway with Lakbay.
          </p>

          <a
            href="/destinations"
            className="mt-8 inline-block rounded-full bg-emerald-800 px-7 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Explore destinations →
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85"
            alt="Beautiful tropical island in the Philippines"
            className="h-80 w-full object-cover md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
