
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import ItineraryPage from "./pages/ItineraryPage";
import { ItineraryProvider } from "./context/ItineraryContext";

function App() {
  return (
    <BrowserRouter>
      <ItineraryProvider>
        <div className="min-h-screen bg-stone-50">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/itinerary" element={<ItineraryPage />} />

            <Route
              path="*"
              element={
                <main className="px-6 py-20 text-center">
                  <h1 className="text-3xl font-bold">
                    Page not found
                  </h1>
                  <p className="mt-3 text-stone-600">
                    Please choose a page from the navigation above.
                  </p>
                </main>
              }
            />
          </Routes>

          <footer className="border-t border-stone-200 bg-white px-6 py-6 text-center text-sm text-stone-500">
            © 2026 Lakbay Travel Planner. Explore the Philippines.
          </footer>
        </div>
      </ItineraryProvider>
    </BrowserRouter>
  );
}

export default App;
