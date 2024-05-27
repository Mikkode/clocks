"use client";

import Image from "next/image";
import bgDay from "@/public/day.jpg";
import bgSunrise from "@/public/sunrise.jpg";
import bgSunset from "@/public/sunset.jpg";
import bgNight from "@/public/night.jpg";
import { useEffect, useState } from "react";
import classes from "./backgroundClock.module.css";
import { v4 as uuidv4 } from "uuid";
import { getInitialZonedDate } from "@/libs/utils";
import { getTimeZoneByCity } from "@/libs/data";

type BackgroundColockProps = {
  city: string;
};

export default function BackgroundClockContainer({
  city,
}: BackgroundColockProps) {
  const [backgroundImage, setBackgroundImage] = useState(bgDay);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const timeZone: string = await getTimeZoneByCity(city);
      setBackgroundImage(getBackground(timeZone));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    !loading && (
      <Image
        key={uuidv4()}
        className={classes.image}
        src={backgroundImage}
        alt="bg"
        quality={100}
        fill
        sizes="(max-width: 800px) 100vw, 800px"
        priority
      />
    )
  );
}