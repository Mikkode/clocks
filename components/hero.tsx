import { ErrorBoundary } from "react-error-boundary";
import ClockContainer from "./clockContainer";
import { getCitiesCookie } from "@/libs/actions";
import { v4 as uuidv4 } from "uuid";

type HeroProps = {
  cities: string[];
};

export default async function Hero({ cities }: HeroProps) {
  console.log("Hero");

  return (
    <div className="h-screen overflow-x-auto flex flex-wrap sm:flex-no-wrap">
      {cities &&
        cities.map((city, index) => (
          <div key={`${city}`} className="flex-grow sm:min-w-80">
            <ErrorBoundary fallback={<div>Error</div>}>
              <ClockContainer city={city}></ClockContainer>
            </ErrorBoundary>
          </div>
        ))}
    </div>
  );
}
