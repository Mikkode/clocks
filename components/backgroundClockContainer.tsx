import Image from "next/image";
import bgDay from "@/assets/day.jpg";
import bgSunrise from "@/assets/sunrise.jpg";
import bgSunset from "@/assets/sunset.jpg";
import bgNight from "@/assets/night.jpg";
import classes from "./backgroundClock.module.css";
import { getInitialZonedDate } from "@/libs/utils";
import { getTimeZoneByCity } from "@/libs/actions";

type BackgroundClockProps = {
  city: string;
};

export default async function BackgroundClockContainer({
  city,
}: BackgroundClockProps) {
  const timeZone: string = await getTimeZoneByCity(city);
  const backgroundImage = getBackground(timeZone);

  console.log("BackgroundClockContainer");

  function getBackground(timeZone: string) {
    const hours = getInitialZonedDate(timeZone).getHours();
    if (hours > 6 && hours < 8) {
      return bgSunrise;
    } else if (hours >= 8 && hours <= 18) {
      return bgDay;
    } else if (hours > 18 && hours <= 19) {
      return bgSunset;
    }
    return bgNight;
  }

  return (
    <Image
      className={classes.image}
      src={backgroundImage}
      alt="bg"
      quality={100}
      fill
      sizes="(max-width: 800px) 100vw, 800px"
      priority
    />
  );
}
