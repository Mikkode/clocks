import Clock from "@/components/clock";
import BackgroundClockContainer from "@/components/backgroundClockContainer";
import Weather from "@/components/weather";
import Forecast from "@/components/forecast";

type ClockProps = {
  city: string;
};

export default function ClockContainer({ city }: ClockProps) {
  console.log("ClockContainer");
  return (
    <div
      className={`flex flex-col h-full relative m-auto overflow-auto  items-center`}
    >
      <BackgroundClockContainer city={city} />
      <Clock city={city} />
      <Weather city={city} />
      <Forecast city={city} />
    </div>
  );
}
