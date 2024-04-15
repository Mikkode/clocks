import Hero from "@/components/hero";
export default function Home() {
  const cities = [
    "Paris",
    "Kyoto",
    // "New York",
    // "London",
    // "Tokyo",
    // "Sydney",
    // "Rome",
    // "Berlin",
    // "Moscow",
  ];

  return (
    <main>
      <Hero cities={cities} />
    </main>
  );
}
