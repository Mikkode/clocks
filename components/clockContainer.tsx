import { ErrorBoundary } from "react-error-boundary";
import { Clock } from "./clock";
import BackgroundClockContainer from "./backgroundClockContainer";
import Weather from "./weather";
import classes from "./clockContainer.module.css";
import Forecast from "./forecast";

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
      <div className={classes.animate}>
        <Clock city={city} />
        <Weather city={city} />
        <Forecast city={city} />
      </div>
    </div>
  );
}

function Error() {
  return <div>Erreur...</div>;
}
