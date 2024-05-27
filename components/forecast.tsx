import classes from "./forecast.module.css";
import { Suspense } from "react";
import Image from "next/image";
import { WeatherCodeToImage } from "@/libs/constants";
import sunriseImage from "@/assets/weather/sunrise.svg";
import sunsetImage from "@/assets/weather/sunset.svg";
import { toZonedTime } from "date-fns-tz";
import { formatTime, toLocalTime } from "@/libs/utils";
import { getCoordinates, getForecastWeather } from "@/libs/data";
import { LoadingWeather } from "@/app/loading";

type ForecastProps = {
  city: string;
};

type Forecasts = {
  date: Date;
  temp: number;
  image: string;
};

export default async function Forecast({ city }: ForecastProps) {
  const forecasts: Forecasts[] = [];
  console.log("Forecast");

  const coor: CoordinateData = await getCoordinates(city);
  const forecast: WeatherForecast = await getForecastWeather(
    coor.latitude,
    coor.longitude
  );

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000 + forecast.city.timezone * 1000);

    forecasts.push({
      date: toZonedTime(date, "UTC"),
      temp: Math.round(item.main.temp),
      image: WeatherCodeToImage[item.weather[0].id],
    });
  });

  const timezoneOffset = forecast.city.timezone * 1000;
  const sunrise = toLocalTime(forecast.city.sunrise, timezoneOffset);
  const sunset = toLocalTime(forecast.city.sunset, timezoneOffset);

  const insertEvent = (eventTime: Date, image: string) => {
    const index = forecasts.findIndex((item) => item.date > eventTime);
    if (index !== -1) {
      forecasts.splice(index, 0, {
        date: eventTime,
        temp: NaN,
        image,
      });
    }
  };

  insertEvent(sunrise, sunriseImage);
  insertEvent(sunset, sunsetImage);

  return (
    <Suspense fallback={<LoadingWeather />}>
      <div
        className={`flex flex-col justify-center items-center mb-6 ${classes.animate}`}
      >
        <div className={`${classes.card} flex space-x-5`}>
          {forecasts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center min-w-10"
            >
              {<p>{formatTime(item.date, "UTC")}</p>}
              <Image priority src={item.image} alt="" />
              {isNaN(item.temp) ? null : <p>{item.temp}°</p>}
            </div>
          ))}
        </div>
      </div>
    </Suspense>
  );
}
