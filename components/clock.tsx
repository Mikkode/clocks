"use client";

import { useEffect, useState } from "react";
import classes from "./clock.module.css";
import {
  getInitialZonedDate,
  formatTime,
  capitalizeFirstLetter,
} from "@/libs/utils";
import { getTimeZoneByCity } from "@/libs/data";

type ClockProps = {
  city: string;
};

export default function Clock({ city }: ClockProps) {
  const [time, setTime] = useState<Date>(new Date());
  const [timeZone, setTimeZone] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const timeZone = await getTimeZoneByCity(city);
      const time: Date = getInitialZonedDate(timeZone);
      setTimeZone(timeZone);
      setTime(time);
    };

    fetchData();

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
