import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? "bg-emerald-800 text-white"
        : "text-stone-600 hover:bg-emerald-50 hover:text-emerald-800"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="text-2xl font-black tracking-tight text-emerald-900">
          Lakbay<span className="text-amber-500">.</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/destinations" className={linkClass}>
            Destinations
          </NavLink>

          <NavLink to="/itinerary" className={linkClass}>
            My Itinerary
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
