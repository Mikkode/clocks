import { ErrorBoundary } from "react-error-boundary";
import ClockContainer from "./clockContainer";
import CityForm from "./city-form";
import { getCitiesCookie } from "@/libs/data";
import { Suspense } from "react";
import Loading from "@/app/loading";

type ClocksProps = {
  defaultCities: string[];
};

export default async function Hero({ defaultCities }: ClocksProps) {
  let cities = await getCitiesCookie();
  console.log("Hero");

  return (
    <>
      <CityForm />
      <div className="h-screen overflow-x-auto flex flex-wrap sm:flex-no-wrap">
        {cities &&
          cities.map((city, index) => (
            <div key={index} className="flex-grow sm:min-w-80">
              <ErrorBoundary fallback={<Error />}>
                <ClockContainer city={city}></ClockContainer>
              </ErrorBoundary>
            </div>
          ))}
      </div>
    </>
  );
}

function Error() {
  return <div>Une erreur s'est produite. Veuillez réessayer plus tard.</div>;
}
