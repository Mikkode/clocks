"use client";

import { useEffect, useState } from "react";
import classes from "./clock.module.css";
import { getInitialZonedDate, formatTime } from "@/libs/utils";

type ClockProps = {
  timeZone: string;
  displayName: string;
};

export function Clock({ timeZone, displayName }: ClockProps) {
  const [time, setTime] = useState<Date>(getInitialZonedDate(timeZone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`pt-10 pr-10 pl-10 ${classes.falling} w-80`}>
      <p className="flex justify-center text-2xl pb-6">{displayName}</p>
      <p className="flex justify-center text-6xl" suppressHydrationWarning>
        {formatTime(time, timeZone, true)}
      </p>
    </div>
  );
}
