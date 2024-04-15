"use client";

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

export default function Weather({ city }: WeatherProps) {
  const [temperature, setTemperature] = useState<string>("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [speedWind, setSpeedWind] = useState("");
  const [clouds, setClouds] = useState(0);
  const [weatherImage, setWeatherImage] = useState(WeatherCodeToImage[800]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const weather: WeatherData = await getWeather(city);

      setTemperature(weather.main.temp.toFixed(1));
      setFeelsLike(weather.main.feels_like.toFixed(1));
      setHumidity(weather.main.humidity);
      setSpeedWind((weather.wind.speed * 3.6).toFixed(1));
      setClouds(weather.clouds.all);
      setWeatherImage(WeatherCodeToImage[weather.weather[0].id]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading && <LoadingWeather />}
      <div className={`${classes.fadeIn} ${!loading ? classes.visible : ""}`}>
        {!loading && (
          <div className="flex flex-col justify-center items-center mb-10">
            <Image
              priority
              src={weatherImage}
              height={200}
              width={200}
              alt="Weather icon"
            />
            <p className="font-bold text-center text-4xl mb-10">
              {temperature} °C
            </p>
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
        )}
      </div>
    </>
  );
}
