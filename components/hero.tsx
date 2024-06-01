import { ErrorBoundary } from "react-error-boundary";
import ClockContainer from "./clockContainer";

type HeroProps = {
  cities: string[];
};

export default async function Hero({ cities }: HeroProps) {
  return (
    <div className="h-screen overflow-x-auto flex flex-wrap sm:flex-no-wrap">
      {cities &&
        cities.map((city) => (
          <div key={`${city}`} className="flex-grow sm:min-w-80">
            <ErrorBoundary fallback={<div>Error</div>}>
              <ClockContainer city={city}></ClockContainer>
            </ErrorBoundary>
          </div>
        ))}
    </div>
  );
}
