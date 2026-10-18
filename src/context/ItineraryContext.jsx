import { createContext, useContext, useState } from "react";
import { Itinerary } from "../models/Itinerary";

const ItineraryContext = createContext(null);

export function ItineraryProvider({ children }) {
  const [itinerary, setItinerary] = useState(() => new Itinerary());

  const addDestination = (destination) => {
    setItinerary((current) => {
      const updated = new Itinerary();
      updated.destinations = [...current.destinations];
      updated.addDestination(destination);
      return updated;
    });
  };

  const removeDestination = (id) => {
    setItinerary((current) => {
      const updated = new Itinerary();
      updated.destinations = [...current.destinations];
      updated.removeDestination(id);
      return updated;
    });
  };

  return (
    <ItineraryContext.Provider
      value={{ itinerary, addDestination, removeDestination }}
    >
      {children}
    </ItineraryContext.Provider>
  );
}

export function useItinerary() {
  const context = useContext(ItineraryContext);

  if (!context) {
    throw new Error("useItinerary must be used inside ItineraryProvider");
  }

  return context;
}
