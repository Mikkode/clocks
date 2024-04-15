"use client";

import Image from "next/image";
import bgDay from "@/public/day.jpg";
import bgSunrise from "@/public/sunrise.jpg";
import bgSunset from "@/public/sunset.jpg";
import bgNight from "@/public/night.jpg";
import { useEffect, useState } from "react";
import classes from "./backgroundClock.module.css";
import { v4 as uuidv4 } from "uuid";

type BackgroundColockProps = {
  hour: number;
};

export default function BackgroundClockContainer({
  hour,
}: BackgroundColockProps) {
  const [backgroundImage, setBackgroundImage] = useState(bgDay);

  useEffect(() => {
    if (hour > 6 && hour < 8) {
      setBackgroundImage(bgSunrise);
    } else if (hour >= 8 && hour <= 18) {
      setBackgroundImage(bgDay);
    } else if (hour > 18 && hour <= 19) {
      setBackgroundImage(bgSunset);
    } else {
      setBackgroundImage(bgNight);
    }
  }, [hour]);

  return (
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
  );
}
