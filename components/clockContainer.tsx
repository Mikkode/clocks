import { Clock } from "./clock";
import BackgroundClockContainer from "./backgroundClockContainer";
import Weather from "./weather";
import classes from "./clockContainer.module.css";
import Forecast from "./forecast";
import { getInitialZonedDate } from "@/libs/utils";
import { getCoordinates, getTimeZone } from "@/libs/data";

type ClockProps = {
  city: string;
};

export default async function ClockContainer({ city }: ClockProps) {
  const hours = getInitialZonedDate(city).getHours();
  const { latitude, longitude } = await getCoordinates(city);
  const timeZone = await getTimeZone(latitude, longitude);

  return (
    <div
      className={`flex flex-col h-full relative m-auto overflow-auto  items-center`}
    >
      <BackgroundClockContainer hour={hours} />

      <div className={classes.animate}>
        <Clock timeZone={timeZone} displayName={city} />
        <Weather city={city} />
        <Forecast city={city} />
      </div>
    </div>
  );
}
