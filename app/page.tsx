export const dynamic = "force-static";

import CityManager from "@/components/cityManager";
import Hero from "@/components/hero";
import ModalMenu from "@/components/modalMenu";
import { defaultCities } from "@/libs/constants";
import { getCitiesCookie } from "@/libs/actions";

export default async function Home() {
  let citiesCookie: string[] = await getCitiesCookie();
  if (citiesCookie.length == 0) {
    citiesCookie = defaultCities;
  }
  console.log("Home");

  return (
    <>
      <ModalMenu>
        <CityManager cities={defaultCities} />
      </ModalMenu>
      <Hero cities={defaultCities} />
    </>
  );
}
