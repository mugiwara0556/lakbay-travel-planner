export class Itinerary {
  constructor() {
    this.destinations = [];
  }

  addDestination(destination) {
    const exists = this.destinations.some(
      (item) => item.id === destination.id
    );

    if (!exists) {
      this.destinations.push(destination);
    }

    return this.destinations;
  }

  removeDestination(id) {
    this.destinations = this.destinations.filter(
      (destination) => destination.id !== id
    );

    return this.destinations;
  }

  getTotalBudget() {
    return this.destinations.reduce(
      (total, destination) => total + destination.price,
      0
    );
  }

  getDestinationCount() {
    return this.destinations.length;
  }
}
