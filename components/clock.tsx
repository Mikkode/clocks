"use client";

import { useEffect, useState } from "react";
import classes from "./clock.module.css";
import {
  getInitialZonedDate,
  formatTime,
  capitalizeFirstLetter,
} from "@/libs/utils";
import { getTimeZoneByCity } from "@/libs/data";
import { LoadingWeather } from "@/app/loading";

type ClockProps = {
  city: string;
};

export function Clock({ city }: ClockProps) {
  const [time, setTime] = useState<Date>(new Date());
  const [timeZone, setTimeZone] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const timeZone = await getTimeZoneByCity(city);
      const time: Date = getInitialZonedDate(timeZone);
      setTimeZone(timeZone);
      setTime(time);
      setLoading(false);
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
