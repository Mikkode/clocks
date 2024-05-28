import CityManager from "@/components/cityManager";
import Hero from "@/components/hero";
import DrawerMenu from "@/components/drawerMenu";
import ModalMenu from "@/components/modalMenu";

export default function Home() {
  return (
    <>
      {/* <DrawerMenu>
        <CityManager />
      </DrawerMenu> */}
      <ModalMenu>
        <CityManager />
      </ModalMenu>
      <Hero />
    </>
  );
}
