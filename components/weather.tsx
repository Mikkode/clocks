import { getWeather } from "@/libs/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import { WeatherCodeToImage } from "@/libs/constants";
import { LoadingWeather } from "@/app/loading";
import classes from "./weather.module.css";
import windSvg from "@/assets/weather/wind.svg";
import humiditySvg from "@/assets/weather/humidity.svg";
import feelSvg from "@/assets/weather/thermometer-celsius.svg";
import cloudSvg from "@/assets/weather/cloudy.svg";

type WeatherProps = {
  city: string;
};

export default async function Weather({ city }: WeatherProps) {
  console.log("Weather");
  const weather: WeatherData = await getWeather(city);

  const temperature = weather.main.temp.toFixed(1);
  const feelsLike = weather.main.feels_like.toFixed(1);
  const humidity = weather.main.humidity;
  const speedWind = (weather.wind.speed * 3.6).toFixed(1);
  const clouds = weather.clouds.all;
  const weatherImage = WeatherCodeToImage[weather.weather[0].id];

  return (
    <div className={classes.animate}>
      <div className="flex flex-col justify-center items-center mb-10">
        <Image
          priority
          src={weatherImage}
          height={200}
          width={200}
          alt="Weather icon"
        />
        <p className="font-bold text-center text-4xl mb-10">{temperature} °C</p>
        <div className={classes.card}>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center">
              <Image
                priority
                src={feelSvg}
                alt="Thunderstorm Icon"
                width={64}
                height={64}
                className="mr-2"
              />
              <p>{feelsLike} °C</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                priority
                src={humiditySvg}
                alt="Thunderstorm Icon"
                width={64}
                height={64}
                className="mr-2"
              />
              <p>{humidity}%</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                priority
                src={windSvg}
                alt="Thunderstorm Icon"
                width={64}
                height={64}
                className="mr-2"
              />
              <p>{speedWind} km/h</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                priority
                src={cloudSvg}
                alt="Thunderstorm Icon"
                width={64}
                height={64}
                className="mr-2"
              />
              <p>{clouds}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
