export class Destination {
  constructor({ id, name, location, category, price, image, description }) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.category = category;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}

export const destinations = [
  new Destination({
    id: 1,
    name: "Palawan",
    location: "MIMAROPA, Philippines",
    category: "Island",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
    description:
      "Explore turquoise lagoons, limestone cliffs, and beautiful island scenery.",
  }),
  new Destination({
    id: 2,
    name: "Bohol",
    location: "Central Visayas, Philippines",
    category: "Nature",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=900&q=80",
    description:
      "Discover green landscapes, unique hills, and relaxing countryside adventures.",
  }),
  new Destination({
    id: 3,
    name: "Boracay",
    location: "Western Visayas, Philippines",
    category: "Beach",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    description:
      "Enjoy white sand, clear waters, and unforgettable island sunsets.",
  }),
  new Destination({
    id: 4,
    name: "Cebu",
    location: "Central Visayas, Philippines",
    category: "Adventure",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    description:
      "Plan an adventure filled with waterfalls, mountain views, and local culture.",
  }),
];
