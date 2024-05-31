"use client";

import { useEffect, useState } from "react";
import classes from "./clock.module.css";
import { formatTime, capitalizeFirstLetter } from "@/libs/utils";

type ClockProps = {
  city: string;
  date: Date;
  timeZone: string;
};

export default function Clock({ city, date, timeZone }: ClockProps) {
  const [time, setTime] = useState<Date>(date);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={`pt-10 ${classes.falling} w-80`}>
      <p className="flex justify-center text-2xl pb-6">
        {capitalizeFirstLetter(city)}
      </p>
      <p className="flex justify-center text-6xl" suppressHydrationWarning>
        {formatTime(time, timeZone, true)}
      </p>
    </div>
  );
}
