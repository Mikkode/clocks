import { ErrorBoundary } from "react-error-boundary";
import ClockContainer from "./clockContainer";
import { getCitiesCookie } from "@/libs/data";
import { Suspense } from "react";
import Loading from "@/app/loading";
import CityManager from "./cityManager";

type ClocksProps = {
  defaultCities: string[];
};

export default async function Hero({ defaultCities }: ClocksProps) {
  let cities = await getCitiesCookie();
  console.log("Hero");

  return (
    <>
      <CityManager />
      <div className="h-screen overflow-x-auto flex flex-wrap sm:flex-no-wrap">
        {cities &&
          cities.map((city, index) => (
            <div key={index} className="flex-grow sm:min-w-80">
              <ErrorBoundary fallback={<div>Error</div>}>
                <ClockContainer city={city}></ClockContainer>
              </ErrorBoundary>
            </div>
          ))}
      </div>
    </>
  );
}
