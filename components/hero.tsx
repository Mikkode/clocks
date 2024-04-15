import ClockContainer from "./clockContainer";

type ClocksProps = {
  cities: string[];
};

export default function Hero({ cities }: ClocksProps) {
  return (
    <div className="h-screen overflow-x-auto flex flex-wrap sm:flex-no-wrap">
      {cities &&
        cities.map((city, index) => (
          <div key={index} className="flex-grow sm:min-w-80">
            <ClockContainer city={city} />
          </div>
        ))}
    </div>
  );
}
