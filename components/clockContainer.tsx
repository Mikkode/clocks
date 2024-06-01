import Clock from "@/components/clock";
import BackgroundClockContainer from "@/components/backgroundClockContainer";
import Weather from "@/components/weather";
import Forecast from "@/components/forecast";
import { getTimeZoneByCity } from "@/libs/actions";
import { getInitialZonedDate } from "@/libs/utils";

type ClockProps = {
  city: string;
};

export default async function ClockContainer({ city }: ClockProps) {
  console.log("ClockContainer");
  const timeZone = await getTimeZoneByCity(city);
  const time: Date = getInitialZonedDate(timeZone);
  return (
    <div
      className={`flex flex-col h-full relative m-auto overflow-auto  items-center`}
    >
      <BackgroundClockContainer city={city} />
      <Clock city={city} date={time} timeZone={timeZone} />
      <Weather city={city} />
      <Forecast city={city} />
    </div>
  );
}
