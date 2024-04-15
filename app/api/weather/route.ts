"use server";

import { NextResponse } from "next/server";

const WeatherData = {
  coord: { lon: 1, lat: 1 },
  weather: [
    {
      id: 800,
      main: "Main",
      description: "Description weather",
      icon: "",
    },
  ],
  base: "Base",
  main: {
    temp: 38.1,
    feels_like: 30.2,
    temp_min: 20,
    temp_max: 40,
    pressure: 1,
    humidity: 99,
  },
  visibility: 1,
  wind: { speed: 1, deg: 1, gust: 1 },
  clouds: { all: 98 },
  dt: 1,
  sys: {
    type: 1,
    id: 1,
    country: "France",
    sunrise: 1,
    sunset: 1,
  },
  timezone: 1,
  id: 1,
  name: "France",
  cod: 1,
};

export async function GET() {
  return NextResponse.json(WeatherData);
}
