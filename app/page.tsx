import CityManager from "@/components/cityManager";
import Hero from "@/components/hero";
import ModalMenu from "@/components/modalMenu";
import { getCitiesCookie } from "@/libs/data";

export default async function Home() {
  const citiesCookie: string[] = await getCitiesCookie();

  return (
    <>
      <ModalMenu>
        <CityManager cities={citiesCookie} />
      </ModalMenu>
      <Hero />
    </>
  );
}
