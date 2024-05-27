//"use client";

import Hero from "@/components/hero";
// import { addCity, getCities } from "@/libs/data";
export default async function Home() {
  let cities = [
    "Paris",
    // "Kyoto",
    // "Manila",
    // "Sao Jose do Rio Preto",
    // "Quilpeé",
    // "New York",
    // "Los angeles",
    // "London",
    // "Tokyo",
    // "Sydney",
    // "Rome",
    // "Berlin",
    // "Moscow",
  ];

  return (
    <main>
      <Hero defaultCities={cities} />
    </main>
  );
}
