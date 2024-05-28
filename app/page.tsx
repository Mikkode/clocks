import Hero from "@/components/hero";

export default function Home() {
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

  return <Hero defaultCities={cities} />;
}
